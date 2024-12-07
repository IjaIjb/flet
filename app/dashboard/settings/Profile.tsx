"use client"; // Add this for client components in the Next.js app directory
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { TbUserEdit } from "react-icons/tb";
import * as Yup from "yup";
import Image from "next/image";

// ImageUpload component definition with proper types
interface ImageUploadProps {
  image: string | null; // image can be a string (URL) or null
  setImage: (image: string | null) => void; // setImage is a function that updates the image state
}
const Profile = () => {
  const [image, setImage] = useState<string | null>(null);

  const initialData = {
    email: "",

    password: "",
    remember: "",
    documents: [
      { name: "", expiryDate: "", image: null }, // Ensure a default document exists
    ],
  };

  const validation = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(6, "Password must be minimum of 6 characters")
      .max(255)
      .required("Required"),
    documents: Yup.array().of(
      Yup.object().shape({
        name: Yup.string().required("Document name is required"),
        expiryDate: Yup.date().required("Expiry date is required"),
        image: Yup.mixed().required("Document upload is required"),
      })
    ),
  });



  const ImageUpload: React.FC<ImageUploadProps> = ({ image, setImage }) => (
    <div className="flex justify-center text-center">
    <label className="flex w-[110px] bg-white dotted-border flex-col items-center justify-center rounded-[5px] cursor-pointer relative">
      <div className="flex flex-col items-center justify-center h-[70px]">
        {image ? (
          <Image
            className=""
            src={image}
            alt="Uploaded image"
            width={100}
            height={100}
          />
        ) : (
          <Image
            className=""
            src="/onboarding/Icon.svg" // Replace with your default image path
            alt="Default placeholder"
            width={100}
            height={100}
          />
        )}
      </div>
      <input
        id="dropzone1"
        type="file"
        accept="image/x-png,image/gif,image/jpeg"
        className="hidden mb-2 text-sm text-[#6C757D] font-medium"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const file = e.target.files?.[0];
          if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
              setImage(reader.result as string);
            };
            reader.readAsDataURL(file);
          }
        }}
      />
    </label>
  </div>
  );

  const onSubmit = async () => {
    // e.preventDefault(); // Prevent default browser behavior

    // router.push("/dashboard/home"); // Replace with the actual path

    console.log("Form submitted");
  };



  return (
    <div>
      <div className="border-[#D9D9D9] border rounded-[10px] px-5 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TbUserEdit className="text-primary w-6 h-6"/>
            <h5 className="text-primary md:text-[20px] text-[18px]">My Profile</h5>
          </div>

          <h5 className="text-primary  md:text-[20px] text-[18px] underline">Edit</h5>
        </div>

        <div className="flex mt-6 items-center justify-between">
          <ImageUpload image={image} setImage={setImage} />

<div className="bg-[#6CC56C30]/[19%] text-primary rounded-full px-5 py-2">
Change picture
</div>
          </div>

        <div>
          <Formik
            initialValues={initialData}
            validationSchema={validation}
            onSubmit={onSubmit}
          >
            {({ }) => (
              <Form className="w-full  mt-10 lg:mt-10 mb-6 flex flex-col justify-between">
                <div>
                  <div className=" mb-5 relative">
                    <label
                      className=" text-[#2B2C2B] text-[16px] font-[500] "
                      htmlFor="first_name"
                    >
                     First Name
                    </label>
                    <Field
                      className="mt-2 block w-full h-12 border-[0.5px]  pl-3 rounded-[10px] focus:outline-none border-[#D9D9D9] "
                      name="first_name"
                      type="text"
                      id="first_name"
                      placeholder=""
                    />
                    <p className="text-red-700 text-xs mt-1 ">
                      <ErrorMessage name="first_name" />
                    </p>
                  </div>
                  <div className=" mb-5 relative">
                    <label
                      className=" text-[#2B2C2B] text-[16px] font-[500] "
                      htmlFor="last_name"
                    >
                 Last Name
                    </label>
                    <Field
                      className="mt-2 block w-full h-12 border-[0.5px]  pl-3 rounded-[10px] focus:outline-none border-[#D9D9D9] "
                      name="last_name"
                      type="text"
                      id="last_name"
                      placeholder=""
                    />
                    <p className="text-red-700 text-xs mt-1 ">
                      <ErrorMessage name="last_name" />
                    </p>
                  </div>

                  <div className=" mb-5 relative">
                    <label
                      className=" text-[#2B2C2B] text-[16px] font-[500] "
                      htmlFor="phone"
                    >
                      Phone Number
                    </label>
                    <Field
                      className="mt-2 block w-full h-12 border-[0.5px]  pl-3 rounded-[10px] focus:outline-none border-[#D9D9D9] "
                      name="phone"
                      type="number"
                      id="phone"
                      placeholder=""
                    />
                    <p className="text-red-700 text-xs mt-1 ">
                      <ErrorMessage name="phone" />
                    </p>
                  </div>

                  <div className=" mb-5 relative">
                    <label
                      className=" text-[#2B2C2B] text-[16px] font-[500] "
                      htmlFor="email"
                    >
                      Email Address
                    </label>
                    <Field
                      className="mt-2 block w-full h-12 border-[0.5px]  pl-3 rounded-[10px] focus:outline-none border-[#D9D9D9] "
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
                      className=" text-[#2B2C2B] text-[16px] font-[500] "
                      htmlFor="last_name"
                    >
           City
                    </label>
                    <Field
                      className="mt-2 block w-full h-12 border-[0.5px]  pl-3 rounded-[10px] focus:outline-none border-[#D9D9D9] "
                      name="city"
                      type="text"
                      id="last_name"
                      placeholder=""
                    />
                    <p className="text-red-700 text-xs mt-1 ">
                      <ErrorMessage name="last_name" />
                    </p>
                  </div>
          

                  {/* <div className=" mb-5 relative">
                          <label
                            className=" text-[#2B2C2B] text-[16px] font-[500] "
                            htmlFor="password"
                          >
                            Password
                          </label>
                          <div>
                            <Field
                              className="mt-2 block w-full h-12 border-[0.5px]  pl-3 rounded-[10px] focus:outline-none border-[#D9D9D9] "
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
                            className=" text-[#2B2C2B] text-[16px] font-[500] "
                            htmlFor="confirmPassword"
                          >
                            Retype Password
                          </label>
                          <div>
                            <Field
                              className="mt-2 block w-full h-12 border-[0.5px]  pl-3 rounded-[10px] focus:outline-none border-[#D9D9D9] "
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
                        </div> */}
                </div>

<div className="flex justify-end">
                <button
                  onClick={onSubmit}
                  // disabled={!selectedOption} // Disable button if no option is selected
                  className={`py-3 w-fit px-6 bg-[#036E03] text-white rounded-lg  hover:bg-green-700
    }`}
                >
                  Save
                </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Profile;
