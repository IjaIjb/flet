"use client";
import React, { useState } from "react";
import { SlOptions } from "react-icons/sl";
import { useRouter } from "next/navigation";

function InActiveFleet()  {
  const router = useRouter();

  const [dropdownIndex, setDropdownIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setDropdownIndex(dropdownIndex === index ? null : index); // Toggle dropdown visibility
  };

  const handleVehicleReport = () => {
    router.push("/dashboard/fleet/vehicle-report");
  };

  const handleVehicleStatement = () => {
    router.push("/dashboard/fleet/vehicle-statement");
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
    <div className="overflow-hidden overflow-x-scroll">
      <table className="w-full text-sm text-center  ">
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
                  <SlOptions
                    className="cursor-pointer"
                    onClick={() => toggleDropdown(index)}
                  />
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

      <h4 className="text-primary underline text-center text-sm pt-4">
        View All
      </h4>
    </div>
  );
};

export default InActiveFleet;
