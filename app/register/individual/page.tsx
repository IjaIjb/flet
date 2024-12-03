"use client"; // Add this for client components in the Next.js app directory

import React, { useState } from "react";
import { FaAngleDown, FaAngleUp, FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FiPlus, FiTrash, FiUpload } from "react-icons/fi";
import Image from "next/image";

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

// ImageUpload component definition with proper types
interface ImageUploadProps {
  image: string | null; // image can be a string (URL) or null
  setImage: (image: string | null) => void; // setImage is a function that updates the image state
}

// Define the types for the component props
interface BusSideUploadProps {
  image: string | null; // image can be a string (URL) or null
  setImage: (image: string | null) => void; // setImage is a function that updates the image state
}

// Define the types for the component props
interface BusFrontUploadProps {
  image: string | null; // image can be a string (URL) or null
  setImage: (image: string | null) => void; // setImage is a function that updates the image state
}

interface DocumentUploadProps {
  image: string | null; // image can be a string (URL) or null
  setImage: (image: string | null) => void; // setImage is a function that updates the image state
}



const RegisterIndividual = () => {
  const router = useRouter();
  // const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setShowConfirmPassword] = useState(false);
  const [showScreen, setShowScreen] = useState(1);
  const [showBusArchitecture, setBusAchitecture] = useState(false);

  // const [documents, setDocuments] = useState([
  //   { id: 1, name: "", expiryDate: "", image: null },
  // ]);

  // const addDocument = () => {
  //   setDocuments((prev) => [
  //     ...prev,
  //     { id: prev.length + 1, name: "", expiryDate: "", image: null },
  //   ]);
  // };

  // const removeDocument = (id: any) => {
  //   setDocuments((prev) => prev.filter((doc) => doc.id !== id));
  // };

  const toggleBusArchitecture = () => {
    setBusAchitecture(!showBusArchitecture);
  };
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
    <label className="flex w-[200px] bg-white dotted-border flex-col items-center justify-center rounded-[5px] cursor-pointer relative">
      <div className="flex flex-col items-center justify-center h-[150px]">
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

  const BusSideUpload: React.FC<BusSideUploadProps> = ({ image, setImage }) => (
    <div className="flex justify-center w-full mt-2 text-center">
      <label className="flex w-full bg-white dotted-border flex-col items-center justify-center rounded-[5px] cursor-pointer relative">
        <div className="flex flex-col items-center justify-center h-[150px]">
          {image ? (
            // <img
            //   src={image}
            //   alt="Preview"
            //   style={{ minHeight: "100px", maxHeight: "100px" }}
            // />

            <Image
            className=""
            src={image}
            alt="image"
            width={100}
            height={100}
            priority
          />
          ) : (
            <div className="flex items-center gap-2">
              <FiUpload />
              <h4 className="text-[16px] text-[#9F9F9F]">
                Upload Side bus Image
              </h4>
            </div>
          )}
        </div>

        <input
  id="dropzone22"
  type="file"
  accept="image/x-png,image/gif,image/jpeg"
  className="hidden mb-2 text-sm text-[#6C757D] font-medium"
  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Optional chaining in case files is undefined
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string); // Cast reader.result as string
      };
      reader.readAsDataURL(file);
    }
  }}
