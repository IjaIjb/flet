"use client";
import React, { useState, forwardRef, useEffect } from "react";
import { SlOptions } from "react-icons/sl";
import { useRouter } from "next/navigation";
import MaterialTable from "@material-table/core";
import {
  AddBox,
  Check,
  Clear,
  DeleteOutline,
  Edit,
  Search,
  Save,
} from "@mui/icons-material";
import { useLazyVehicleControllerGetMyVehiclesQuery } from "@/store/api";
import Image from "next/image";

// Define the structure of a row in the data
interface Row {
  id: string; // Add the `id` field
  vehicle_plate_no: string;
  vehicle_type: string;
  engine_no: string;
  provider_agency: string;
  date: string;
}

// Define the structure of a column in the table
interface Column {
  title: string;
  field: keyof Row | string; // Ensure `field` matches the keys of `Row`
  headerStyle?: React.CSSProperties;
  cellStyle?: React.CSSProperties;
  render?: (rowData: Row) => React.JSX.Element;
}

function ActiveFleet() {
  const router = useRouter();

  const [dropdownIndex, setDropdownIndex] = useState<number | null>(null);
  const [getActiveVehicle, { data: activeVehicles }] =
    useLazyVehicleControllerGetMyVehiclesQuery();

  const data: Row[] = Array.isArray(activeVehicles?.data) // Check if it's an array
    ? activeVehicles.data
        .filter((vehicle: any) => vehicle.status === "ACTIVE") // Filter for active vehicles
        .map((vehicle: any) => ({
          id: vehicle?.id || "N/A",
          vehicle_plate_no: vehicle.plateNumber || "N/A",
          vehicle_type: vehicle.vehicleType?.category || "N/A",
          engine_no: vehicle.engineNumber || "N/A",
          provider_agency: vehicle.providerAgency || "N/A",
          date: vehicle.registrationDate || "N/A",
        }))
    : [];

  // Fetch vehicle types on component mount
  useEffect(() => {
    getActiveVehicle(); // Trigger the API call
  }, [getActiveVehicle]);

  console.log(activeVehicles);
  const toggleDropdown = (index: number) => {
    setDropdownIndex(dropdownIndex === index ? null : index); // Toggle dropdown visibility
  };
  const handleVehicleReport = (vehicleId: string) => {
    localStorage.setItem("vehicleId", vehicleId);

    router.push("fleet/vehicle-report");
  };

  const handleVehicleStatement = (vehicleId: string) => {
    // Store the vehicle ID in sessionStorage
    localStorage.setItem("vehicleId", vehicleId);

    // Navigate to the "fleet/vehicle-statement" page
    router.push("fleet/vehicle-statement");
  };

  const handleVehicleDocuments = (vehicleId: string) => {
    // Store the vehicle ID in sessionStorage
    localStorage.setItem("vehicleId", vehicleId);
    router.push("fleet/vehicle-documents");
  };

  const exportToCsv = () => {
    // Fixing the error here by ensuring the `row[col.field]` is typed correctly
    const headers = columns.map((col) => col.title).join(",") + "\n";
    const rows = data
      .map((row) => {
        return columns
          .map((col) => row[col.field as keyof Row]) // Ensure `col.field` is typed as keyof Row
          .join(",");
      })
      .join("\n");

    const csvContent = "data:text/csv;charset=utf-8," + headers + rows;
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "table_data.csv");
    document.body.appendChild(link);
    link.click();
  };

  // Define columns with correct types

  const columns: Column[] = [
    {
      title: "Vehicle Plate No",
      field: "vehicle_plate_no",
      // headerStyle: { textAlign: "center" } as React.CSSProperties,
      // cellStyle: { textAlign: "center" } as React.CSSProperties,
      render: (rowData) => (
        <div className="whitespace-nowrap">{rowData.vehicle_plate_no}</div>
      ),
    },
    {
      title: "Vehicle Type",
      field: "vehicle_type",
      // headerStyle: {  textAlign: "center" } as React.CSSProperties,
      // cellStyle: { paddingLeft: "2%" } as React.CSSProperties,
    },
    {
      title: "Engine Number",
      field: "engine_no",
      // headerStyle: {  textAlign: "center" } as React.CSSProperties,
      // cellStyle: { paddingLeft: "2%" } as React.CSSProperties,
      render: (rowData) => (
        <div className="whitespace-nowrap">{rowData.engine_no}</div>
      ),
    },
    {
      title: "Provider Agency",
      field: "provider_agency",
      // headerStyle: {  textAlign: "center" } as React.CSSProperties,
      // cellStyle: { paddingLeft: "2%" } as React.CSSProperties,
      render: (rowData) => <div className="">{rowData.provider_agency}</div>,
    },
    {
      title: "Enrolment Date",
      field: "date",
      // headerStyle: {  textAlign: "center"} as React.CSSProperties,
      // cellStyle: { paddingLeft: "2%" } as React.CSSProperties,
      render: (rowData) => (
        <div className="">
          <h5 className="">{rowData.date}</h5>
        </div>
      ),
    },
    {
      title: "Action",
      field: "actions",
      // headerStyle: { textAlign: "center" } as React.CSSProperties,
      // cellStyle: { textAlign: "center" } as React.CSSProperties,
      render: (rowData) => {
        const index = data.findIndex(
          (row) => row.vehicle_plate_no === rowData.vehicle_plate_no
        );

        return (
          <div className="relative">
            <div className="">
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
                      onClick={() => handleVehicleStatement(rowData.id)} // Pass vehicle id
                      className="px-4 py-2 text-sm text-primary hover:bg-[#9F9F9F33] text-center cursor-pointer"
                    >
                      See Statement
                    </div>
                  </li>
                  <li>
                    <div
                      onClick={() => handleVehicleReport(rowData?.id)}
                      className="px-4 py-2 text-sm text-primary hover:bg-[#9F9F9F33] text-center cursor-pointer"
                    >
                      Vehicle Report
                    </div>
                  </li>
                  <li>
                    <div
                      onClick={() => handleVehicleDocuments(rowData?.id)}
                      className="px-4 py-2 text-sm text-primary hover:bg-[#9F9F9F33] text-center cursor-pointer"
                    >
                      See Documents
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>
        );
      },
    },
  ];

  // const data: Row[] = [
  //   {
  //     vehicle_plate_no: "95795003749",
  //     vehicle_type: "Sedan",
  //     engine_no: "63748749kk",
  //     provider_agency: "GIG",
  //     date: "21/05/2024",
  //   },
  //   {
  //     vehicle_plate_no: "95763859556",
  //     vehicle_type: "Bus",
  //     engine_no: "89jrjf9v9e",
  //     provider_agency: "GIG",
  //     date: "21/05/2024",
  //   },
  //   {
  //     vehicle_plate_no: "2345665433",
  //     vehicle_type: "Car",
  //     engine_no: "6372892djk",
  //     provider_agency: "GIG",
  //     date: "21/05/2024",
  //   },
  //   {
  //     vehicle_plate_no: "45676543",
  //     vehicle_type: "toyota",
  //     engine_no: "42556783nd",
  //     provider_agency: "GIG",
  //     date: "21/05/2024",
  //   },
  //   {
  //     vehicle_plate_no: "3456543",
  //     vehicle_type: "camry",
  //     engine_no: "974865hdi",
  //     provider_agency: "GIG",
  //     date: "21/05/2024",
  //   },
  //   {
  //     vehicle_plate_no: "23456765",
  //     vehicle_type: "lorry",
  //     engine_no: "36728394kd",
  //     provider_agency: "GIG",
  //     date: "21/05/2024",
  //   },
  //   {
  //     vehicle_plate_no: "4567654",
  //     vehicle_type: "lambo",
  //     engine_no: "825378dcj",
  //     provider_agency: "GIG",
  //     date: "21/05/2024",
  //   },
  //   {
  //     vehicle_plate_no: "234565432",
  //     vehicle_type: "cybertruck",
  //     engine_no: "37rufj99e",
  //     provider_agency: "GIG",
  //     date: "21/05/2024",
  //   },
  // ];

  // Define icons
  const icons = {
    Add: forwardRef<SVGSVGElement>((props, ref) => (
      <AddBox {...props} ref={ref} />
    )),
    Check: forwardRef<SVGSVGElement>((props, ref) => (
      <Check {...props} ref={ref} />
    )),
    Clear: forwardRef<SVGSVGElement>((props, ref) => (
      <Clear {...props} ref={ref} />
    )),
    Delete: forwardRef<SVGSVGElement>((props, ref) => (
      <DeleteOutline {...props} ref={ref} />
    )),
    Edit: forwardRef<SVGSVGElement>((props, ref) => (
      <Edit {...props} ref={ref} />
    )),
    Search: forwardRef<SVGSVGElement>((props, ref) => (
      <Search {...props} ref={ref} />
    )),
    Save: forwardRef<SVGSVGElement>((props, ref) => (
      <Save {...props} ref={ref} />
    )), // Add Save icon
  };

  // Add displayName for debugging
  icons.Add.displayName = "AddIcon";
  icons.Check.displayName = "CheckIcon";
  icons.Clear.displayName = "ClearIcon";
  icons.Delete.displayName = "DeleteIcon";
  icons.Edit.displayName = "EditIcon";
  icons.Search.displayName = "SearchIcon";
  icons.Save.displayName = "SaveIcon";
  return (
    <div>
      {/* <div className="">
      <table className="w-full text-[18px] text-center overflow-hidden overflow-x-scroll ">
        <thead className=" text-primary bg-gray-50 ">
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

 
          </tr>
        </thead>

        <tbody>
          {dataa.map((datas, index) => (
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
                        <li>
                          <div
                            onClick={handleVehicleDocuments}
                            className="px-4 py-2 text-sm text-primary hover:bg-[#9F9F9F33] text-center cursor-pointer"
                          >
                           See Documents
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
    </div> */}

      {data?.length > 0 ? (
        <MaterialTable
          title=""
          columns={columns}
          data={data}
          icons={icons}
          options={{
            search: true,
            paging: true,
            sorting: true,
            exportAllData: true, // Exports all rows, not just the visible ones
            rowStyle: {
              alignItems: "center",
            },
            headerStyle: {
              color: "#036E03",
              fontWeight: 600,
              fontSize: "14px",
              backgroundColor: "#F9FAFB",
              border: 0,
              borderBottom: "1px solid #E8E9ED",
            },
            tableLayout: "fixed",
          }}
          actions={[
            {
              icon: () => <Save />, // Use a function to render the Save icon
              tooltip: "Export to CSV",
              isFreeAction: true,
              onClick: () => exportToCsv(),
            },
          ]}
        />
      ) : (
        <div className="py-10">
          <div className="flex justify-center">
            <Image
              className=""
              src="/dashboard/stars.svg"
              alt="image"
              width={40}
              height={40}
              priority
            />
          </div>
          <div className="flex justify-center pt-4 text-[#141313] text-[20px] font-[400]">
            Sorry, No information yet, Add fleet to start
          </div>
        </div>
      )}
    </div>
  );
}

export default ActiveFleet;
