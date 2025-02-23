"use client"; // Add this for client components in the Next.js app directory
import React, { forwardRef, useEffect, useState } from "react";
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
import { useLazyVehicleControllerGetAllVehicleReportsByVehicleIdQuery } from "@/store/api";
import LoadingSpinnerPage from "@/components/UI/LoadingSpinnerPage";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

// Define the structure of a row in the data
interface Row {
  id: string; // Add the `id` field
  title: string; // Add the `id` field
  description: string;
  cost: string;
  maintenanceDate: string;
  index: number; // Add the index property
}
// Define the structure of a column in the table
// interface Column {
//   title: string;
//   field: keyof Row | string; // Ensure `field` matches the keys of `Row`
//   headerStyle?: React.CSSProperties;
//   cellStyle?: React.CSSProperties;
//   render?: (rowData: Row) => React.JSX.Element;
// }
function Repair() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [vehicleId, setVehicleId] = useState<string>("");
  // const [isLoading, setIsLoading] = useState<boolean>(false); // Manage loading state manually

  useEffect(() => {
    // Retrieve the vehicle ID from sessionStorage
    const storedId = localStorage.getItem("vehicleId");
    if (storedId) {
      setVehicleId(storedId);
    }
  }, []);
  
  console.log(vehicleId);
  // const [getVehicleById, { data: vehiclesById }] =
  //   useLazyVehicleControllerGetVehicleByIdQuery<VehiclesByIdResponse>();

  const [getVehicleReport, { data: vehicleReport, isLoading }] =
  useLazyVehicleControllerGetAllVehicleReportsByVehicleIdQuery();
  useEffect(() => {
    getVehicleReport(vehicleId); // Trigger the API call
  }, [getVehicleReport, vehicleId]);
  const handleVehicleReportDetails = (vehicleReportId: string) => {
    // Store the vehicle ID in sessionStorage
    localStorage.setItem("vehicleReportId", vehicleReportId);
    // Navigate to the "fleet/vehicle-statement" page
    router.push("vehicle-report/details");
  };

  const onOpenModal = () => {
    // e.preventDefault();
    setOpen(true);
  };
  const onCloseModal = () => setOpen(false);

  const data: Row[] = Array.isArray(vehicleReport?.data) // Check if it's an array
    ? vehicleReport.data
        .filter((report: any) => report.reportType === "MAINTENANCE") // Filter for active vehicles
        .map((report: any, index: number) => {
          const rawDate = report.maintenanceDate;
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
            index: index + 1, // Add a 1-based index
            id: report?.id || "N/A",
            title: report.title || "N/A",
            description: report.description || "N/A",
            cost: report.cost || "N/A",
            maintenanceDate: formattedDate, // Use formatted date and time
          };
        })
        .sort((a, b) => {
          // Sort by maintenanceDate in ascending order
          return (
            new Date(a.maintenanceDate).getTime() -
            new Date(b.maintenanceDate).getTime()
          );
        })
    : [];

  useEffect(() => {
    if (isLoading) {
      onOpenModal();
    } else {
      onCloseModal();
    }
  }, [isLoading]);


  console.log(vehicleReport);

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

  const formatToNaira = (amount: number | undefined | null): string => {
    if (amount == null) return "₦0.00";
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
    }).format(amount);
  };

  const columns: any = [
    {
      title: "S/N",
      field: "index",
      render: (rowData: any) => <div className="">{rowData.index}</div>,
    },
    {
      title: "Title",
      field: "title",
      // headerStyle: {  textAlign: "center" } as React.CSSProperties,
      // cellStyle: { paddingLeft: "2%" } as React.CSSProperties,
      render: (rowData: any) => <div className="">{rowData.title}</div>,
    },
    {
      title: "Description",
      field: "description",
      // headerStyle: { textAlign: "center" } as React.CSSProperties,
      // cellStyle: { textAlign: "center" } as React.CSSProperties,
      render: (rowData: any) => (
        <div className="truncate max-w-[200px]">{rowData.description}</div>
      ),
    },
    {
      title: "Cost",
      field: "cost",
      // headerStyle: {  textAlign: "center" } as React.CSSProperties,
      // cellStyle: { paddingLeft: "2%" } as React.CSSProperties,
      render: (rowData: any) => (
        <div className="whitespace-nowrap">{formatToNaira(rowData.cost)}</div>
      ),
    },
    {
      title: "Date",
      field: "maintenanceDate",
      // headerStyle: {  textAlign: "center" } as React.CSSProperties,
      // cellStyle: { paddingLeft: "2%" } as React.CSSProperties,
      render: (rowData: any) => (
        <div className="">{rowData.maintenanceDate}</div>
      ),
    },

    {
      title: "Action",
      field: "actions",
      // headerStyle: { textAlign: "center" } as React.CSSProperties,
      // cellStyle: { textAlign: "center" } as React.CSSProperties,
      render: (rowData: any) => {
        return (
          <div
            onClick={() => handleVehicleReportDetails(rowData?.id)}
            className="cursor-pointer relative"
          >
            View
          </div>
        );
      },
    },
  ];

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

  // const data = [
  //   {
  //     id: 1,
  //     title: "Engine",
  //     description: "One of the engine vessel bad",
  //     cost: "80,000.00",
  //     date: "21/05/2024",
  //   },
  //   {
  //     id: 1,
  //     title: "Windscreen",
  //     description: "Windscreen was replaced",
  //     cost: "120,000.00",
  //     date: "23/05/2024",
  //   },
  //   {
  //     id: 1,
  //     title: "Engine",
  //     description: "One of the engine vessel bad",
  //     cost: "80,000.00",
  //     date: "21/05/2024",
  //   },
  //   {
  //     id: 1,
  //     title: "Windscreen",
  //     description: "Windscreen was replaced",
  //     cost: "120,000",
  //     date: "23/05/2024",
  //   },
  // ];
  return (
    <>
      {/* <div className="overflow-hidden overflow-x-scroll">
       <table className="w-full tex-[20px] text-center  ">
         <thead className="tex-[20px] text-primary bg-gray-50 ">
           <tr>
             <th scope="col" className="px-6 py-3">
               S/N
             </th>
             <th scope="col" className="px-6 py-3">
               Title
             </th>
             <th scope="col" className="px-6 py-3">
               Description
             </th>
             <th scope="col" className="px-6 py-3">
               Cost
             </th>

             <th scope="col" className="px-6 py-3">
               Date
             </th>
             <th scope="col" className="px-6 py-3">
               Action
             </th>

        
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

             <td className="px-6 py-4">{datas?.title}</td>
             <td className="px-6 py-4">{datas?.description}</td>
             <td className="px-6 py-4">{datas?.cost}</td>
             <td className="px-6 py-4">{datas?.date}</td>
             <td className="px-6 py-4">
               <Link href={"/dashboard/fleet/vehicle-report/details"}>
                 {" "}
                 View
               </Link>
             </td>
           </tr>
           ))}
         </tbody>
       </table>

     <h4 className="text-primary underline text-center text-sm pt-4">
       View All
     </h4>
   </div> */}
      {isLoading ? null : (
              
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
                Sorry, No information yet, Add fleet to start
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
              className="flex flex-col gap-2 bg-white border-2 rounded-lg shadow-xl hover:shadow-2xl p-4 mb-4"
            >
              <div className=" flex flex-col gap-[1px]">
                <div className="text-[14px]">
                  <strong>Title:</strong> {row.title}
                </div>
                <div className="text-[14px]">
                  <strong>Description:</strong> {row.description}
                </div>
                <div className="text-[14px]">
                  <strong>Cost:</strong> {row.cost}
                </div>
                <div className="text-[14px]">
                  <strong>Date:</strong> {row.maintenanceDate}
                </div>
              </div>
              {/* Actions */}
              <div className="flex flex-col gap-2 mt-2">
                {/* <button
                  onClick={() => handleAction("report", row.id)}
                  className="bg-[#274871] text-white px-3 py-1 rounded-md text-sm"
                >
                  {" "}
                  Vehicle Report
                </button> */}
                <button
                  onClick={() => handleVehicleReportDetails(row?.id)}
                  className="bg-primary text-white px-3 py-1 rounded-md text-sm"
                >
                 View
                </button>
                {/* <button
                  onClick={() => handleAction("documents", row.id)}
                  className="bg-[#C05406] text-white px-3 py-1 rounded-md text-sm"
                >
                  See Documents
                </button> */}
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
    </>
  );
}

export default Repair;
