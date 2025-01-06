"use client"; // Add this for client components in the Next.js app directory
import DashboardLayout from "@/components/Layout";
import React, { useEffect, useState } from "react";
import BreadcrumbsDisplay from "../../BreadscrumbsDisplay";
import Image from "next/image";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import StatementTable from "./StatementTable";
import { useLazyVehicleControllerGetVehicleByIdQuery } from "@/store/api";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import LoadingSpinnerPage from "@/components/UI/LoadingSpinnerPage";

interface Vehicle {
  data: {
    vehicleType: {
      category: string;
    };
    plateNumber: string;
    providerAgency: string;
    totalRevenue: string;

    // Add other fields as needed
  };
}

interface VehiclesByIdResponse {
  data: Vehicle;
  // Add other properties based on your response structure
}

function VehicleStatement() {
    const [open, setOpen] = useState(false);
  const [vehicleId, setVehicleId] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false); // Manage loading state manually

  useEffect(() => {
    // Retrieve the vehicle ID from sessionStorage
    const storedId = localStorage.getItem("vehicleId");
    if (storedId) {
      setVehicleId(storedId);
    }
  }, []);

  const onOpenModal = () => {
    // e.preventDefault();
    setOpen(true);
  };
  const onCloseModal = () => setOpen(false);

  console.log(vehicleId);

  const [getVehicleById, { data: vehiclesById }] =
    useLazyVehicleControllerGetVehicleByIdQuery<VehiclesByIdResponse>();

  useEffect(() => {
    if (vehicleId) {
      setIsLoading(true); // Set loading state
      getVehicleById(vehicleId)
        .unwrap() // Handle response or errors
        .finally(() => setIsLoading(false)); // Reset loading state
    }
  }, [vehicleId, getVehicleById]);
  console.log(vehiclesById);

  useEffect(() => {
    if (isLoading) {
      onOpenModal();
    } else {
      onCloseModal();
    }
  }, [isLoading]);

  // console.log(vehiclesById)

  const initialData = {
    email: "",

    password: "",
    remember: "",
    documents: [
      { name: "", expiryDate: "", image: null }, // Ensure a default document exists
    ],
  };

  const validation = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(6, "Password must be minimum of 6 characters")
      .max(255)
      .required("Required"),
    documents: Yup.array().of(
      Yup.object().shape({
        name: Yup.string().required("Document name is required"),
        expiryDate: Yup.date().required("Expiry date is required"),
        image: Yup.mixed().required("Document upload is required"),
      })
    ),
  });

  const onSubmit = async () => {
    // e.preventDefault(); // Prevent default browser behavior
    console.log("Form submitted");
  };
  return (
    <div>
      <DashboardLayout>
      {isLoading ? null : (
        <div className="bg-white overflow-hidden rounded-[8px] px-3 md:px-8 py-7 md:py-9">
          <BreadcrumbsDisplay />
          <h5 className="text-[16px] md:text-[20px] pt-8 font-light mb-3">
            Vehicle Type:{" "}
            <span className="text-[18px] md:text-[20px] font-bold">
              {vehiclesById?.data?.vehicleType?.category}
            </span>
          </h5>
          <h5 className="text-[16px] md:text-[20px] font-light mb-3">
            Number Plate:{" "}
            <span className="text-[18px] md:text-[20px] font-bold text-primary">
              {vehiclesById?.data?.plateNumber}
            </span>
          </h5>
          <h5 className="text-[16px] md:text-[20px] font-light mb-4">
            Provider Agency:{" "}
            <span className="text-[18px] md:text-[20px] font-bold text-primary">
              {vehiclesById?.data?.providerAgency || "Nill"}
            </span>
          </h5>

          <section className="py-5">
            <div className="grid md:grid-cols-[auto_auto_auto] items-center gap-4">
              <div className="flex flex-col gap-3">
                <div className="flex gap-2 items-center">
                  <Image
                    aria-hidden
                    src="/dashboard/dashboardCar2.svg"
                    alt="Window icon"
                    width={40}
                    height={40}
                  />
                  <h4 className="text-[18px] md:text-[20px]  text-[#274871] font-light leading-[25px]">
                    Total Revenue
                  </h4>
                </div>

                <h4 className="text-[35px] md:text-[48px] text-[#274871] font-[500]">
                  ₦
                  {parseFloat(vehiclesById?.data?.totalRevenue ?? "0").toFixed(
                    2
                  )}
                </h4>
              </div>

              {/* <div className="md:block hidden"> */}
              <div className="h-full md:block hidden bg-gray-300 w-px"></div>
              {/* </div> */}
              {/* <div className=""> */}
              <div className="h-px block md:hidden bg-gray-300 w-full"></div>
              {/* </div> */}
              <div className="flex flex-col gap-3">
                <div className="flex gap-2 items-center">
                  <Image
                    aria-hidden
                    src="/dashboard/totalTrips.svg"
                    alt="Window icon"
                    width={40}
                    height={40}
                  />
                  <h4 className="text-[18px] md:text-[20px] text-[#C05406] font-light leading-[25px]">
                    Total Trips
                  </h4>
                </div>

                <h4 className="text-[35px] md:text-[48px] text-[#C05406] font-[500]">
                  0
                </h4>
              </div>
            </div>
          </section>

          <section className="overflow-hidden overflow-x-scroll">
            <div className="flex flex-col  gap-2">
              <Formik
                initialValues={initialData}
                validationSchema={validation}
                onSubmit={onSubmit}
              >
                {({}) => (
                  <Form className="w-full  mt-5 lg:mt-5 mb-6 flex flex-col justify-between">
                    <div className="">
                      <div className="mb-7  flex justify-between gap-2">
                        <input
                          type="text"
                          name="search"
                          // onChange={handleSearch}
                          className="px-2 rounded-[15px] h-12 border-[2px] border-primary placeholder:text-[#8A8181] text-sm font-light text-main bg-transparent bg-gray-200 bg-opacity-30 outline-none focus:border-gray-300/60"
                          // value={query}
                          placeholder="Search"
                        />
                        <div className="  relative">
                          <Field
                            className=" block w-full h-12 border-[1px] border-[#D9D9D94D] bg-[#D9D9D94D]/[30%]  px-3 rounded-[10px] focus:outline-primary "
                            name="vehicle_type"
                            as="select"
                            // type="tel"
                            // onChange={(event: any) => {
                            //   setFieldValue(
                            //     "vehicle_type",
                            //     event.target.value
                            //   );
                            // }}
                            placeholder="Select Vehicle Type"
                          >
                            <option label="Select Vehicle Type"></option>
                            <option className="" value="Bus (12)">
                              Bus
                            </option>
                            <option className="" value="M Bus (5)">
                              M Bus (5)
                            </option>
                            <option className="" value="Sedan (3)">
                              Sedan (3)
                            </option>
                          </Field>
                          <p className="text-red-700 text-xs mt-1 ">
                            <ErrorMessage name="last_name" />
                          </p>
                        </div>

                        <div className="  relative">
                          <Field
                            className=" block w-full h-12 border-[1px] border-[#D9D9D94D] bg-[#D9D9D94D]/[30%]  px-3 rounded-[10px] focus:outline-primary "
                            name="vehicle_type"
                            as="select"
                            // type="tel"
                            // onChange={(event: any) => {
                            //   setFieldValue(
                            //     "vehicle_type",
                            //     event.target.value
                            //   );
                            // }}
                            placeholder="Status"
                          >
                            <option label="Status">Status</option>
                            <option className="" value="Bus (12)">
                              Bus
                            </option>
                            <option className="" value="M Bus (5)">
                              M Bus (5)
                            </option>
                            <option className="" value="Sedan (3)">
                              Sedan (3)
                            </option>
                          </Field>
                          <p className="text-red-700 text-xs mt-1 ">
                            <ErrorMessage name="last_name" />
                          </p>
                        </div>
                        <div className="flex items-center gap-2  relative">
                          <label
                            className="whitespace-nowrap text-[#2B2C2B] text-[16px] font-[500] "
                            htmlFor="last_name"
                          >
                            Date From
                          </label>
                          <Field
                            className="block w-full h-12 border-[1px]  pl-3 rounded-[10px] focus:outline-none border-[#D9D9D94D] bg-[#D9D9D94D]/[30%] "
                            name="last_name"
                            type="date"
                            id="last_name"
                            placeholder=""
                          />
                          <p className="text-red-700 text-xs mt-1 ">
                            <ErrorMessage name="last_name" />
                          </p>
                        </div>

                        <div className="flex  items-center gap-2 relative">
                          <label
                            className="whitespace-nowrap text-[#2B2C2B] text-[16px] font-[500] "
                            htmlFor="last_name"
                          >
                            Date To
                          </label>
                          <Field
                            className=" block w-full h-12 border-[1px]  pl-3 rounded-[10px] focus:outline-none border-[#D9D9D94D] bg-[#D9D9D94D]/[30%] "
                            name="last_name"
                            type="date"
                            id="last_name"
                            placeholder=""
                          />
                          <p className="text-red-700 text-xs mt-1 ">
                            <ErrorMessage name="last_name" />
                          </p>
                        </div>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
            <div>
              <StatementTable />
            </div>
          </section>
        </div>
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
      </DashboardLayout>
    </div>
  );
}

export default VehicleStatement;
