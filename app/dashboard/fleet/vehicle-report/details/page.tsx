"use client"; // Add this for client components in the Next.js app directory
import BreadcrumbsDisplay from "@/app/dashboard/BreadscrumbsDisplay";
import DashboardLayout from "@/components/Layout";
import LoadingSpinnerPage from "@/components/UI/LoadingSpinnerPage";
import {
  useLazyVehicleControllerGetVehicleReportByIdQuery,
  useVehicleReportCommentControllerCreateMutation,
} from "@/store/api";
import React, { useEffect, useState } from "react";
import Modal from "react-responsive-modal";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from "@/components/UI/LoadingSpinner";

function Details() {
  const [open, setOpen] = useState(false);
  const [reportId, setReportId] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false); // Manage loading state manually

  useEffect(() => {
    // Retrieve the vehicle ID from sessionStorage
    const storedId = localStorage.getItem("vehicleReportId");
    if (storedId) {
      setReportId(storedId);
    }
  }, []);

  const onOpenModal = () => {
    // e.preventDefault();
    setOpen(true);
  };
  const onCloseModal = () => setOpen(false);

  useEffect(() => {
    if (isLoading) {
      onOpenModal();
    } else {
      onCloseModal();
    }
  }, [isLoading]);

  const [createReportComment, { isLoading: reportCommentLoading }] =
    useVehicleReportCommentControllerCreateMutation();

  const [getReportById, { data: reportById }] =
    useLazyVehicleControllerGetVehicleReportByIdQuery<any>();
  const [userData, setUserData] = useState<any>(null);

  // useEffect(() => {
  //   const storedUserData = localStorage.getItem("user");
  //   if (storedUserData) {
  //     setUserData(JSON.parse(storedUserData));
  //   }
  // }, []);
  useEffect(() => {
    if (reportId) {
      setIsLoading(true); // Set loading state
      const storedUserData = localStorage.getItem("user");
      getReportById(reportId);
      if (storedUserData) {
        setUserData(JSON.parse(storedUserData));
      }
    }
  }, [reportId, getReportById]);

  // console.log(reportComment)
  const initialData = {
    content: "",
    // documents: [{ name: "", expiryDate: "", image: undefined }], // Default document
  };

  const validation = Yup.object({
    content: Yup.string()
      .required("Comment is required")
      .min(10, "Comment must be at least 10 characters"),
  });

  const onSubmit = async (values: any) => {
    const payload = {
      content: values.content,
      vehicleReportId: reportId,
    };

    console.log("Payload sent to API:", payload);
    try {
      // Map form values to CreateVehicleDto structure

      // Call API to create vehicle
      const response: any = await createReportComment(payload).unwrap();

      console.log(response);

      console.log("Vehicle Report Comment created successfully");
      toast.success(
        response?.message || "Vehicle Report comment created successfully"
      );
      window.location.reload();
    } catch (error: any) {
      console.error("Error creating vehicle:", error);

      // Handle errors
      const errorMessage =
        error?.data?.message || "An error occurred while creating the vehicle";
      toast.error(errorMessage);
    }
  };

  const rawDate = reportById?.data?.maintenanceDate;
  const formattedDate = rawDate
    ? new Date(rawDate)
        .toLocaleString("en-GB", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
        .replace(",", "") // Format with date and time (e.g., 2025-01-07 12:34:56)
    : "N/A";

  console.log(reportById);
  const formatToNaira = (amount: number | undefined | null): string => {
    if (amount == null) return "₦0.00";
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
    }).format(amount);
  };

  return (
    <div>
      <DashboardLayout>
        {isLoading ? null : (
          <div className="bg-white overflow-hidden rounded-[8px] px-3 md:px-8 py-7 md:py-9">
            <div className="w-full">
              <BreadcrumbsDisplay />
            </div>

            <div className="flex flex-col gap-4 mb-6 mt-9">
              <div className="grid md:grid-cols-12">
                <h5 className="text-[18px] font-[400] col-span-2 text-primary ">
                  Title
                </h5>
                <h5 className="text-[18px] font-[400] col-span-10 text-blackText ">
                  {reportById?.data?.title || "N/A"}
                </h5>
              </div>

              <div className="grid md:grid-cols-12">
                <h5 className="text-[18px] font-[400] col-span-2 text-primary ">
                  Description
                </h5>
                <h5 className="text-[18px] font-[400] col-span-10 text-blackText ">
                  {reportById?.data?.description}
                </h5>
              </div>

              <div className="grid md:grid-cols-12">
                <h5 className="text-[18px]  font-[400] col-span-2 text-primary ">
                  Cost
                </h5>
                <h5 className="text-[18px]  font-[400] col-span-10 text-blackText ">
                  {formatToNaira(reportById?.data?.cost)}
                </h5>
              </div>

              <div className="grid md:grid-cols-12">
                <h5 className="text-[18px]  font-[400] col-span-2 text-primary ">
                  Date
                </h5>
                <h5 className="text-[18px]  font-[400] col-span-10 text-blackText ">
                  {formattedDate}
                </h5>
              </div>
            </div>

            <hr className="my-4" />

            <div className="flex flex-col gap-6">
              <h5 className="text-[15px] text-primary">Comments</h5>

              {reportById?.data?.vehicleReportComment?.map((comment: any) => {
                const formattedDate = comment?.createdAt
                  ? new Date(comment.createdAt)
                      .toLocaleString("en-GB", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                      })
                      .replace(",", "")
                  : "N/A"; // Fallback if createdAt is not available

                return (
                  <div key={comment?.id} className="flex flex-col gap-3">
                    <h5 className="text-[18px] font-[400] text-blackText">
                      {comment?.content}
                    </h5>
                    <div className="flex items-center justify-between md:justify-start md:gap-10">
                      <div className="flex items-center gap-1 md:gap-3">
                        <h5 className="text-[12px] md:text-[18px] font-[400] text-[#9B9898]">
                          Comment by:
                        </h5>
                        <h5 className="text-[12px] md:text-[18px] font-[400] text-primary">
                          {userData?.individual
                            ? `${userData.individual.firstname} ${userData.individual.lastname}`
                            : userData?.corporateBody
                            ? userData.corporateBody.companyName
                            : ""}
                        </h5>
                      </div>

                      <div className="flex items-center gap-1 md:gap-3">
                        <h5 className="text-[12px] md:text-[18px] font-[400] text-[#9B9898]">
                          Date:
                        </h5>
                        <h5 className="text-[12px] md:text-[18px] font-[400] text-blackText">
                          {formattedDate}
                        </h5>
                      </div>
                    </div>
                  </div>
                );
              })}

              <Formik
                initialValues={initialData}
                validationSchema={validation}
                onSubmit={onSubmit}
              >
                {({}) => (
                  <Form className="w-full  mb-6 flex flex-col justify-between">
                    <Field
                      as="textarea"
                      id="content"
                      name="content"
                      rows={4}
                      placeholder="Write your coment here...."
                      className="mt-1 block p-2 w-full rounded-md border shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                    <p className="text-red-700 text-xs mt-1 ">
                      <ErrorMessage name="content" />
                    </p>
                    <button
                      type="submit"
                      // onClick={onSubmit}
                      disabled={reportCommentLoading} // Disable button if no option is selected
                      className={`py-4 w-fit px-7 bg-[#036E03] text-white rounded-lg  hover:bg-green-700
      }`}
                    >
                      {reportCommentLoading ? (
                        <LoadingSpinner />
                      ) : (
                        "Post Comment"
                      )}
                    </button>
                  </Form>
                )}
              </Formik>
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
      </DashboardLayout>
    </div>
  );
}

export default Details;
