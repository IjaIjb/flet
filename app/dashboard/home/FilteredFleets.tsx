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
import { useLazyVehicleControllerGetAllVehicleTypesQuery, useLazyVehicleControllerGetMyVehiclesQuery } from "@/store/api";
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

const FilteredFleets = () => {
     const router = useRouter();
    
      const [dropdownIndex, setDropdownIndex] = useState<number | null>(null);
      const [vehicleType, setVehicleType] = useState<string>("");
      const [dateFrom, setDateFrom] = useState<string>("");
      const [dateTo, setDateTo] = useState<string>("");
      
      const [getActiveVehicle, { data: activeVehicles }] =
        useLazyVehicleControllerGetMyVehiclesQuery();

        const [getVehicleTypes, { data: vehicleTypes}] =
        useLazyVehicleControllerGetAllVehicleTypesQuery();
      

  useEffect(() => {
    getActiveVehicle();
    getVehicleTypes();
  }, [getActiveVehicle, getVehicleTypes]);

 
      const data: Row[] = Array.isArray(activeVehicles?.data) // Check if it's an array
        ? activeVehicles.data
            .filter((vehicle: any) => vehicle.status === "ACTIVE") // Filter for active vehicles
            .map((vehicle: any) => {
              const rawDate = vehicle.registrationDate;
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
    
      const filteredData = data.filter((row) => {
        const matchesType = !vehicleType || row.vehicle_type === vehicleType;
      
        // Parse the row.date string into a Date object
        const rowDate = row.date !== "N/A" ? new Date(row.date.split(" ")[0].split("/").reverse().join("-") + "T" + row.date.split(" ")[1]) : null;
      
        // Convert dateFrom and dateTo to Date objects
        const fromDate = dateFrom ? new Date(dateFrom) : null;
        const toDate = dateTo ? new Date(dateTo) : null;
      
        const matchesDateFrom = !fromDate || (rowDate && rowDate >= fromDate);
        const matchesDateTo = !toDate || (rowDate && rowDate <= toDate);
      
        return matchesType && matchesDateFrom && matchesDateTo;
      });
      

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
        <div className="flex flex-col    gap-2">
            <div className="mb-5 flex gap-6">
        <select
          className="block w-full h-12 border px-3 rounded-md focus:outline-primary"
          value={vehicleType}
          onChange={(e) => setVehicleType(e.target.value)}
        >
          <option value="">Select Vehicle Type</option>
          {vehicleTypes?.data?.map((type: any) => (
            <option key={type.id} value={type.category}>
              {type.category}
            </option>
          ))}
        </select>
        <input
          type="date"
          className="block w-full h-12 border px-3 rounded-md focus:outline-primary"
          value={dateFrom}
          onChange={(e) => setDateFrom(e.target.value)}
        />
        <input
          type="date"
          className="block w-full h-12 border px-3 rounded-md focus:outline-primary"
          value={dateTo}
          onChange={(e) => setDateTo(e.target.value)}
        />
      </div>
            </div>
      {filteredData?.length > 0 ? (
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
            Sorry, No information yet, Add fleet to start
          </div>
        </div>
      )}
    </div>
  );
}

export default FilteredFleets