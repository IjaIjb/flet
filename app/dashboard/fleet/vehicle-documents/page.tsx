"use client"; // Add this for client components in the Next.js app directory

import DashboardLayout from "@/components/Layout";
import React, { useState } from "react";
import BreadcrumbsDisplay from "../../BreadscrumbsDisplay";
import Image from "next/image";
import { FiUpload } from "react-icons/fi";

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

const Page = () => {
  const [sideBusImage, setSideBusImage] = useState<string | null>(null);
  const [frontBusImage, setFrontBusImage] = useState<string | null>(null);

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
              <h4 className="text-[16px] md:text-[20px] text-[#9F9F9F]">
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

  const BusFrontUpload: React.FC<BusFrontUploadProps> = ({
    image,
    setImage,
  }) => (
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
              <h4 className="text-[16px] md:text-[20px] text-[#9F9F9F]">
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

  return (
    <div>
      <DashboardLayout>
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
              <BusSideUpload image={sideBusImage} setImage={setSideBusImage} />
            </div>

            <div className="w-full col-span-5">
              <label
                className=" text-[#2B2C2B] text-[18px] md:text-[20px] font-[500] "
                htmlFor="first_name"
              >
                Rear Bus Image
              </label>
              <BusFrontUpload
                image={frontBusImage}
                setImage={setFrontBusImage}
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
              <BusSideUpload image={sideBusImage} setImage={setSideBusImage} />
            </div>

            <div className="w-full col-span-5">
              <label
                className=" text-[#2B2C2B] text-[13px] md:text-[16px] font-[500] "
                htmlFor="first_name"
              >
                Rear Bus Image
              </label>
              <BusFrontUpload
                image={frontBusImage}
                setImage={setFrontBusImage}
              />
            </div>
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
};

export default Page;
