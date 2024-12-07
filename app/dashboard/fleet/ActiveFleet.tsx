"use client";
import React, { useState } from "react";
import { SlOptions } from "react-icons/sl";
import { useRouter } from "next/navigation";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function ActiveFleet() {
  const router = useRouter();

  const [dropdownIndex, setDropdownIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setDropdownIndex(dropdownIndex === index ? null : index); // Toggle dropdown visibility
  };
  const handleVehicleReport = () => {
    router.push("fleet/vehicle-report");
  };

  const handleVehicleStatement = () => {
    router.push("fleet/vehicle-statement");
  };

  const data = [
    {
      id: 1,
      vehicle_plate_no: "95795003749",
      vehicle_type: "Sedan",
      engine_no: "63748749kk",
      provider_agency: "GIG Logistics",
      date: "21/05/2024",
    },
    {
      id: 2,
      vehicle_plate_no: "95795003749",
      vehicle_type: "Sedan",
      engine_no: "63748749kk",
      provider_agency: "GIG Logistics",
      date: "21/05/2024",
    },
    {
      id: 1,
      vehicle_plate_no: "95795003749",
      vehicle_type: "Sedan",
      engine_no: "63748749kk",
      provider_agency: "GIG Logistics",
      date: "21/05/2024",
    },
    {
      id: 2,
      vehicle_plate_no: "95795003749",
      vehicle_type: "Sedan",
      engine_no: "63748749kk",
      provider_agency: "GIG Logistics",
      date: "21/05/2024",
    },
  ];
  return (
    <div className="">
      <table className="w-full text-sm text-center overflow-hidden overflow-x-scroll ">
        <thead className="text-xs text-primary bg-gray-50 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              S/N
            </th>
            <th scope="col" className="px-6 py-3">
              Vehicle Plate No
            </th>
            <th scope="col" className="px-6 py-3">
              Vehicle Type
            </th>
            <th scope="col" className="px-6 py-3">
              Engine Number
            </th>
            <th scope="col" className="px-6 py-3">
              Provider Agency
            </th>

            <th scope="col" className="px-6 py-3">
              Enrolment Date
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
              <td className="px-6 py-4">{index + 1}</td>

              <td className="px-6 py-4">{datas?.vehicle_plate_no}</td>
              <td className="px-6 py-4">{datas?.vehicle_type}</td>
              <td className="px-6 py-4">{datas?.engine_no}</td>
              <td className="px-6 py-4">{datas?.provider_agency}</td>
              <td className="px-6 py-4">{datas?.date}</td>
              <td className="px-6 py-4">
                <div className="relative">
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
    </div>
  );
};

export default ActiveFleet;
