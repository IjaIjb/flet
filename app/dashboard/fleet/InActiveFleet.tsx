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
import Image from "next/image";
import { useLazyVehicleControllerGetAllVehiclesQuery } from "@/store/api";

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

function InActiveFleet() {
  const router = useRouter();

  const [dropdownIndex, setDropdownIndex] = useState<number | null>(null);
  const [getInctiveVehicle, { data: activeVehicles }] =
    useLazyVehicleControllerGetAllVehiclesQuery();

  const data: Row[] = Array.isArray(activeVehicles?.data) // Check if it's an array
    ? activeVehicles.data
        .filter((vehicle: any) => vehicle.status === "INACTIVE") // Filter for active vehicles
        .map((vehicle: any) => {
          const rawDate = vehicle.registrationDate;
          const formattedDate = rawDate
            ? new Date(rawDate)
                .toLocaleString("en-GB", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                })
                .replace(",", "") // Format with date and time (e.g., 2025-01-07 12:34:56)
            : "N/A";
          return {
            id: vehicle?.id || "N/A",
            vehicle_plate_no: vehicle.plateNumber || "N/A",
            vehicle_type: vehicle.vehicleType?.category || "N/A",
            engine_no: vehicle.engineNumber || "N/A",
            provider_agency: vehicle.providerAgency || "N/A",
            date: formattedDate || "N/A",
          };
        })
    : [];

  // Fetch vehicle types on component mount
  useEffect(() => {
    getInctiveVehicle(); // Trigger the API call
  }, [getInctiveVehicle]);
  const toggleDropdown = (index: number) => {
    setDropdownIndex(dropdownIndex === index ? null : index); // Toggle dropdown visibility
  };

  // const handleVehicleReport = () => {
  //   router.push("/dashboard/fleet/vehicle-report");
  // };

  // const handleVehicleStatement = () => {
  //   router.push("/dashboard/fleet/vehicle-statement");
  // };

  const handleVehicleDocuments = () => {
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
                  {/* <li>
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
                  </li> */}
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
        );
      },
    },
  ];

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

  const handleAction = (action: string, vehicleId: string) => {
    localStorage.setItem("vehicleId", vehicleId);
    switch (action) {
      case "statement":
        router.push("fleet/vehicle-statement");
        break;
      case "report":
        router.push("fleet/vehicle-report");
        break;
      case "documents":
        router.push("fleet/vehicle-documents");
        break;
      default:
        break;
    }
  };
  return (
    <>
      {/* Table for Desktop */}
      <div className="hidden md:block">
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
                fontWeight: 300,
                fontSize: "14px",
                alignItems: "center",
              },
              headerStyle: {
                color: "#036E03",
                // fontWeight: 600,
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
              Sorry, No information yet, Add Fleet to start
            </div>
          </div>
        )}
      </div>
      {/* Card View for Mobile */}
      <div className="block md:hidden">
        {data.length > 0 ? (
          data.map((row) => (
            <div
              key={row.id}
              className="flex flex-col gap-2 w-full bg-white border-2 rounded-lg shadow-xl hover:shadow-2xl p-4 mb-4"
            >
              <div className=" flex flex-col gap-[1px]">
                <div className="text-[14px]">
                  <strong>Plate No:</strong> {row.vehicle_plate_no}
                </div>
                <div className="text-[14px]">
                  <strong>Type:</strong> {row.vehicle_type}
                </div>
                <div className="text-[14px]">
                  <strong>Engine No:</strong> {row.engine_no}
                </div>
                <div className="text-[14px]">
                  <strong>Agency:</strong> {row.provider_agency}
                </div>
                <div className="text-[14px]">
                  <strong>Date:</strong> {row.date}
                </div>
              </div>
              {/* Actions */}
              <div className="flex w-full gap-2 mt-2">
                {/* <button
                  onClick={() => handleAction("report", row.id)}
                  className="bg-[#274871] w-full text-white px-3 py-2 rounded-md text-[11px]"
                >
              
                  Vehicle Report
                </button>
                <button
                  onClick={() => handleAction("statement", row.id)}
                  className="bg-primary w-full text-white px-3 py-2 rounded-md text-[11px]"
                >
                  See Statement
                </button> */}
                <button
                  onClick={() => handleAction("documents", row.id)}
                  className="bg-[#C05406] w-full text-white px-3 py-2 rounded-md text-[11px]"
                >
                  See Documents
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="py-10 text-center text-gray-500">
            No data available
          </div>
        )}
      </div>
    </>
  );
}

export default InActiveFleet;
