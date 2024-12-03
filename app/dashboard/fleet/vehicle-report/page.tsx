"use client";
import DashboardLayout from "@/components/Layout";
import React, { useState } from "react";
import BreadcrumbsDisplay from "../../BreadscrumbsDisplay";
import Repair from "./Repair";
import Delivery from "./Delivery";
import Emergency from "./Emergency";

function VehicleReport() {
  const initialVehicleReportState = {
    repairElement: true,
    deliveryElement: false,
    emergencyElement: false,
  };

  const [vehicleReportValues, setVehicleReportValues] = useState({
    ...initialVehicleReportState,
  });

  const handleRepairState = () => {
    // e.preventDefault();
    setVehicleReportValues({
      repairElement: true,
      deliveryElement: false,
      emergencyElement: false,
    });
  };

  const handleDeliveryState = () => {
    // e.preventDefault();
    setVehicleReportValues({
      repairElement: false,
      deliveryElement: true,
      emergencyElement: false,
    });
  };

  const handleEmergencyState = () => {
    // e.preventDefault();
    setVehicleReportValues({
      repairElement: false,
      deliveryElement: false,
      emergencyElement: true,
    });
  };

  const showDefaultConnector = () => {
    return (
      <>
        {/* show repair */}
        {vehicleReportValues.repairElement && (
          <>
            <div className="">
              <Repair />
            </div>
          </>
        )}

        {/* show delivery */}
        {vehicleReportValues.deliveryElement && (
          <>
            <div className="">
              <Delivery />
            </div>
          </>
        )}

        {vehicleReportValues.emergencyElement && (
          <>
            <div className="">
              <Emergency />
            </div>
          </>
        )}
      </>
    );
  };
  return (
    <div>
      <DashboardLayout>
        <div className="bg-white overflow-hidden rounded-[8px] px-3 md:px-8 py-7 md:py-9">
          <div className="flex w-full justify-between gap-5 items-center">
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
                placeholder="Search Report"
                id="simple-search"
                className=" border h-10 border-[#D9D9D94D]/[30%]  text-blackText bg-[#D9D9D94D]/[30%] text-sm rounded-md block pl-10 md:pl-14 p-1  "
                //   required
              />
            </div>
          </div>

          <button className="py-3 mt-7 px-7 bg-[#036E030F]/[6%] rounded-[10px] text-primary">
            Write Report
          </button>
          <div className=" pt-[40px]">
            <ol className="list-none flex items-center md:gap-9 mb-5  border-b-[1px] w-fit border-[#D4CECE] gap-4 ">
              <li
                className={`${
                  vehicleReportValues.repairElement
                    ? "border-primary border-b-[3px] text-[16px] lg:text-[20px] text-primary"
                    : "border-b-[0] text-blackText"
                }  text-center   px-3 md:px-6 py-2 inline-block text-[16px] lg:text-[20px] font-semibold hover:rounded-[10px] hover:text-[#036E03]/[80%] cursor-pointer`}
                onClick={() => handleRepairState()}
              >
                Repair
              </li>

              <li
                className={`${
                  vehicleReportValues.deliveryElement
                    ? "border-primary border-b-[3px] text-[16px] lg:text-[20px] text-primary "
                    : "border-b-[0] text-blackText"
                } text-center py-2 px-2 md:px-5 inline-block text-[16px] lg:text-[20px] font-semibold hover:rounded-[10px] hover:text-[#036E03]/[80%] cursor-pointer`}
                onClick={() => handleDeliveryState()}
              >
                Delivery
              </li>

              <li
                className={`${
                  vehicleReportValues.emergencyElement
                    ? "border-primary border-b-[3px] text-[16px] lg:text-[20px] text-primary "
                    : "border-b-[0] text-blackText"
                } text-center py-2 px-2 md:px-5 inline-block text-[16px] lg:text-[20px] font-semibold hover:rounded-[10px] hover:text-[#036E03]/[80%] cursor-pointer`}
                onClick={() => handleEmergencyState()}
              >
                Emergency
              </li>
            </ol>

            <div className="pt-3">{showDefaultConnector()}</div>

            {/* <h4 className="text-[#000] text-[35px] font-[600] pb-[60px]">Login</h4>
      <h5 className="text-[#958F8F] text-[26px] font-[600]">
        Login into your account
      </h5>
      <h5 className="text-[#958F8F] text-[15px] font-[500]">
        Thank you for getting back to KwickMall,
      </h5> */}
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
};

export default VehicleReport;
