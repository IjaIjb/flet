"use client"; // Add this for client components in the Next.js app directory

import { ReactNode, useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import SidebarPage from "./Sidebar";
import Header from "./shared/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    const router = useRouter();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);
  // const [showNotification, setShowNotification] = useState<boolean>(false);
  const [openM, setOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("auth_token");

    if (!token) {
      router.push("/");
      toast.error("Please login to access the dashboard.");
      
    }
  }, [router]);

  const onOpenModal = () => {
    // e.preventDefault();
    setOpen(true);
  };
  const onCloseModal = () => setOpen(false);

    useEffect(() => {
      // if (isLoading) {
        onOpenModal();
     
    }, []);
  // Toggle Side Drawer
  const toggleDrawer = () => {
    setOpenDrawer((prev) => !prev);
    setShowSideBar((prev) => !prev);
  };

  // open side Drawer
  const open = () => {
    setOpenDrawer(true);
    // setShowNotification(false);
  };

  return (
    <div className="flex w-full">
      {/* Sidebar */}
      <div
        className={`${
          openDrawer ? "w-0 xl:w-[310px]" : " hidden lg:block"
        } relative left-0 top-0 h-screen`}
      >
        <SidebarPage
          toggle={toggleDrawer}
          DrawerOpen={openDrawer}
          open={open}
        />
      </div>

      {/* Background shadow for sidebar */}
      {(showSideBar || openDrawer) && (
        <div
          className={`w-full h-full block lg:hidden bg-[#747380D1] opacity-[82%] z-[90] fixed top-0 left-0`}
          onClick={() => {
            setOpenDrawer(false);
            setShowSideBar(false);
          }}
        ></div>
      )}

      <div className="w-[100%] bg-[#EFEFEF] lg:px-0 px-3 h-screen overflow-y-scroll">
        <div className="pt-5 mb-7  sticky top-0 w-full backdrop-filter backdrop-blur-md">
          <div className="flex lg:block gap-5 left-0 justify-between  items-center">
            <button
              onClick={() => {
                // setShowNotification(false);
                setOpenDrawer(!openDrawer);
                setShowSideBar(!showSideBar);
              }}
              className="flex lg:hidden items-center gap-3"
            >
              {openDrawer ? (
                <AiOutlineClose className="w-4 h-4 md:w-6 md:h-6 font-bold" />
              ) : (
                <AiOutlineMenu className="w-4 h-4 md:w-6 md:h-6 font-bold" />
              )}
            </button>
            {/* <div></div> */}
            <div  className="lg:hidden w-full  lg:mx-[3%]  mx-[1%]">
            <Header />

            </div>
            <div  className="hidden lg:block  lg:mx-[3%]  mx-[1%]">
            <Header />

            </div>
          </div>
        </div>

        <div className="lg:mx-[3%]  mx-[1%] h-[calc(100vh-75px)] ">
          {/* <BreadcrumbsDisplay /> */}

          {/* Render children */}
          {children}
        </div>
        <Modal
  classNames={{
    modal: "rounded-[16px] overflow-visible relative bg-white shadow-lg p-8",
  }}
  open={openM}
  onClose={() => {}} // Disables close behavior
  closeOnOverlayClick={false} // Disables closing by clicking the overlay
  showCloseIcon={false} // Hides the close button
  center
>
  <div className="flex flex-col items-center justify-center text-center space-y-4">
    <h4 className="text-[#274871] text-[24px] font-bold uppercase tracking-wider">
      Coming Soon
    </h4>
    <p className="text-[#6B7280] text-[16px] font-medium max-w-[280px]">
      We’re working hard to bring this feature to you. Stay tuned for updates!
    </p>
  </div>
</Modal>


      </div>

           <ToastContainer
              position="top-center"
              autoClose={2000}
              hideProgressBar={true}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
    </div>
  );
};

export default DashboardLayout;
