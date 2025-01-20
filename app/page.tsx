// ClientComponent.tsx
"use client";
import CorporateLogin from "../components/login/CorporateLogin";
import IndividualLogin from "../components/login/IndividualLogin";
import Image from "next/image";
import React, { useState } from "react";
export default function Home() {
  const initialAccountState = {
    individualElement: true,
    corpoarateElement: false,
  };

  const [accountValues, setAccountValues] = useState({
    ...initialAccountState,
  });

  const handleIndividualState = () => {
    // e.preventDefault();
    setAccountValues({
      individualElement: true,
      corpoarateElement: false,
    });
  };

  const handleCorporateState = () => {
    // e.preventDefault();
    setAccountValues({
      individualElement: false,
      corpoarateElement: true,
    });
  };

  const showProfileConnector = () => {
    return (
      <>
        {/* show payout */}
        {accountValues.individualElement && (
          <>
            <div className="">
              <IndividualLogin />
            </div>
          </>
        )}

        {/* show payout request */}
        {accountValues.corpoarateElement && (
          <>
            <div className="">
              <CorporateLogin />
            </div>
          </>
        )}
      </>
    );
  };

  return (
    <div className="w-full">
      <div className="grid lg:grid-cols-2 gap-14 items-center w-full h-screen ">
        {/* Left Section */}
        <div className="w-full z-10 h-screen lg:block hidden relative">
          <div className="absolute h-screen z-10 object-cover w-full rounded-xl">
            {/* <img
              className="h-full z-10 object-cover w-full"
              src="/onboarding/urbanFleetRegBg.jpg"
              alt=""
            /> */}

            <Image
              className="h-full z-10 object-cover w-full"
              src="/onboarding/urbanFleetRegBg.jpg"
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
                  {/* </div> */}
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
                    Urban Fleet Partners (UFP)
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
        <div className="w-full  scrollbar-hide lg:w-[85%] ">
          {/* <div className="lg:hidden block">
            <div className="w-full   relative">
              <div className="absolute h-full  object-cover w-full rounded-xl">
            

                <Image
                  className="h-full object-cover w-full"
                  src="/onboarding/urbanFleetRegBg.jpg"
                  alt="Descriptive alt text"
                  layout="fill"
                  // objectFit="cover"
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
          </div> */}
          <div className=" bg-white px-8 ">
           <div className="sticky top-[40px] z-20 bg-white">

            <div className="bg-[#6CC56C2E]/[18%] w-full flex gap-4 rounded-full p-2">
              <div
                className={`${
                  accountValues.individualElement
                    ? "bg-[#036E03] rounded-full text-[16px] lg:text-[20px] text-white "
                    : "border-b-[0]"
                }  text-center  hover:text-white w-full py-2 inline-block text-[16px] lg:text-[20px] font-semibold hover:rounded-full hover:bg-[#036E03]/[80%] cursor-pointer`}
                onClick={() => handleIndividualState()}
              >
                Individual
              </div>

              <div
                className={`${
                  accountValues.corpoarateElement
                    ? "bg-[#036E03] rounded-full text-[20px] text-white "
                    : "border-b-[0]"
                } text-center w-full py-1 inline-block text-[20px] font-semibold hover:text-white hover:rounded-full hover:bg-[#036E03]/[80%] cursor-pointer`}
                onClick={() => handleCorporateState()}
              >
                Corporate
              </div>
            </div>
            </div>

            <div className="md:h-full h-full scrollbar-hide mt-[30px]  overflow-y-scroll">{showProfileConnector()}</div>

     
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
}
