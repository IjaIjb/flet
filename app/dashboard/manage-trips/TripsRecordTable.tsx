import React, { useState } from "react";
import { SlOptions } from "react-icons/sl";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const TripsRecordTable = () => {
  const [dropdownIndex, setDropdownIndex] = useState<number | null>(null);
  const [openDetails, setOpenDetails] = useState(false);
  const [openEarnings, setOpenEarnings] = useState(false);

  const onOpenDetailsModal = () => {
    // e.preventDefault();
    setOpenDetails(true);
  };
  const onCloseDetailsModal = () => setOpenDetails(false);

  const handleDetails = () => {
    onOpenDetailsModal(); // Open the modal
  };

  const onOpenEarningsModal = () => {
    // e.preventDefault();
    setOpenEarnings(true);
  };
  const onCloseEarningsModal = () => setOpenEarnings(false);

  const handleEarnings = () => {
    onOpenEarningsModal(); // Open the modal
  };
  const toggleDropdown = (index: number) => {
    setDropdownIndex(dropdownIndex === index ? null : index); // Toggle dropdown visibility
  };
  const data = [
    {
      id: 1,
      park: "Alimosho",
      time: "09:00 AM",
      state: "Lagos",
      code: "94837748",
      vehicle_type: "MBus",
      fare: "2000",
      status: "Fully Booked",
      date: "21/05/2024",
    },
    {
      id: 2,
      park: "Alimosho",
      time: "09:00 AM",
      state: "Lagos",
      code: "94837748",
      vehicle_type: "MBus",
      fare: "2000",
      status: "2 Seats Left",
      date: "21/05/2024",
    },
    {
      id: 3,
      park: "Alimosho",
      time: "09:00 AM",
      state: "Lagos",
      code: "94837748",
      vehicle_type: "MBus",
      fare: "2000",
      status: "Fully Booked",
      date: "21/05/2024",
    },
    {
      id: 4,
      park: "Alimosho",
      time: "09:00 AM",
      state: "Lagos",
      code: "94837748",
      vehicle_type: "MBus",
      fare: "2000",
      status: "2 Seats Left",
      date: "21/05/2024",
    },
  ];
  return (
    <div>
      <table className="w-full text-[18px] text-center  ">
        <thead className="text-[18px] text-primary bg-gray-50 ">
          <tr>
            {/* <th scope="col" className="px-3 py-3">
            S/N
          </th> */}
            <th scope="col" className="text-center px-3 py-3">
              Destination Park
            </th>
            <th scope="col" className="text-center px-3 py-3">
              Destination State
            </th>
            <th scope="col" className="text-center px-3 py-3">
              Trip Code
            </th>
            <th scope="col" className="text-center px-3 py-3">
              Date
            </th>
            <th scope="col" className="text-center px-3 py-3">
              Time
            </th>
            <th scope="col" className="text-center px-3 py-3">
              Vehicle Type
            </th>

            <th scope="col" className="text-center px-3 py-3">
              Fare
            </th>
            <th scope="col" className="text-center px-3 py-3">
              Booking Status
            </th>
            <th scope="col" className="text-center px-3 py-3">
              Action
            </th>

            {/* <th scope="col" className="px-3 py-3">
                                      <span className="sr-only">Actions</span>
                                  </th> */}
          </tr>
        </thead>

        <tbody>
          {data.map((datas, index) => (
            <tr
              key={index}
              className={`bg-white ${
                index % 2 === 0 ? "" : "bg-[#D9D9D930]/[19%]"
              }`} // Apply bg-gray-200 to even rows
            >
              {/* <td className="px-3 py-4">{index + 1}</td> */}

              <td className="px-3 py-4">{datas?.park}</td>
              <td className="px-3 py-4">{datas?.state}</td>
              <td className="px-3 py-4">{datas?.code}</td>
              <td className="px-3 py-4">{datas?.date}</td>
              <td className="px-3 py-4">{datas?.time}</td>
              <td className="px-3 py-4">{datas?.vehicle_type}</td>
              <td className="px-3 py-4">{datas?.fare}</td>

              <td className="px-3 py-4">{datas?.status}</td>
              <td className="px-2 py-4">
                <div className="relative text-center">
                <div className="flex justify-center">
                  <SlOptions
                    className="cursor-pointer"
                    onClick={() => toggleDropdown(index)}
                  />
                  </div>
                  {dropdownIndex === index && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
                      <ul className="py-1">
                        <li>
                          <div
                            onClick={handleDetails}
                            className="px-4 py-2 text-sm text-primary hover:bg-[#9F9F9F33] text-center cursor-pointer"
                          >
                            View Details
                          </div>
                        </li>
                        <li>
                          <div
                            onClick={handleEarnings}
                            className="px-4 py-2 text-sm text-primary hover:bg-[#9F9F9F33] text-center cursor-pointer"
                          >
                            Earnings
                          </div>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex gap-4 justify-center mt-7 mb-3 items-center">
        <h4 className="text-blackText font-[500] text-[13px]">Page 1 of 30</h4>

        <div className="flex items-center gap-1">
          <div className="text-[#98A2B3] px-3 py-2 ">1</div>
          <div className="text-[#98A2B3] px-3 py-2 ">2</div>
          <div className=" px-3 py-2 bg-primary text-white rounded-[6px]">
            3
          </div>
          <div className="text-[#98A2B3] px-3 py-2 ">4</div>
          <div className="text-[#98A2B3] px-3 py-2 ">5</div>
          <div className="text-[#98A2B3] px-3 py-2 ">6</div>
        </div>

        <div className="flex gap-2">
          <div className="bg-[#D9D9D9] py-2 px-2 rounded-[6px]">
            <MdChevronLeft className="text-white w-7 h-7 " />
          </div>
          <div className="bg-[#D9D9D9] py-2 px-2 rounded-[6px]">
            <MdChevronRight className="text-white w-7 h-7 " />
          </div>
        </div>
      </div>

      <Modal
        classNames={{
          modal: "rounded-[10px] overflow-hidden relative",
        }}
         open={openDetails} onClose={onCloseDetailsModal} center>
        <div className="md:w-[600px] px-2 md:pt-4 md:px-8 pb-4">
          <div className=" flex justify-center pt-4 pb-4">
            <h4 className="text-primary text-[22px] md:text-[24px]">
              Trip Details
            </h4>
          </div>
          <div>
            <h4 className="text-primary text-[20px] border-blackText border-b-4">
              Info
            </h4>
          </div>
          <div className=" flex flex-col gap-2 body-font font-poppins">
            <div>
              <div className="flex gap-2 mt-2">
                <h4 className="text-blackText text-[20px]">
                  Vehicle Type:
                </h4>
                <h4 className="text-primary text-[20px]">Bus</h4>
              </div>

              <div className="flex gap-2">
                <h4 className="text-blackText text-[20px]">
                  Vehicle plate number:
                </h4>
                <h4 className="text-primary  text-[20px]">
                  AD 234567543
                </h4>
              </div>

              <div className="flex gap-2">
                <h4 className="text-blackText text-[20px]">
                  Vehicle color:
                </h4>
                <h4 className="text-primary text-[20px]">
                  Blue
                </h4>
              </div>
              <div className="flex gap-2 ">
                <h4 className="text-blackText text-[20px]">
                  Trip Code:
                </h4>
                <h4 className="text-primary text-[20px]">345</h4>
              </div>
            </div>

            <div className="mt-3">
              <div className="flex gap-2 mt-2">
                <h4 className="text-blackText text-[20px]">
                  Departure Park:
                </h4>
                <h4 className="text-primary text-[20px]">
                  Sagamu
                </h4>
              </div>

              <div className="flex gap-2">
                <h4 className="text-blackText text-[20px]">
                  Departure Time:
                </h4>
                <h4 className="text-primary text-[20px]">
                  14:00 PM
                </h4>
              </div>

              <div className="flex gap-2">
                <h4 className="text-blackText text-[20px]">
                  Arrival State:
                </h4>
                <h4 className="text-primary text-[20px]">
                  Abuja
                </h4>
              </div>
              <div className="flex gap-2 ">
                <h4 className="text-blackText text-[20px]">
                  Arrival City:
                </h4>
                <h4 className="text-primary text-[20px]">
                  Lagos
                </h4>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        classNames={{
          modal: "rounded-[10px] overflow-visible relative",
        }}
         open={openEarnings} onClose={onCloseEarningsModal} center>
        <div className=" md:w-[600px] w-full px-2 md:pt-4 md:px-8 pb-6">
          <div className=" flex justify-center pt-4 pb-4">
            <h4 className="text-primary text-[18px] md:text-[24px]">
              Earnings
            </h4>
          </div>

          <div className="  flex flex-col gap-2 body-font font-poppins">
            <div className="grid grid-cols-2 w-full gap-3">
              <div className=" w-full">
                <h4 className="text-blackText text-[16px] md:text-[18px]">
                  Number of Seats Occupied
                </h4>
                <h4 className="text-primary text-[16px] md:text-[18px]">7</h4>
              </div>

              <div className=" w-full">
                <h4 className="text-blackText text-[16px] md:text-[18px]">
                  Fare Charged
                </h4>
                <h4 className="text-primary text-[16px] md:text-[18px]">
                  2000/person
                </h4>
              </div>
            </div>

            <div className="grid grid-cols-2 w-full pt-2 gap-3">
              <div className="flex flex-col">
                <h4 className="text-blackText text-[16px] md:text-[18px]">
                  Revenue Generated
                </h4>
                <h4 className="text-primary text-[16px] md:text-[18px]">
                  N14,000.00
                </h4>
              </div>

              <div className="flex flex-col">
                <h4 className="text-blackText text-[16px] md:text-[18px]">
                  Fleet Owner Commision 60%
                </h4>
                <h4 className="text-primary text-[16px] md:text-[18px]">
                  N8,400.00
                </h4>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TripsRecordTable;
