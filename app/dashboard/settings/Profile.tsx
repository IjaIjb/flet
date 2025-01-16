"use client"; // Add this for client components in the Next.js app directory
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { TbUserEdit } from "react-icons/tb";
import * as Yup from "yup";
import Image from "next/image";
import {
  useUserControllerUpdateCorporateByIdMutation,
  useUserControllerUpdateIndividualByIdMutation,
} from "@/store/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from "@/components/UI/LoadingSpinner";
import { loginUserSuccess } from "@/store/redux/actions/AuthAction";
import { useAppDispatch } from "@/store/redux/store";
import LoadingSpinnerPage from "@/components/UI/LoadingSpinnerPage";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

// Define the structure of user data
interface UserData {
  individual?: {
    firstname: string;
    lastname: string;
    phone: string;
    city: string;
    avatar: string;
    id: string;
  };
  corporateBody?: {
    companyName: string;
    companyRC: string;
    phone: string;
    companyAddress: string;
    avatar: string;
    id: string;
  };
  // id: string
  email: string;
  // username: string;
  // status: string;
}

interface IndividualFormValues {
  title?: string;
  firstname: string;
  lastname: string;
  phone: string;
  city: string;
  avatar?: string;
  password?: string;
  email?: string;
  role?: string;
  userId?: string;
  parkId?: string;
  userType: string;
  userCategory: string;
}

interface CorporateFormValues {
  companyName: string;
  companyRC: string;
  phone: string;
  email: string;
  companyAddress: string;
}

