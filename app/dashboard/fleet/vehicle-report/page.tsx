"use client";
import DashboardLayout from "@/components/Layout";
import React, { useState } from "react";
import BreadcrumbsDisplay from "../../BreadscrumbsDisplay";
import Repair from "./Repair";
import Delivery from "./Delivery";
import Emergency from "./Emergency";
import Modal from "react-responsive-modal";

function VehicleReport() {
  const [openReport, setOpenReport] = useState(false);
  const [deliveryReport, setDeliveryReport] = useState(false);
  const [maintenanceReport, setMaintenanceReport] = useState(false);
  const [emergencyReport, setEmergencyReport] = useState(false);

  const onOpenReportModal = () => {
    // e.preventDefault();
    setOpenReport(true);
  };
  const onCloseReportModal = () => setOpenReport(false);

  const handleWriteReport = () => {
    onOpenReportModal(); // Open the modal
  };

  const onOpenDeliveryReportModal = () => {
    // e.preventDefault();
    setDeliveryReport(true);
  };
  const onCloseDeliveryReportModal = () => setDeliveryReport(false);

  const handleDeliveryReport = () => {
    onCloseReportModal()
    onOpenDeliveryReportModal(); // Open the modal
  };

  const onOpenMaintenanceReportModal = () => {
    // e.preventDefault();
    setMaintenanceReport(true);
  };
  const onCloseMaintenanceReportModal = () => setMaintenanceReport(false);

  const handleMaintenanceReport = () => {
    onCloseReportModal()
    onOpenMaintenanceReportModal(); // Open the modal
  };


  const onOpenEmergencyReportModal = () => {
    // e.preventDefault();
    setEmergencyReport(true);
  };
  const onCloseEmergencyReportModal = () => setEmergencyReport(false);

  const handleEmergencyReport = () => {
    onCloseReportModal()
    onOpenEmergencyReportModal(); // Open the modal
  };

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

          <div
          onClick={handleWriteReport} className="py-3 w-fit mt-7 cursor-pointer px-7 bg-[#036E030F]/[6%] rounded-[10px] text-primary">
            Write Report
          </div>
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

<Modal
        classNames={{
          modal: "rounded-[10px] overflow-hidden relative",
        }}
         open={openReport} onClose={onCloseReportModal} center>
        <div className="md:w-[600px] px-2 md:pt-4 md:px-8 pb-4">
          <div className=" flex justify-center pt-4 pb-4">
            <h4 className="text-primary text-[22px] md:text-[24px]">
            Select the type of report you want to write
            </h4>
          </div>
        
          <div className=" flex flex-col gap-2 body-font font-poppins">
            <div className="flex text-center flex-col gap-2">
    <div onClick={handleDeliveryReport} className="text-blackText py-2  hover:bg-primary/[30%] text-[20px]">
      Delivery Report
    </div>
    <div onClick={handleMaintenanceReport} className="text-blackText py-2  hover:bg-primary/[30%] text-[20px]">
      Maintenance Report
    </div>
    <div onClick={handleEmergencyReport} className="text-blackText py-2  hover:bg-primary/[30%] text-[20px]">
      Emergency Report
    </div>
            </div>

          </div>
        </div>
      </Modal>


      <Modal
        classNames={{
          modal: "rounded-[10px] overflow-hidden relative",
        }}
         open={deliveryReport} onClose={onCloseDeliveryReportModal} center>
        <div className="md:w-[600px] px-2 md:pt-4 md:px-8 pb-4">
          <div className=" flex justify-center pt-4 pb-4">
            <h4 className="text-primary text-[22px] md:text-[24px]">
         Delivery Report
            </h4>
          </div>
        
          <div className=" flex flex-col gap-2 body-font font-poppins">
          <div className="flex flex-col space-y-2">
      <label htmlFor="message" className="text-[20px] font-[400] text-gray-700">
      Description
      </label>
      <textarea
        id="message"
        rows={6}
        placeholder="Type your message here..."
        className="w-full p-3 text-sm text-gray-800 border border-[#9B9898] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
      ></textarea>
    </div>
    <button className="bg-primary py-3 px-10 text-[20px] w-fit text-white rounded-[10px]">
      Submit
    </button>
          </div>
        </div>
      </Modal>

      <Modal
        classNames={{
          modal: "rounded-[10px] overflow-hidden relative",
        }}
         open={maintenanceReport} onClose={onCloseMaintenanceReportModal} center>
        <div className="md:w-[600px] px-2 md:pt-4 md:px-8 pb-4">
          <div className=" flex justify-center pt-4 pb-4">
            <h4 className="text-primary text-[22px] md:text-[24px]">
         Maintenance Report
            </h4>
          </div>
        
          <div className=" flex flex-col gap-2 body-font font-poppins">
          <div className="flex flex-col space-y-2">
      <label htmlFor="message" className="text-[20px] font-[400] text-gray-700">
      Description
      </label>
      <textarea
        id="message"
        rows={6}
        placeholder="Type your message here..."
        className="w-full p-3 text-sm text-gray-800 border border-[#9B9898] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
      ></textarea>
    </div>
    <button className="bg-primary py-3 px-10 text-[20px] w-fit text-white rounded-[10px]">
      Submit
    </button>
          </div>
        </div>
      </Modal>

      <Modal
        classNames={{
          modal: "rounded-[10px] overflow-hidden relative",
        }}
         open={emergencyReport} onClose={onCloseEmergencyReportModal} center>
        <div className="md:w-[600px] px-2 md:pt-4 md:px-8 pb-4">
          <div className=" flex justify-center pt-4 pb-4">
            <h4 className="text-primary text-[22px] md:text-[24px]">
         Emmergency Report
            </h4>
          </div>
        
          <div className=" flex flex-col gap-2 body-font font-poppins">
          <div className="flex flex-col space-y-2">
      <label htmlFor="message" className="text-[20px] font-[400] text-gray-700">
      Description
      </label>
      <textarea
        id="message"
        rows={6}
        placeholder="Type your message here..."
        className="w-full p-3 text-sm text-gray-800 border border-[#9B9898] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
      ></textarea>
    </div>
    <button className="bg-primary py-3 px-10 text-[20px] w-fit text-white rounded-[10px]">
      Submit
    </button>
          </div>
        </div>
      </Modal>
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
};

export default VehicleReport;
