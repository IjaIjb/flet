import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IoIosInformationCircle } from "react-icons/io";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { logoutUser } from "@/store/redux/actions/AuthAction";
import { useAppDispatch } from "@/store/redux/store";

// Define the structure of user data
interface UserData {
  individual?: {
    firstname: string;
    avatar: string;
  };
  corporateBody?: {
    companyName: string;
    avatar: string;
  };
  status?: string;
}

const Header = () => {
  const dispatch = useAppDispatch(); // Access `dispatch`
    const router = useRouter();
  
    const [open, setOpen] = useState(false);
  
    const onOpenModal = () => {
      // e.preventDefault();
      setOpen(true);
    };
    const onCloseModal = () => setOpen(false);
  
    const handleDetails = () => {
      onOpenModal(); // Open the modal
    };

    const [userData, setUserData] = useState<UserData | null>(null);
   
  
    useEffect(() => {
    
          const storedUserData = localStorage.getItem("user");
          if (storedUserData) {
            setUserData(JSON.parse(storedUserData));
          }
     
     
    }, []);
  
      
      // console.log(userData)
    const handleLogout = () => {
      dispatch(logoutUser());
      // Clear user data from localStorage
      localStorage.removeItem("auth_token");
      localStorage.removeItem("user");
    
      // Redirect to login page
      router.push("/");
    
      toast.success("You have successfully logged out.");
    };
    
  return (
    <div className="">
      {/* desktop screen */}
      {/* {loading ? (
        <div className="flex justify-center items-center h-screen">
        loading...
        </div>
      ) : ( */}
      <div className="lg:flex hidden justify-between items-center gap-[150px] ">
        <div className="flex items-center gap-2">
        {userData?.individual?.avatar ? (
    <div
    className="rounded-full overflow-hidden bg-gray-200"
    style={{ width: 60, height: 60 }}
  >
    <Image
      src={userData.individual.avatar}
      alt="person icon"
      className="object-cover w-full h-full"
      width={60}
      height={60}
    />
  </div>
) : userData?.corporateBody?.avatar ? (
  <div
  className="rounded-full overflow-hidden bg-gray-200"
  style={{ width: 60, height: 60 }}
>
  <Image
    src={userData.corporateBody?.avatar}
    alt="person icon"
    className="object-cover w-full h-full"
    width={60}
    height={60}
  />
</div>
) : 
(
  // <div className="rounded-full bg-gray-200" style={{ width: 60, height: 60 }} />

  <div className="  shadow animate-pulse rounded-full" >
  <div style={{ width: 60, height: 60 }} className="rounded-full bg-gray-200">

  </div>

  <span className="sr-only">Loading...</span>
</div>
)}
          <div className="flex flex-col leading-[24px]">
            <h4 className="text-[#1A1A1A]  text-[20px] font-light ">Hello</h4>
            {userData?.individual ?        
            <h4 className="text-primary whitespace-nowrap font-[400] text-[20px]">
              {userData?.individual?.firstname}
            </h4>
             : userData?.corporateBody ?
             <h4 className="text-primary whitespace-nowrap font-[400] text-[20px]">
             {userData?.corporateBody?.companyName}
           </h4>
           : 
           <div className=" shadow animate-pulse rounded-full " >
           <div className="flex justify-center items-center h-4 w-[100px] bg-gray-200 rounded-full ">
         
           </div>
         
           <span className="sr-only">Loading...</span>
         </div>
             }
          </div>
        </div>

        <div className="flex md:mt-0 mt-2 w-full  gap-4 items-center">
         {userData?.status == "ACTIVE" ? (
            <div className="rounded-full w-full bg-[#6CC56C30]/[19%]  px-2 py-3  ">
            <div className="flex gap-2 w-full items-center">
            <IoIosInformationCircle className="w-5 h-5 text-primary" />
           
              <h5 className="text-primary text-[14px] font-light">
                Account is has been Verified
              </h5>
            </div>
          </div>
        ) : userData?.status == "INACTIVE" ? (
          <div className="rounded-full w-full bg-[#F22D351A]/[10%]  px-2 py-3  ">
          <div className="flex gap-2 w-full items-center">
          <IoIosInformationCircle className="w-5 h-5 text-[#F22D35]" />
         
          
            <h5 className="text-[#FF4848] text-[14px] font-light">
              Account is yet to be Approved
            </h5>
          </div>
        </div>
        ) : (
          <div className="rounded-full w-full h-10 bg-gray-200 animate-pulse shadow  px-2 py-3  ">
          {/* <div className="flex gap-2 w-full items-center">
          <IoIosInformationCircle className="w-5 h-5 text-[#F22D35]" />
         
          
            <h5 className="text-[#FF4848] text-[14px] font-light">
              Account is yet to be Approved
            </h5>
          </div> */}
        </div>
        )}
    

          {/* <div className="rounded-full w-full bg-[#F22D351A]/[10%]  px-2 py-3  ">
            <div className="flex gap-2 w-full items-center">
            <IoIosInformationCircle className="w-5 h-5 text-[#F22D35]" />
           
            
              <h5 className="text-[#FF4848] text-[14px] font-light">
                Account is yet to be Approved
              </h5>
            </div>
          </div> */}

          <div className="bg-white relative rounded-full p-1">
            <div className="h-[8px] w-[8px]  absolute rounded-full left-1 -top-[0.5px] bg-primary"></div>
            <Image
              src="/dashboard/bell-alt.svg"
              alt="person icon"
              className="rounded-full"
              width={32}
              height={32}
            />
          </div>

          <div   onClick={handleDetails} className="cursor-pointer rounded-full p-2 bg-[#FF4848]">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 14L19 10M19 10L15 6M19 10H7M11 19H4.20078C3.08068 19 2.52062 19 2.0928 18.782C1.71648 18.5903 1.41052 18.2843 1.21877 17.908C1.00078 17.4802 1.00078 16.9201 1.00078 15.8V4.2C1.00078 3.0799 1.00078 2.51984 1.21877 2.09202C1.41052 1.71569 1.71648 1.40973 2.0928 1.21799C2.52062 1 3.08068 1 4.20078 1L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

          </div>
        </div>
      </div>
      {/* )} */}

      {/* mobile screen */}
      <div className=" lg:hidden ">
        <div className="flex justify-between">
        <div className="flex items-center gap-2">
        {userData?.individual?.avatar ? (
    <div
    className="rounded-full overflow-hidden bg-gray-200"
    style={{ width: 40, height: 40 }}
  >
    <Image
      src={userData.individual.avatar}
      alt="person icon"
      className="object-cover w-full h-full"
      width={40}
      height={40}
    />
  </div>
) : userData?.corporateBody?.avatar ? (
  <div
  className="rounded-full overflow-hidden bg-gray-200"
  style={{ width: 40, height: 40 }}
>
  <Image
    src={userData.corporateBody?.avatar}
    alt="person icon"
    className="object-cover w-full h-full"
    width={40}
    height={40}
  />
</div>
) : 
(
  <div className="rounded-full bg-gray-200" style={{ width: 40, height: 40 }} />
)}
          <div className="flex flex-col leading-[24px]">
            <h4 className="text-[#1A1A1A]  text-[18px] font-light ">Hello</h4>
            <h4 className="text-primary font-[400] text-[18px]">
            {userData?.individual ? userData?.individual?.firstname : userData?.corporateBody?.companyName}

            </h4>
          </div>
        </div>
<div className="flex gap-3">
        <div className="bg-white relative flex justify-center rounded-full h-9 w-9">
            <div className="h-[8px] w-[8px]  absolute rounded-full left-1 -top-[0.5px] bg-primary"></div>
            <Image
              src="/dashboard/bell-alt.svg"
              alt="person icon"
              className="rounded-full"
              width={30}
              height={30}
            />
          </div>
          <div   onClick={handleDetails} className="cursor-pointer rounded-full h-9 w-9 flex justify-center items-center bg-[#FF4848]">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 14L19 10M19 10L15 6M19 10H7M11 19H4.20078C3.08068 19 2.52062 19 2.0928 18.782C1.71648 18.5903 1.41052 18.2843 1.21877 17.908C1.00078 17.4802 1.00078 16.9201 1.00078 15.8V4.2C1.00078 3.0799 1.00078 2.51984 1.21877 2.09202C1.41052 1.71569 1.71648 1.40973 2.0928 1.21799C2.52062 1 3.08068 1 4.20078 1L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

          </div>
          </div>
          </div>

        <div className="flex md:mt-0 mt-2  gap-4 items-center">
        {userData?.status == "ACTIVE" ? (
 <div className="rounded-full w-full bg-[#6CC56C30]/[19%]  px-2 py-2  ">
 <div className="flex gap-2 items-center">
 <IoIosInformationCircle className="w-5 h-5 text-primary" />

   <h5 className="text-primary text-[14px] font-light">
     Account is yet to be Approved
   </h5>
 </div>
</div>
        ) : (
          <div className="rounded-full w-full bg-[#F22D351A]/[10%]  px-2 py-2  ">
            <div className="flex gap-2 items-center">
                       <IoIosInformationCircle className="w-7 h-7 text-[primary]" />

              <h5 className="text-[#FF4848] text-[14px] font-light">
                Account is yet to be Approved
              </h5>
            </div>
          </div> 
        )}
       

          {/* <div className="rounded-full w-full bg-[#F22D351A]/[10%]  px-2 py-2  ">
            <div className="flex gap-2 items-center">
                       <IoIosInformationCircle className="w-7 h-7 text-[primary]" />

              <h5 className="text-[#FF4848] text-[14px] font-light">
                Account is yet to be Approved
              </h5>
            </div>
          </div> */}

       
        </div>
      </div>

          <Modal 
              classNames={{
                modal: "rounded-[10px] overflow-visible relative",
              }}
              open={open} onClose={onCloseModal} center>
              <div className="w-[400px] flex justify-center px-4 pb-2">
            
                <div>
                  <h4 className="text-primary text-[15px] text-center max-w-[350px] font-[600] mt-5 md:text-[18px] mb-4">
               Are you sure you want to log out?
                  </h4>
               

               <div className="flex gap-5">
                        
               <button
                        onClick={onCloseModal}
                        // disabled={!selectedOption} // Disable button if no option is selected
                        className={`py-2 w-full px-6 bg-gray-300  rounded-lg  
        }`}
                      >
                   Cancel
                      </button>

               <button
                        onClick={handleLogout}
                        // disabled={!selectedOption} // Disable button if no option is selected
                        className={`py-2 w-full px-6 bg-[#FF4848] text-white rounded-lg  hover:bg-red-700
        }`}
                      >
                       Logout
                      </button>
               </div>
                </div>
             
              </div>
            </Modal>

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

export default Header;
