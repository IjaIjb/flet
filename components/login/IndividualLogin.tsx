import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import * as Yup from "yup";
import Button from "../UI/Button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useAuthControllerLoginMutation } from "@/store/api";
import LoadingSpinner from "../UI/LoadingSpinner";

interface LoginValues {
  email: string;
  password: string;
}

const IndividualLogin = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const [login, { isLoading, isSuccess }] =
    useAuthControllerLoginMutation();

  const initialData = {
    email: "",
    password: "",
    remember: false,
  };

  const validation = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .max(255)
      .required("Required"),
  });

  const onSubmit = async (values: LoginValues) => {
    try {
      const response = await login(values).unwrap();
      console.log(response);
      if (isSuccess) {
        router.push("/dashboard/home");
      }
    } catch (error) {
      console.error("Login error: ", error);
    }
  };

  return (
    <div className="pt-10">
      <div className="mb-10">
        <h3 className="text-[#1A1A1A] text-[18px] lg:text-[24px] font-light">
          Welcome to <span className="text-[#036E03] font-bold">Urban</span>
        </h3>
        <h5 className="text-[#121212] text-[28px] md:text-[34px] lg:text-[40px] font-extrabold">
          Login to your Account
        </h5>
      </div>

      <Formik
        initialValues={initialData}
        validationSchema={validation}
        onSubmit={onSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form className="w-full flex flex-col gap-6">
            {/* Email Field */}
            <div>
              <label
                className="block text-[#2B2C2B] md:text-[20px] text-[16px] font-medium"
                htmlFor="email"
              >
                E-mail
              </label>
              <Field
                className="mt-2 w-full h-12 border-[0.5px] rounded-[10px] pl-3 focus:outline-none border-[#D9D9D9]"
                name="email"
                type="email"
                id="email"
              />
              <p className="text-red-700 text-xs mt-1">
                <ErrorMessage name="email" />
              </p>
            </div>

            {/* Password Field */}
            <div>
              <label
                className="block text-[#2B2C2B] md:text-[20px] text-[16px] font-medium"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <Field
                  className="mt-2 w-full h-12 border-[0.5px] rounded-[10px] pl-3 focus:outline-none border-[#D9D9D9]"
                  name="password"
                  id="password"
                  type={!showPassword ? "password" : "text"}
                />
                <button
                  type="button"
                  aria-label="Toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-3"
                >
                  {!showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </button>
              </div>
              <p className="text-red-700 text-xs mt-1">
                <ErrorMessage name="password" />
              </p>
              <div className="flex justify-between mt-4">
                <div className="flex items-center gap-x-1">
                  <Field
                    type="checkbox"
                    name="remember"
                    id="remember"
                    checked={values.remember}
                    onChange={() => setFieldValue("remember", !values.remember)}
                  />
                  <label
                    className="text-[15px] font-normal text-[#958F8F]"
                    htmlFor="remember"
                  >
                    Remember me
                  </label>
                </div>
                <Link
                  href="/forget-password"
                  className="text-primary font-bold text-[15px] md:text-[20px]"
                >
                  Forget Password?
                </Link>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              text={isLoading ? <LoadingSpinner /> : "Login"}
              type="submit"
              disabled={isLoading}
            />

            {/* Register Link */}
            <p className="flex items-center justify-center gap-x-1 text-[#1A1A1A] text-[16px] md:text-[20px] font-normal">
              Don&apos;t have an account yet?
              <Link
                href="/register"
                className="text-primary font-bold hover:underline"
              >
                Register Here
              </Link>
            </p>

            {/* NDPC Complaint Section */}
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="border-2 p-2 rounded-full border-[#ECEBEB]">
                <div className="flex items-center px-3 gap-3">
                  <Image
                    src="/onboarding/ndpc.png"
                    alt="NDPC Logo"
                    width={45}
                    height={45}
                    priority
                  />
                  <h6 className="text-[#000000] text-[22px] font-bold">
                    NDPC <span className="font-normal">Complaint</span>
                  </h6>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default IndividualLogin;
