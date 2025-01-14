import React, { useEffect, forwardRef, useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useLazyTripControllerGetTripsByVehicleIdQuery } from "@/store/api";
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

// Define props type
type StatementTableProps = {
  vehicleId: string; // Adjust the type if needed
};

interface Row {
  id: string; // Add the `id` field
  departureCity: string;
  vehicle_type: string;
  engine_no: string;
  provider_agency: string;
  date: string;
  tripCost: string;
  tripStatus: string;
}

// Define the structure of a column in the table
interface Column {
  title: string;
  field: keyof Row | string; // Ensure `field` matches the keys of `Row`
  headerStyle?: React.CSSProperties;
  cellStyle?: React.CSSProperties;
  render?: (rowData: Row) => React.JSX.Element;
}

function StatementTable({ vehicleId }: StatementTableProps) {
  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null); // State to hold selected row data
  const [dateFrom, setDateFrom] = useState<string>("");
  const [dateTo, setDateTo] = useState<string>("");
  // const toggleDropdown = (index: number) => {
  //   setDropdownIndex(dropdownIndex === index ? null : index); // Toggle dropdown visibility
  // };
  // const handleVehicleReport = () => {
  //   router.push("/dashboard/fleet/vehicle-report");
  // };
  // const handleVehicleStatement = () => {
  //   router.push("/dashboard/fleet/vehicle-statement");
  // };

  // const onCloseModal = () => setOpen(false);
  console.log(selectedRow);
  const handleDetails = (rowData) => {
    setSelectedRow(rowData); // Set the row data
    setOpen(true); // Open the modal
  };

  console.log(vehicleId);
  const [getTripsById, { data: tripsById }] =
    useLazyTripControllerGetTripsByVehicleIdQuery<any>();

  useEffect(() => {
    if (vehicleId) {
      // setIsLoading(true); // Set loading state
      getTripsById(vehicleId).unwrap(); // Handle response or errors
      // .finally(() => setIsLoading(false)); // Reset loading state
    }
  }, [vehicleId, getTripsById]);
  console.log(tripsById);

  const data: any = Array.isArray(tripsById?.data) // Check if it's an array
    ? tripsById.data.map((trip: any) => {
        // const rawDate = trip.registrationDate;
        const departureDate = trip.departureDate
          ? new Date(trip.departureDate)
              .toLocaleDateString("en-GB", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })
              .replace(",", "") // Format with date and time (e.g., 2025-01-07 12:34:56)
          : "N/A";

        const departureTime = trip.departureTime || "N/A";

        const departureCity = trip.departure?.city || "N/A";
        const departureAddress = trip.departure?.address || "N/A";
        const departurePhone = trip.departure?.phone || "N/A";

        const finalBusStop = trip.finalBusStop?.name || "N/A";
        const tripStatus = trip.status || "N/A";
        const tripCost = trip.cost || "N/A";

        // Handle bookings status (combine statuses if multiple bookings exist)
        const bookingStatus = trip.bookings?.length
          ? trip.bookings.map((booking: any) => booking.status).join(", ")
          : "N/A";
        return {
          departureCity,
          departureDate,
          departureTime,
          departureAddress,
          departurePhone,
          finalBusStop,
          bookingStatus,
          tripStatus,
          tripCost,
        };
      })
    : [];

  const filteredData = data.filter((row) => {
    // Parse the row.departureDate string into a Date object
    const rowDate =
      row.departureDate !== "N/A"
        ? new Date(
            row.departureDate.split("/").reverse().join("-") // Convert "DD/MM/YYYY" to "YYYY-MM-DD"
          )
        : null;

    // Convert dateFrom and dateTo to Date objects
    const fromDate = dateFrom ? new Date(dateFrom) : null;
    const toDate = dateTo ? new Date(dateTo) : null;

    // Check date validity and filter
    const matchesDateFrom = !fromDate || (rowDate && rowDate >= fromDate);
    const matchesDateTo = !toDate || (rowDate && rowDate <= toDate);

    return matchesDateFrom && matchesDateTo;
  });

  // Define columns with correct types
  const columns: Column[] = [
    {
      title: "Departure City",
      field: "departureCity",
      // headerStyle: { textAlign: "center" } as React.CSSProperties,
      // cellStyle: { textAlign: "center" } as React.CSSProperties,
      render: (rowData) => <div className="">{rowData.departureCity}</div>,
    },
    {
      title: "Departure Time",
      field: "departureTime",
      // headerStyle: {  textAlign: "center" } as React.CSSProperties,
      // cellStyle: { paddingLeft: "2%" } as React.CSSProperties,
    },
    {
      title: "Date",
      field: "departureDate",
      // headerStyle: {  textAlign: "center" } as React.CSSProperties,
      // cellStyle: { paddingLeft: "2%" } as React.CSSProperties,
      // render: (rowData) => (
      //   <div className="whitespace-nowrap">{rowData.engine_no}</div>
      // ),
    },
    {
      title: "Arrival City",
      field: "finalBusStop",
      // headerStyle: {  textAlign: "center" } as React.CSSProperties,
      // cellStyle: { paddingLeft: "2%" } as React.CSSProperties,
      // render: (rowData) => <div className="">{rowData.provider_agency}</div>,
    },
    {
      title: "Booking Code",
      field: "date",
      // headerStyle: {  textAlign: "center"} as React.CSSProperties,
      // cellStyle: { paddingLeft: "2%" } as React.CSSProperties,
      // render: (rowData) => (
      //   <div className="">
      //     <h5 className="">{rowData.date}</h5>
      //   </div>
      // ),
    },
    {
      title: "Fare",
      field: "tripCost",
      // headerStyle: {  textAlign: "center" } as React.CSSProperties,
      // cellStyle: { paddingLeft: "2%" } as React.CSSProperties,
      render: (rowData) => (
        <div className="">
          {" "}
          ₦{parseFloat(rowData?.tripCost ?? "0").toFixed(2)}
        </div>
      ),
    },
    {
      title: "Trip Status",
      field: "tripStatus",
      // headerStyle: {  textAlign: "center" } as React.CSSProperties,
      // cellStyle: { paddingLeft: "2%" } as React.CSSProperties,
      render: (rowData) => (
        <div className="truncate max-w-[250px]">{rowData.tripStatus}</div>
      ),
    },
    {
      title: "Action",
      field: "actions",
      // headerStyle: { textAlign: "center" } as React.CSSProperties,
      // cellStyle: { textAlign: "center" } as React.CSSProperties,
      render: (rowData) => {
        // const index = data.findIndex(
        //   (row) => row.vehicle_plate_no === rowData.vehicle_plate_no
        // );

        return (
          <div className="relative">
            <div
              onClick={() => handleDetails(rowData)} // Pass the row data here
              className="text-primary cursor-pointer border text-[13px] rounded-full px-1 py-1"
            >
              View Details
            </div>
          </div>
        );
      },
    },
  ];

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
        <div className="grid md:grid-cols-12 items-center gap-4">
          <div className="col-span-5">
            <div></div>
          </div>
          {/* <div></div> */}
          <div className="col-span-7">
            <div className="mb-5 flex gap-6 w-full">
              {/* <select
          className="block h-12 border text-[14px] font-[300] px-3 rounded-md focus:outline-primary"
          value={vehicleType}
          onChange={(e) => setVehicleType(e.target.value)}
        >
          <option value="">Select Vehicle Type</option>
          {vehicleTypes?.data?.map((type: any) => (
            <option key={type.id} value={type.category}>
              {type.category}
            </option>
          ))}
        </select> */}
              <div className="flex items-center w-full gap-3">
                <label
                  className="whitespace-nowrap text-[#2B2C2B] text-[14px] font-[300] "
                  htmlFor="last_name"
                >
                  Date From
                </label>

                <input
                  type="date"
                  className="block w-full text-[14px] font-[300] h-12 border px-3 rounded-md focus:outline-primary"
                  value={dateFrom}
                  onChange={(e) => setDateFrom(e.target.value)}
                />
              </div>
              <div className="flex items-center w-full gap-3">
                <label
                  className="whitespace-nowrap text-[#2B2C2B] text-[14px] font-[300] "
                  htmlFor="last_name"
                >
                  Date To
                </label>
                <input
                  type="date"
                  className="block w-full text-[14px] font-[300] h-12 border px-3 rounded-md focus:outline-primary"
                  value={dateTo}
                  onChange={(e) => setDateTo(e.target.value)}
                />
              </div>
            </div>
          </div>
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
            Sorry, No information yet.
          </div>
        </div>
      )}
      <Modal
        classNames={{
          modal: "rounded-[10px] overflow-visible relative",
        }}
        open={open}
        onClose={() => {
          setOpen(false);
          setSelectedRow(null); // Reset the selected row data when closing
        }}
        center
      >
        <div className="px-4 pb-2">
          <div className=" flex justify-center pt-2">
            <h4 className="text-primary text-[15px] md:text-[18px]">
              See info
            </h4>
          </div>
          {selectedRow && (
            <>
              <div>
                <h4 className="text-primary text-[15px] md:text-[18px] mb-4">
                  Park info
                </h4>
                <ol className="relative border-l border-dashed border-teal-600 dark:border-teal-600">
                  <li className="mb-9 ml-6 flex items-center">
                    <span className="flex absolute -left-[6px] -mt-4 border-t border-white justify-center items-center w-3 h-3 bg-[#6CC56C]  rounded-full  "></span>
                    <h3 className="flex items-center -mt-4 font-light gap-2 text-[15px] md:text-[18px] text-blackText ">
                      <i> Departure City </i>{" "}
                      <span className="font-semibold ">
                        {selectedRow?.departureCity}
                      </span>
                    </h3>
                  </li>

                  <li className="mb-6 ml-6 items-center">
                    <span className="flex absolute -left-[10px] justify-center items-center w-5 h-5 bg-green-700 rounded-full ring-8 ring-green-100  "></span>
                    <h3 className="flex items-center  font-light gap-2 text-[15px] md:text-[18px] text-blackText ">
                      <i> Destination City </i>{" "}
                      <span className="font-semibold">
                        {selectedRow?.finalBusStop}
                      </span>
                    </h3>
                  </li>
                </ol>
              </div>
              <div className="md:w-[400px] pr-3 flex flex-col gap-2 body-font font-poppins">
                <div className="grid grid-cols-12 gap-3 mt-2">
                  <h4 className="text-[#696767] col-span-5 text-[15px] md:text-[18px]">
                    Trip Status:
                  </h4>
                  <h4 className="text-blackText col-span-7 text-[15px] md:text-[18px]">
                    {selectedRow?.tripStatus}
                  </h4>
                </div>

                <div className="grid grid-cols-12 gap-3 mt-2">
                  <h4 className="text-[#696767] col-span-5 text-[15px] md:text-[18px]">
                    Park Address:
                  </h4>
                  <h4 className="text-blackText col-span-7 text-[15px] md:text-[18px]">
                    {selectedRow?.departureAddress}
                  </h4>
                </div>
                <div className="grid grid-cols-12 gap-3 mt-2">
                  <h4 className="text-[#696767] col-span-5 text-[15px] md:text-[18px]">
                    Departure time:
                  </h4>
                  <h4 className="text-blackText col-span-7 text-[15px] md:text-[18px]">
                    {selectedRow?.departureTime}
                  </h4>
                </div>

                <div className="grid grid-cols-12 gap-3 mt-2">
                  <h4 className="text-[#696767] col-span-5 text-[15px] md:text-[18px]">
                    Departure Date:
                  </h4>
                  <h4 className="text-blackText col-span-7 text-[15px] md:text-[18px]">
                    {selectedRow?.departureDate}
                  </h4>
                </div>
                <div className="grid grid-cols-12 gap-3 mt-2">
                  <h4 className="text-[#696767] col-span-5 text-[15px] md:text-[18px]">
                    Park Tel:
                  </h4>
                  <h4 className="text-blackText col-span-7 text-[15px] md:text-[18px]">
                    {selectedRow?.departurePhone}
                  </h4>
                </div>
              </div>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
}

export default StatementTable;
