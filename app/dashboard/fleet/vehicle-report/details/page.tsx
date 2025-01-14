"use client"; // Add this for client components in the Next.js app directory
import BreadcrumbsDisplay from "@/app/dashboard/BreadscrumbsDisplay";
import DashboardLayout from "@/components/Layout";
import LoadingSpinnerPage from "@/components/UI/LoadingSpinnerPage";
import { useLazyVehicleControllerGetVehicleReportByIdQuery } from "@/store/api";
import React, { useEffect, useState } from "react";
import Modal from "react-responsive-modal";

function Details() {
    const [open, setOpen] = useState(false);
  const [reportId, setReportId] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false); // Manage loading state manually

  useEffect(() => {
    // Retrieve the vehicle ID from sessionStorage
    const storedId = localStorage.getItem("vehicleReportId");
    if (storedId) {
      setReportId(storedId);
    }
  }, []);

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

  const rawDate = reportById?.data?.maintenanceDate;
              const formattedDate = rawDate
                ? new Date(rawDate).toLocaleString("en-GB", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                  }).replace(",", "") // Format with date and time (e.g., 2025-01-07 12:34:56)
                : "N/A";

  // console.log(reportById);
  const formatToNaira = (amount: number | undefined | null): string => {
    if (amount == null) return '₦0.00';
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
    }).format(amount);
  };
  
  return (
    <div>
      <DashboardLayout>
      {isLoading ? null : (
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
              {reportById?.data?.title || "N/A"}
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
                {formatToNaira(reportById?.data?.cost)}
              </h5>
            </div>

            <div className="grid md:grid-cols-12">
              <h5 className="text-[18px]  font-[400] col-span-2 text-primary ">
                Date
              </h5>
              <h5 className="text-[18px]  font-[400] col-span-10 text-blackText ">
                {formattedDate}
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
}

export default Details;
