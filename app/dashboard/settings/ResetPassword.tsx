"use client"; // Add this for client components in the Next.js app directory
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { AiFillLock, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import * as Yup from "yup";

const ResetPassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [confirmPassword, setShowConfirmPassword] = useState(false);
    const [newPassword, setShowNewPassword] = useState(false);
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
    
        // router.push("/dashboard/home"); // Replace with the actual path
    
        console.log("Form submitted");
      };
  return (
    <div>
    <div className="border-[#D9D9D9] border rounded-[10px] px-5 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
        <AiFillLock className="text-primary w-6 h-6"/>
          <h5 className="text-primary text-[18px]">Reset Password</h5>
        </div>

        <h5 className="text-primary text-[18px] underline">Edit</h5>
      </div>

      <div>
        <Formik
          initialValues={initialData}
          validationSchema={validation}
          onSubmit={onSubmit}
        >
          {({  }) => (
            <Form className="w-full  mt-10 lg:mt-10 mb-6 flex flex-col justify-between">
              <div>
              <div className=" mb-5 relative">
                          <label
                            className=" text-[#2B2C2B] text-[16px] font-[500] "
                            htmlFor="password"
                          >
                           Current Password
                          </label>
                          <div>
                            <Field
                              className="mt-2 block w-full h-12 border-[0.5px]  pl-3 rounded-[10px] focus:outline-none border-[#D9D9D9] "
                              name="password"
                              id="password"
                              type={!showPassword ? "password" : "text"}
                              placeholder=""
                            />
                            <button
                              type="button"
                              role="button"
                              aria-label="show password"
                              title=" show password"
                              onClick={() =>
                                setShowPassword(() => !showPassword)
                              }
                              className={`absolute right-4 top-12`}
                            >
                              {!showPassword ? (
                                <AiOutlineEyeInvisible className="" />
                              ) : (
                                <AiOutlineEye className="" />
                              )}
                            </button>
                          </div>
                          <p className="text-red-700 text-xs mt-1 ">
                            <ErrorMessage name="password" />
                          </p>
                        </div>

                        <div className=" mb-5 relative">
                          <label
                            className=" text-[#2B2C2B] text-[16px] font-[500] "
                            htmlFor="newPassword"
                          >
                           New Password
                          </label>
                          <div>
                            <Field
                              className="mt-2 block w-full h-12 border-[0.5px]  pl-3 rounded-[10px] focus:outline-none border-[#D9D9D9] "
                              name="newPassword"
                              id="newPassword"
                              type={
                                !newPassword ? "newPassword" : "text"
                              }
                              placeholder=""
                            />
                            <button
                              type="button"
                              role="button"
                              aria-label="show password"
                              title=" show password"
                              onClick={() =>
                                setShowNewPassword(() => !newPassword)
                              }
                              className={`absolute right-4 top-12`}
                            >
                              {!newPassword ? (
                                <AiOutlineEyeInvisible className="" />
                              ) : (
                                <AiOutlineEye className="" />
                              )}
                            </button>
                          </div>
                          <p className="text-red-700 text-xs mt-1 ">
                            <ErrorMessage name="newPassword" />
                          </p>
                        </div>

                        <div className=" mb-5 relative">
                          <label
                            className=" text-[#2B2C2B] text-[16px] font-[500] "
                            htmlFor="confirmPassword"
                          >
                            Confirm Password
                          </label>
                          <div>
                            <Field
                              className="mt-2 block w-full h-12 border-[0.5px]  pl-3 rounded-[10px] focus:outline-none border-[#D9D9D9] "
                              name="confirmPassword"
                              id="confirmPassword"
                              type={
                                !confirmPassword ? "confirmPassword" : "text"
                              }
                              placeholder=""
                            />
                            <button
                              type="button"
                              role="button"
                              aria-label="show password"
                              title=" show password"
                              onClick={() =>
                                setShowConfirmPassword(() => !confirmPassword)
                              }
                              className={`absolute right-4 top-12`}
                            >
                              {!confirmPassword ? (
                                <AiOutlineEyeInvisible className="" />
                              ) : (
                                <AiOutlineEye className="" />
                              )}
                            </button>
                          </div>
                          <p className="text-red-700 text-xs mt-1 ">
                            <ErrorMessage name="confirmPassword" />
                          </p>
                        </div>
        

              </div>

<div className="flex justify-end">
              <button
                onClick={onSubmit}
                // disabled={!selectedOption} // Disable button if no option is selected
                className={`py-3 w-fit px-6 bg-[#036E03] text-white rounded-lg  hover:bg-green-700
  }`}
              >
                Save
              </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  </div>
  )
}

export default ResetPassword