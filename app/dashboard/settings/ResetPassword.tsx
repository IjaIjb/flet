"use client"; // Add this for client components in the Next.js app directory
import { useAuthControllerRequestPasswordResetMutation } from "@/store/api";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { AiFillLock, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [userData, setUserData] = useState<any>(null);
  
    useEffect(() => {
      const storedUserData = localStorage.getItem("user");
      if (storedUserData) {
        setUserData(JSON.parse(storedUserData));
      }
    }, []);
    
  const [resetPassword, { isLoading }] = useAuthControllerRequestPasswordResetMutation();

  const initialData = {
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    currentPassword: Yup.string()
      .min(6, "Password must be a minimum of 6 characters")
      .max(255)
      .required("Required"),
    newPassword: Yup.string()
      .min(6, "Password must be a minimum of 6 characters")
      .max(255)
      .required("Required"),
    confirmPassword: Yup.string()
      .nullable() // Allow null values
      .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
      .required("Required"),
  });
  

  const onSubmit = async (values: typeof initialData, { resetForm }: any) => {
    try {
      // const { newPassword } = values;
  
      // Retrieve the token from localStorage
      const token = localStorage.getItem("auth_token");
      if (!token) {
        alert("No authentication token found. Please log in again.");
        return;
      }
  
      const payload = {
        email: userData?.email,
      };
  
      await resetPassword(payload).unwrap();
      toast.success("Password reset successful!");
      resetForm();
    } catch (error: any) {
      console.error("Error resetting password:", error);
      toast.error("Failed to reset password. Please try again.");
    }
  };
  

  return (
    <div>
      <div className="border-[#D9D9D9] border rounded-[10px] px-5 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AiFillLock className="text-primary w-6 h-6" />
            <h5 className="text-primary md:text-[20px] text-[18px]">Reset Password</h5>
          </div>
        </div>

        <Formik
          initialValues={initialData}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="w-full mt-10 lg:mt-10 mb-6 flex flex-col justify-between">
              <div className="mb-5 relative">
                <label
                  className="text-[#2B2C2B] text-[16px] font-[500]"
                  htmlFor="currentPassword"
                >
                  Current Password
                </label>
                <div>
                  <Field
                    className="mt-2 block w-full h-12 border-[0.5px] pl-3 rounded-[10px] focus:outline-none border-[#D9D9D9]"
                    name="currentPassword"
                    id="currentPassword"
                    type={showPassword ? "text" : "password"}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-4 top-12"
                  >
                    {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                  </button>
                </div>
                <p className="text-red-700 text-xs mt-1">
                  <ErrorMessage name="currentPassword" />
                </p>
              </div>

              <div className="mb-5 relative">
                <label
                  className="text-[#2B2C2B] text-[16px] font-[500]"
                  htmlFor="newPassword"
                >
                  New Password
                </label>
                <div>
                  <Field
                    className="mt-2 block w-full h-12 border-[0.5px] pl-3 rounded-[10px] focus:outline-none border-[#D9D9D9]"
                    name="newPassword"
                    id="newPassword"
                    type={showNewPassword ? "text" : "password"}
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword((prev) => !prev)}
                    className="absolute right-4 top-12"
                  >
                    {showNewPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                  </button>
                </div>
                <p className="text-red-700 text-xs mt-1">
                  <ErrorMessage name="newPassword" />
                </p>
              </div>

              <div className="mb-5 relative">
                <label
                  className="text-[#2B2C2B] text-[16px] font-[500]"
                  htmlFor="confirmPassword"
                >
                  Confirm Password
                </label>
                <div>
                  <Field
                    className="mt-2 block w-full h-12 border-[0.5px] pl-3 rounded-[10px] focus:outline-none border-[#D9D9D9]"
                    name="confirmPassword"
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    className="absolute right-4 top-12"
                  >
                    {showConfirmPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                  </button>
                </div>
                <p className="text-red-700 text-xs mt-1">
                  <ErrorMessage name="confirmPassword" />
                </p>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting || isLoading}
                  className="py-3 px-6 bg-[#036E03] text-white rounded-lg hover:bg-green-700"
                >
                  {isSubmitting || isLoading ? "Saving..." : "Save"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
            <ToastContainer
                      position="top-center"
                      autoClose={2000}
                      hideProgressBar={true}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                    />
          
    </div>
  );
};

export default ResetPassword;
