"use client"; // <-- Add this line to ensure the component is client-side

import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { usePathname } from "next/navigation"; // The useRouter hook can be used in client-side components
import Image from "next/image";

type Props = {
  toggle: () => void;
  DrawerOpen: boolean;
  open: () => void;
};

const SidebarPage = (props: Props) => {
  const pathname = usePathname(); // Get the pathname using usePathname
  const pathnames = pathname.split("/").filter((x) => x);
  // const [showUser, setShowUser] = useState(false);

  // const drawerToggle = (section: string) => {
  //   section === "user" ? setShowUser((prev: any) => !prev) : setShowUser(false);
  // };

  // useEffect(() => {
  //   if (props.DrawerOpen === false) {
  //     setShowUser(false);
  //   }
  // }, [props.DrawerOpen]);

  return (
    <aside
      className={`${
        props.DrawerOpen ? "" : ""
      } relative w-[305px] z-[100] bg-primary px-8 border-r border-[#ECEDEF] h-full`}
    >
      <div className="flex items-center justify-between px-2 md:px-4">
        <div></div>
        <div className="flex justify-center mx-[14.5px] mt-8 py-4">
          <Link href={"/dashboard/home"}>
            <Image
              aria-hidden
              src="/urban 1.png"
              alt="Window icon"
              width={140}
              height={140}
            />
            {/* <img src={logo} alt="Logo" className="w-[100px] h-[37px]" /> */}
          </Link>
        </div>
        <button
          onClick={() => {
            // setShowInfoTag(false)
            props.toggle();
          }}
          className=""
        >
          {props.DrawerOpen ? (
            <AiOutlineClose className="w-4 h-4 md:w-6 md:h-6 font-bold text-white " />
          ) : (
            <AiOutlineMenu className="w-4 h-4 md:w-6 md:h-6  font-bold hidden " />
          )}
        </button>
      </div>

      <div className="mt-7 flex flex-col gap-3">
        <div className="">
          <div>
            <Link href={"/dashboard/home"} className="relative gap-1  ">
              <div
                className={`${
                  ["dashboard", "home"].every((ai) => pathnames.includes(ai))
                    ? "bg-[#FFFFFF] text-[#1A1A1A]"
                    : "bg-[#9F9F9F33] text-white"
                } gap-x-3 flex items-center px-6  rounded-[15px] py-[20px] `}
              >
                <Image
                  aria-hidden
                  src={
                    ["dashboard", "home"].every((ai) => pathnames.includes(ai))
                      ? "/dashboard/darhboard.svg"
                      : "/dashboard/darhboardWhite.svg"
                  }
                  alt="Window icon"
                  width={16}
                  height={16}
                />
                <h5 className="text-[16px] font-[500]  ">Dashboard</h5>
              </div>
            </Link>
          </div>
        </div>

        <div className="">
          <div>
            <Link href={"/dashboard/fleet"} className="relative gap-1  ">
              <div
                className={`${
                  ["dashboard", "fleet"].every((ai) => pathnames.includes(ai))
                    ? "bg-[#FFFFFF] text-[#1A1A1A]"
                    : "bg-[#9F9F9F33] text-white"
                } gap-x-3 flex items-center px-6  rounded-[15px] py-[20px] `}
              >
                <Image
                  aria-hidden
                  src={
                    ["dashboard", "fleet"].every((ai) => pathnames.includes(ai))
                      ? "/dashboard/car-side.svg"
                      : "/dashboard/car-sideWhite.svg"
                  }
                  alt="Window icon"
                  width={16}
                  height={16}
                />
                <h5 className="text-[16px] font-[500]  ">Fleet</h5>
              </div>
            </Link>
          </div>
        </div>

        <div className="">
          <div>
            <Link href={"/dashboard/manage-trips"} className="relative gap-1  ">
              <div
                className={`${
                  ["dashboard", "manage-trips"].every((ai) =>
                    pathnames.includes(ai)
                  )
                    ? "bg-[#FFFFFF] text-[#1A1A1A]"
                    : "bg-[#9F9F9F33] text-white"
                } gap-x-3 flex items-center px-6  rounded-[15px] py-[20px] `}
              >
                <Image
                  aria-hidden
                  src={
                    ["dashboard", "manage-trips"].every((ai) =>
                      pathnames.includes(ai)
                    )
                      ? "/dashboard/Line_fill.svg"
                      : "/dashboard/Line_fillWhite.svg"
                  }
                  alt="Window icon"
                  width={16}
                  height={16}
                />
                <h5 className="text-[16px] font-[500]  ">Trips</h5>
              </div>
            </Link>
          </div>
        </div>

        <div className="">
          <div>
            <Link href={"/dashboard/notifications"} className="relative gap-1  ">
              <div
                className={`${
                  ["dashboard", "notifications"].every((ai) =>
                    pathnames.includes(ai)
                  )
                    ? "bg-[#FFFFFF] text-[#1A1A1A]"
                    : "bg-[#9F9F9F33] text-white"
                } gap-x-3 flex items-center px-6  rounded-[15px] py-[20px] `}
              >
                <Image
                  aria-hidden
                  src={
                    ["dashboard", "notifications"].every((ai) =>
                      pathnames.includes(ai)
                    )
                      ? "/dashboard/bell-alt.svg"
                      : "/dashboard/bell-altWhite.svg"
                  }
                  alt="Window icon"
                  width={16}
                  height={16}
                />
                <h5 className="text-[16px] font-[500]  ">Notifications</h5>
              </div>
            </Link>
          </div>
        </div>

        <div className="">
          <div>
            <Link href={"/dashboard/settings"} className="relative gap-1  ">
              <div
                className={`${
                  ["dashboard", "settings"].every((ai) =>
                    pathnames.includes(ai)
                  )
                    ? "bg-[#FFFFFF] text-[#1A1A1A]"
                    : "bg-[#9F9F9F33] text-white"
                } gap-x-3 flex items-center px-6  rounded-[15px] py-[20px] `}
              >
                <Image
                  aria-hidden
                  src={
                    ["dashboard", "settings"].every((ai) =>
                      pathnames.includes(ai)
                    )
                      ? "/dashboard/gear-alt.svg"
                      : "/dashboard/gear-altWhite.svg"
                  }
                  alt="Window icon"
                  width={16}
                  height={16}
                />
                <h5 className="text-[16px] font-[500]  ">Settings</h5>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SidebarPage;
