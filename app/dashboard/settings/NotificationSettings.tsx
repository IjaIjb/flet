import React, { memo } from "react";
import { RiNotification2Line } from "react-icons/ri";

const NotificationSettings = memo(() => {
  return (
    <div>
      <div className="border-[#D9D9D9] border rounded-[10px] px-5 py-4">
        <div className="flex items-center gap-2">
          <RiNotification2Line className="text-primary w-6 h-6" />
          {/* <MdOutlinePhoneInTalk /> */}
          <h5 className="text-primary text-[18px]">Notification Settings</h5>
        </div>

        <div className="mt-6 flex flex-col gap-5">
          <div className="flex gap-3">
            <label className="flex items-center cursor-pointer">
              <div className="relative">
                <input
                  type="checkbox"
                  //   checked={true}
                  //   onChange={() =>
                  //     handleSwitchChange(
                  //       rowData.id,
                  //       rowData.userData?.notificationID,
                  //       false
                  //     )
                  //   }
                  className="hidden"
                />
                <div className="toggle__line w-12 h-6 bg-primary rounded-full shadow-inner"></div>
                <div className="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-6"></div>
              </div>
            </label>
            <h5 className="text-[#141313]  font-light text-[16px]">
              Receive all Notifications
            </h5>
          </div>

          <div className="flex gap-3">
            <label className="flex items-center cursor-pointer">
              <div className="relative">
                <input type="checkbox" className="hidden" />
                <div className="toggle__line w-12 h-6 bg-primary rounded-full shadow-inner"></div>
                <div className="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-6"></div>
              </div>
            </label>
            <h5 className="text-[#141313]  font-light text-[16px]">
              Receive all Notifications
            </h5>
          </div>

          <div className="flex gap-3">
            <label className="flex items-center cursor-pointer">
              <div className="relative">
                <input
                  type="checkbox"
                  //   checked={true}
                  //   onChange={() =>
                  //     handleSwitchChange(
                  //       rowData.id,
                  //       rowData.userData?.notificationID,
                  //       false
                  //     )
                  //   }
                  className="hidden"
                />
                <div className="toggle__line w-12 h-6 bg-primary rounded-full shadow-inner"></div>
                <div className="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-6"></div>
              </div>
            </label>
            <h5 className="text-[#141313] font-light text-[16px]">
              Only Notifications for Trips
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
});
NotificationSettings.displayName = "NotificationSettings"; // Explicitly set displayName


export default NotificationSettings;
