"use client"; // Add this for client components in the Next.js app directory
import Image from "next/image";
import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
const RegisterPage = () => {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleBackClick = () => {
    router.back(); // Navigate to the previous page
  };

  const handleProceed = () => {
    if (selectedOption === "individual") {
      router.push("/register/individual"); // Replace with the actual path
    } else if (selectedOption === "corporate") {
      router.push("/register/corporate"); // Replace with the actual path
    }
  };
  return (
    <div className="w-full">
      <div className="grid lg:grid-cols-2 items-center gap-14 w-full h-full ">
        {/* Left Section */}
        <div className="w-full z-10 h-screen lg:block hidden relative">
          <div className="absolute h-screen z-10 object-cover w-full rounded-xl">
            {/* <img
              className="h-full z-10 object-cover w-full"
              src="/onboarding/transport-concept-parked-vehicles 1.svg"
              alt=""
            /> */}



  <Image
     className="h-full z-10 object-cover w-full"
                  src="/onboarding/transport-concept-parked-vehicles 1.svg"
    alt="Descriptive alt text"
    layout="fill"
    // objectFit="cover"
  />
          </div>
          <div className="flex items-center justify-center relative z-20 h-full">
            <div className="">
              <div className="bg-[#036E03]/[30%] rounded-t-[25px]">
                <div className="flex justify-center pt-14 pb-8">
     
                  <Image
            className=""
            src="/urban 1.png"
            alt="image"
            width={140}
            height={140}
            priority
          />
                </div>
              </div>
              <div className="relative">
                <div className="bg-[#036E03] md:pl-7 md:pr-6 md:pt-4 lg:pt-6 md:pb-10 lg:pb-14 rounded-b-[25px]">
                  <Image
                    className="h-full object-cover w-full"
                    src="/pattern.png"
                    alt="Descriptive alt text"
                    layout="fill"
                    // objectFit="cover"
                  />
                  <h4 className="text-white text-center md:text-[48px] font-[700] text-[36px] leading-[55px] max-w-[400px]">
                    Urban Experience Centre (UEC)
                  </h4>
                  <div className="flex py-10 justify-center">
                    <Image
                      className=""
                      src="/urban single logo.svg"
                      alt="image"
                      width={80}
                      height={80}
                      priority
                    />
                  </div>

                  <div className="flex items-center gap-4 justify-center">
                    <Image
                      className=""
                      src="/onboarding/blip.svg"
                      alt="image"
                      width={40}
                      height={40}
                      priority
                    />
                    <h5 className="text-[19.85px] text-white font-[200]">
                      Powered by <span className="font-[700]">BLIP LLC</span>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-[85%]">
          <div className="lg:hidden block">
            <div className="w-full   relative">
              <div className="absolute h-full object-cover w-full rounded-xl">
                {/* <img
                  className="h-full z-10 object-cover w-full"
                  src="/onboarding/transport-concept-parked-vehicles 1.svg"
                  alt=""
                /> */}

  <Image
     className="h-full  object-cover w-full"
                  src="/onboarding/transport-concept-parked-vehicles 1.svg"
    alt="Descriptive alt text"
    layout="fill"
    objectFit="cover"
  />
                <div className="overlay h-full absolute inset-0 bg-primary/[50%] "></div>
              </div>
              <div className="flex relative z-20 h-full justify-center text-center">
                <div className="flex justify-center text-center pt-14 pb-14">
             
                  <Image
            className=""
            src="/urban 1.png"
            alt="image"
            width={140}
            height={140}
            priority
          />
                </div>
              </div>
            </div>
          </div>
          <div className="px-8 pt-[40px]">
            <button
              type="button"
              onClick={handleBackClick}
              className="flex items-center text-gray-600 mb-4"
            >
              <FaArrowLeft className="" />
            </button>

            <div className="flex flex-col">
              <h5 className="text-[#121212] text-[28px] md:text-[34px] lg:text-[40px] font-[800]">
                Register as
              </h5>
              <h3 className="text-[#1A1A1A] text-[18px] lg:text-[24px] font-[300]">
                Please select any of the options below
              </h3>
            </div>

            <div className="flex flex-col pt-5 mb-8 gap-4 lg:gap-8">
              {/* Individual Card */}
              <div
                className={`shadow-xl px-4 border rounded-[8px] py-6 lg:py-8 cursor-pointer transition-all duration-300 ${
                  selectedOption === "individual"
                    ? "border-primary shadow-lg"
                    : "border-[#B3B6BA75]"
                }`}
                onClick={() => setSelectedOption("individual")}
              >
                <h3 className="text-[#1A1A1A] text-[20px] font-[400]">
                  Individual
                </h3>
              </div>

              {/* Corporate Partner Card */}
              <div
                className={`shadow-xl px-4 border rounded-[8px] py-6 lg:py-8 cursor-pointer transition-all duration-300 ${
                  selectedOption === "corporate"
                    ? "border-primary shadow-lg"
                    : "border-[#B3B6BA75]"
                }`}
                onClick={() => setSelectedOption("corporate")}
              >
                <h3 className="text-[#1A1A1A] text-[20px] font-[400]">
                  Corporate Partner
                </h3>
              </div>
            </div>

            {/* Proceed Button */}
            <button
              onClick={handleProceed}
              disabled={!selectedOption} // Disable button if no option is selected
              className={`py-4 w-full px-6 mb-7 bg-[#036E03] text-white rounded-lg ${
                !selectedOption
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-green-700"
              }`}
            >
              Proceed
            </button>
          </div>
        </div>
      </div>

      {/* <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div> */}
    </div>
  );
};

export default RegisterPage;
