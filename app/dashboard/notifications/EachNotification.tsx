import React from "react";
import Image from "next/image";

interface EachNotificationProps {
  text: string;
  date: string;
}
function EachNotification({ text, date }: EachNotificationProps)  {

  return (
    <div>
      <div className="bg-[#036E030F]/[6%] rounded-[10px] px-3 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            {/* <img src="/notification/Layer_x0020_1.svg" className="w-10 h-10 lg:w-14 lg:h-14" alt="" /> */}

            <div className="lg:hidden block">
            <Image
                    aria-hidden
                    src="/notification/Layer_x0020_1.svg"
                    alt="Window icon"
                    width={20}
                    height={20}
                  />
            </div>

            <div className="hidden lg:block">
            <Image
                    aria-hidden
                    src="/notification/Layer_x0020_1.svg"
                    alt="Window icon"
                    width={45}
                    height={45}
                  />
            </div>
            <h4 className="text-[14px] lg:text-[20px] text-blackText">{text}</h4>
          </div>
          <div className="">
            <h5 className="text-[10px] lg:text-[14px] text-blackText font-[300] ">{date}</h5>
            <h5 className="text-[10px] lg:text-[14px] text-blackText font-bold">Just Now</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachNotification;
