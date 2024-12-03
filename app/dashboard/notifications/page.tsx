import DashboardLayout from "@/components/Layout";
import React from "react";
import EachNotification from "./EachNotification";
import BreadcrumbsDisplay from "../BreadscrumbsDisplay";

function Notificationpage() {
  
  return (
    <DashboardLayout>
      <div className="bg-white overflow-hidden rounded-[8px] px-3 md:px-8 py-7 md:py-9">
        <BreadcrumbsDisplay />
        <div className="grid lg:grid-cols-12 mt-10">
          <div className="lg:col-span-10 ">
          <div className="flex flex-col gap-6">
  {[
    { id: 1, text: "Gbenro vehicle enrollment has been accepted", date: "Sep 10,22" },
    { id: 2, text: "Your trip to Sagamu Park has been completed", date: "Sep 10,22" },
    { id: 3, text: "Gbenro vehicle enrollment has been accepted", date: "Sep 10,22" },
  ].map((notification, index) => (
    <EachNotification
      key={notification.id || index}
      text={notification.text}
      date={notification.date}
    />
  ))}
</div>

          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Notificationpage;
