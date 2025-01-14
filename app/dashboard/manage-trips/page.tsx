"use client"; // Add this for client components in the Next.js app directory
import DashboardLayout from "@/components/Layout";
import React from "react";
import BreadcrumbsDisplay from "../BreadscrumbsDisplay";
import TripsRecordTable from "./TripsRecordTable";

const page = () => {

  return (
    <DashboardLayout>
      <div className="bg-white overflow-hidden rounded-[8px] px-3 md:px-8 py-7 md:py-9">
        <BreadcrumbsDisplay />

        <h5 className="text-blackText text-[20px] py-4 ">
          These are all your Trips records
        </h5>
        <section className="overflow-hidden overflow-x-scroll">
          {/* <div className="flex flex-col  gap-2">
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
          </div> */}
          <div>
            <TripsRecordTable />
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
};

export default page;
