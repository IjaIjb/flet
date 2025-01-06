"use client"; // Add this for client components in the Next.js app directory

import DashboardLayout from "@/components/Layout";
import React, { useEffect, useState } from "react";
import BreadcrumbsDisplay from "../../BreadscrumbsDisplay";
import Image from "next/image";
import { FiUpload } from "react-icons/fi";
import {
  useLazyVehicleDocumentControllerSearchQuery,
  useVehicleDocumentControllerCreateMutation,
  useVehicleDocumentControllerUpdateMutation,
} from "@/store/api";
import LoadingSpinnerPage from "@/components/UI/LoadingSpinnerPage";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";


export type CreateVehicleDocumentDto = {
  documentType: string;
  description?: string;
  file: string;
  vehicleId: string;
  expireAt?: string;
};

// Define the types for the component props
interface BusSideUploadProps {
  image: string | null;
  setImage: (image: string | null) => void;
  vehicleId: string; // Pass vehicle ID
  description: string;
}

// Define the types for the component props
interface BusFrontUploadProps {
  image: string | null; // image can be a string (URL) or null
  setImage: (image: string | null) => void; // setImage is a function that updates the image state
  vehicleId: string; // Pass vehicle ID
  description: string;
}

interface BusTwoSideUploadProps {
  image: string | null;
  setImage: (image: string | null) => void;
  vehicleId: string; // Pass vehicle ID
  description: string;
}

interface BusRearUploadProps {
  image: string | null; // image can be a string (URL) or null
  setImage: (image: string | null) => void; // setImage is a function that updates the image state
  vehicleId: string; // Pass vehicle ID
  description: string;
}

const Page = () => {
   const [open, setOpen] = useState(false);
  const [sideBusImage, setSideBusImage] = useState<string | null>(null);
  const [sideTwoBusImage, setSideTwoBusImage] = useState<string | null>(null);
  const [frontBusImage, setFrontBusImage] = useState<string | null>(null);
  const [rearBusImage, setRearBusImage] = useState<string | null>(null);
  const [reportId, setReportId] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false); // Manage loading state manually

  useEffect(() => {
    // Retrieve the vehicle ID from sessionStorage
    const storedId = localStorage.getItem("vehicleId");
    if (storedId) {
      setReportId(storedId);
    }
  }, []);

  const [getReportById, { data: reportById }] =
    useLazyVehicleDocumentControllerSearchQuery<any>();

  useEffect(() => {
    if (reportId) {
      setIsLoading(true); // Set loading state
      getReportById({ vehicleId: reportId })
        .unwrap() // Handle response or errors
        .finally(() => setIsLoading(false)); // Reset loading state
    }
  }, [reportId, getReportById]);
