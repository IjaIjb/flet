"use client";
import DashboardLayout from "@/components/Layout";
import React, { useEffect, useState } from "react";
import BreadcrumbsDisplay from "../BreadscrumbsDisplay";
import ActiveFleet from "./ActiveFleet";
import InActiveFleet from "./InActiveFleet";
import * as Yup from "yup";
import Image from "next/image";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { FaAngleDown, FaAngleUp, FaArrowLeft } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import {
  useLazyVehicleControllerGetAllVehicleTypesQuery,
  useVehicleControllerCreateVehicleMutation,
  useVehicleDocumentControllerCreateMutation,
} from "@/store/api";
import nigeriaData from "../../../components/assets/states.json"; // Adjust path to your JSON file
import LoadingSpinner from "@/components/UI/LoadingSpinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinnerPage from "@/components/UI/LoadingSpinnerPage";

interface LoginValues {
  engineNumber: string;
  engineType: string;
  color: string;
  // otherDetail?: string;
  // uniqueID?: string;
  plateNumber: string;
  approvalStatus: "ACCEPTED" | "PROCESSING" | "SUSPENDED" | "REJECTED";
  status: "ACTIVE" | "INACTIVE" | "PROCESSING" | "CANCELLED"; // Literal type
  totalRevenue: number;
  enrollmentCity?: string;
  registrationDate: string;
  vehicleTypeId: string;
  // driverId?: string;
  // providerAgencyId?: string;
  // fleetPartnersId?: string;
}
export type CreateVehicleDocumentDto = {
  documentType: string;
  description?: string;
  file: string;
  vehicleId: string;
  expireAt?: string;
};
// Define the types for the component props
interface BusSideUploadProps {
  image: string | undefined;
  setImage: (image: string | undefined) => void;
  vehicleId: string; // Pass vehicle ID
}

// Define the types for the component props
interface BusFrontUploadProps {
  image: string | undefined; // image can be a string (URL) or undefined
  setImage: (image: string | undefined) => void; // setImage is a function that updates the image state
  vehicleId: string; // Pass vehicle ID
}

interface BusTwoSideUploadProps {
  image: string | undefined;
  setImage: (image: string | undefined) => void;
  vehicleId: string; // Pass vehicle ID
}

interface BusRearUploadProps {
  image: string | undefined; // image can be a string (URL) or undefined
  setImage: (image: string | undefined) => void; // setImage is a function that updates the image state
  vehicleId: string; // Pass vehicle ID
}

// interface DocumentUploadProps {
//   image: string | undefined; // image can be a string (URL) or undefined
//   setImage: (image: string | undefined) => void; // setImage is a function that updates the image state
// }

