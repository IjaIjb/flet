"use client"; // Add this for client components in the Next.js app directory
import BreadcrumbsDisplay from "@/app/dashboard/BreadscrumbsDisplay";
import DashboardLayout from "@/components/Layout";
import { useLazyVehicleControllerGetVehicleReportByIdQuery } from "@/store/api";
import React, { useEffect, useState } from "react";

function Details() {
  const [reportId, setReportId] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false); // Manage loading state manually

  useEffect(() => {
    // Retrieve the vehicle ID from sessionStorage
    const storedId = localStorage.getItem("vehicleReportId");
    if (storedId) {
      setReportId(storedId);
    }
  }, []);

  const [getReportById, { data: reportById }] =
    useLazyVehicleControllerGetVehicleReportByIdQuery<any>();

  useEffect(() => {
    if (reportId) {
      setIsLoading(true); // Set loading state
      getReportById(reportId)
        .unwrap() // Handle response or errors
        .finally(() => setIsLoading(false)); // Reset loading state
    }
  }, [reportId, getReportById]);

  if (isLoading) {
    return <div>Loading...</div>; // Render a loading state
  }

  // console.log(reportById);

  return (
    <div>
      <DashboardLayout>
        <div className="bg-white overflow-hidden rounded-[8px] px-3 md:px-8 py-7 md:py-9">
          <div className="w-full">
            <BreadcrumbsDisplay />
          </div>

          <div className="flex flex-col gap-4 mb-6 mt-9">
            <div className="grid md:grid-cols-12">
              <h5 className="text-[18px] font-[400] col-span-2 text-primary ">
                Title
              </h5>
              <h5 className="text-[18px] font-[400] col-span-10 text-blackText ">
                Engine
              </h5>
            </div>

            <div className="grid md:grid-cols-12">
              <h5 className="text-[18px] font-[400] col-span-2 text-primary ">
                Description
              </h5>
              <h5 className="text-[18px] font-[400] col-span-10 text-blackText ">
                {reportById?.data?.description}
              </h5>
            </div>

            <div className="grid md:grid-cols-12">
              <h5 className="text-[18px]  font-[400] col-span-2 text-primary ">
                Cost
              </h5>
              <h5 className="text-[18px]  font-[400] col-span-10 text-blackText ">
                {reportById?.data?.cost}
              </h5>
            </div>

            <div className="grid md:grid-cols-12">
              <h5 className="text-[18px]  font-[400] col-span-2 text-primary ">
                Date
              </h5>
              <h5 className="text-[18px]  font-[400] col-span-10 text-blackText ">
                {reportById?.data?.maintenanceDate}
              </h5>
            </div>
          </div>

          <hr className="my-4" />

          <div className="flex flex-col gap-6">
            <h5 className="text-[15px] text-primary">Comments</h5>

            <div className="flex flex-col gap-5">
              <h5 className="text-[18px]  font-[400] text-blackText">
                One of the Engine valves had to be repair, One of the engine
                valves had to be One of the engine valves had to beOne of the
                Engine valves had to be repair, One of the engine valves had to
                be One of the engine valves had to be
              </h5>
              <div className="flex items-center justify-between md:justify-start  md:gap-10">
                <div className="flex items-center gap-1 md:gap-3">
                  <h5 className="text-[12px] md:text-[18px]  font-[400] text-[#9B9898]">
                    comment by:
                  </h5>
                  <h5 className="text-[12px] md:text-[18px]  font-[400] text-primary">
                    Mr Freeman
                  </h5>
                </div>

                <div className="flex items-center gap-1 md:gap-3">
                  <h5 className="text-[12px] md:text-[18px]  font-[400] text-[#9B9898]">
                    Date:
                  </h5>
                  <h5 className="text-[12px] md:text-[18px]  font-[400] text-blackText">
                    23/05/2024
                  </h5>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <h5 className="text-[18px]  font-[400] text-blackText">
                One of the Engine valves had to be repair, One of the engine
                valves had to be One of the engine valves had to beOne of the
                Engine valves had to be repair, One of the engine valves had to
                be One of the engine valves had to be
              </h5>
              <div className="flex items-center justify-between md:justify-start  md:gap-10">
                <div className="flex items-center gap-1 md:gap-3">
                  <h5 className="text-[12px] md:text-[18px]  font-[400] text-[#9B9898]">
                    comment by:
                  </h5>
                  <h5 className="text-[12px] md:text-[18px]  font-[400] text-primary">
                    Mr Freeman
                  </h5>
                </div>

                <div className="flex items-center gap-1 md:gap-3">
                  <h5 className="text-[12px] md:text-[18px]  font-[400] text-[#9B9898]">
                    Date:
                  </h5>
                  <h5 className="text-[12px] md:text-[18px]  font-[400] text-blackText">
                    23/05/2024
                  </h5>
                </div>
              </div>
            </div>

            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Write your coment here...."
              className="mt-1 block p-2 w-full rounded-md border shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            ></textarea>

            <button
              // onClick={onSubmit}
              // disabled={!selectedOption} // Disable button if no option is selected
              className={`py-4 w-fit px-7 bg-[#036E03] text-white rounded-lg  hover:bg-green-700
      }`}
            >
              Post Comment
            </button>
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
}

export default Details;