console.log(reportId)
  const onOpenModal = () => {
    // e.preventDefault();
    setOpen(true);
  };
  const onCloseModal = () => setOpen(false);

  useEffect(() => {
    if (isLoading) {
      onOpenModal();
    } else {
      onCloseModal();
    }
  }, [isLoading]);

  console.log(reportById);

  const BusSideUpload: React.FC<BusSideUploadProps> = ({
    image,
    setImage,
    vehicleId,
    description,
  }) => {
    const [createVehicleDocument] = useVehicleDocumentControllerCreateMutation();
    const [updateVehicleDocument] = useVehicleDocumentControllerUpdateMutation();
  
    const sideImages = reportById?.data?.filter(
      (doc: any) => doc.description === description
    );
  
    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        const fileType = file.type.split("/")[0]; // Get the type (image, video, etc.)
        const fileURL = URL.createObjectURL(file); // Preview URL
        setImage(fileURL);
  
        const isConfirmed = window.confirm(
          `The uploaded file is of type "${fileType}". Do you want to ${
            sideImages?.length > 0 ? "replace" : "save"
          } this document?`
        );
  
        if (isConfirmed) {
          try {
            if (sideImages?.length > 0) {
              // Update the existing document
              const existingDoc = sideImages[0]; // Assume one image for "side"
              const updatePayload = {
                ...existingDoc,
                file: fileURL, // Replace with the new file
              };
  
              const response = await updateVehicleDocument(updatePayload).unwrap();
              alert("Document updated and replaced successfully!");
              console.log("Updated Document Response:", response);
            } else {
              // Create a new document
              const createPayload: CreateVehicleDocumentDto = {
                documentType: fileType,
                file: fileURL, // Replace with actual file upload logic if necessary
                vehicleId,
                description: "side",
              };
  
              const response = await createVehicleDocument(createPayload).unwrap();
              alert("Document saved successfully!");
              console.log("New Document Response:", response);
            }
          } catch (error: any) {
            console.error(
              `Error ${sideImages?.length > 0 ? "updating" : "creating"} document:`,
              error
            );
            alert("Failed to save document. Please try again.");
          }
        }
      }
    };
  
    return (
      <div className="flex justify-center w-full mt-2 text-center">
        {sideImages?.length > 0 ? (
          <div
            key={sideImages[0].id}
            className="w-[200px] h-[200px] cursor-pointer"
            onClick={() => document.getElementById("file-input")?.click()}
          >
            <label className="flex w-full bg-white dotted-border flex-col items-center justify-center rounded-[5px] relative">
              <Image
                src={sideImages[0].file} // Display the existing image
                alt={`${description} Bus Image`}
                width={200}
                height={200}
                className="rounded-lg"
                priority
              />
              <input
                id="file-input"
                type="file"
                accept="image/x-png,image/gif,image/jpeg,application/pdf,video/*"
                className="hidden"
                onChange={handleFileUpload}
              />
            </label>
          </div>
        ) : (
          <label className="flex w-full bg-white dotted-border flex-col items-center justify-center rounded-[5px] cursor-pointer relative">
            <div className="flex flex-col items-center justify-center h-[150px]">
              {image ? (
                <Image
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
              id="file-input"
              type="file"
              accept="image/x-png,image/gif,image/jpeg,application/pdf,video/*"
              className="hidden"
              onChange={handleFileUpload}
            />
          </label>
        )}
      </div>
    );
  };
  
  

  const BusFrontUpload: React.FC<BusFrontUploadProps> = ({
    image,
    setImage,
    vehicleId,
    description
  }) => {
    const [createVehicleDocument] =
      useVehicleDocumentControllerCreateMutation();
    const sideImages = reportById?.data?.filter(
      (doc: any) => doc.description === description
    );
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
        {sideImages?.length > 0 ? (
          sideImages.map((doc: any) => (
            <div key={doc.id} className="w-[200px] h-[200px]">
              <Image
                src={doc.file} // Display the existing image
                alt={`${description} Bus Image`}
                width={200}
                height={200}
                className="rounded-lg"
                priority
              />
            </div>
          ))
        ) : (
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
        )}
      </div>
    );
  };

  const BusTwoSideUpload: React.FC<BusTwoSideUploadProps> = ({
    image,
    setImage,
    vehicleId,
    description
  }) => {
    const [createVehicleDocument] =
      useVehicleDocumentControllerCreateMutation();
    const sideImages = reportById?.data?.filter(
      (doc: any) => doc.description === description
    );
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
        {sideImages?.length > 0 ? (
          sideImages.map((doc: any) => (
            <div key={doc.id} className="w-[200px] h-[200px]">
              <Image
                src={doc.file} // Display the existing image
                alt={`${description} Bus Image`}
                width={200}
                height={200}
                className="rounded-lg"
                priority
              />
            </div>
          ))
        ) : (
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
        )}
      </div>
    );
  };

  const BusRearUpload: React.FC<BusRearUploadProps> = ({
    image,
    setImage,
    vehicleId,
    description
  }) => {
    const [createVehicleDocument] =
      useVehicleDocumentControllerCreateMutation();
    const sideImages = reportById?.data?.filter(
      (doc: any) => doc.description === description
    );
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
        {sideImages?.length > 0 ? (
          sideImages.map((doc: any) => (
            <div key={doc.id} className="w-[200px] h-[200px]">
              <Image
                src={doc.file} // Display the existing image
                alt={`${description} Bus Image`}
                width={200}
                height={200}
                className="rounded-lg"
                priority
              />
            </div>
          ))
        ) : (
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
        )}
      </div>
    );
  };
  return (
    <div>
      <DashboardLayout>
        {isLoading ? null : (
  <div className="bg-white overflow-hidden h-screen rounded-[8px] px-3 md:px-8 py-7 md:py-9">
  <div className="flex w-full justify-between gap-5 items-center">
    <div className="w-full">
      <BreadcrumbsDisplay />
    </div>
  </div>

  <div className="mb-7 grid grid-cols-12 gap-5 ">
    <div className="w-full col-span-7">
      <label
        className=" text-[#2B2C2B] text-[18px] md:text-[20px] font-[500] "
        htmlFor="first_name"
      >
        Side Bus Image
      </label>
      <BusSideUpload
        image={sideBusImage}
        setImage={setSideBusImage}
        vehicleId={reportId}
        description="side"
      />
    </div>

    <div className="w-full col-span-5">
      <label
        className=" text-[#2B2C2B] text-[18px] md:text-[20px] font-[500] "
        htmlFor="first_name"
      >
        Front Bus Image
      </label>
      <BusFrontUpload
        image={frontBusImage}
        setImage={setFrontBusImage}
        vehicleId={reportId}
        description="front"
      />
    </div>
  </div>

  <div className="mb-7 grid grid-cols-12 gap-5 ">
    <div className="w-full col-span-7">
      <label
        className=" text-[#2B2C2B] text-[13px] md:text-[16px] font-[500] "
        htmlFor="first_name"
      >
        Side Bus Image
      </label>
      <BusTwoSideUpload
        image={sideTwoBusImage}
        setImage={setSideTwoBusImage}
        vehicleId={reportId}
        description="sideTwo"
      />
    </div>

    <div className="w-full col-span-5">
      <label
        className=" text-[#2B2C2B] text-[13px] md:text-[16px] font-[500] "
        htmlFor="first_name"
      >
        Rear Bus Image
      </label>
      <BusRearUpload
        image={rearBusImage}
        setImage={setRearBusImage}
        vehicleId={reportId}
        description="rear"
      />
    </div>
  </div>
</div>
        )}
            <Modal
        classNames={{
          modal: "rounded-[10px] overflow-visible relative",
        }}
        open={open}
        onClose={onCloseModal}
        showCloseIcon={false} // Hides the close button
        center
      >
        <div className="px-2 md:px-5 w-[100px] h-[100px] flex justify-center items-center text-center">
          <LoadingSpinnerPage />
        </div>
      </Modal>
      </DashboardLayout>
    </div>
  );
};

export default Page;