// ImageUpload component definition with proper types
interface ImageUploadProps {
  image: string | undefined; // image can be a string (URL) or null
  setImage: (image: string | undefined) => void; // setImage is a function that updates the image state
}
const Profile = () => {
    const [open, setOpen] = useState(false);
  
  const [image, setImage] = useState<string | undefined>(undefined);
  const dispatch = useAppDispatch(); // Access `dispatch`

  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [userToken, setUserToken] = useState("");
  const [update, { isLoading }] =
    useUserControllerUpdateIndividualByIdMutation();

  const [updateCorporate] = useUserControllerUpdateCorporateByIdMutation();

  useEffect(() => {
    setIsFetching(true);
    const storedUserData = localStorage.getItem("user");
    const storedToken = localStorage.getItem("auth_token");
    if (storedUserData) {
      const parsedData = JSON.parse(storedUserData);
      setUserData(parsedData);
      setImage(
        parsedData.individual?.avatar ||
          parsedData.corporateBody?.avatar ||
          undefined
      );
    }
    if (storedToken) {
      const parsedData = storedToken;
      setUserToken(parsedData);
      // if (parsedData.individual?.avatar) setImage(parsedData.individual.avatar);
    }
    setIsFetching(false);
  }, []);

  const onOpenModal = () => {
    // e.preventDefault();
    setOpen(true);
  };
  const onCloseModal = () => setOpen(false);

    useEffect(() => {
      if (isFetching) {
        onOpenModal();
      } else {
        onCloseModal();
      }
    }, [isFetching]);
  console.log(userData);

  const initialData = {
    firstname: userData?.individual?.firstname || "",
    lastname: userData?.individual?.lastname || "",
    phone: userData?.individual?.phone || "",
    email: userData?.email || "",
    city: userData?.individual?.city || "",
    avatar: image || "",
    // username: userData?.username || "",
    role: "USER",
    userType: "FLEET_PARTNERS",
    userCategory: "PASSENGERS",
  };
  const initialDataCorporate = {
    companyName: userData?.corporateBody?.companyName || "",
    companyRC: userData?.corporateBody?.companyRC || "",
    phone: userData?.corporateBody?.phone || "",
    email: userData?.email || "",
    companyAddress: userData?.corporateBody?.companyAddress || "",
    avatar: image || "",
    // username: userData?.username || "",
  };

  const validation = Yup.object({
    firstname: Yup.string().required("First name is required"),
    lastname: Yup.string().required("Last name is required"),
    phone: Yup.string().required("Phone number is required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    city: Yup.string().required("City is required"),
  });

  const validationCorporate = Yup.object({
    companyName: Yup.string().required("Company name is required"),
    companyRC: Yup.string().required("company RC is required"),
    phone: Yup.string().required("Phone number is required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    companyAddress: Yup.string().required("Company address is required"),
  });

  const ImageUpload: React.FC<ImageUploadProps> = ({ image, setImage }) => {
    const [loading, setLoading] = useState(false);
  
    const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        setLoading(true); // Show loading spinner or indicator
  
        try {
          // Create a FormData object
          const formData = new FormData();
          formData.append("file", file);
          formData.append("upload_preset", "urban_image"); // Replace with your Cloudinary preset
  
          // Upload to Cloudinary
          const response = await fetch("https://api.cloudinary.com/v1_1/dngyazspl/image/upload", {
            method: "POST",
            body: formData,
          });
  
          const result = await response.json();
          if (result.secure_url) {
            // Set the image URL in the state
            setImage(result.secure_url);
          }
  
          setLoading(false); // Stop loading
        } catch (error) {
          console.error("Error uploading image", error);
          toast.error("Error uploading image. Please try again.");
          setLoading(false);
        }
      }
    };
  
    return (
      <div className="flex justify-center text-center">
        <label className="flex w-[110px] bg-white dotted-border flex-col items-center justify-center rounded-[5px] cursor-pointer relative">
          <div className="flex flex-col items-center justify-center h-[70px]">
            {image ? (
              <Image
                className=""
                src={image} // This should now be the Cloudinary URL
                alt="Uploaded image"
                width={100}
                height={100}
              />
            ) : (
              <Image
                className=""
                src="/onboarding/Icon.svg" // Default placeholder image
                alt="Default placeholder"
                width={100}
                height={100}
              />
            )}
          </div>
          <input
            type="file"
            accept="image/x-png,image/gif,image/jpeg"
            className="hidden mb-2 text-sm text-[#6C757D] font-medium"
            onChange={handleImageChange}
          />
        </label>
        {loading && <p>Uploading...</p>}
      </div>
    );
  };  
  // if (!userData) return <div></div>;
  // console.log(userData)
  // const onSubmit = async (values: any) => {
  //   const payload = {
  //     ...values,
  //     avatar: image, // Include the image in base64 format
  //   };

  //   console.log(payload);
  //   try {
  //     const response = await update({ id: userData?.individual?.id, ...payload }).unwrap();

  //     // If the request was successful
  //     if (response) {
  //       toast.success("Profile updated successfully!");
  //       // Update local storage and state with the new user data
  //       const updatedUserData: UserData = {
  //         ...userData,
  //         email: payload.email, // Ensure email is updated
  //         individual: { ...userData?.individual, ...payload },
  //       };
  //        dispatch(loginUserSuccess({ auth_token: userToken, user: updatedUserData}));

  //       localStorage.setItem("user", JSON.stringify(updatedUserData));
  //       setUserData(updatedUserData); // Update state
  //     }

  //   } catch (err) {
  //     toast.error("Unexpected error. Please try again.");
  //   }
  // };

  const onSubmit = async (values: IndividualFormValues) => {
    if (!userData?.individual?.id) {
      toast.error("User ID is missing. Please reload and try again.");
      return;
    }
  
    // Prepare the payload as a regular JSON object
    const payload: any = {
      id: userData.individual.id,
      role: values.role as "USER",
      // userType: values.userType as "FLEET_PARTNERS",
      // userCategory: values.userCategory as "PASSENGERS",
      ...values, // Spread other values dynamically
    };
  
    // Include the avatar image if available (ensure the image is in a proper format if needed)
    if (image) {
      payload.avatar = image;
    }
  
    try {
      // Make the API call with the payload (as JSON)
      const response = await update({
        id: userData.individual.id,
        updateIndividualDto: payload, // Send as JSON instead of FormData
      }).unwrap();
  
      if (response) {
        toast.success("Profile updated successfully!");
  
        // Update user data in local storage and global state
        const updatedUserData: UserData = {
          ...userData,
          individual: { ...userData.individual, ...values },
        };
  
        // Dispatch updated user data to global store
        dispatch(
          loginUserSuccess({
            auth_token: userToken,
            user: updatedUserData,
          })
        );
  
        // Update local storage with the updated user data
        localStorage.setItem("user", JSON.stringify(updatedUserData));
  
        // Update the state with new user data
        setUserData(updatedUserData);
      }
    } catch (error) {
      console.error(error);
      toast.error("Unexpected error. Please try again.");
    }
  };
  

  const onSubmitCorporate = async (values: CorporateFormValues) => {
    if (!userData?.corporateBody?.id) {
      toast.error("User ID is missing. Please reload and try again.");
      return;
    }
    const payload = {
      id: userData.corporateBody.id,
      updateCorporateBodyDto: {
        ...values,
        avatar: image,
      },
    };

    try {
      const response = await updateCorporate(payload).unwrap();

      if (response) {
        toast.success("Profile updated successfully!");

        // Update user data in local storage and global state
        const updatedUserData: UserData = {
          ...userData,
          email: values.email,
          corporateBody: { ...userData.corporateBody, ...values },
        };

        // Dispatch updated user data to global store
        dispatch(
          loginUserSuccess({
            auth_token: userToken,
            user: updatedUserData,
          })
        );

        // Update local storage with the updated user data
        localStorage.setItem("user", JSON.stringify(updatedUserData));

        // Update the state with new user data
        setUserData(updatedUserData);
      }
    } catch {
      toast.error("Unexpected error. Please try again.");
    }
  };
 
  return (
    <div>
        {isLoading ? null : (
      <div className="border-[#D9D9D9] border rounded-[10px] px-5 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TbUserEdit className="text-primary w-6 h-6" />
            <h5 className="text-primary md:text-[20px] text-[18px]">
              My Profile
            </h5>
          </div>

          <h5 className="text-primary  md:text-[20px] text-[18px] underline">
            Edit
          </h5>
        </div>

        <div className="flex mt-6 items-center justify-between">
          <ImageUpload image={image} setImage={setImage} />

          <div className="bg-[#6CC56C30]/[19%] text-primary rounded-full px-5 py-2">
            Change picture
          </div>
        </div>
        {userData?.individual ? (
          <div>
            <Formik
              enableReinitialize // Allow Formik to update when initialValues changes
              initialValues={initialData}
              validationSchema={validation}
              onSubmit={onSubmit}
            >
              {({}) => (
                <Form className="w-full  mt-10 lg:mt-10 mb-6 flex flex-col justify-between">
                  <div>
                    <div className=" mb-5 relative">
                      <label
                        className=" text-[#2B2C2B] text-[16px] font-[500] "
                        htmlFor="firstname"
                      >
                        First Name
                      </label>
                      <Field
                        className="mt-2 block w-full h-12 border-[0.5px]  pl-3 rounded-[10px] focus:outline-none border-[#D9D9D9] "
                        name="firstname"
                        type="text"
                        id="firstname"
                        placeholder=""
                      />
                      <p className="text-red-700 text-xs mt-1 ">
                        <ErrorMessage name="firstname" />
                      </p>
                    </div>
                    <div className=" mb-5 relative">
                      <label
                        className=" text-[#2B2C2B] text-[16px] font-[500] "
                        htmlFor="lastname"
                      >
                        Last Name
                      </label>
                      <Field
                        className="mt-2 block w-full h-12 border-[0.5px]  pl-3 rounded-[10px] focus:outline-none border-[#D9D9D9] "
                        name="lastname"
                        type="text"
                        id="lastname"
                        placeholder=""
                      />
                      <p className="text-red-700 text-xs mt-1 ">
                        <ErrorMessage name="lastname" />
                      </p>
                    </div>

                    <div className=" mb-5 relative">
                      <label
                        className=" text-[#2B2C2B] text-[16px] font-[500] "
                        htmlFor="phone"
                      >
                        Phone Number
                      </label>
                      <Field
                        className="mt-2 block w-full h-12 border-[0.5px]  pl-3 rounded-[10px] focus:outline-none border-[#D9D9D9] "
                        name="phone"
                        type="text"
                        id="phone"
                        placeholder=""
                      />
                      <p className="text-red-700 text-xs mt-1 ">
                        <ErrorMessage name="phone" />
                      </p>
                    </div>

                    <div className=" mb-5 relative">
                      <label
                        className=" text-[#2B2C2B] text-[16px] font-[500] "
                        htmlFor="email"
                      >
                        Email Address
                      </label>
                      <Field
                        className="mt-2 block w-full h-12 border-[0.5px]  pl-3 rounded-[10px] focus:outline-none border-[#D9D9D9] "
                        name="email"
                        type="email"
                        id="email"
                        placeholder=""
                      />
                      <p className="text-red-700 text-xs mt-1 ">
                        <ErrorMessage name="email" />
                      </p>
                    </div>
                    <div className=" mb-5 relative">
                      <label
                        className=" text-[#2B2C2B] text-[16px] font-[500] "
                        htmlFor="city"
                      >
                        City
                      </label>
                      <Field
                        className="mt-2 block w-full h-12 border-[0.5px]  pl-3 rounded-[10px] focus:outline-none border-[#D9D9D9] "
                        name="city"
                        type="text"
                        // id="city"
                        placeholder=""
                      />
                      <p className="text-red-700 text-xs mt-1 ">
                        <ErrorMessage name="city" />
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      // onClick={onSubmit}
                      disabled={isLoading} // Disable button if no option is selected
                      className={`disabled:bg-gray-500 py-3 w-fit px-6 bg-[#036E03] text-white rounded-lg  hover:bg-green-700
  }`}
                    >
                      {isLoading ? <LoadingSpinner /> : "Save"}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        ) : userData?.corporateBody ? (
          <div>
            <Formik
              enableReinitialize // Allow Formik to update when initialValues changes
              initialValues={initialDataCorporate}
              validationSchema={validationCorporate}
              onSubmit={onSubmitCorporate}
            >
              {({ isSubmitting }) => (
                <Form className="w-full  mt-10 lg:mt-10 mb-6 flex flex-col justify-between">
                  <div>
                    <div className=" mb-5 relative">
                      <label
                        className=" text-[#2B2C2B] text-[16px] font-[500] "
                        htmlFor="companyName"
                      >
                        Company Name
                      </label>
                      <Field
                        className="mt-2 block w-full h-12 border-[0.5px]  pl-3 rounded-[10px] focus:outline-none border-[#D9D9D9] "
                        name="companyName"
                        type="text"
                        id="companyName"
                        placeholder=""
                      />
                      <p className="text-red-700 text-xs mt-1 ">
                        <ErrorMessage name="companyName" />
                      </p>
                    </div>
                    <div className=" mb-5 relative">
                      <label
                        className=" text-[#2B2C2B] text-[16px] font-[500] "
                        htmlFor="companyRC"
                      >
                        Company RC
                      </label>
                      <Field
                        className="mt-2 block w-full h-12 border-[0.5px]  pl-3 rounded-[10px] focus:outline-none border-[#D9D9D9] "
                        name="companyRC"
                        type="text"
                        id="companyRC"
                        placeholder=""
                      />
                      <p className="text-red-700 text-xs mt-1 ">
                        <ErrorMessage name="companyRC" />
                      </p>
                    </div>

                    <div className=" mb-5 relative">
                      <label
                        className=" text-[#2B2C2B] text-[16px] font-[500] "
                        htmlFor="phone"
                      >
                        Phone Number
                      </label>
                      <Field
                        className="mt-2 block w-full h-12 border-[0.5px]  pl-3 rounded-[10px] focus:outline-none border-[#D9D9D9] "
                        name="phone"
                        type="text"
                        id="phone"
                        placeholder=""
                      />
                      <p className="text-red-700 text-xs mt-1 ">
                        <ErrorMessage name="phone" />
                      </p>
                    </div>

                    <div className=" mb-5 relative">
                      <label
                        className=" text-[#2B2C2B] text-[16px] font-[500] "
                        htmlFor="email"
                      >
                        Email Address
                      </label>
                      <Field
                        className="mt-2 block w-full h-12 border-[0.5px]  pl-3 rounded-[10px] focus:outline-none border-[#D9D9D9] "
                        name="email"
                        type="email"
                        id="email"
                        placeholder=""
                      />
                      <p className="text-red-700 text-xs mt-1 ">
                        <ErrorMessage name="email" />
                      </p>
                    </div>
                    {/* <div className=" mb-5 relative">
            <label
              className=" text-[#2B2C2B] text-[16px] font-[500] "
              htmlFor="city"
            >
              City
            </label>
            <Field
              className="mt-2 block w-full h-12 border-[0.5px]  pl-3 rounded-[10px] focus:outline-none border-[#D9D9D9] "
              name="city"
              type="text"
              // id="city"
              placeholder=""
            />
            <p className="text-red-700 text-xs mt-1 ">
              <ErrorMessage name="city" />
            </p>
          </div> */}
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      // onClick={onSubmit}
                      disabled={isSubmitting} // Disable button if no option is selected
                      className={`disabled:bg-gray-500 py-3 w-fit px-6 bg-[#036E03] text-white rounded-lg  hover:bg-green-700
}`}
                    >
                      {isSubmitting ? <LoadingSpinner /> : "Save"}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        ) : null}
      </div>
        )}
      <Modal
        classNames={{
          modal: "rounded-[10px] overflow-visible relative",
        }}
        open={open}
        onClose={onCloseModal}
        showCloseIcon={false} // Hides the close button
        center
      >
        <div className="px-2 md:px-5 w-[100px] h-[100px] flex justify-center items-center text-center">
          <LoadingSpinnerPage />
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

export default Profile;
