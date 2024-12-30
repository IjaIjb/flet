import React, { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

function StatementTable() {
  const [open, setOpen] = useState(false);

  // const toggleDropdown = (index: number) => {
  //   setDropdownIndex(dropdownIndex === index ? null : index); // Toggle dropdown visibility
  // };
  // const handleVehicleReport = () => {
  //   router.push("/dashboard/fleet/vehicle-report");
  // };
  // const handleVehicleStatement = () => {
  //   router.push("/dashboard/fleet/vehicle-statement");
  // };

  const onOpenModal = () => {
    // e.preventDefault();
    setOpen(true);
  };
  const onCloseModal = () => setOpen(false);

  const handleDetails = () => {
    onOpenModal(); // Open the modal
  };
  const data = [
    {
      id: 1,
      city: "Alimosho",
      time: "09:00 AM",
      arrival_city: "Lagos",
      code: "94837748",
      fare: "2000",
      status: "Fully Booked",
      date: "21/05/2024",
    },
    {
      id: 2,
      city: "Alimosho",
      time: "09:00 AM",
      arrival_city: "Lagos",
      code: "94837748",
      fare: "2000",
      status: "2 seats left",
      date: "21/05/2024",
    },
    {
      id: 3,
      city: "Alimosho",
      time: "09:00 AM",
      arrival_city: "Lagos",
      code: "94837748",
      fare: "2000",
      status: "Fully Booked",
      date: "21/05/2024",
    },
    {
      id: 4,
      city: "Alimosho",
      time: "09:00 AM",
      arrival_city: "Lagos",
      code: "94837748",
      fare: "2000",
      status: "Fully Booked",
      date: "21/05/2024",
    },
  ];
  return (
    <div>
      <table className="w-full text-[18px] text-center  ">
        <thead className="text-[18px] text-primary bg-gray-50 ">
          <tr>
            {/* <th scope="col" className="px-6 py-3">
              S/N
            </th> */}
            <th scope="col" className="px-6 py-3">
              Departure City
            </th>
            <th scope="col" className="px-6 py-3">
              Departure Time
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              Arrival City
            </th>

            <th scope="col" className="px-6 py-3">
              Booking Code
            </th>
            <th scope="col" className="px-6 py-3">
              Fare
            </th>
            <th scope="col" className="px-6 py-3">
              Booking Status
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>

            {/* <th scope="col" className="px-6 py-3">
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
              {/* <td className="px-6 py-4">{index + 1}</td> */}

              <td className="px-6 py-4">{datas?.city}</td>
              <td className="px-6 py-4">{datas?.time}</td>
              <td className="px-6 py-4">{datas?.date}</td>
              <td className="px-6 py-4">{datas?.arrival_city}</td>
              <td className="px-6 py-4">{datas?.code}</td>
              <td className="px-6 py-4">{datas?.fare}</td>

              <td className="px-6 py-4">{datas?.status}</td>
              <td className="px-2 py-4">
                <div className="relative">
                  <div
                    onClick={handleDetails}
                    className="text-primary cursor-pointer border text-[13px] rounded-full px-1 py-1"
                  >
                    View Details
                  </div>
                  {/* {dropdownIndex === index && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
                      <ul className="py-1">
                        <li>
                          <div
                            onClick={handleVehicleStatement}
                            className="px-4 py-2 text-sm text-primary hover:bg-[#9F9F9F33] text-center cursor-pointer"
                          >
                            See Statement
                          </div>
                        </li>
                        <li>
                          <div
                            onClick={handleVehicleReport}
                            className="px-4 py-2 text-sm text-primary hover:bg-[#9F9F9F33] text-center cursor-pointer"
                          >
                            Vehicle Report
                          </div>
                        </li>
                        <li className="px-4 py-2 text-sm text-primary hover:bg-[#9F9F9F33] text-center cursor-pointer">
                          See Documents
                        </li>
                      </ul>
                    </div>
                  )} */}
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
          modal: "rounded-[10px] overflow-visible relative",
        }}
        open={open}
        onClose={onCloseModal}
        center
      >
        <div className="px-4 pb-2">
          <div className=" flex justify-center pt-2">
            <h4 className="text-primary text-[15px] md:text-[18px]">
              See info
            </h4>
          </div>
          <div>
            <h4 className="text-primary text-[15px] md:text-[18px] mb-4">
              Park info
            </h4>
            <ol className="relative border-l border-dashed border-teal-600 dark:border-teal-600">
              <li className="mb-9 ml-6 flex items-center">
                <span className="flex absolute -left-[7px] border-t border-white justify-center items-center w-3 h-3 bg-[#6CC56C]  rounded-full  "></span>
                <h3 className="flex items-center  font-light gap-2 text-[15px] md:text-[18px] text-blackText ">
                  <i> Departure City </i>{" "}
                  <span className="font-semibold"> Sagamu</span>
                </h3>
              </li>

              <li className="mb-6 ml-6 items-center">
                <span className="flex absolute -left-[10px] justify-center items-center w-5 h-5 bg-green-700 rounded-full ring-8 ring-green-100  "></span>
                <h3 className="flex items-center  font-light gap-2 text-[15px] md:text-[18px] text-blackText ">
                  <i> Destination City </i>{" "}
                  <span className="font-semibold"> Lagos</span>
                </h3>
              </li>
            </ol>
          </div>
          <div className="md:w-[400px] pr-3 flex flex-col gap-2 body-font font-poppins">
            <div className="grid grid-cols-12 gap-3 mt-2">
              <h4 className="text-[#696767] col-span-5 text-[15px] md:text-[18px]">
                Park Address:
              </h4>
              <h4 className="text-blackText col-span-7 text-[15px] md:text-[18px]">
                No 12, Isale oko Sagamu
              </h4>
            </div>

            <div className="grid grid-cols-12 gap-3 mt-2">
              <h4 className="text-[#696767] col-span-5 text-[15px] md:text-[18px]">
                Departure time:
              </h4>
              <h4 className="text-blackText col-span-7 text-[15px] md:text-[18px]">
                09:00AM
              </h4>
            </div>

            <div className="grid grid-cols-12 gap-3 mt-2">
              <h4 className="text-[#696767] col-span-5 text-[15px] md:text-[18px]">
                Departure Date:
              </h4>
              <h4 className="text-blackText col-span-7 text-[15px] md:text-[18px]">
                23/08/2022
              </h4>
            </div>
            <div className="grid grid-cols-12 gap-3 mt-2">
              <h4 className="text-[#696767] col-span-5 text-[15px] md:text-[18px]">
                Park Tel:
              </h4>
              <h4 className="text-blackText col-span-7 text-[15px] md:text-[18px]">
                09084678
              </h4>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default StatementTable;
