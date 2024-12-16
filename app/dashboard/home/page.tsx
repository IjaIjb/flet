"use client"; // Add this for client components in the Next.js app directory
import DashboardLayout from "@/components/Layout";
import React, { useEffect, useState } from "react";
import BreadcrumbsDisplay from "../BreadscrumbsDisplay";
import Image from "next/image";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import ActiveFleet from "../fleet/ActiveFleet";

interface UserData {
  id: string;
  name: string;
  email: string;
  individual?: boolean;
  // Add other fields that exist in the user data object
}

const Page = () => {
  const initialData = {
    email: "",

    password: "",
    remember: "",
    documents: [
      { name: "", expiryDate: "", image: null }, // Ensure a default document exists
    ],
  };
  const [userData, setUserData] = useState<UserData | null>(null);
  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);
console.log(userData)
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
    <DashboardLayout>
      <div className="bg-white overflow-hidden rounded-[8px] px-3 md:px-8 py-7 md:py-9">
        <BreadcrumbsDisplay />
        <h5 className="md:text-[20px] text-[16px] font-light mb-4">
          Account Type: <span className="font-[500]">{userData?.individual ? "Individual" : "Corporate"}</span>
        </h5>

        <div className="bg-primary rounded-[10px] overflow-hidden">
          <div className="flex justify-between items-center">
            <div className=" py-3 md:py-4 pl-3 pr-3 md:pl-6 md:pr-0 text-white ">
              <div className="flex flex-col gap-3">
                <div className="flex gap-2 items-center">
                <div className="md:block hidden">
                <Image
                    aria-hidden
                    src="/dashboard/dashboardCar.svg"
                    alt="Window icon"
                    width={40}
                    height={40}
                  />
                </div>

                <div className="block md:hidden">
                <Image
                    aria-hidden
                    src="/dashboard/dashboardCar.svg"
                    alt="Window icon"
                    width={30}
                    height={30}
                  />
                </div>
          
                  <h4 className=" text-[18px] md:text-[24px] font-light leading-[25px]">
                    Total Revenue Generated
                  </h4>
                </div>

                <h4 className=" text-[35px] md:text-[48px] font-[700]">N345,000.00</h4>
              </div>
            </div>
            <div className="md:block hidden">
              {/* <img src="/dashboard/Group 20.svg" alt="Logo" className="" /> */}
              {/* <div className="relative w-full h-64"> */}
  <Image
    src="/dashboard/Group 20.svg"
    alt="Descriptive alt text"
    className="h-full w-full"

    width={100}
            height={100}
            priority
  />
{/* </div> */}
            </div>
          </div>
        </div>

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
                <h4 className="text-[18px]  md:text-[24px]  text-[#274871] font-light leading-[25px]">
                  Total Fleets
                </h4>
              </div>

              <h4 className="text-[35px] md:text-[48px] text-[#274871] font-[500]">234</h4>
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
                <h4 className="text-[18px] md:text-[24px] text-[#C05406] font-light leading-[25px]">
                  Total Trips
                </h4>
              </div>

              <h4 className="text-[35px] md:text-[40px] text-[#C05406] font-[500]">109</h4>
            </div>
          </div>
        </section>

        <section className="overflow-hidden overflow-x-scroll">
          <div className="flex flex-col    gap-2">
            <Formik
              initialValues={initialData}
              validationSchema={validation}
              onSubmit={onSubmit}
            >
              {({  }) => (
                <Form className="w-full  mt-5 md:mt-5  flex flex-col justify-between">
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
         <ActiveFleet />
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
};

export default Page;
