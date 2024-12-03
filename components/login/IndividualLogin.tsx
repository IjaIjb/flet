import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import * as Yup from "yup";
import Button from "../UI/Button";
import { useRouter } from "next/navigation";

const IndividualLogin = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const initialData = {
    email: "",
    password: "",
    // remember: localStorage.getItem("remember") === "true" ? true : false,
    remember: "",
  };

  const validation = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(6, "Password must be minimum of 6 characters")
      .max(255)
      .required("Required"),
  });

  const onSubmit = async () => {
    router.push("/dashboard/home");
  };

  return (
    <div>
      <div className="pt-[20px]">
        <div className="flex flex-col ">
          <h3 className="text-[#1A1A1A] text-[18px] lg:text-[24px] font-[300]">
            Welcome to <span className="text-[#036E03] font-[700]">Urban</span>
          </h3>
          <h5 className="text-[#121212] text-[28px] md:text-[34px] lg:text-[36px] font-[800]">
            Login to your Account
          </h5>
        </div>

        <Formik
          initialValues={initialData}
          validationSchema={validation}
          onSubmit={onSubmit}
        >
          {({ values, setFieldValue }) => (
            <Form className="w-full  mt-10 lg:mt-10 mb-6 flex flex-col justify-between">
              <div>
                <div className=" mb-7 relative">
                  <label
                    className=" text-[#2B2C2B] text-[16px] font-[500] "
                    htmlFor="email"
                  >
                    E-mail/Username
                  </label>
                  <Field
                    className="mt-2.5 block w-full h-12 border-[0.5px]  pl-3 rounded-[10px] focus:outline-none border-[#D9D9D9] "
                    name="email"
                    type="email"
                    id="email"
                    placeholder=""
                  />
                  <p className="text-red-700 text-xs mt-1 ">
                    <ErrorMessage name="email" />
                  </p>
                </div>
                <div className=" mb-2 relative">
                  <label
                    className=" text-[#2B2C2B] text-[16px] font-[500] "
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <div>
                    <Field
                      className="mt-2.5 block w-full h-12 border-[0.5px]  pl-3 rounded-[10px] focus:outline-none border-[#D9D9D9] "
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
                      onClick={() => setShowPassword(() => !showPassword)}
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
                  <div className="flex justify-between mt-4 mb-10">
                    <div className="flex items-center gap-x-1">
                      <Field
                        type="checkbox"
                        name="remember"
                        id="remember"
                        className=""
                        onChange={() => {
                          setFieldValue("remember", !values.remember);

                          // if (!values.remember) {
                          //   ge.setItem("remember", "true");
                          //   localStorage.setItem("username", `${values.email}`);
                          // } else {
                          //   localStorage.setItem("remember", "");
                          //   localStorage.setItem("username", ``);
                          // }
                        }}
                      />
                      <label
                        className=" text-[15px] font-normal text-[#958F8F] "
                        htmlFor="remember"
                      >
                        Remember me
                      </label>
                    </div>
                    <Link
                      className=" text-primary font-[600] text-[15px]"
                      href="/forget-password"
                    >
                      Forget Password?
                    </Link>
                  </div>
                </div>
              </div>
              <Button
                text={"Login"}
                // disabled={loading}
                type="submit"
              />
              <p className="pt-4 flex items-center text-[#1A1A1A] justify-center gap-x-1 text-sm ">
                Don&apos;t have an account yet?
                <Link
                  href={"/register"}
                  className="text-primary text-sm font-bold  hover:underline"
                >
                  Register Here
                </Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default IndividualLogin;
