"use client";
import DashboardLayout from "@/components/Layout";
import React, { useState } from "react";
import BreadcrumbsDisplay from "../BreadscrumbsDisplay";
import ActiveFleet from "./ActiveFleet";
import InActiveFleet from "./InActiveFleet";
import * as Yup from "yup";
import Image from "next/image";

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { FaAngleDown, FaAngleUp, FaArrowLeft } from "react-icons/fa";
import { FiPlus, FiTrash, FiUpload } from "react-icons/fi";


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
const Page = () => {
  const [open, setOpen] = useState(false);
  const [showScreen, setShowScreen] = useState(1);
  const [showBusArchitecture, setBusAchitecture] = useState(false);

  const [sideBusImage, setSideBusImage] = useState<string | null>(null);
  const [frontBusImage, setFrontBusImage] = useState<string | null>(null);
  const [rearBusImage, setRearBusImage] = useState<string | null>(null);
  
  const onOpenModal = () => {
    // e.preventDefault();
    setOpen(true);
  };
  const onCloseModal = () => setOpen(false);

  const handleFleet = () => {
    onOpenModal(); // Open the modal
  };

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
            // className="mt-2 block w-full border-[0.5px]  pl-3 rounded-[10px] focus:outline-none border-[#D9D9D9] "
                 src={image}
                 alt="image"
                 width={50}
                 height={50}
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
            <Image
       className="mt-2 block w-full border-[0.5px]  pl-3 rounded-[10px] focus:outline-none border-[#D9D9D9] "
            src={image}
            alt="image"
            width={50}
            height={50}
            priority
          />
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

  const toggleBusArchitecture = () => {
    setBusAchitecture(!showBusArchitecture);
  };

  const initialStatusState = {
    activeElement: true,
    inActiveElement: false,
  };

  const [statusValues, setStatusValues] = useState({
    ...initialStatusState,
  });

  const handleActiveState = () => {
    // e.preventDefault();
    setStatusValues({
      activeElement: true,
      inActiveElement: false,
    });
  };

  const handleInActiveState = () => {
    // e.preventDefault();
    setStatusValues({
      activeElement: false,
      inActiveElement: true,
    });
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

  const onSubmit = async () => {
    // e.preventDefault(); // Prevent default browser behavior
    onOpenModal(); // Open the modal
    console.log("Form submitted");
  };

  const showProfileConnector = () => {
    return (
      <>
        {/* show active */}
        {statusValues.activeElement && (
          <>
            <div className="">
              <ActiveFleet />
            </div>
          </>
        )}

        {/* show inactive */}
        {statusValues.inActiveElement && (
          <>
            <div className="">
              <InActiveFleet />
            </div>
          </>
        )}
      </>
    );
  };
  return (
    <DashboardLayout>
      <div className="bg-white overflow-hidden rounded-[8px] px-3 md:px-8 py-7 md:py-9">
        <div className="flex w-full gap-5 justify-between items-center">
          <div className="w-full">
            <BreadcrumbsDisplay />
          </div>

          <div className="relative flex  ">
            <div className="absolute inset-y-0 left-2 flex items-center pl-3 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <path
                  fill="#9da4aa"
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              // onClick={() => paginator("")}
              // onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search Fleets"
              id="simple-search"
              className=" border h-10 border-[#D9D9D94D]/[30%]  text-blackText bg-[#D9D9D94D]/[30%] text-sm rounded-md block  pl-14 p-1  "
              // required
            />
          </div>
        </div>
        <h5 className="text-blackText text-[16px] py-4 ">
          This is where you see all your fleets info
        </h5>

        <button
          onClick={handleFleet}
          className="py-3 px-7 bg-[#036E030F]/[6%] rounded-[10px] text-primary"
        >
          Add Fleet
        </button>
        <div className=" pt-[40px]">
          <ol className="list-none flex items-center md:gap-9 mb-5  border-b-[1px] w-fit border-[#D4CECE] gap-4 ">
            <li
              className={`${
                statusValues.activeElement
                  ? "border-primary border-b-[3px] text-[16px] lg:text-[20px] text-primary"
                  : "border-b-[0] text-blackText"
              }  text-center   px-6 py-2 inline-block text-[16px] lg:text-[20px] font-semibold hover:rounded-[10px] hover:text-[#036E03]/[80%] cursor-pointer`}
              onClick={() => handleActiveState()}
            >
              Active
            </li>

            <li
              className={`${
                statusValues.inActiveElement
                  ? "border-primary border-b-[3px] text-[16px] lg:text-[20px] text-primary "
                  : "border-b-[0] text-blackText"
              } text-center py-2 px-8 inline-block text-[16px] lg:text-[20px] font-semibold hover:rounded-[10px] hover:text-[#036E03]/[80%] cursor-pointer`}
              onClick={() => handleInActiveState()}
            >
              Inactive
            </li>
          </ol>

          <div className="pt-3">{showProfileConnector()}</div>

          {/* <h4 className="text-[#000] text-[35px] font-[600] pb-[60px]">Login</h4>
      <h5 className="text-[#958F8F] text-[26px] font-[600]">
        Login into your account
      </h5>
      <h5 className="text-[#958F8F] text-[15px] font-[500]">
        Thank you for getting back to KwickMall,
      </h5> */}
        </div>
        <Modal open={open} onClose={onCloseModal} center>
          <div className="px-2 md:px-5 pb-4">
            <div className=" flex justify-between pt-2 ">
              {showScreen === 1 ? (
                <div></div>
              ) : (
                <button
                  type="button"
                  onClick={() => setShowScreen(1)}
                  className="flex items-center text-gray-600 mb-4"
                >
                  <FaArrowLeft className="" />
                </button>
              )}

              <h4 className="text-primary text-[18px] md:text-[20px]">
                Add Fleets
              </h4>
              <div></div>
            </div>
            <div className="h-[450px] md:w-[600px] no-scrollbar overflow-y-scroll">
              <Formik
                initialValues={initialData}
                validationSchema={validation}
                onSubmit={onSubmit}
              >
                {({  values, setFieldValue }) => (
                  <Form className="w-full  mt-10 lg:mt-10 mb-6 flex flex-col justify-between">
                    <div className={showScreen === 1 ? "block " : "hidden"}>
                      <div className="mb-7">
                        <div className="md:flex gap-4">
                          <div className=" mb-3 w-full relative">
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
                          <div className=" mb-3 w-full relative">
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
                        </div>

                        <div className="md:flex gap-4">
                          <div className=" mb-3 w-full relative">
                            <label
                              className=" text-[#2B2C2B] text-[16px] font-[500] "
                              htmlFor="last_name"
                            >
                              Vehicle Type
                            </label>
                            <Field
                              className="mt-2 block w-full h-12 border-[1px] border-[#E4E1E1]  px-3 rounded-[10px] focus:outline-primary "
                              name="vehicle_type"
                              as="select"
                              // type="tel"
                              onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
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
                          <div className=" mb-3 w-full relative">
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
                        </div>

                        <div className=" mb-5 w-full relative">
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
                            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                              setFieldValue("vehicle_type", event.target.value);
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
                      className={showScreen === 2 ? "block w-full]" : "hidden"}
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
                            image={rearBusImage}
                            setImage={setRearBusImage}
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

                    {showScreen === 2 ? (
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
                        onClick={() => setShowScreen(2)}
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
        </Modal>
      </div>
    </DashboardLayout>
  );
};

export default Page;