const Page = () => {
  const [open, setOpen] = useState(false);
  const [openLoader, setOpenLoader] = useState(false);
  const [showScreen, setShowScreen] = useState(1);
  const [showBusArchitecture, setBusAchitecture] = useState(false);
  const [passVehicleID, setPassVehicleID] = useState("");

  const [sideBusImage, setSideBusImage] = useState<string | undefined>(undefined);

  const [sideTwoBusImage, setSideTwoBusImage] = useState<string | undefined>(undefined);
  const [frontBusImage, setFrontBusImage] = useState<string | undefined>(undefined);
  const [rearBusImage, setRearBusImage] = useState<string | undefined>(undefined);

 

  const [getVehicleTypes, { data: vehicleTypes, isLoading: isVehicleTypesLoading }] =
  useLazyVehicleControllerGetAllVehicleTypesQuery();

const [createVehicle, { isLoading: isVehicleCreating }] =
  useVehicleControllerCreateVehicleMutation();

// Fetch vehicle types on component mount
useEffect(() => {
  getVehicleTypes(); // Trigger the API call
}, [getVehicleTypes]);

const onOpenModal = () => {
  setOpen(true);
};
const onCloseModal = () => setOpen(false);

const handleFleet = () => {
  onOpenModal(); // Open the modal
};

const onOpenModalLoader = () => {
  setOpenLoader(true);
};
const onCloseModalLoader = () => setOpenLoader(false);

    useEffect(() => {
      if (isVehicleTypesLoading) {
        onOpenModalLoader();
      } else {
        onCloseModalLoader();
      }
    }, [isVehicleTypesLoading]);

  const BusSideUpload: React.FC<BusSideUploadProps> = ({
    image,
    setImage,
    vehicleId,
  }) => {
    const [createVehicleDocument] =
      useVehicleDocumentControllerCreateMutation();

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        const fileType = file.type.split("/")[0]; // Get the type (image, video, etc.)
        const fileURL = URL.createObjectURL(file); // Preview URL
        setImage(fileURL);

        const isConfirmed = window.confirm(
          `The uploaded file is of type "${fileType}". Do you want to save this document?`
        );

        if (isConfirmed) {
          try {
            const payload: CreateVehicleDocumentDto = {
              documentType: fileType,
              file: fileURL, // Replace with actual file upload logic if necessary
              vehicleId,
              description: "side",
            };

            const response = await createVehicleDocument(payload).unwrap();
            alert("Document saved successfully!");
            console.log("Document Response:", response);
          } catch (error: any) {
            console.error("Error uploading document:", error);
            alert("Failed to save document. Please try again.");
          }
        }
      }
    };
    return (
      <div className="flex justify-center w-full mt-2 text-center">
        <label className="flex w-full bg-white dotted-border flex-col items-center justify-center rounded-[5px] cursor-pointer relative">
          <div className="flex flex-col items-center justify-center h-[150px]">
            {image ? (
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
                  Upload Side Bus Image
                </h4>
              </div>
            )}
          </div>
          <input
            id="dropzone22"
            type="file"
            accept="image/x-png,image/gif,image/jpeg,application/pdf,video/*"
            className="hidden mb-2 text-sm text-[#6C757D] font-medium"
            onChange={handleFileUpload}
          />
        </label>
      </div>
    );
  };

  const BusFrontUpload: React.FC<BusFrontUploadProps> = ({
    image,
    setImage,
    vehicleId,
  }) => {
    const [createVehicleDocument] =
      useVehicleDocumentControllerCreateMutation();

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        const fileType = file.type.split("/")[0]; // Get the type (image, video, etc.)
        const fileURL = URL.createObjectURL(file); // Preview URL
        setImage(fileURL);

        const isConfirmed = window.confirm(
          `The uploaded file is of type "${fileType}". Do you want to save this document?`
        );

        if (isConfirmed) {
          try {
            const payload: CreateVehicleDocumentDto = {
              documentType: fileType,
              file: fileURL, // Replace with actual file upload logic if necessary
              vehicleId,
              description: "front",
            };

            const response = await createVehicleDocument(payload).unwrap();
            alert("Document saved successfully!");
            console.log("Document Response:", response);
          } catch (error: any) {
            console.error("Error uploading document:", error);
            alert("Failed to save document. Please try again.");
          }
        }
      }
    };
    return (
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
            onChange={handleFileUpload}
          />
        </label>
      </div>
    );
  };

  const BusTwoSideUpload: React.FC<BusTwoSideUploadProps> = ({
    image,
    setImage,
    vehicleId,
  }) => {
    const [createVehicleDocument] =
      useVehicleDocumentControllerCreateMutation();

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        const fileType = file.type.split("/")[0]; // Get the type (image, video, etc.)
        const fileURL = URL.createObjectURL(file); // Preview URL
        setImage(fileURL);

        const isConfirmed = window.confirm(
          `The uploaded file is of type "${fileType}". Do you want to save this document?`
        );

        if (isConfirmed) {
          try {
            const payload: CreateVehicleDocumentDto = {
              documentType: fileType,
              file: fileURL, // Replace with actual file upload logic if necessary
              vehicleId,
              description: "sideTwo",
            };

            const response = await createVehicleDocument(payload).unwrap();
            alert("Document saved successfully!");
            console.log("Document Response:", response);
          } catch (error: any) {
            console.error("Error uploading document:", error);
            alert("Failed to save document. Please try again.");
          }
        }
      }
    };
    return (
      <div className="flex justify-center w-full mt-2 text-center">
        <label className="flex w-full bg-white dotted-border flex-col items-center justify-center rounded-[5px] cursor-pointer relative">
          <div className="flex flex-col items-center justify-center h-[150px]">
            {image ? (
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
                  Upload Side Bus Image
                </h4>
              </div>
            )}
          </div>
          <input
            id="dropzone22"
            type="file"
            accept="image/x-png,image/gif,image/jpeg,application/pdf,video/*"
            className="hidden mb-2 text-sm text-[#6C757D] font-medium"
            onChange={handleFileUpload}
          />
        </label>
      </div>
    );
  };

  const BusRearUpload: React.FC<BusRearUploadProps> = ({
    image,
    setImage,
    vehicleId,
  }) => {
    const [createVehicleDocument] =
      useVehicleDocumentControllerCreateMutation();

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        const fileType = file.type.split("/")[0]; // Get the type (image, video, etc.)
        const fileURL = URL.createObjectURL(file); // Preview URL
        setImage(fileURL);

        const isConfirmed = window.confirm(
          `The uploaded file is of type "${fileType}". Do you want to save this document?`
        );

        if (isConfirmed) {
          try {
            const payload: CreateVehicleDocumentDto = {
              documentType: fileType,
              file: fileURL, // Replace with actual file upload logic if necessary
              vehicleId,
              description: "rear",
            };

            const response = await createVehicleDocument(payload).unwrap();
            alert("Document saved successfully!");
            console.log("Document Response:", response);
          } catch (error: any) {
            console.error("Error uploading document:", error);
            alert("Failed to save document. Please try again.");
          }
        }
      }
    };
    return (
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
            onChange={handleFileUpload}
          />
        </label>
      </div>
    );
  };

  // const DocumentUpload: React.FC<DocumentUploadProps> = ({ image, setImage }) => (
  //   <div className="flex justify-center w-full mt-2 text-center h-4">
  //     <label className="flex w-full bg-white dotted-border flex-col  items-center justify-center rounded-[5px] cursor-pointer relative">
  //       <div className="flex flex-col items-center  justify-center ">
  //         {image ? (
  //           // <img
  //           //   src={image}
  //           //   alt="Preview"
  //           //   className="mt-2 block w-full border-[0.5px]  pl-3 rounded-[10px] focus:outline-none border-[#D9D9D9] "
  //           //   // style={{ minHeight: "50px", maxHeight: "50px", }}
  //           // />
  //           <Image
  //      className="mt-2 block w-full border-[0.5px]  pl-3 rounded-[10px] focus:outline-none border-[#D9D9D9] "
  //           src={image}
  //           alt="image"
  //           width={50}
  //           height={50}
  //           priority
  //         />
  //         ) : (
  //           <div className="flex items-center gap-2">
  //             <FiUpload />
  //             <h4 className="text-sm text-[#9F9F9F]">Upload Side bus Image</h4>
  //           </div>
  //         )}
  //       </div>
  //       <input
  //         id="dropzone4"
  //         type="file"
  //         accept="image/x-png,image/gif,image/jpeg"
  //         className="hidden mb-2 text-sm  text-[#6C757D] font-medium"
  //         onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
  //           const file = e.target.files?.[0]; // Optional chaining in case files is undefined
  //           if (file) {
  //             const reader = new FileReader();
  //             reader.onloadend = () => {
  //               setImage(reader.result as string); // Cast reader.result as string
  //             };
  //             reader.readAsDataURL(file);
  //           }
  //         }}
  //       />
  //     </label>
  //   </div>
  // );

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
  const initialData: LoginValues = {
    engineNumber: "",
    engineType: "",
    vehicleTypeId: "",
    plateNumber: "",
    enrollmentCity: "",
    approvalStatus: "PROCESSING",
    color: "unknown",
    status: "ACTIVE",
    totalRevenue: 0.0,
    registrationDate: "",
    // documents: [{ name: "", expiryDate: "", image: undefined }], // Default document
  };

  const validation = Yup.object({
    engineNumber: Yup.string().required("Engine number is required"),
    engineType: Yup.string().required("Engine type is required"),
    vehicleTypeId: Yup.string().required("Vehicle type is required"),
    plateNumber: Yup.string().required("Plate number is required"),
    enrollmentCity: Yup.string().required("Enrollment city is required"),
    documents: Yup.array().of(
      Yup.object().shape({
        name: Yup.string().required("Document name is required"),
        expiryDate: Yup.date().required("Expiry date is required"),
        image: Yup.mixed().required("Document upload is required"),
      })
    ),
  });

  const onSubmit = async (values: LoginValues) => {
    const totalRevenueFormatted = parseFloat(values.totalRevenue.toFixed(2));

    const payload = {
      engineNumber: values.engineNumber,
      engineType: values.engineType,
      color: values.color || "Unknown",
      plateNumber: values.plateNumber,
      status: values.status || "ACTIVE",
      totalRevenue: totalRevenueFormatted, // Ensure it's a decimal (e.g., 0.00)
      // totalRevenue: parseFloat(values.totalRevenue.toFixed(2)), // Ensure it's a valid decimal number
      enrollmentCity: values.enrollmentCity || undefined, // Optional field
      registrationDate: new Date().toISOString(), // Convert to ISO string format
      vehicleTypeId: values.vehicleTypeId,
      approvalStatus: values.approvalStatus || "PROCESSING",
    };

    console.log("Payload sent to API:", payload);
    try {
      // Map form values to CreateVehicleDto structure

      // Call API to create vehicle
      const response: any = await createVehicle(payload).unwrap();
      setPassVehicleID(response?.data?.id);
      console.log(response);

      // Handle success
      setShowScreen(2);
      console.log("Vehicle created successfully");
      toast.success(response?.message || "Vehicle created successfully");
    } catch (error: any) {
      console.error("Error creating vehicle:", error);

      // Handle errors
      const errorMessage =
        error?.data?.message || "An error occurred while creating the vehicle";
      toast.error(errorMessage);
    }
  };

  console.log(passVehicleID);
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
        <h5 className="text-blackText text-[20px] py-4 ">
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
              }  text-center   px-6 py-2 inline-block text-[16px] lg:text-[20px] font-semibold  hover:text-[#036E03]/[80%] cursor-pointer`}
              onClick={() => handleActiveState()}
            >
              Active
            </li>

            <li
              className={`${
                statusValues.inActiveElement
                  ? "border-primary border-b-[3px] text-[16px] lg:text-[20px] text-primary "
                  : "border-b-[0] text-blackText"
              } text-center py-2 px-8 inline-block text-[16px] lg:text-[20px] font-semibold hover:text-[#036E03]/[80%] cursor-pointer`}
              onClick={() => handleInActiveState()}
            >
              Inactive
            </li>
          </ol>
      {isVehicleTypesLoading ? null : (

          <div className="pt-3">{showProfileConnector()}</div>
      )}
          {/* <h4 className="text-[#000] text-[35px] font-[600] pb-[60px]">Login</h4>
      <h5 className="text-[#958F8F] text-[26px] font-[600]">
        Login into your account
      </h5>
      <h5 className="text-[#958F8F] text-[15px] font-[500]">
        Thank you for getting back to KwickMall,
      </h5> */}
        </div>
        <Modal
        classNames={{
          modal: "rounded-[10px] overflow-visible relative",
        }}
        open={openLoader}
        onClose={onCloseModalLoader}
        showCloseIcon={false} // Hides the close button
        center
      >
        <div className="px-2 md:px-5 w-[100px] h-[100px] flex justify-center items-center text-center">
          <LoadingSpinnerPage />
        </div>
      </Modal>
        <Modal
          classNames={{
            modal: "rounded-[10px] overflow-visible relative",
          }}
          open={open}
          onClose={onCloseModal}
          center
        >
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
                {({ setFieldValue }) => (
                  <Form className="w-full  mt-10 lg:mt-10 mb-6 flex flex-col justify-between">
                    <div className={showScreen === 1 ? "block " : "hidden"}>
                      <div className="mb-7">
                        <div className="md:flex gap-4">
                          <div className=" mb-3 w-full relative">
                            <label
                              className=" text-[#2B2C2B] text-[16px] font-[500] "
                              htmlFor="engineNumber"
                            >
                              Engine Number
                            </label>
                            <Field
                              className="mt-2 block w-full h-12 border-[0.5px]  pl-3 rounded-[10px] focus:outline-none border-[#D9D9D9] "
                              name="engineNumber"
                              type="text"
                              id="engineNumber"
                              onChange={(e: any) =>
                                setFieldValue("engineNumber", e.target.value)
                              }
                              placeholder=""
                            />
                            <p className="text-red-700 text-xs mt-1 ">
                              <ErrorMessage name="engineNumber" />
                            </p>
                          </div>
                          <div className=" mb-3 w-full relative">
                            <label
                              className=" text-[#2B2C2B] text-[16px] font-[500] "
                              htmlFor="engineType"
                            >
                              Engine Type
                            </label>
                            <Field
                              className="mt-2 block w-full h-12 border-[0.5px]  pl-3 rounded-[10px] focus:outline-none border-[#D9D9D9] "
                              name="engineType"
                              type="text"
                              id="engineType"
                              placeholder=""
                            />
                            <p className="text-red-700 text-xs mt-1 ">
                              <ErrorMessage name="engineType" />
                            </p>
                          </div>
                        </div>

                        <div className="md:flex gap-4">
                          <div className=" mb-3 w-full relative">
                            <label
                              className=" text-[#2B2C2B] text-[16px] font-[500] "
                              htmlFor="vehicleTypeId"
                            >
                              Vehicle Type
                            </label>
                            <Field
                              className="mt-2 block w-full h-12 border-[1px] border-[#E4E1E1] px-3 rounded-[10px] focus:outline-primary"
                              name="vehicleTypeId"
                              as="select"
                              // onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                              //   setFieldValue("vehicleTypeId", event.target.value);
                              // }}
                            >
                              <option label="Select"></option>
                              {Array.isArray(vehicleTypes?.data) &&
                                vehicleTypes.data.map((type: any) => (
                                  <option key={type.id} value={type.id}>
                                    {type.category}
                                  </option>
                                ))}
                            </Field>

                            <p className="text-red-700 text-xs mt-1 ">
                              <ErrorMessage name="vehicleTypeId" />
                            </p>
                          </div>
                          <div className=" mb-3 w-full relative">
                            <label
                              className=" text-[#2B2C2B] text-[16px] font-[500] "
                              htmlFor="plateNumber"
                            >
                              Number Plate
                            </label>
                            <Field
                              className="mt-2 block w-full h-12 border-[0.5px]  pl-3 rounded-[10px] focus:outline-none border-[#D9D9D9] "
                              name="plateNumber"
                              type="text"
                              id="plateNumber"
                              placeholder=""
                            />
                            <p className="text-red-700 text-xs mt-1 ">
                              <ErrorMessage name="plateNumber" />
                            </p>
                          </div>
                        </div>

                        <div className="md:flex gap-4">
                          {/* <div className=" mb-3 w-full relative">
                            <label
                              className=" text-[#2B2C2B] text-[16px] font-[500] "
                              htmlFor="registrationDate"
                            >
                              Registration Date
                            </label>
                            <Field
                              className="mt-2 block w-full h-12 border-[0.5px]  pl-3 rounded-[10px] focus:outline-none border-[#D9D9D9] "
                              name="registrationDate"
                              type="date"
                              id="registrationDate"
                              placeholder=""
                            />
                            <p className="text-red-700 text-xs mt-1 ">
                              <ErrorMessage name="registrationDate" />
                            </p>
                          </div> */}

                          <div className=" mb-3 w-full relative">
                            <label
                              className=" text-[#2B2C2B] text-[16px] font-[500] "
                              htmlFor="enrollmentCity"
                            >
                              Enrollment City
                            </label>
                            <Field
                              className="mt-2 block w-full h-12 border-[1px] border-[#E4E1E1]  px-3 rounded-[10px] focus:outline-primary "
                              name="enrollmentCity"
                              as="select"
                              // type="tel"
                              onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                              ) => {
                                setFieldValue(
                                  "enrollmentCity",
                                  event.target.value
                                );
                              }}
                              placeholder=""
                            >
                              <option label="Select"></option>
                              {nigeriaData.states.map((state) => (
                                <option
                                  key={state.state_code}
                                  value={state.name}
                                >
                                  {state.name}
                                </option>
                              ))}
                            </Field>
                            <p className="text-red-700 text-xs mt-1 ">
                              <ErrorMessage name="enrollmentCity" />
                            </p>
                          </div>
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
                            vehicleId={passVehicleID}
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
                            vehicleId={passVehicleID}
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
                          <BusTwoSideUpload
                            image={sideTwoBusImage}
                            setImage={setSideTwoBusImage}
                            vehicleId={passVehicleID}
                          />
                        </div>

                        <div className="w-full">
                          <label
                            className=" text-[#2B2C2B] text-[13px] md:text-[16px] font-[500] "
                            htmlFor="first_name"
                          >
                            Upload Rear bus image
                          </label>
                          <BusRearUpload
                            image={rearBusImage}
                            setImage={setRearBusImage}
                            vehicleId={passVehicleID}
                          />
                        </div>
                      </div>

                      {/* <div>
                        {values.documents.map((doc, index) => (
                          <div key={index}>
                            <hr />
                            <div className="my-3">
                              <div className="grid grid-cols-2 w-full gap-4 mb-5">
                         
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
                      </div> */}
                    </div>

                    {showScreen === 2 ? (
                      <button
                        // onClick={onSubmit}
                        // disabled={!selectedOption} // Disable button if no option is selected
                        className={`py-4 w-full px-6 bg-[#036E03] text-white rounded-lg  hover:bg-green-700
      }`}
                      >
                        Proceed
                      </button>
                    ) : (
                      <button
                        // onClick={onSubmit}
                        type="submit"
                        disabled={isVehicleCreating}
                        // disabled={!selectedOption} // Disable button if no option is selected
                        className={`disabled:bg-gray-500 py-4 w-full px-6 bg-[#036E03] text-white rounded-lg  hover:bg-green-700
        }`}
                      >
                        {isVehicleCreating ? <LoadingSpinner /> : "Proceed"}
                      </button>
                    )}
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </Modal>
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
    </DashboardLayout>
  );
};

export default Page;
