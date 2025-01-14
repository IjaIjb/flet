import React, { useEffect, forwardRef, useState } from "react";
import { SlOptions } from "react-icons/sl";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import {
  useLazyTripControllerGetTripsByVehicleOwnerIdQuery,
  useLazyVehicleControllerGetAllVehicleTypesQuery,
} from "@/store/api";
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
import MaterialTable from "@material-table/core";

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

const TripsRecordTable = () => {
  const [dropdownIndex, setDropdownIndex] = useState<number | null>(null);
  const [openDetails, setOpenDetails] = useState(false);
  const [openEarnings, setOpenEarnings] = useState(false);
  const [userData, setUserData] = useState<any>(null);
  const [dateFrom, setDateFrom] = useState<string>("");
  const [dateTo, setDateTo] = useState<string>("");
  const [vehicleType, setVehicleType] = useState<string>("");

  useEffect(() => {
    const storedUserData = localStorage.getItem("user");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  const [getVehicleTypes, { data: vehicleTypes }] =
    useLazyVehicleControllerGetAllVehicleTypesQuery();

  useEffect(() => {
    // getActiveVehicle();
    getVehicleTypes();
  }, [getVehicleTypes]);
  const [getUserTripsById, { data: userTripsById }] =
    useLazyTripControllerGetTripsByVehicleOwnerIdQuery<any>();

  useEffect(() => {
    if (userData) {
      // setIsLoading(true); // Set loading state
      getUserTripsById(userData.individual.userId).unwrap(); // Handle response or errors
      // .finally(() => setIsLoading(false)); // Reset loading state
    }
  }, [userData, getUserTripsById]);

  console.log(userTripsById);

  const data: any = Array.isArray(userTripsById?.data) // Check if it's an array
    ? userTripsById.data.map((trip: any) => {
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
        const destinationState =
          trip.finalBusStop?.locationCity?.locationState?.name || "N/A";
        const destinationPark = trip.departure?.city || "N/A";
        const departureCity = trip.departure?.city || "N/A";
        const departureAddress = trip.departure?.address || "N/A";
        const departurePhone = trip.departure?.phone || "N/A";
        const finalBusStop = trip.finalBusStop?.name || "N/A";
        const tripStatus = trip.status || "N/A";
        const tripCost = trip.cost || "N/A";
        const vehicleType = trip?.tripVehicle?.vehicleType?.category || "N/A";
        // Handle bookings status (combine statuses if multiple bookings exist)
        const bookingStatus = trip.bookings?.length
          ? trip.bookings.map((booking: any) => booking.status).join(", ")
          : "N/A";
        return {
          departureCity,
          destinationState,
          destinationPark,
          departureDate,
          departureTime,
          departureAddress,
          departurePhone,
          finalBusStop,
          bookingStatus,
          tripStatus,
          tripCost,
          vehicleType,
        };
      })
    : [];

  const filteredData = data.filter((row) => {
    const matchesType = !vehicleType || row.vehicleType === vehicleType;
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

    return matchesType && matchesDateFrom && matchesDateTo;
  });

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

  // Define columns with correct types
  const columns: Column[] = [
    {
      title: "Destination Park",
      field: "destinationPark",
      // headerStyle: { textAlign: "center" } as React.CSSProperties,
      // cellStyle: { textAlign: "center" } as React.CSSProperties,
      // render: (rowData) => <div className="">{rowData.departureCity}</div>,
    },
    {
      title: "Destination State",
      field: "destinationState",
      // headerStyle: {  textAlign: "center" } as React.CSSProperties,
      // cellStyle: { paddingLeft: "2%" } as React.CSSProperties,
    },
    {
      title: "Trip Code",
      field: "tripCode",
      // headerStyle: {  textAlign: "center" } as React.CSSProperties,
      // cellStyle: { paddingLeft: "2%" } as React.CSSProperties,
      // render: (rowData) => (
      //   <div className="whitespace-nowrap">{rowData.engine_no}</div>
      // ),
    },
    {
      title: "Date",
      field: "departureDate",
      // headerStyle: {  textAlign: "center" } as React.CSSProperties,
      // cellStyle: { paddingLeft: "2%" } as React.CSSProperties,
      // render: (rowData) => <div className="">{rowData.provider_agency}</div>,
    },
    {
      title: "Time",
      field: "departureTime",
      // headerStyle: {  textAlign: "center"} as React.CSSProperties,
      // cellStyle: { paddingLeft: "2%" } as React.CSSProperties,
      // render: (rowData) => (
      //   <div className="">
      //     <h5 className="">{rowData.date}</h5>
      //   </div>
      // ),
    },
    {
      title: "Vehicle Type",
      field: "vehicleType",
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
        const index = data.findIndex(
          (row) => row.departureCity === rowData.departureCity
        );

        return (
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

  // const data = [
  //   {
  //     id: 1,
  //     park: "Alimosho",
  //     time: "09:00 AM",
  //     state: "Lagos",
  //     code: "94837748",
  //     vehicle_type: "MBus",
  //     fare: "2000",
  //     status: "Fully Booked",
  //     date: "21/05/2024",
  //   },
  //   {
  //     id: 2,
  //     park: "Alimosho",
  //     time: "09:00 AM",
  //     state: "Lagos",
  //     code: "94837748",
  //     vehicle_type: "MBus",
  //     fare: "2000",
  //     status: "2 Seats Left",
  //     date: "21/05/2024",
  //   },
  //   {
  //     id: 3,
  //     park: "Alimosho",
  //     time: "09:00 AM",
  //     state: "Lagos",
  //     code: "94837748",
  //     vehicle_type: "MBus",
  //     fare: "2000",
  //     status: "Fully Booked",
  //     date: "21/05/2024",
  //   },
  //   {
  //     id: 4,
  //     park: "Alimosho",
  //     time: "09:00 AM",
  //     state: "Lagos",
  //     code: "94837748",
  //     vehicle_type: "MBus",
  //     fare: "2000",
  //     status: "2 Seats Left",
  //     date: "21/05/2024",
  //   },
  // ];
  return (
    <div>
      {/* <table className="w-full text-[18px] text-center  ">
        <thead className="text-[18px] text-primary bg-gray-50 ">
          <tr>
        
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
      </div> */}
      <div className="flex flex-col    gap-2">
        <div className="grid md:grid-cols-12 items-center gap-4">
          <div className="col-span-5">
            <div></div>
          </div>
          {/* <div></div> */}
          <div className="col-span-7">
            <div className="mb-5 flex gap-6 w-full">
              <select
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
              </select>
              <div className="flex items-center w-full gap-3">
                {/* <label
                  className="whitespace-nowrap text-[#2B2C2B] text-[14px] font-[300] "
                  htmlFor="last_name"
                >
                  Date From
                </label> */}

                <input
                  type="date"
                  className="block text-[14px] font-[300] h-12 border px-3 rounded-md focus:outline-primary"
                  value={dateFrom}
                  onChange={(e) => setDateFrom(e.target.value)}
                />
              </div>
              <div className="flex items-center w-full gap-3">
                {/* <label
                  className="whitespace-nowrap text-[#2B2C2B] text-[14px] font-[300] "
                  htmlFor="last_name"
                >
                  Date To
                </label> */}
                <input
                  type="date"
                  className="block text-[14px] font-[300] h-12 border px-3 rounded-md focus:outline-primary"
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
          modal: "rounded-[10px] overflow-hidden relative",
        }}
        open={openDetails}
        onClose={onCloseDetailsModal}
        center
      >
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
                <h4 className="text-blackText text-[20px]">Vehicle Type:</h4>
                <h4 className="text-primary text-[20px]">Bus</h4>
              </div>

              <div className="flex gap-2">
                <h4 className="text-blackText text-[20px]">
                  Vehicle plate number:
                </h4>
                <h4 className="text-primary  text-[20px]">AD 234567543</h4>
              </div>

              <div className="flex gap-2">
                <h4 className="text-blackText text-[20px]">Vehicle color:</h4>
                <h4 className="text-primary text-[20px]">Blue</h4>
              </div>
              <div className="flex gap-2 ">
                <h4 className="text-blackText text-[20px]">Trip Code:</h4>
                <h4 className="text-primary text-[20px]">345</h4>
              </div>
            </div>

            <div className="mt-3">
              <div className="flex gap-2 mt-2">
                <h4 className="text-blackText text-[20px]">Departure Park:</h4>
                <h4 className="text-primary text-[20px]">Sagamu</h4>
              </div>

              <div className="flex gap-2">
                <h4 className="text-blackText text-[20px]">Departure Time:</h4>
                <h4 className="text-primary text-[20px]">14:00 PM</h4>
              </div>

              <div className="flex gap-2">
                <h4 className="text-blackText text-[20px]">Arrival State:</h4>
                <h4 className="text-primary text-[20px]">Abuja</h4>
              </div>
              <div className="flex gap-2 ">
                <h4 className="text-blackText text-[20px]">Arrival City:</h4>
                <h4 className="text-primary text-[20px]">Lagos</h4>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        classNames={{
          modal: "rounded-[10px] overflow-visible relative",
        }}
        open={openEarnings}
        onClose={onCloseEarningsModal}
        center
      >
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
