import DashboardLayout from "@/components/Layout";
import React from "react";
import BreadcrumbsDisplay from "../BreadscrumbsDisplay";
import Profile from "./Profile";
import ResetPassword from "./ResetPassword";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { BsChatRightText } from "react-icons/bs";
import NotificationSettings from "./NotificationSettings";

const Settingspage = () => {
  return (
    <DashboardLayout>
      <div className="bg-white overflow-hidden rounded-[8px] px-3 md:px-8 py-7 md:py-9">
        <BreadcrumbsDisplay />
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <div className="flex flex-col gap-6">
            <Profile />

            <div className="border-[#D9D9D9] border rounded-[10px] px-5 py-4">
              <div className="flex items-center gap-2">
                <MdOutlinePhoneInTalk className="text-primary w-6 h-6" />
                <h5 className="text-primary  md:text-[20px] text-[18px]">Request Help</h5>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <ResetPassword />
            <NotificationSettings />
            <div className="border-[#D9D9D9] border rounded-[10px] px-5 py-4">
              <div className="flex items-center gap-2">
                <BsChatRightText className="text-primary w-6 h-6" />
                <h5 className="text-primary  md:text-[20px] text-[18px]">Terms And Condition</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settingspage;