/>
      </label>
    </div>
  );

  const BusFrontUpload: React.FC<BusFrontUploadProps> = ({ image, setImage }) => (
    <div className="flex justify-center w-full mt-2 text-center">
      <label className="flex w-full  bg-white dotted-border flex-col items-center justify-center rounded-[5px] cursor-pointer relative">
        <div className="flex flex-col items-center justify-center h-[150px]">
          {image ? (
            // <img
            //   src={image}
            //   alt="Preview"
            //   style={{ minHeight: "100px", maxHeight: "100px" }}
            // />

            <Image
            className=""
            src={image}
            alt="image"
            width={100}
            height={100}
            priority
          />
          ) : (
            <div className="flex items-center gap-2">
              <FiUpload />
              <h4 className="text-[16px] text-[#9F9F9F]">
                Upload Side bus Image
              </h4>
            </div>
          )}
        </div>
        <input
          id="dropzone3"
          type="file"
          accept="image/x-png,image/gif,image/jpeg"
          className="hidden mb-2 text-sm text-[#6C757D] font-medium"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files?.[0]; // Optional chaining in case files is undefined
            if (file) {
              const reader = new FileReader();
              reader.onloadend = () => {
                setImage(reader.result as string); // Cast reader.result as string
              };
              reader.readAsDataURL(file);
            }
          }}
        />
      </label>
    </div>
  );

  const DocumentUpload: React.FC<DocumentUploadProps> = ({ image, setImage }) => (
    <div className="flex justify-center w-full mt-2 text-center h-4">
      <label className="flex w-full bg-white dotted-border flex-col  items-center justify-center rounded-[5px] cursor-pointer relative">
        <div className="flex flex-col items-center  justify-center ">
          {image ? (
            // <img
            //   src={image}
            //   alt="Preview"
            //   className="mt-2 block w-full border-[0.5px]  pl-3 rounded-[10px] focus:outline-none border-[#D9D9D9] "
            //   // style={{ minHeight: "50px", maxHeight: "50px", }}
            // />
            <div className="relative w-full h-64">
  <Image
    src={image}
    alt="Descriptive alt text"
    layout="fill"
    objectFit="cover"
  />
</div>
          ) : (
            <div className="flex items-center gap-2">
              <FiUpload />
              <h4 className="text-sm text-[#9F9F9F]">Upload Side bus Image</h4>
            </div>
          )}
        </div>
        <input
          id="dropzone4"
          type="file"
          accept="image/x-png,image/gif,image/jpeg"
          className="hidden mb-2 text-sm  text-[#6C757D] font-medium"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files?.[0]; // Optional chaining in case files is undefined
            if (file) {
              const reader = new FileReader();
              reader.onloadend = () => {
                setImage(reader.result as string); // Cast reader.result as string
              };
              reader.readAsDataURL(file);
            }
          }}
        />
      </label>
    </div>
  );

  const [image, setImage] = useState<string | null>(null);
  const [sideBusImage, setSideBusImage] = useState<string | null>(null);
  const [frontBusImage, setFrontBusImage] = useState<string | null>(null);

  const [open, setOpen] = useState(false);
  const [openCongratModal, setOpenCongratModal] = useState(false);

  const onOpenModal = () => {
    // e.preventDefault();
    setOpen(true);
  };
  const onCloseModal = () => setOpen(false);

  const onOpenCongratModal = () => {
    // e.preventDefault();
    onCloseModal();
    setTimeout(() => setOpenCongratModal(true), 100); // Slight delay for smoother transition
  };

  const onCloseCongratModal = () => setOpenCongratModal(false);

  const onSubmit = async () => {
    // e.preventDefault(); // Prevent default browser behavior
    onOpenModal(); // Open the modal
    console.log("Form submitted");
  };

  const onSubmit2 = async () => {
    // e.preventDefault(); // Prevent default browser behavior
    router.push("/dashboard/home");
    console.log("Form submitted");
  };

  const handleBackClick = () => {
    router.back(); // Navigate to the previous page
  };
  return (
    <div className="w-full">
      <div
        className={
          showScreen === 4 ? "" : "grid lg:grid-cols-2 gap-14 w-full h-full "
        }
      >
        {/* Left Section */}
        <div
          className={
            showScreen === 4
              ? "hidden"
              : "w-full z-10 h-screen lg:block hidden relative"
          }
        >
          <div className="absolute h-screen z-10 object-cover w-full rounded-xl">
            {/* <img
              className="h-full z-10 object-cover w-full"
              src="/onboarding/transport-concept-parked-vehicles 1.svg"
              alt=""
            /> */}

<Image
     className="h-full z-10 object-cover w-full"
                  src="/onboarding/transport-concept-parked-vehicles 1.svg"
    alt="Descriptive alt text"
    layout="fill"
    // objectFit="cover"
  />
          </div>
          <div className="flex items-center justify-center relative z-20 h-full">
            <div className="">
              <div className="bg-[#036E03]/[30%] rounded-t-[25px]">
                <div className="flex justify-center pt-14 pb-8">
                  {/* <img src="/urban 1.svg" alt="" /> */}

                  <Image
            className=""
            src="/urban 1.svg"
            alt="image"
            width={100}
            height={100}
            priority
          />
                </div>
              </div>
              <div className="bg-[#036E03] md:pl-7 lg:pl-10 md:pr-6 lg:pr-10 md:pt-4 lg:pt-6 md:pb-10 lg:pb-14 rounded-b-[25px]">
                <h4 className="text-white text-[36px] font-[700] leading-[45.2px] max-w-[330px]">
                  Manage your park at one glance!
                </h4>
                <div className="text-white mt-8">
                  <ul className="flex flex-col gap-1">
                    <li className="text-[18px] font-[500]">- Manage Trips</li>
                    <li className="text-[18px] font-[500]">
                      - Bookings & Records
                    </li>
                    <li className="text-[18px] font-[500]">
                      - Add Park Managers
                    </li>
                    <li className="text-[18px] font-[500]">
                      - Add Dispatch Officers
                    </li>
                    <li className="text-[18px] font-[500]">
                      - Assign Trips & Drivers
                    </li>
                  </ul>
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
                {/* <img
                  className="h-full z-10 object-cover w-full"
                  src="/onboarding/transport-concept-parked-vehicles 1.svg"
                  alt=""
                /> */}

<Image
     className="h-full  object-cover w-full"
                  src="/onboarding/transport-concept-parked-vehicles 1.svg"
    alt="Descriptive alt text"
    layout="fill"
    objectFit="cover"
  />
                <div className="overlay h-full absolute inset-0 bg-primary/[50%] "></div>
              </div>
              <div className="flex relative z-20 h-full justify-center text-center">
                <div className="flex justify-center text-center pt-14 pb-14">
                  {/* <img src="/urban 1.svg" alt="" /> */}


                  <Image
            className=""
            src="/urban 1.svg"
            alt="image"
            width={100}
            height={100}
            priority
          />
                </div>
              </div>
            </div>
          </div>
          <div className="px-8   ">
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
                    <div className="h-3 w-3 rounded-full bg-[#D9D9D9]"></div>
                  </div>
                </div>
              </div>
            ) : showScreen === 2 ? (
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
                    <div className="h-3 w-3 rounded-full bg-[#D9D9D9]"></div>
                  </div>
                </div>
              </div>
            ) : showScreen === 3 ? (
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setShowScreen(2)}
                  className="flex items-center text-gray-600 mb-4"
                >
                  <FaArrowLeft className="" />
                </button>

                <div className="flex items-center gap-2">
                  <h6>Step 3</h6>
                  <div className="flex items-center gap-1">
                    <div className="h-3 w-3 rounded-full bg-[#6CC56C]"></div>
                    <div className="h-3 w-3 rounded-full bg-[#6CC56C]"></div>
                    <div className="h-3 w-3 rounded-full bg-[#6CC56C]"></div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-between w-full lg:w-[40%]">
                <button
                  type="button"
                  onClick={() => setShowScreen(3)}
                  className="flex items-center text-gray-600 mb-4"
                >
                  <FaArrowLeft className="" />
                </button>

                <div className="flex items-center gap-2">
                  <h6>Step 3</h6>
                  <div className="flex items-center gap-1">
                    <div className="h-3 w-3 rounded-full bg-[#6CC56C]"></div>
                    <div className="h-3 w-3 rounded-full bg-[#6CC56C]"></div>
                    <div className="h-3 w-3 rounded-full bg-[#6CC56C]"></div>
                  </div>
                </div>
              </div>
            )}
