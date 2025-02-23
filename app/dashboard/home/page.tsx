"use client"; // Add this for client components in the Next.js app directory
import DashboardLayout from "@/components/Layout";
import React, { useEffect, useState } from "react";
import BreadcrumbsDisplay from "../BreadscrumbsDisplay";
import Image from "next/image";
import {
  useLazyTripControllerGetTripsByVehicleOwnerIdQuery,
  useLazyVehicleControllerGetMyVehiclesQuery,
} from "@/store/api";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import LoadingSpinnerPage from "@/components/UI/LoadingSpinnerPage";
import FilteredFleets from "./FilteredFleets";

// interface UserData {
//   id: string;
//   name: string;
//   email: string;
//   individual?: boolean;
//   // Add other fields that exist in the user data object
// }

interface Vehicle {
  data: {
    vehicleType: {
      category: string;
    };
    plateNumber: string;
    providerAgency: string;

    // Add other fields as needed
  };
  totalRevenue: string;
}

interface ActiveVehiclesResponse {
  data: {
    data: Vehicle[];
  };
  isLoading: any;
}

const Page = () => {
  const [open, setOpen] = useState(false);

  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem("user");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  const onOpenModal = () => {
    // e.preventDefault();
    setOpen(true);
  };
  const onCloseModal = () => setOpen(false);

  console.log(userData);

  const [getActiveVehicle, { data: activeVehicles, isLoading }] =
    useLazyVehicleControllerGetMyVehiclesQuery<ActiveVehiclesResponse>();

  const [getUserTripsById, { data: userTripsById }] =
    useLazyTripControllerGetTripsByVehicleOwnerIdQuery<any>();

  console.log(activeVehicles);
  // Fetch vehicle types on component mount
  useEffect(() => {
    getActiveVehicle(); // Trigger the API call
  }, [getActiveVehicle]);

  useEffect(() => {
    if (userData) {
      // setIsLoading(true); // Set loading state
      getUserTripsById(userData.individual.userId).unwrap(); // Handle response or errors
      // .finally(() => setIsLoading(false)); // Reset loading state
    }
  }, [userData, getUserTripsById]);

  useEffect(() => {
    if (isLoading) {
      onOpenModal();
    } else {
      onCloseModal();
    }
  }, [isLoading]);

  const totalRevenue =
    activeVehicles?.data?.reduce((sum, vehicle) => {
      const revenue = parseFloat(vehicle.totalRevenue) || 0;
      return sum + revenue;
    }, 0) || 0;

  return (
    <DashboardLayout>
      {isLoading ? null : (
        <div className="bg-white overflow-hidden rounded-[8px] px-3 md:px-8 py-7 md:py-9">
          <BreadcrumbsDisplay />
          <h5 className="md:text-[20px] text-[16px] font-light mb-4">
            Account Type:{" "}
            <span className="font-[500]">
              {userData?.individual ? "Individual" : "Corporate"}
            </span>
          </h5>

          <div className="bg-primary rounded-[10px] overflow-hidden">
            <div className="flex justify-between items-center">
              <div className=" py-3 md:py-4 pl-3 pr-3 md:pl-6 md:pr-0 text-white ">
                <div className="flex flex-col gap-3">
                  <div className="flex gap-2 items-center">
                    <div className="md:block hidden">
                      <Image
                        aria-hidden
                        src="/dashboard/dashboardCar.svg"
                        alt="Window icon"
                        width={40}
                        height={40}
                      />
                    </div>

                    <div className="block md:hidden">
                      <Image
                        aria-hidden
                        src="/dashboard/dashboardCar.svg"
                        alt="Window icon"
                        width={30}
                        height={30}
                      />
                    </div>

                    <h4 className=" text-[18px] md:text-[24px] font-light leading-[25px]">
                      Total Revenue Generated
                    </h4>
                  </div>

                  <h4 className=" text-[35px] md:text-[48px] font-[700]">
                    ₦{totalRevenue.toFixed(2)}
                  </h4>
                </div>
              </div>
              <div className="md:block hidden">
                {/* <img src="/dashboard/Group 20.svg" alt="Logo" className="" /> */}
                {/* <div className="relative w-full h-64"> */}
                <Image
                  src="/dashboard/Group 20.svg"
                  alt="Descriptive alt text"
                  className="h-full w-full"
                  width={100}
                  height={100}
                  priority
                />
                {/* </div> */}
              </div>
            </div>
          </div>

          <section className="py-5">
            <div className="grid md:grid-cols-[auto_auto_auto] items-center gap-4">
              <div className="flex flex-col gap-3">
                <div className="flex gap-2 items-center">
                  <Image
                    aria-hidden
                    src="/dashboard/dashboardCar2.svg"
                    alt="Window icon"
                    width={40}
                    height={40}
                  />
                  <h4 className="text-[18px]  md:text-[24px]  text-[#274871] font-light leading-[25px]">
                    Total Fleets
                  </h4>
                </div>

                <h4 className="text-[35px] md:text-[48px] text-[#274871] font-[500]">
                  {" "}
                  {activeVehicles?.data?.length ?? 0}
                </h4>
              </div>

              {/* <div className="md:block hidden"> */}
              <div className="h-full md:block hidden bg-gray-300 w-px"></div>
              {/* </div> */}
              {/* <div className=""> */}
              <div className="h-px block md:hidden bg-gray-300 w-full"></div>
              {/* </div> */}
              <div className="flex flex-col gap-3">
                <div className="flex gap-2 items-center">
                  <Image
                    aria-hidden
                    src="/dashboard/totalTrips.svg"
                    alt="Window icon"
                    width={40}
                    height={40}
                  />
                  <h4 className="text-[18px] md:text-[24px] text-[#C05406] font-light leading-[25px]">
                    Total Trips
                  </h4>
                </div>

                <h4 className="text-[35px] md:text-[40px] text-[#C05406] font-[500]">
                  {userTripsById?.data?.length ?? 0}
                </h4>
              </div>
            </div>
          </section>

          <section className="overflow-hidden overflow-x-scroll">
            <div className="">
              <FilteredFleets />
            </div>

            {/* <div className="block sm:hidden">
              <FilteredFleetsMobile />
            </div> */}
          </section>
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
  );
};

export default Page;
