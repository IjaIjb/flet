"use client"; // Ensure this is a client component

import React from "react";
import { usePathname } from "next/navigation"; // Use usePathname to get the pathname
import { FaArrowLeft } from "react-icons/fa";
import { capitalizeFirstLetter } from "@/components/utils/stringHelpers";

const BreadcrumbsDisplay = () => {
  const pathname = usePathname(); // Get the pathname using usePathname
  const pathnames = pathname.split("/").filter((x) => x && x !== "dashboard"); // Remove the "dashboard" segment

  const handleNavigateBack = () => {
    window.history.back(); // Navigate back in history
  };

  const lastPathname = pathnames[pathnames.length - 1]; // Get the last path segment

  return (
    <div className="pb-2 text-[#121212] flex items-center gap-4">
      {!pathname.includes("/dashboard/home") && (
        <div className="cursor-pointer" onClick={handleNavigateBack}>
          <FaArrowLeft />
        </div>
      )}

      <div>
      <h1 className="font-[700] md:text-[24px] text-[18px] leading-4 text-[#121212]">
          {lastPathname
            ? capitalizeFirstLetter(
                lastPathname.split("%20").join(" ").toLowerCase() === "home"
                  ? "dashboard"
                  : lastPathname.split("%20").join(" ")
              )
            : "Dashboard"}{" "}
          {/* Replace "Home" with "Dashboard" */}
        </h1>
      </div>
    </div>
  );
};

export default BreadcrumbsDisplay;
