"use client"; // Add this for client components in the Next.js app directory
import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Image from "next/image";
import LoadingSpinner from "@/components/UI/LoadingSpinner";
import { useAuthControllerLoginMutation, useUserControllerCreateCorporateBodyMutation } from "@/store/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginUserSuccess } from "@/store/redux/actions/AuthAction";
import { useAppDispatch } from "@/store/redux/store";

// ImageUpload component definition with proper types
interface ImageUploadProps {
  image: string | undefined; // URL of the uploaded image
  setImage: (image: string | undefined) => void; // Updates the image URL
  // setFile: (file: File | undefined) => void; // Passes the File to the parent for submission
}

// interface LoginValues {
//   companyName: string;
//   companyAddress: string;
//   companyRC: string;
//   phone: string;
//   avatar?: string;
//   password: string;
//   email: string;
//   userId?: string;
//   parkId?: string;
//   role?: string;
//   userType?: string;
//   userCategory?: string;
// }

const Page = () => {
      const dispatch = useAppDispatch(); // Access `dispatch`
  
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setShowConfirmPassword] = useState(false);
  const [showScreen, setShowScreen] = useState(1);
  const [image, setImage] = useState<string | undefined>(undefined);


  const [signup, { isLoading }] =
    useUserControllerCreateCorporateBodyMutation();
  const [login] =
    useAuthControllerLoginMutation();

  const ImageUpload: React.FC<ImageUploadProps> = ({ image, setImage }) => {
    const [loading, setLoading] = useState(false);
  
    const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        setLoading(true); // Show loading spinner or indicator
  
        try {
          // Create a FormData object
          const formData = new FormData();
          formData.append("file", file);
          formData.append("upload_preset", "urban_image"); // Replace with your Cloudinary preset
  
          // Upload to Cloudinary
          const response = await fetch("https://api.cloudinary.com/v1_1/dngyazspl/image/upload", {
            method: "POST",
            body: formData,
          });
  
          const result = await response.json();
          if (result.secure_url) {
            // Set the image URL in the state
            setImage(result.secure_url);
          }
  
          setLoading(false); // Stop loading
        } catch (error) {
          console.error("Error uploading image", error);
          toast.error("Error uploading image. Please try again.");
          setLoading(false);
        }
      }
    };
  
    return (
      <div className="flex justify-center text-center">
        <label className="flex w-[110px] bg-white dotted-border flex-col items-center justify-center rounded-[5px] cursor-pointer relative">
          <div className="flex flex-col items-center justify-center h-[70px]">
            {image ? (
              <Image
                className=""
                src={image} // This should now be the Cloudinary URL
                alt="Uploaded image"
                width={100}
                height={100}
              />
            ) : (
              <Image
                className=""
                src="/onboarding/Icon.svg" // Default placeholder image
                alt="Default placeholder"
                width={100}
                height={100}
              />
            )}
          </div>
          <input
            type="file"
            accept="image/x-png,image/gif,image/jpeg"
            className="hidden mb-2 text-sm text-[#6C757D] font-medium"
            onChange={handleImageChange}
          />
        </label>
        {loading && <p>Uploading...</p>}
      </div>
    );
  };  

  const initialData = {
    companyName: "",
    companyAddress: "",
    email: "",
    password: "",
    confirmPassword: "",

    companyRC: "",
    phone: "",
    avatar: "",
    role: "USER",
    userType: "FLEET_PARTNERS",
    userCategory: "PASSENGERS",
  };

  const validation = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), undefined], "Passwords must match")
      .required("Required"),
    companyName: Yup.string().required("Company name is required"),
    companyAddress: Yup.string().required("Company address is required"),
    companyRC: Yup.string().required("Company RC is required"),
    phone: Yup.string().required("Phone number is required"),
  });

  const onSubmit = async (values: any) => {
    if (showScreen === 1) {
      setShowScreen(2);
    } else {
      const payload = {
        ...values,
        avatar: image, // Include the uploaded image (as base64 string)
        role: values.role as "USER", // Type assertion
        userType: values.userType as "FLEET_PARTNERS", // Type assertion
        userCategory: values.userCategory as "PASSENGERS",
      };
  
      try {
        // Use the correct type here for signupResponse
        const signupResponse = await signup(payload).unwrap();
  
        if (signupResponse.status === 200 || signupResponse.status === 201) {
          toast.success(signupResponse.message);
  
          // Extract login credentials from signup payload
          const loginCredentials = {
            email: payload.email,
            password: payload.password,
          };
  
          // Perform login
          try {
            // Use the correct type here for loginResponse
            const loginResponse: any = await login(loginCredentials).unwrap();
  
            if (loginResponse.status >= 200 || loginResponse.status < 300) {
              // Store token and user data in localStorage
              const token = loginResponse.data.token;
              const user = loginResponse.data.user;
         dispatch(loginUserSuccess({ auth_token: token, user: user }));
  
              localStorage.setItem("auth_token", token);
              localStorage.setItem("user", JSON.stringify(user));
  
              // Redirect to dashboard/home
              router.push("/dashboard/home");
              toast.success(loginResponse.message);
            } else {
              toast.error(loginResponse.message);
            }
          } catch (loginError) {
            console.error("Error during login:", loginError);
            toast.error("An error occurred during login.");
          }
        } else {
          toast.error(signupResponse.message);
        }
      } catch (signupError) {
        console.error("Error during signup:", signupError);
        toast.error("An error occurred during signup.");
      }
    }
  };
  

  const handleBackClick = () => {
    router.back(); // Navigate to the previous page
  };

  return (
    <div className="w-full">
      <div className="grid lg:grid-cols-2 gap-14 w-full h-full ">
        {/* Left Section */}
        <div className="w-full z-10 h-screen lg:block hidden relative">
          <div className="absolute h-screen z-10 object-cover w-full rounded-xl">
            <Image
              className="h-full z-10 object-cover w-full"
              src="/onboarding/urbanFleetRegBg.jpg"
              alt="Descriptive alt text"
              layout="fill"
              // objectFit="cover"
            />
          </div>
          <div className="flex items-center justify-center relative z-20 h-full">
            <div className="">
              <div className="bg-[#036E03]/[30%] rounded-t-[25px]">
                <div className="flex justify-center pt-14 pb-8">
                  <Image
                    className=""
                    src="/urban 1.png"
                    alt="image"
                    width={140}
                    height={140}
                    priority
                  />
                </div>
              </div>
              <div className="relative">
                <div className="bg-[#036E03] md:pl-7 md:pr-6 md:pt-4 lg:pt-6 md:pb-10 lg:pb-14 rounded-b-[25px]">
                  <Image
                    className="h-full object-cover w-full"
                    src="/pattern.png"
                    alt="Descriptive alt text"
                    layout="fill"
                    // objectFit="cover"
                  />
                  <h4 className="text-white text-center md:text-[48px] font-[700] text-[36px] leading-[55px] max-w-[400px]">
                  Urban Fleet Partners (UFP)
                  </h4>
                  <div className="flex py-10 justify-center">
                    <Image
                      className=""
                      src="/urban single logo.svg"
                      alt="image"
                      width={80}
                      height={80}
                      priority
                    />
                  </div>

                  <div className="flex items-center gap-4 justify-center">
                    <Image
                      className=""
                      src="/onboarding/blip.svg"
                      alt="image"
                      width={40}
                      height={40}
                      priority
                    />
                    <h5 className="text-[19.85px] text-white font-[200]">
                      Powered by <span className="font-[700]">BLIP LLC</span>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full h-screen scrollbar-hide lg:w-[85%] lg:overflow-y-auto">
          <div className="lg:hidden block">
            <div className="w-full z-10   relative">
              <div className="absolute h-full z-10 object-cover w-full rounded-xl">
                <Image
                  className="h-full  object-cover w-full"
                  src="/onboarding/urbanFleetRegBg.jpg"
                  alt="Descriptive alt text"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="overlay h-full absolute inset-0 bg-primary/[50%] "></div>
              </div>
              <div className="flex relative z-20 h-full justify-center text-center">
                <div className="flex justify-center text-center pt-14 pb-14">
                  <Image
                    className=""
                    src="/urban 1.png"
                    alt="image"
                    width={140}
                    height={140}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="px-8 ">
            <div className="sticky top-0 pt-[40px] z-20 bg-white">
              {showScreen === 1 ? (
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={handleBackClick}
                    className="flex items-center text-gray-600 mb-4"
                  >
                    <FaArrowLeft className="" />
                  </button>

                  <div className="flex items-center gap-2">
                    <h6>Step 1</h6>
                    <div className="flex items-center gap-1">
                      <div className="h-3 w-3 rounded-full bg-[#6CC56C]"></div>
                      <div className="h-3 w-3 rounded-full bg-[#D9D9D9]"></div>
                      {/* <div className="h-3 w-3 rounded-full bg-[#D9D9D9]"></div> */}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setShowScreen(1)}
                    className="flex items-center text-gray-600 mb-4"
                  >
                    <FaArrowLeft className="" />
                  </button>

                  <div className="flex items-center gap-2">
                    <h6>Step 2</h6>
                    <div className="flex items-center gap-1">
                      <div className="h-3 w-3 rounded-full bg-[#6CC56C]"></div>
                      <div className="h-3 w-3 rounded-full bg-[#6CC56C]"></div>
                      {/* <div className="h-3 w-3 rounded-full bg-[#D9D9D9]"></div> */}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="md:h-full h-full scrollbar-hide overflow-y-scroll">
              {showScreen === 1 ? (
                <div className="flex flex-col">
                  <h5 className="text-[#121212] text-[26px] md:text-[34px] lg:text-[40px] font-[800]">
                    Sign up as Corporate Organization
                  </h5>
                  {/* <h3 className="text-[#1A1A1A] text-[15px] lg:text-[18px] font-[300]">
     Register in three easy steps
   </h3> */}
                </div>
              ) : (
                <div className="flex flex-col">
                  <h5 className="text-[#121212] text-[26px] md:text-[34px] lg:text-[36px] font-[800]">
                    Upload Profile Picture
                  </h5>
                  <h3 className="text-[#1A1A1A] text-[15px] lg:text-[20px] font-[300]">
                    Upload a cleer picture of yourself
                  </h3>
                </div>
              )}

              <div className="flex flex-col mb-8 gap-8">
                <Formik
                  initialValues={initialData}
                  validationSchema={validation}
                  onSubmit={onSubmit}
                >
                  {({  }) => (
                    <Form className="w-full  mt-10 lg:mt-10 mb-6 flex flex-col justify-between">
                      <div className={showScreen === 1 ? "block " : "hidden"}>
                        <div>
                          <div className=" mb-5 relative">
                            <label
                              className=" text-[#2B2C2B] text-[16px] md:text-[20px] font-[500] "
                              htmlFor="companyName"
                            >
                              Company Name
                            </label>
                            <Field
                              className="mt-1 block w-full h-12 border-[0.5px]  pl-3 rounded-[10px] focus:outline-none border-[#D9D9D9] "
                              name="companyName"
                              type="text"
                              id="companyName"
                              placeholder=""
                            />
                            <p className="text-red-700 text-xs mt-1 ">
                              <ErrorMessage name="companyName" />
                            </p>
                          </div>
                          <div className=" mb-5 relative">
                            <label
                              className=" text-[#2B2C2B] text-[16px] md:text-[20px] font-[500] "
                              htmlFor="companyAddress"
                            >
                              Company Address
                            </label>
                            <Field
                              className="mt-1 block w-full h-12 border-[0.5px]  pl-3 rounded-[10px] focus:outline-none border-[#D9D9D9] "
                              name="companyAddress"
                              type="text"
                              id="companyAddress"
                              placeholder=""
                            />
                            <p className="text-red-700 text-xs mt-1 ">
                              <ErrorMessage name="companyAddress" />
                            </p>
                          </div>

                          <div className=" mb-5 relative">
                            <label
                              className=" text-[#2B2C2B] text-[16px] md:text-[20px] font-[500] "
                              htmlFor="companyRC"
                            >
                              Company RC
                            </label>
                            <Field
                              className="mt-1 block w-full h-12 border-[0.5px]  pl-3 rounded-[10px] focus:outline-none border-[#D9D9D9] "
                              name="companyRC"
                              type="text"
                              id="companyRC"
                              placeholder=""
                            />
                            <p className="text-red-700 text-xs mt-1 ">
                              <ErrorMessage name="companyRC" />
                            </p>
                          </div>

                          <div className=" mb-5 relative">
                            <label
                              className=" text-[#2B2C2B] text-[16px] md:text-[20px] font-[500] "
                              htmlFor="email"
                            >
                              Email Address
                            </label>
                            <Field
                              className="mt-1 block w-full h-12 border-[0.5px]  pl-3 rounded-[10px] focus:outline-none border-[#D9D9D9] "
                              name="email"
                              type="email"
                              id="email"
                              placeholder=""
                            />
                            <p className="text-red-700 text-xs mt-1 ">
                              <ErrorMessage name="email" />
                            </p>
                          </div>

                          <div className=" mb-5 relative">
                            <label
                              className=" text-[#2B2C2B] text-[16px] md:text-[20px] font-[500] "
                              htmlFor="phone"
                            >
                              Phone Number
                            </label>
                            <Field
                              className="mt-1 block w-full h-12 border-[0.5px]  pl-3 rounded-[10px] focus:outline-none border-[#D9D9D9] "
                              name="phone"
                              type="text"
                              id="phone"
                              placeholder=""
                            />
                            <p className="text-red-700 text-xs mt-1 ">
                              <ErrorMessage name="phone" />
                            </p>
                          </div>

                          <div className=" mb-5 relative">
                            <label
                              className=" text-[#2B2C2B] text-[16px] md:text-[20px] font-[500] "
                              htmlFor="password"
                            >
                              Password
                            </label>
                            <div>
                              <Field
                                className="mt-1 block w-full h-12 border-[0.5px]  pl-3 rounded-[10px] focus:outline-none border-[#D9D9D9] "
                                name="password"
                                id="password"
                                type={!showPassword ? "password" : "text"}
                                placeholder=""
                              />
                              <button
                                type="button"
                                role="button"
                                aria-label="show password"
                                title=" show password"
                                onClick={() =>
                                  setShowPassword(() => !showPassword)
                                }
                                className={`absolute right-4 top-12`}
                              >
                                {!showPassword ? (
                                  <AiOutlineEyeInvisible className="" />
                                ) : (
                                  <AiOutlineEye className="" />
                                )}
                              </button>
                            </div>
                            <p className="text-red-700 text-xs mt-1 ">
                              <ErrorMessage name="password" />
                            </p>
                          </div>
                          <div className=" mb-5 relative">
                            <label
                              className=" text-[#2B2C2B] text-[16px] md:text-[20px] font-[500] "
                              htmlFor="confirmPassword"
                            >
                              Retype Password
                            </label>
                            <div>
                              <Field
                                className="mt-1 block w-full h-12 border-[0.5px]  pl-3 rounded-[10px] focus:outline-none border-[#D9D9D9] "
                                name="confirmPassword"
                                id="confirmPassword"
                                type={
                                  !confirmPassword ? "confirmPassword" : "text"
                                }
                                placeholder=""
                              />
                              <button
                                type="button"
                                role="button"
                                aria-label="show password"
                                title=" show password"
                                onClick={() =>
                                  setShowConfirmPassword(() => !confirmPassword)
                                }
                                className={`absolute right-4 top-12`}
                              >
                                {!confirmPassword ? (
                                  <AiOutlineEyeInvisible className="" />
                                ) : (
                                  <AiOutlineEye className="" />
                                )}
                              </button>
                            </div>
                            <p className="text-red-700 text-xs mt-1 ">
                              <ErrorMessage name="confirmPassword" />
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className={showScreen === 2 ? "block " : "hidden"}>
                      <div className="mb-7">
      <ImageUpload image={image} setImage={setImage}  />
    </div>
                      </div>

                      {/* {showScreen === 1 ? (
                        <button
                          onClick={() => setShowScreen(2)}
                          // disabled={isSubmitting} // Disable button if no option is selected
                          className={`disabled:bg-gray-500 py-4 w-full px-6 bg-[#036E03] text-white rounded-lg  hover:bg-green-700
}`}
                        >
                          { "Proceed"}
                        </button>
                      ) : ( */}
                      <button
                        type="submit"
                        // onClick={onSubmit}
                        disabled={isLoading} // Disable button if no option is selected
                        // disabled={isSubmitting} // Disable button if no option is selected
                        className={`disabled:bg-gray-500 py-4 w-full px-6 bg-[#036E03] text-white rounded-lg  hover:bg-green-700
}`}
                      >{showScreen === 1 ? (
                        <div>{isLoading ? <LoadingSpinner /> : "Proceed"}</div>
                      ) : (
                        <div>
                          {isLoading ? <LoadingSpinner /> : "Sign Up"}
                        </div>
                      )}
                        
                        {/* {isSubmitting ? <LoadingSpinner /> : "Sign Up"} */}
                      </button>
                      {/* // )} */}
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
        <li className="mb-2">
          Get started by editing{" "}
          <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
            app/page.tsx
          </code>
          .
        </li>
        <li>Save and see your changes instantly.</li>
      </ol>

      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <a
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="dark:invert"
            src="/vercel.svg"
            alt="Vercel logomark"
            width={20}
            height={20}
          />
          Deploy now
        </a>
        <a
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read our docs
        </a>
      </div>
    </main>
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/file.svg"
          alt="File icon"
          width={16}
          height={16}
        />
        Learn
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/window.svg"
          alt="Window icon"
          width={16}
          height={16}
        />
        Examples
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/globe.svg"
          alt="Globe icon"
          width={16}
          height={16}
        />
        Go to nextjs.org →
      </a>
    </footer>
  </div> */}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Page;