</div>
            <div className="md:h-full h-full scrollbar-hide overflow-y-scroll">
              {showScreen === 1 ? (
                <div className="flex flex-col">
                  <h5 className="text-[#121212] text-[26px] md:text-[34px] lg:text-[36px] font-[800]">
                    Sign up as an Individual
                  </h5>
                  <h3 className="text-[#1A1A1A] text-[15px] lg:text-[18px] font-[300]">
                    Register in three easy steps
                  </h3>
                </div>
              ) : showScreen === 2 ? (
                <div className="flex flex-col">
                  <h5 className="text-[#121212] text-[26px] md:text-[34px] lg:text-[36px] font-[800]">
                    Upload Profile Picture
                  </h5>
                  <h3 className="text-[#1A1A1A] text-[15px] lg:text-[17px] font-[300]">
                    Upload a cleer picture of yourself
                  </h3>
                </div>
              ) : showScreen === 3 ? (
                <div className="flex flex-col">
                  <h5 className="text-[#121212] text-[26px] md:text-[34px] lg:text-[36px] font-[800]">
                    Add a Vehicle
                  </h5>
                  <h3 className="text-[#1A1A1A] text-[15px] lg:text-[17px] font-[300]">
                    Add at least one vehicle from your fleet
                  </h3>
                </div>
              ) : (
                <div className="flex flex-col">
                  <h5 className="text-[#121212] text-[26px] md:text-[34px] lg:text-[36px] font-[800]">
                    Upload Vehicle Documents
                  </h5>
                  <h3 className="text-[#1A1A1A] text-[15px] lg:text-[17px] font-[300]">
                    Add at least one vehicle document for your fleet
                  </h3>
                </div>
              )}

              <div className="flex flex-col  mb-8 gap-8">
                <Formik
                  initialValues={initialData}
                  validationSchema={validation}
                  onSubmit={onSubmit}
                >
                  {({  values, setFieldValue }) => (
                    <Form className="w-full  mt-10 lg:mt-10 mb-6 flex flex-col justify-between">
                      <div className={showScreen === 1 ? "block " : "hidden"}>
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
                            E-mail
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
                            htmlFor="address"
                          >
                            Address
                          </label>
                          <Field
                            className="mt-2 block w-full h-12 border-[0.5px]  pl-3 rounded-[10px] focus:outline-none border-[#D9D9D9] "
                            name="address"
                            type="text"
                            id="address"
                            placeholder=""
                          />
                          <p className="text-red-700 text-xs mt-1 ">
                            <ErrorMessage name="address" />
                          </p>
                        </div>
                        <div className=" mb-5 relative">
                          <label
                            className=" text-[#2B2C2B] text-[16px] font-[500] "
                            htmlFor="city"
                          >
                            City
                          </label>
                          <Field
                            className="mt-2 block w-full h-12 border-[0.5px]  pl-3 rounded-[10px] focus:outline-none border-[#D9D9D9] "
                            name="city"
                            type="text"
                            id="city"
                            placeholder=""
                          />
                          <p className="text-red-700 text-xs mt-1 ">
                            <ErrorMessage name="city" />
                          </p>
                        </div>
                        <div className=" mb-5 relative">
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
                        </div>
                      </div>

                      <div className={showScreen === 2 ? "block " : "hidden"}>
                        <div className="mb-7">
                          <ImageUpload image={image} setImage={setImage} />
                        </div>
                      </div>

                      <div className={showScreen === 3 ? "block " : "hidden"}>
                        <div className="mb-7">
                          <div className=" mb-5 relative">
                            <label
                              className=" text-[#2B2C2B] text-[16px] font-[500] "
                              htmlFor="first_name"
                            >
                              Engine Number
                            </label>
                            <Field
                              className="mt-2 block w-full h-12 border-[0.5px]  pl-3 rounded-[10px] focus:outline-none border-[#D9D9D9] "
                              name="engine"
                              type="number"
                              id=""
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
                              Engine Type
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
                              htmlFor="last_name"
                            >
                              Vehicle Type
                            </label>
                            <Field
                              className=" block w-full h-12 border-[1px] border-[#E4E1E1]  px-3 rounded-[10px] focus:outline-primary "
                              name="vehicle_type"
                              as="select"
                              // type="tel"
                              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setFieldValue(
                                  "vehicle_type",
                                  event.target.value
                                );
                              }}
                              placeholder=""
                            >
                              <option label="Select"></option>
                              <option className="text-center" value="Bus (12)">
                                Bus
                              </option>
                              <option className="text-center" value="M Bus (5)">
                                M Bus (5)
                              </option>
                              <option className="text-center" value="Sedan (3)">
                                Sedan (3)
                              </option>
                            </Field>
                            <p className="text-red-700 text-xs mt-1 ">
                              <ErrorMessage name="last_name" />
                            </p>
                          </div>

                          <div className=" mb-5 relative">
                            <label
                              className=" text-[#2B2C2B] text-[16px] font-[500] "
                              htmlFor="phone"
                            >
                              Number Plate
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
                              htmlFor="last_name"
                            >
                              Enrollment City
                            </label>
                            <Field
                              className=" block w-full h-12 border-[1px] border-[#E4E1E1]  px-3 rounded-[10px] focus:outline-primary "
                              name="vehicle_type"
                              as="select"
                              // type="tel"
                              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setFieldValue(
                                  "vehicle_type",
                                  event.target.value
                                );
                              }}
                              placeholder=""
                            >
                              <option label="Select"></option>
                              <option className="text-center" value="Bus (12)">
                                Bus
                              </option>
                              <option className="text-center" value="M Bus (5)">
                                M Bus (5)
                              </option>
                              <option className="text-center" value="Sedan (3)">
                                Sedan (3)
                              </option>
                            </Field>
                            <p className="text-red-700 text-xs mt-1 ">
                              <ErrorMessage name="last_name" />
                            </p>
                          </div>

                          <div
                            onClick={toggleBusArchitecture}
                            className="flex items-center justify-between"
                          >
                            <p className=" text-[#2B2C2B] text-[16px] font-[500] ">
                              See Bus Architecture
                            </p>

                            <div>
                              {showBusArchitecture ? (
                                <FaAngleUp />
                              ) : (
                                <FaAngleDown />
                              )}
                            </div>
                          </div>
                          {/* Bus Architecture Section */}
                          {!showBusArchitecture && (
                            <div className="mt-3">
                              {/*  content here */}
                              <p className="text-primary text-[16px]">
                                Bus Architecture
                              </p>

                              <div className="mt-1 bg-[#036E030F]/[6%] rounded-[9.71px] px-[20px] md:px-[44px] py-5">
                                <div className="flex flex-col gap-2">
                                  <div className="grid grid-cols-4 gap-3  justify-between">
                                    <div className="bg-white h-[80px] md:h-[100px] flex justify-center text-center items-center w-full">
                                      Driver
                                    </div>
                                    <div></div>
                                    <div></div>
                                    <div className="bg-white h-[80px] md:h-[100px] flex justify-center text-center items-center w-full">
                                      A1
                                    </div>
                                  </div>

                                  <div className="grid grid-cols-4 gap-3">
                                    <div className="bg-[#6CC56C] h-[80px] md:h-[100px] flex justify-center text-center items-center w-full">
                                      A2
                                    </div>
                                    <div className="bg-white h-[80px] md:h-[100px] flex justify-center text-center items-center w-full">
                                      A3
                                    </div>
                                    <div className="bg-white h-[80px] md:h-[100px] flex justify-center text-center items-center w-full">
                                      A4
                                    </div>
                                    <div></div>
                                  </div>

                                  <div className="grid grid-cols-4 gap-3">
                                    <div className="bg-white h-[80px] md:h-[100px] flex justify-center text-center items-center w-full">
                                      B1
                                    </div>
                                    <div className="bg-[#6CC56C] h-[80px] md:h-[100px] flex justify-center text-center items-center w-full">
                                      B2
                                    </div>
                                    <div className="bg-[#6CC56C] h-[80px] md:h-[100px] flex justify-center text-center items-center w-full">
                                      B3
                                    </div>
                                    <div className="bg-[#6CC56C] h-[80px] md:h-[100px] flex justify-center text-center items-center w-full">
                                      B4
                                    </div>
                                  </div>

                                  <div className="grid grid-cols-4 gap-3">
                                    <div className="bg-[#6CC56C] h-[80px] md:h-[100px] flex justify-center text-center items-center w-full">
                                      B2
                                    </div>
                                    <div className="bg-white h-[80px] md:h-[100px] flex justify-center text-center items-center w-full">
                                      B1
                                    </div>
                                    <div className="bg-[#6CC56C] h-[80px] md:h-[100px] flex justify-center text-center items-center w-full">
                                      B3
                                    </div>
                                    <div className="bg-[#6CC56C] h-[80px] md:h-[100px] flex justify-center text-center items-center w-full">
                                      B4
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="flex justify-center mt-2">
                                <div className="flex items-center gap-5">
                                  <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-[#6CC56C]"></div>
                                    <p className=" text-[#2B2C2B] text-[13px] font-[500] ">
                                      Number of Seats Occupied
                                    </p>
                                  </div>

                                  <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 border"></div>
                                    <p className=" text-[#2B2C2B] text-[13px] font-[500] ">
                                      Empty Seats
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      <div
                        className={
                          showScreen === 4
                            ? "block w-full md:w-[70%]"
                            : "hidden"
                        }
                      >
                        <div className="mb-7 flex gap-3 ">
                          <div className="w-full">
                            <label
                              className=" text-[#2B2C2B] text-[13px] md:text-[16px] font-[500] "
                              htmlFor="first_name"
                            >
                              Upload Side bus image
                            </label>
                            <BusSideUpload
                              image={sideBusImage}
                              setImage={setSideBusImage}
                            />
                          </div>

                          <div className="w-full">
                            <label
                              className=" text-[#2B2C2B] text-[13px] md:text-[16px] font-[500] "
                              htmlFor="first_name"
                            >
                              Upload front bus image
                            </label>
                            <BusFrontUpload
                              image={frontBusImage}
                              setImage={setFrontBusImage}
                            />
                          </div>
                        </div>

                        <div className="mb-7 flex gap-3 ">
                          <div className="w-full">
                            <label
                              className=" text-[#2B2C2B] text-[13px] md:text-[16px] font-[500] "
                              htmlFor="first_name"
                            >
                              Upload Side bus image
                            </label>
                            <BusSideUpload
                              image={sideBusImage}
                              setImage={setSideBusImage}
                            />
                          </div>

                          <div className="w-full">
                            <label
                              className=" text-[#2B2C2B] text-[13px] md:text-[16px] font-[500] "
                              htmlFor="first_name"
                            >
                              Upload Rear bus image
                            </label>
                            <BusFrontUpload
                            image={frontBusImage}
                            setImage={setFrontBusImage}
                            />
                          </div>
                        </div>

                        <div>
                          {values.documents.map((doc, index) => (
                            <div key={index}>
                              <hr />
                              <div className="my-3">
                                <div className="grid grid-cols-2 w-full gap-4 mb-5">
                                  {/* Name Field */}
                                  <div className="w-full relative">
                                    <label
                                      className="text-[#2B2C2B] text-[13px] md:text-[16px] font-[500]"
                                      htmlFor={`documents[${index}].name`}
                                    >
                                      Name of Document
                                    </label>
                                    <Field
                                      className="mt-2 block w-full h-12 border-[0.5px] pl-3 rounded-[10px] focus:outline-none border-[#D9D9D9]"
                                      name={`documents[${index}].name`}
                                      type="text"
                                      placeholder="Enter document name"
                                    />
                                    <p className="text-red-700 text-xs mt-1">
                                      <ErrorMessage
                                        name={`documents[${index}].name`}
                                      />
                                    </p>
                                  </div>
                                  {/* Upload Field */}
                                  <div className="w-full relative">
                                    <label
                                      className="text-[#2B2C2B] text-[13px] md:text-[16px] font-[500]"
                                      htmlFor={`documents[${index}].image`}
                                    >
                                      Upload Document
                                    </label>
                                    <DocumentUpload
                                      image={doc.image}
                                      setImage={(image) =>
                                        setFieldValue(
                                          `documents[${index}].image`,
                                          image
                                        )
                                      }
                                    />
                                  </div>
                                </div>

                                <div className="grid grid-cols-2 w-full gap-4 mb-10">
                                  {/* Expiry Date Field */}
                                  <div className="w-full relative">
                                    <label
                                      className="text-[#2B2C2B] text-[13px] md:text-[16px] font-[500]"
                                      htmlFor={`documents[${index}].expiryDate`}
                                    >
                                      Add Document Expiry Date
                                    </label>
                                    <Field
                                      className="mt-2 block w-full h-12 border-[0.5px] pl-3 rounded-[10px] focus:outline-none border-[#D9D9D9]"
                                      name={`documents[${index}].expiryDate`}
                                      type="date"
                                    />
                                    <p className="text-red-700 text-xs mt-1">
                                      <ErrorMessage
                                        name={`documents[${index}].expiryDate`}
                                      />
                                    </p>
                                  </div>
                                  {/* Remove Button */}
                                  {values.documents.length > 1 && (
                                    <div className="flex items-center">
                                      <button
                                        type="button"
                                        onClick={() =>
                                          setFieldValue(
                                            "documents",
                                            values.documents.filter(
                                              (_, i) => i !== index
                                            )
                                          )
                                        }
                                        className="text-red-500 text-sm flex items-center gap-1"
                                      >
                                        <FiTrash /> Remove
                                      </button>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                          {/* Add Document Button */}
                          <div className="flex justify-center mb-6">
                            <div
                              className="flex text-primary underline items-center gap-1 cursor-pointer"
                              onClick={() =>
                                setFieldValue("documents", [
                                  ...values.documents,
                                  {
                                    id: values.documents.length + 1,
                                    name: "",
                                    expiryDate: "",
                                    image: null,
                                  },
                                ])
                              }
                            >
                              <FiPlus />
                              Add More Documents
                            </div>
                          </div>
                        </div>
                      </div>

                      {showScreen === 4 ? (
                        <button
                          onClick={onSubmit}
                          // disabled={!selectedOption} // Disable button if no option is selected
                          className={`py-4 w-full px-6 bg-[#036E03] text-white rounded-lg  hover:bg-green-700
      }`}
                        >
                          Proceed
                        </button>
                      ) : (
                        <button
                          onClick={
                            showScreen === 1
                              ? () => setShowScreen(2)
                              : showScreen === 2
                              ? () => setShowScreen(3)
                              : () => setShowScreen(4)
                          }
                          // disabled={!selectedOption} // Disable button if no option is selected
                          className={`py-4 w-full px-6 bg-[#036E03] text-white rounded-lg  hover:bg-green-700
        }`}
                        >
                          Proceed
                        </button>
                      )}
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
            {/* Proceed Button */}
            {/* <button
              onClick={handleProceed}
              disabled={!selectedOption} // Disable button if no option is selected
              className={`py-4 px-6 bg-[#036E03] w-full mb-8 text-white rounded-lg ${
                !selectedOption
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-green-700"
              }`}
            >
              Proceed
            </button> */}
          </div>
        </div>
      </div>
      <Modal open={open} onClose={onCloseModal} center>
        <div className=" flex justify-center pt-7">
          <h4 className="tex-[#1A1A1A] text-[30px] font-[700]">
            Agree Terms & Condition
          </h4>
        </div>
        <div className="md:w-[370px]  body-font font-poppins">
          <div className="flex justify-center mt-2">
            <h4 className=" text-[16px] text-[#141313] ">
              By clicking Register, you agree to our{" "}
              <span className="text-primary cursor-pointer underline">
                Terms of use
              </span>{" "}
              and{" "}
              <span className="text-primary cursor-pointer underline">
                Privacy Policy
              </span>
            </h4>
          </div>
          <div className="flex space-x-2 justify-center  pt-7">
            <button
              onClick={() => onOpenCongratModal()}
              // disabled={!selectedOption} // Disable button if no option is selected
              className={`py-4 w-full px-6 bg-[#036E03] text-white rounded-lg  hover:bg-green-700
      }`}
            >
              Complete Registration
            </button>
            {/* <button
                onClick={(e: any) => handleSubmit3(e)}
                className="text-white  bg-[#00B07B] flex justify-center items-center py-3 rounded-[10px] w-full"
              >
                {loader3 ? <LoadingSpinner /> : "Pay $250"}
              </button> */}
          </div>
          {/* <div className="flex items-start mt-3 mb-2">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-5 h-5 accent-green-600 bg-[#D9D9D9] border-green-600 rounded"
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-[15px]  text-gray-900 "
              >
                <span className="text-red-700">NOTE</span> This payment is
                non-refundable regardless of whether you pass or fail the credit
                eligibility test.
              </label>
            </div> */}
        </div>
      </Modal>

      <Modal open={openCongratModal} onClose={onCloseCongratModal} center>
        <div className=" flex flex-col gap-3 justify-center pt-7">
          <div className="flex justify-center">
            <Image
              className=""
              src="/onboarding/party-horn.svg"
              alt="congrats"
              width={50}
              height={50}
            />
          </div>
          <h4 className="text-center text-primary text-[20px] font-[700]">
            Congratulations
          </h4>
        </div>
        <div className="md:w-[280px]  body-font font-poppins">
          <div className="flex justify-center mt-2">
            <h4 className="text-center text-[16px] text-[#141313] ">
              Your Registration requirements has been received. You will be
              notified on the progress soon.{" "}
            </h4>
          </div>
          <div className="flex space-x-2 justify-center  pt-7">
            <button
              onClick={onSubmit2}
              // disabled={!selectedOption} // Disable button if no option is selected
              className={`py-4 w-full px-6 bg-[#036E03] text-white rounded-lg  hover:bg-green-700
      }`}
            >
              Proceed to Dashboard
            </button>
            {/* <button
                onClick={(e: any) => handleSubmit3(e)}
                className="text-white  bg-[#00B07B] flex justify-center items-center py-3 rounded-[10px] w-full"
              >
                {loader3 ? <LoadingSpinner /> : "Pay $250"}
              </button> */}
          </div>
          {/* <div className="flex items-start mt-3 mb-2">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-5 h-5 accent-green-600 bg-[#D9D9D9] border-green-600 rounded"
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-[15px]  text-gray-900 "
              >
                <span className="text-red-700">NOTE</span> This payment is
                non-refundable regardless of whether you pass or fail the credit
                eligibility test.
              </label>
            </div> */}
        </div>
      </Modal>
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
    </div>
  );
};

export default RegisterIndividual;
