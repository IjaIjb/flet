import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    appControllerGetHello: build.query<
      AppControllerGetHelloApiResponse,
      AppControllerGetHelloApiArg
    >({
      query: () => ({ url: `/` }),
    }),
    authControllerLogin: build.mutation<
      AuthControllerLoginApiResponse,
      AuthControllerLoginApiArg
    >({
      query: (queryArg) => ({
        url: `/auth/login`,
        method: "POST",
        body: queryArg,
      }),
    }),
    authControllerVerifyEmail: build.query<
      AuthControllerVerifyEmailApiResponse,
      AuthControllerVerifyEmailApiArg
    >({
      query: (queryArg) => ({ url: `/auth/verify-email/${queryArg}` }),
    }),
    authControllerRequestPasswordReset: build.mutation<
      AuthControllerRequestPasswordResetApiResponse,
      AuthControllerRequestPasswordResetApiArg
    >({
      query: (queryArg) => ({
        url: `/auth/reset-password`,
        method: "POST",
        body: queryArg,
      }),
    }),
    authControllerResetPassword: build.mutation<
      AuthControllerResetPasswordApiResponse,
      AuthControllerResetPasswordApiArg
    >({
      query: (queryArg) => ({
        url: `/auth/reset-password/${queryArg.token}`,
        method: "POST",
        body: queryArg.resetPasswordValidateDto,
      }),
    }),
    userControllerFindAll: build.query<
      UserControllerFindAllApiResponse,
      UserControllerFindAllApiArg
    >({
      query: () => ({ url: `/user/all` }),
    }),
    userControllerFindIndividualAll: build.query<
      UserControllerFindIndividualAllApiResponse,
      UserControllerFindIndividualAllApiArg
    >({
      query: () => ({ url: `/individual/all` }),
    }),
    userControllerFindCorporateBodyAll: build.query<
      UserControllerFindCorporateBodyAllApiResponse,
      UserControllerFindCorporateBodyAllApiArg
    >({
      query: () => ({ url: `/corporate-body/all` }),
    }),
    userControllerFindOneById: build.query<
      UserControllerFindOneByIdApiResponse,
      UserControllerFindOneByIdApiArg
    >({
      query: (queryArg) => ({ url: `/user/${queryArg}` }),
    }),
    userControllerUpdate: build.mutation<
      UserControllerUpdateApiResponse,
      UserControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/user/${queryArg.id}`,
        method: "PUT",
        body: queryArg.updateUserDto,
      }),
    }),
    userControllerDelete: build.mutation<
      UserControllerDeleteApiResponse,
      UserControllerDeleteApiArg
    >({
      query: (queryArg) => ({ url: `/user/${queryArg}`, method: "DELETE" }),
    }),
    userControllerFindOneIndividualById: build.query<
      UserControllerFindOneIndividualByIdApiResponse,
      UserControllerFindOneIndividualByIdApiArg
    >({
      query: (queryArg) => ({ url: `/individual/${queryArg}` }),
    }),
    userControllerUpdateIndividualById: build.mutation<
      UserControllerUpdateIndividualByIdApiResponse,
      UserControllerUpdateIndividualByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/individual/${queryArg.id}`,
        method: "PUT",
        body: queryArg.updateIndividualDto,
      }),
    }),
    userControllerDeleteIndividual: build.mutation<
      UserControllerDeleteIndividualApiResponse,
      UserControllerDeleteIndividualApiArg
    >({
      query: (queryArg) => ({
        url: `/individual/${queryArg}`,
        method: "DELETE",
      }),
    }),
    userControllerFindOneCorporateBodyById: build.query<
      UserControllerFindOneCorporateBodyByIdApiResponse,
      UserControllerFindOneCorporateBodyByIdApiArg
    >({
      query: (queryArg) => ({ url: `/corporate-body/${queryArg}` }),
    }),
    userControllerUpdateCorporateById: build.mutation<
      UserControllerUpdateCorporateByIdApiResponse,
      UserControllerUpdateCorporateByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/corporate-body/${queryArg.id}`,
        method: "PUT",
        body: queryArg.updateCorporateBodyDto,
      }),
    }),
    userControllerDeleteCorporateBody: build.mutation<
      UserControllerDeleteCorporateBodyApiResponse,
      UserControllerDeleteCorporateBodyApiArg
    >({
      query: (queryArg) => ({
        url: `/corporate-body/${queryArg}`,
        method: "DELETE",
      }),
    }),
    userControllerCreateCorporateBody: build.mutation<
      UserControllerCreateCorporateBodyApiResponse,
      UserControllerCreateCorporateBodyApiArg
    >({
      query: (queryArg) => ({
        url: `/add-corporate-body`,
        method: "POST",
        body: queryArg,
      }),
    }),
    userControllerCreateIndividualBody: build.mutation<
      UserControllerCreateIndividualBodyApiResponse,
      UserControllerCreateIndividualBodyApiArg
    >({
      query: (queryArg) => ({
        url: `/add-individual`,
        method: "POST",
        body: queryArg,
      }),
    }),
    userControllerCreateDispatchOfficerBody: build.mutation<
      UserControllerCreateDispatchOfficerBodyApiResponse,
      UserControllerCreateDispatchOfficerBodyApiArg
    >({
      query: (queryArg) => ({
        url: `/add-dispatch-officer`,
        method: "POST",
        body: queryArg,
      }),
    }),
    userControllerCreateParkManagerBody: build.mutation<
      UserControllerCreateParkManagerBodyApiResponse,
      UserControllerCreateParkManagerBodyApiArg
    >({
      query: (queryArg) => ({
        url: `/add-park-manager`,
        method: "POST",
        body: queryArg,
      }),
    }),
    userControllerCreateParkOwnerBody: build.mutation<
      UserControllerCreateParkOwnerBodyApiResponse,
      UserControllerCreateParkOwnerBodyApiArg
    >({
      query: (queryArg) => ({
        url: `/add-park-owner-individual`,
        method: "POST",
        body: queryArg,
      }),
    }),
    userControllerCreateParkOwnerCorporateBody: build.mutation<
      UserControllerCreateParkOwnerCorporateBodyApiResponse,
      UserControllerCreateParkOwnerCorporateBodyApiArg
    >({
      query: (queryArg) => ({
        url: `/add-park-owner-corporate`,
        method: "POST",
        body: queryArg,
      }),
    }),
    parkControllerCreatePark: build.mutation<
      ParkControllerCreateParkApiResponse,
      ParkControllerCreateParkApiArg
    >({
      query: (queryArg) => ({ url: `/parks`, method: "POST", body: queryArg }),
    }),
    parkControllerFindAllParks: build.query<
      ParkControllerFindAllParksApiResponse,
      ParkControllerFindAllParksApiArg
    >({
      query: () => ({ url: `/parks` }),
    }),
    parkControllerFindParkById: build.query<
      ParkControllerFindParkByIdApiResponse,
      ParkControllerFindParkByIdApiArg
    >({
      query: (queryArg) => ({ url: `/parks/${queryArg}` }),
    }),
    parkControllerUpdatePark: build.mutation<
      ParkControllerUpdateParkApiResponse,
      ParkControllerUpdateParkApiArg
    >({
      query: (queryArg) => ({
        url: `/parks/${queryArg.id}`,
        method: "PUT",
        body: queryArg.updateParkDto,
      }),
    }),
    parkControllerDeletePark: build.mutation<
      ParkControllerDeleteParkApiResponse,
      ParkControllerDeleteParkApiArg
    >({
      query: (queryArg) => ({ url: `/parks/${queryArg}`, method: "DELETE" }),
    }),
    tripControllerCreateTrip: build.mutation<
      TripControllerCreateTripApiResponse,
      TripControllerCreateTripApiArg
    >({
      query: (queryArg) => ({ url: `/trips`, method: "POST", body: queryArg }),
    }),
    tripControllerFindAll: build.query<
      TripControllerFindAllApiResponse,
      TripControllerFindAllApiArg
    >({
      query: (queryArg) => ({
        url: `/trips`,
        params: {
          description: queryArg.description,
          uniqueID: queryArg.uniqueId,
          driverId: queryArg.driverId,
          departureId: queryArg.departureId,
          destinationId: queryArg.destinationId,
          vehicleId: queryArg.vehicleId,
        },
      }),
    }),
    tripControllerFindOne: build.query<
      TripControllerFindOneApiResponse,
      TripControllerFindOneApiArg
    >({
      query: (queryArg) => ({ url: `/trips/${queryArg}` }),
    }),
    tripControllerUpdateTrip: build.mutation<
      TripControllerUpdateTripApiResponse,
      TripControllerUpdateTripApiArg
    >({
      query: (queryArg) => ({
        url: `/trips/${queryArg.id}`,
        method: "PUT",
        body: queryArg.updateTripDto,
      }),
    }),
    tripControllerDeleteTrip: build.mutation<
      TripControllerDeleteTripApiResponse,
      TripControllerDeleteTripApiArg
    >({
      query: (queryArg) => ({ url: `/trips/${queryArg}`, method: "DELETE" }),
    }),
    bookingControllerCreateBooking: build.mutation<
      BookingControllerCreateBookingApiResponse,
      BookingControllerCreateBookingApiArg
    >({
      query: (queryArg) => ({
        url: `/bookings`,
        method: "POST",
        body: queryArg,
      }),
    }),
    bookingControllerFindAllBookings: build.query<
      BookingControllerFindAllBookingsApiResponse,
      BookingControllerFindAllBookingsApiArg
    >({
      query: () => ({ url: `/bookings` }),
    }),
    bookingControllerFindBookingById: build.query<
      BookingControllerFindBookingByIdApiResponse,
      BookingControllerFindBookingByIdApiArg
    >({
      query: (queryArg) => ({ url: `/bookings/${queryArg}` }),
    }),
    bookingControllerUpdateBooking: build.mutation<
      BookingControllerUpdateBookingApiResponse,
      BookingControllerUpdateBookingApiArg
    >({
      query: (queryArg) => ({
        url: `/bookings/${queryArg.id}`,
        method: "PUT",
        body: queryArg.updateBookingDto,
      }),
    }),
    bookingControllerDeleteBooking: build.mutation<
      BookingControllerDeleteBookingApiResponse,
      BookingControllerDeleteBookingApiArg
    >({
      query: (queryArg) => ({ url: `/bookings/${queryArg}`, method: "DELETE" }),
    }),
    bookingControllerSearchBookings: build.query<
      BookingControllerSearchBookingsApiResponse,
      BookingControllerSearchBookingsApiArg
    >({
      query: (queryArg) => ({
        url: `/bookings/search`,
        params: { query: queryArg },
      }),
    }),
    vehicleControllerCreateVehicleType: build.mutation<
      VehicleControllerCreateVehicleTypeApiResponse,
      VehicleControllerCreateVehicleTypeApiArg
    >({
      query: (queryArg) => ({
        url: `/vehicle-types`,
        method: "POST",
        body: queryArg,
      }),
    }),
    vehicleControllerGetAllVehicleTypes: build.query<
      VehicleControllerGetAllVehicleTypesApiResponse,
      VehicleControllerGetAllVehicleTypesApiArg
    >({
      query: () => ({ url: `/vehicle-types` }),
    }),
    vehicleControllerGetVehicleTypeById: build.query<
      VehicleControllerGetVehicleTypeByIdApiResponse,
      VehicleControllerGetVehicleTypeByIdApiArg
    >({
      query: (queryArg) => ({ url: `/vehicle-types/${queryArg}` }),
    }),
    vehicleControllerUpdateVehicleType: build.mutation<
      VehicleControllerUpdateVehicleTypeApiResponse,
      VehicleControllerUpdateVehicleTypeApiArg
    >({
      query: (queryArg) => ({
        url: `/vehicle-types/${queryArg.id}`,
        method: "PUT",
        body: queryArg.updateVehicleTypeDto,
      }),
    }),
    vehicleControllerDeleteVehicleType: build.mutation<
      VehicleControllerDeleteVehicleTypeApiResponse,
      VehicleControllerDeleteVehicleTypeApiArg
    >({
      query: (queryArg) => ({
        url: `/vehicle-types/${queryArg}`,
        method: "DELETE",
      }),
    }),
    vehicleControllerCreateVehicle: build.mutation<
      VehicleControllerCreateVehicleApiResponse,
      VehicleControllerCreateVehicleApiArg
    >({
      query: (queryArg) => ({
        url: `/vehicles`,
        method: "POST",
        body: queryArg,
      }),
    }),
    vehicleControllerGetAllVehicles: build.query<
      VehicleControllerGetAllVehiclesApiResponse,
      VehicleControllerGetAllVehiclesApiArg
    >({
      query: () => ({ url: `/vehicles` }),
    }),
    vehicleControllerGetVehicleById: build.query<
      VehicleControllerGetVehicleByIdApiResponse,
      VehicleControllerGetVehicleByIdApiArg
    >({
      query: (queryArg) => ({ url: `/vehicles/${queryArg}` }),
    }),
    vehicleControllerUpdateVehicle: build.mutation<
      VehicleControllerUpdateVehicleApiResponse,
      VehicleControllerUpdateVehicleApiArg
    >({
      query: (queryArg) => ({
        url: `/vehicles/${queryArg.id}`,
        method: "PUT",
        body: queryArg.updateVehicleDto,
      }),
    }),
    vehicleControllerDeleteVehicle: build.mutation<
      VehicleControllerDeleteVehicleApiResponse,
      VehicleControllerDeleteVehicleApiArg
    >({
      query: (queryArg) => ({ url: `/vehicles/${queryArg}`, method: "DELETE" }),
    }),
    vehicleControllerCreateVehicleRequest: build.mutation<
      VehicleControllerCreateVehicleRequestApiResponse,
      VehicleControllerCreateVehicleRequestApiArg
    >({
      query: (queryArg) => ({
        url: `/vehicle-requests`,
        method: "POST",
        body: queryArg,
      }),
    }),
    vehicleControllerGetAllVehicleRequests: build.query<
      VehicleControllerGetAllVehicleRequestsApiResponse,
      VehicleControllerGetAllVehicleRequestsApiArg
    >({
      query: () => ({ url: `/vehicle-requests` }),
    }),
    vehicleControllerGetVehicleRequestById: build.query<
      VehicleControllerGetVehicleRequestByIdApiResponse,
      VehicleControllerGetVehicleRequestByIdApiArg
    >({
      query: (queryArg) => ({ url: `/vehicle-requests/${queryArg}` }),
    }),
    vehicleControllerUpdateVehicleRequest: build.mutation<
      VehicleControllerUpdateVehicleRequestApiResponse,
      VehicleControllerUpdateVehicleRequestApiArg
    >({
      query: (queryArg) => ({
        url: `/vehicle-requests/${queryArg.id}`,
        method: "PUT",
        body: queryArg.updateVehicleRequestDto,
      }),
    }),
    vehicleControllerDeleteVehicleRequest: build.mutation<
      VehicleControllerDeleteVehicleRequestApiResponse,
      VehicleControllerDeleteVehicleRequestApiArg
    >({
      query: (queryArg) => ({
        url: `/vehicle-requests/${queryArg}`,
        method: "DELETE",
      }),
    }),
    vehicleControllerCreateVehicleReport: build.mutation<
      VehicleControllerCreateVehicleReportApiResponse,
      VehicleControllerCreateVehicleReportApiArg
    >({
      query: (queryArg) => ({
        url: `/vehicle-reports`,
        method: "POST",
        body: queryArg,
      }),
    }),
    vehicleControllerGetAllVehicleReports: build.query<
      VehicleControllerGetAllVehicleReportsApiResponse,
      VehicleControllerGetAllVehicleReportsApiArg
    >({
      query: () => ({ url: `/vehicle-reports` }),
    }),
    vehicleControllerGetVehicleReportById: build.query<
      VehicleControllerGetVehicleReportByIdApiResponse,
      VehicleControllerGetVehicleReportByIdApiArg
    >({
      query: (queryArg) => ({ url: `/vehicle-reports/${queryArg}` }),
    }),
    vehicleControllerUpdateVehicleReport: build.mutation<
      VehicleControllerUpdateVehicleReportApiResponse,
      VehicleControllerUpdateVehicleReportApiArg
    >({
      query: (queryArg) => ({
        url: `/vehicle-reports/${queryArg.id}`,
        method: "PUT",
        body: queryArg.updateVehicleReportDto,
      }),
    }),
    vehicleControllerDeleteVehicleReport: build.mutation<
      VehicleControllerDeleteVehicleReportApiResponse,
      VehicleControllerDeleteVehicleReportApiArg
    >({
      query: (queryArg) => ({
        url: `/vehicle-reports/${queryArg}`,
        method: "DELETE",
      }),
    }),
    vehicleDocumentControllerCreate: build.mutation<
      VehicleDocumentControllerCreateApiResponse,
      VehicleDocumentControllerCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/vehicle-documents`,
        method: "POST",
        body: queryArg,
      }),
    }),
    vehicleDocumentControllerSearch: build.query<
      VehicleDocumentControllerSearchApiResponse,
      VehicleDocumentControllerSearchApiArg
    >({
      query: (queryArg) => ({
        url: `/vehicle-documents`,
        params: {
          documentType: queryArg.documentType,
          vehicleId: queryArg.vehicleId,
          description: queryArg.description,
        },
      }),
    }),
    vehicleDocumentControllerUpdate: build.mutation<
      VehicleDocumentControllerUpdateApiResponse,
      VehicleDocumentControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/vehicle-documents/${queryArg.id}`,
        method: "PUT",
        body: queryArg.updateVehicleDocumentDto,
      }),
    }),
    vehicleDocumentControllerDelete: build.mutation<
      VehicleDocumentControllerDeleteApiResponse,
      VehicleDocumentControllerDeleteApiArg
    >({
      query: (queryArg) => ({
        url: `/vehicle-documents/${queryArg}`,
        method: "DELETE",
      }),
    }),
    driverControllerCreate: build.mutation<
      DriverControllerCreateApiResponse,
      DriverControllerCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/drivers`,
        method: "POST",
        body: queryArg,
      }),
    }),
    driverControllerFindAll: build.query<
      DriverControllerFindAllApiResponse,
      DriverControllerFindAllApiArg
    >({
      query: (queryArg) => ({ url: `/drivers`, params: { search: queryArg } }),
    }),
    driverControllerFindOne: build.query<
      DriverControllerFindOneApiResponse,
      DriverControllerFindOneApiArg
    >({
      query: (queryArg) => ({ url: `/drivers/${queryArg}` }),
    }),
    driverControllerUpdate: build.mutation<
      DriverControllerUpdateApiResponse,
      DriverControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/drivers/${queryArg.id}`,
        method: "PUT",
        body: queryArg.updateDriverDto,
      }),
    }),
    driverControllerRemove: build.mutation<
      DriverControllerRemoveApiResponse,
      DriverControllerRemoveApiArg
    >({
      query: (queryArg) => ({ url: `/drivers/${queryArg}`, method: "DELETE" }),
    }),
    driverControllerUpdateApprovalStatus: build.mutation<
      DriverControllerUpdateApprovalStatusApiResponse,
      DriverControllerUpdateApprovalStatusApiArg
    >({
      query: (queryArg) => ({
        url: `/drivers/${queryArg}/approval-status`,
        method: "PUT",
      }),
    }),
    driverControllerUpdateStatus: build.mutation<
      DriverControllerUpdateStatusApiResponse,
      DriverControllerUpdateStatusApiArg
    >({
      query: (queryArg) => ({
        url: `/drivers/${queryArg}/status`,
        method: "PUT",
      }),
    }),
    driverDocumentControllerCreate: build.mutation<
      DriverDocumentControllerCreateApiResponse,
      DriverDocumentControllerCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/driver-documents`,
        method: "POST",
        body: queryArg,
      }),
    }),
    driverDocumentControllerFindOne: build.query<
      DriverDocumentControllerFindOneApiResponse,
      DriverDocumentControllerFindOneApiArg
    >({
      query: (queryArg) => ({ url: `/driver-documents/${queryArg}` }),
    }),
    driverDocumentControllerUpdate: build.mutation<
      DriverDocumentControllerUpdateApiResponse,
      DriverDocumentControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/driver-documents/${queryArg.id}`,
        method: "PUT",
        body: queryArg.updateDriverDocumentDto,
      }),
    }),
    driverDocumentControllerRemove: build.mutation<
      DriverDocumentControllerRemoveApiResponse,
      DriverDocumentControllerRemoveApiArg
    >({
      query: (queryArg) => ({
        url: `/driver-documents/${queryArg}`,
        method: "DELETE",
      }),
    }),
    driverDocumentControllerSearch: build.query<
      DriverDocumentControllerSearchApiResponse,
      DriverDocumentControllerSearchApiArg
    >({
      query: (queryArg) => ({
        url: `/driver-documents/search`,
        params: {
          documentType: queryArg.documentType,
          driverId: queryArg.driverId,
          description: queryArg.description,
          expireAt: queryArg.expireAt,
          limit: queryArg.limit,
          offset: queryArg.offset,
        },
      }),
    }),
    driverReportControllerCreate: build.mutation<
      DriverReportControllerCreateApiResponse,
      DriverReportControllerCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/driver-reports`,
        method: "POST",
        body: queryArg,
      }),
    }),
    driverReportControllerFindAll: build.query<
      DriverReportControllerFindAllApiResponse,
      DriverReportControllerFindAllApiArg
    >({
      query: (queryArg) => ({
        url: `/driver-reports`,
        params: {
          userId: queryArg.userId,
          vehicleId: queryArg.vehicleId,
          limit: queryArg.limit,
          offset: queryArg.offset,
        },
      }),
    }),
    driverReportControllerFindOne: build.query<
      DriverReportControllerFindOneApiResponse,
      DriverReportControllerFindOneApiArg
    >({
      query: (queryArg) => ({ url: `/driver-reports/${queryArg}` }),
    }),
    driverReportControllerUpdate: build.mutation<
      DriverReportControllerUpdateApiResponse,
      DriverReportControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/driver-reports/${queryArg.id}`,
        method: "PATCH",
        body: queryArg.updateDriverReportDto,
      }),
    }),
    driverReportControllerRemove: build.mutation<
      DriverReportControllerRemoveApiResponse,
      DriverReportControllerRemoveApiArg
    >({
      query: (queryArg) => ({
        url: `/driver-reports/${queryArg}`,
        method: "DELETE",
      }),
    }),
    driverReportControllerSearch: build.query<
      DriverReportControllerSearchApiResponse,
      DriverReportControllerSearchApiArg
    >({
      query: (queryArg) => ({
        url: `/driver-reports/search`,
        params: {
          description: queryArg.description,
          vehicleId: queryArg.vehicleId,
          userId: queryArg.userId,
          limit: queryArg.limit,
          offset: queryArg.offset,
        },
      }),
    }),
    driverRequestControllerCreate: build.mutation<
      DriverRequestControllerCreateApiResponse,
      DriverRequestControllerCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/driver-requests`,
        method: "POST",
        body: queryArg,
      }),
    }),
    driverRequestControllerFindOne: build.query<
      DriverRequestControllerFindOneApiResponse,
      DriverRequestControllerFindOneApiArg
    >({
      query: (queryArg) => ({ url: `/driver-requests/${queryArg}` }),
    }),
    driverRequestControllerUpdate: build.mutation<
      DriverRequestControllerUpdateApiResponse,
      DriverRequestControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/driver-requests/${queryArg.id}`,
        method: "PUT",
        body: queryArg.updateDriverRequestDto,
      }),
    }),
    driverRequestControllerRemove: build.mutation<
      DriverRequestControllerRemoveApiResponse,
      DriverRequestControllerRemoveApiArg
    >({
      query: (queryArg) => ({
        url: `/driver-requests/${queryArg}`,
        method: "DELETE",
      }),
    }),
    driverRequestControllerSearch: build.query<
      DriverRequestControllerSearchApiResponse,
      DriverRequestControllerSearchApiArg
    >({
      query: (queryArg) => ({
        url: `/driver-requests/search`,
        params: { query: queryArg.query, userId: queryArg.userId },
      }),
    }),
    providerAgencyControllerCreate: build.mutation<
      ProviderAgencyControllerCreateApiResponse,
      ProviderAgencyControllerCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/provider-agencies`,
        method: "POST",
        body: queryArg,
      }),
    }),
    providerAgencyControllerFindAll: build.query<
      ProviderAgencyControllerFindAllApiResponse,
      ProviderAgencyControllerFindAllApiArg
    >({
      query: (queryArg) => ({
        url: `/provider-agencies`,
        params: {
          region: queryArg.queryRegion,
          country: queryArg.queryCountry,
          approvalStatus: queryArg.queryApprovalStatus,
          userId: queryArg.queryUserId
        },
      }),
    }),
    providerAgencyControllerFindOne: build.query<
      ProviderAgencyControllerFindOneApiResponse,
      ProviderAgencyControllerFindOneApiArg
    >({
      query: (queryArg) => ({ url: `/provider-agencies/${queryArg}` }),
    }),
    providerAgencyControllerUpdate: build.mutation<
      ProviderAgencyControllerUpdateApiResponse,
      ProviderAgencyControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/provider-agencies/${queryArg.id}`,
        method: "PUT",
        body: queryArg.updateProviderAgencyDto,
      }),
    }),
    providerAgencyControllerRemove: build.mutation<
      ProviderAgencyControllerRemoveApiResponse,
      ProviderAgencyControllerRemoveApiArg
    >({
      query: (queryArg) => ({
        url: `/provider-agencies/${queryArg}`,
        method: "DELETE",
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as api };
export type AppControllerGetHelloApiResponse = unknown;
export type AppControllerGetHelloApiArg = void;
export type AuthControllerLoginApiResponse = unknown;
export type AuthControllerLoginApiArg = LoginUserDto;
export type AuthControllerVerifyEmailApiResponse = unknown;
export type AuthControllerVerifyEmailApiArg = /** Verification token */ string;
export type AuthControllerRequestPasswordResetApiResponse = unknown;
export type AuthControllerRequestPasswordResetApiArg = ResetPasswordDto;
export type AuthControllerResetPasswordApiResponse = unknown;
export type AuthControllerResetPasswordApiArg = {
  /** Reset password token */
  token: string;
  resetPasswordValidateDto: ResetPasswordValidateDto;
};
export type UserControllerFindAllApiResponse =
  /** status 200 List of users with either coporate body or individual information */ User[];
export type UserControllerFindAllApiArg = void;
export type UserControllerFindIndividualAllApiResponse =
  /** status 200 List of individuals with users information */ Individual[];
export type UserControllerFindIndividualAllApiArg = void;
export type UserControllerFindCorporateBodyAllApiResponse =
  /** status 200 List of corporateBodys with users information */ CorporateBody[];
export type UserControllerFindCorporateBodyAllApiArg = void;
export type UserControllerFindOneByIdApiResponse =
  /** status 200 User details */ User;
export type UserControllerFindOneByIdApiArg = /** User ID */ string;
export type UserControllerUpdateApiResponse =
  /** status 200 User updated successfully */ User;
export type UserControllerUpdateApiArg = {
  /** User ID */
  id: string;
  updateUserDto: UpdateUserDto;
};
export type UserControllerDeleteApiResponse = unknown;
export type UserControllerDeleteApiArg = /** User ID */ string;
export type UserControllerFindOneIndividualByIdApiResponse =
  /** status 200 Individual details */ Individual;
export type UserControllerFindOneIndividualByIdApiArg =
  /** Individual ID */ string;
export type UserControllerUpdateIndividualByIdApiResponse =
  /** status 200 Individual updated successfully */ Individual;
export type UserControllerUpdateIndividualByIdApiArg = {
  /** Individual ID */
  id: string;
  updateIndividualDto: UpdateIndividualDto;
};
export type UserControllerDeleteIndividualApiResponse = unknown;
export type UserControllerDeleteIndividualApiArg = /** Individual ID */ string;
export type UserControllerFindOneCorporateBodyByIdApiResponse =
  /** status 200 CorporateBody details */ CorporateBody;
export type UserControllerFindOneCorporateBodyByIdApiArg =
  /** CorporateBody ID */ string;
export type UserControllerUpdateCorporateByIdApiResponse =
  /** status 200 CorporateBody updated successfully */ CorporateBody;
export type UserControllerUpdateCorporateByIdApiArg = {
  /** CorporateBody ID */
  id: string;
  updateCorporateBodyDto: UpdateCorporateBodyDto;
};
export type UserControllerDeleteCorporateBodyApiResponse = unknown;
export type UserControllerDeleteCorporateBodyApiArg =
  /** CorporateBody ID */ string;
export type UserControllerCreateCorporateBodyApiResponse =
  /** status 201 Corporate Body added successfully */ CorporateBody;
export type UserControllerCreateCorporateBodyApiArg = CreateCorporateBodyDto;
export type UserControllerCreateIndividualBodyApiResponse =
  /** status 201 Individual added successfully */ Individual;
export type UserControllerCreateIndividualBodyApiArg = CreateIndividualDto;
export type UserControllerCreateDispatchOfficerBodyApiResponse =
  /** status 201 Individual added successfully */ Individual;
export type UserControllerCreateDispatchOfficerBodyApiArg = CreateIndividualDto;
export type UserControllerCreateParkManagerBodyApiResponse =
  /** status 201 Manager added successfully */ Individual;
export type UserControllerCreateParkManagerBodyApiArg = CreateIndividualDto;
export type UserControllerCreateParkOwnerBodyApiResponse =
  /** status 201 Park owner added successfully */ Individual;
export type UserControllerCreateParkOwnerBodyApiArg = CreateIndividualDto;
export type UserControllerCreateParkOwnerCorporateBodyApiResponse =
  /** status 201 Park owner added successfully */ Individual;
export type UserControllerCreateParkOwnerCorporateBodyApiArg =
  CreateCorporateBodyDto;
export type ParkControllerCreateParkApiResponse = unknown;
export type ParkControllerCreateParkApiArg = CreateParkDto;
export type ParkControllerFindAllParksApiResponse = unknown;
export type ParkControllerFindAllParksApiArg = void;
export type ParkControllerFindParkByIdApiResponse = unknown;
export type ParkControllerFindParkByIdApiArg = /** ID of the park */ string;
export type ParkControllerUpdateParkApiResponse = unknown;
export type ParkControllerUpdateParkApiArg = {
  /** ID of the park to update */
  id: string;
  updateParkDto: UpdateParkDto;
};
export type ParkControllerDeleteParkApiResponse = unknown;
export type ParkControllerDeleteParkApiArg =
  /** ID of the park to delete */ string;
export type TripControllerCreateTripApiResponse =
  /** status 201 Trip created successfully */ Trip;
export type TripControllerCreateTripApiArg = CreateTripDto;
export type TripControllerFindAllApiResponse =
  /** status 200 List of trips */ Trip[];
export type TripControllerFindAllApiArg = {
  /** Filter by description */
  description?: string;
  /** Filter by unique ID */
  uniqueId?: string;
  /** Filter by driver ID */
  driverId?: string;
  /** Filter by departure ID */
  departureId?: string;
  /** Filter by destination ID */
  destinationId?: string;
  /** Filter by vehicle ID */
  vehicleId?: string;
};
export type TripControllerFindOneApiResponse =
  /** status 200 Trip details */ Trip;
export type TripControllerFindOneApiArg = /** Trip ID */ string;
export type TripControllerUpdateTripApiResponse =
  /** status 200 Trip updated successfully */ Trip;
export type TripControllerUpdateTripApiArg = {
  /** Trip ID */
  id: string;
  updateTripDto: UpdateTripDto;
};
export type TripControllerDeleteTripApiResponse = unknown;
export type TripControllerDeleteTripApiArg = /** Trip ID */ string;
export type BookingControllerCreateBookingApiResponse =
  /** status 201 Booking successfully created */ Booking;
export type BookingControllerCreateBookingApiArg = CreateBookingDto;
export type BookingControllerFindAllBookingsApiResponse =
  /** status 200 Bookings retrieved successfully */ Booking[];
export type BookingControllerFindAllBookingsApiArg = void;
export type BookingControllerFindBookingByIdApiResponse =
  /** status 200 Booking retrieved successfully */ Booking;
export type BookingControllerFindBookingByIdApiArg = /** Booking ID */ string;
export type BookingControllerUpdateBookingApiResponse =
  /** status 200 Booking updated successfully */ Booking;
export type BookingControllerUpdateBookingApiArg = {
  /** Booking ID */
  id: string;
  updateBookingDto: UpdateBookingDto;
};
export type BookingControllerDeleteBookingApiResponse =
  /** status 200 Booking deleted successfully */ Booking;
export type BookingControllerDeleteBookingApiArg = /** Booking ID */ string;
export type BookingControllerSearchBookingsApiResponse =
  /** status 200 Bookings search completed successfully */ Booking[];
export type BookingControllerSearchBookingsApiArg =
  /** Search query string for various fields */ string;
export type VehicleControllerCreateVehicleTypeApiResponse = unknown;
export type VehicleControllerCreateVehicleTypeApiArg = CreateVehicleTypeDto;
export type VehicleControllerGetAllVehicleTypesApiResponse = unknown;
export type VehicleControllerGetAllVehicleTypesApiArg = void;
export type VehicleControllerGetVehicleTypeByIdApiResponse = unknown;
export type VehicleControllerGetVehicleTypeByIdApiArg =
  /** Vehicle type ID */ string;
export type VehicleControllerUpdateVehicleTypeApiResponse = unknown;
export type VehicleControllerUpdateVehicleTypeApiArg = {
  /** Vehicle type ID */
  id: string;
  updateVehicleTypeDto: UpdateVehicleTypeDto;
};
export type VehicleControllerDeleteVehicleTypeApiResponse = unknown;
export type VehicleControllerDeleteVehicleTypeApiArg =
  /** Vehicle type ID */ string;
export type VehicleControllerCreateVehicleApiResponse = unknown;
export type VehicleControllerCreateVehicleApiArg = CreateVehicleDto;
export type VehicleControllerGetAllVehiclesApiResponse = unknown;
export type VehicleControllerGetAllVehiclesApiArg = void;
export type VehicleControllerGetVehicleByIdApiResponse = unknown;
export type VehicleControllerGetVehicleByIdApiArg = /** Vehicle ID */ string;
export type VehicleControllerUpdateVehicleApiResponse = unknown;
export type VehicleControllerUpdateVehicleApiArg = {
  /** Vehicle ID */
  id: string;
  updateVehicleDto: UpdateVehicleDto;
};
export type VehicleControllerDeleteVehicleApiResponse = unknown;
export type VehicleControllerDeleteVehicleApiArg = /** Vehicle ID */ string;
export type VehicleControllerCreateVehicleRequestApiResponse = unknown;
export type VehicleControllerCreateVehicleRequestApiArg =
  CreateVehicleRequestDto;
export type VehicleControllerGetAllVehicleRequestsApiResponse = unknown;
export type VehicleControllerGetAllVehicleRequestsApiArg = void;
export type VehicleControllerGetVehicleRequestByIdApiResponse = unknown;
export type VehicleControllerGetVehicleRequestByIdApiArg =
  /** Vehicle request ID */ string;
export type VehicleControllerUpdateVehicleRequestApiResponse = unknown;
export type VehicleControllerUpdateVehicleRequestApiArg = {
  /** Vehicle request ID */
  id: string;
  updateVehicleRequestDto: UpdateVehicleRequestDto;
};
export type VehicleControllerDeleteVehicleRequestApiResponse = unknown;
export type VehicleControllerDeleteVehicleRequestApiArg =
  /** Vehicle request ID */ string;
export type VehicleControllerCreateVehicleReportApiResponse = unknown;
export type VehicleControllerCreateVehicleReportApiArg = CreateVehicleReportDto;
export type VehicleControllerGetAllVehicleReportsApiResponse = unknown;
export type VehicleControllerGetAllVehicleReportsApiArg = void;
export type VehicleControllerGetVehicleReportByIdApiResponse = unknown;
export type VehicleControllerGetVehicleReportByIdApiArg =
  /** Vehicle report ID */ string;
export type VehicleControllerUpdateVehicleReportApiResponse = unknown;
export type VehicleControllerUpdateVehicleReportApiArg = {
  /** Vehicle report ID */
  id: string;
  updateVehicleReportDto: UpdateVehicleReportDto;
};
export type VehicleControllerDeleteVehicleReportApiResponse = unknown;
export type VehicleControllerDeleteVehicleReportApiArg =
  /** Vehicle report ID */ string;
export type VehicleDocumentControllerCreateApiResponse = unknown;
export type VehicleDocumentControllerCreateApiArg = CreateVehicleDocumentDto;
export type VehicleDocumentControllerSearchApiResponse = unknown;
export type VehicleDocumentControllerSearchApiArg = {
  /** Filter by document type */
  documentType?: string;
  /** Filter by associated vehicle ID */
  vehicleId?: string;
  /** Search by document description */
  description?: string;
};
export type VehicleDocumentControllerUpdateApiResponse = unknown;
export type VehicleDocumentControllerUpdateApiArg = {
  id: string;
  updateVehicleDocumentDto: UpdateVehicleDocumentDto;
};
export type VehicleDocumentControllerDeleteApiResponse = unknown;
export type VehicleDocumentControllerDeleteApiArg = string;
export type DriverControllerCreateApiResponse = unknown;
export type DriverControllerCreateApiArg = CreateDriverDto;
export type DriverControllerFindAllApiResponse = unknown;
export type DriverControllerFindAllApiArg = string;
export type DriverControllerFindOneApiResponse = unknown;
export type DriverControllerFindOneApiArg = string;
export type DriverControllerUpdateApiResponse = unknown;
export type DriverControllerUpdateApiArg = {
  id: string;
  updateDriverDto: UpdateDriverDto;
};
export type DriverControllerRemoveApiResponse = unknown;
export type DriverControllerRemoveApiArg = string;
export type DriverControllerUpdateApprovalStatusApiResponse = unknown;
export type DriverControllerUpdateApprovalStatusApiArg = string;
export type DriverControllerUpdateStatusApiResponse = unknown;
export type DriverControllerUpdateStatusApiArg = string;
export type DriverDocumentControllerCreateApiResponse =
  /** status 201 The driver document has been successfully created. */ DriverDocument;
export type DriverDocumentControllerCreateApiArg = CreateDriverDocumentDto;
export type DriverDocumentControllerFindOneApiResponse =
  /** status 200 The driver document was found. */ DriverDocument;
export type DriverDocumentControllerFindOneApiArg = string;
export type DriverDocumentControllerUpdateApiResponse =
  /** status 200 The driver document has been successfully updated. */ DriverDocument;
export type DriverDocumentControllerUpdateApiArg = {
  id: string;
  updateDriverDocumentDto: UpdateDriverDocumentDto;
};
export type DriverDocumentControllerRemoveApiResponse = unknown;
export type DriverDocumentControllerRemoveApiArg = string;
export type DriverDocumentControllerSearchApiResponse =
  /** status 200 List of matching driver documents. */ DriverDocument[];
export type DriverDocumentControllerSearchApiArg = {
  documentType: string;
  driverId: string;
  description: string;
  expireAt: string;
  limit: number;
  offset: number;
};
export type DriverReportControllerCreateApiResponse = unknown;
export type DriverReportControllerCreateApiArg = CreateDriverReportDto;
export type DriverReportControllerFindAllApiResponse = unknown;
export type DriverReportControllerFindAllApiArg = {
  /** Filter reports by user ID */
  userId?: string;
  /** Filter reports by vehicle ID */
  vehicleId?: string;
  /** Limit the number of results */
  limit?: number;
  /** Pagination offset */
  offset?: number;
};
export type DriverReportControllerFindOneApiResponse = unknown;
export type DriverReportControllerFindOneApiArg = string;
export type DriverReportControllerUpdateApiResponse = unknown;
export type DriverReportControllerUpdateApiArg = {
  id: string;
  updateDriverReportDto: UpdateDriverReportDto;
};
export type DriverReportControllerRemoveApiResponse = unknown;
export type DriverReportControllerRemoveApiArg = string;
export type DriverReportControllerSearchApiResponse = unknown;
export type DriverReportControllerSearchApiArg = {
  /** Search reports by description */
  description?: string;
  /** Filter reports by vehicle ID */
  vehicleId?: string;
  /** Filter reports by user ID */
  userId?: string;
  /** Limit the number of results */
  limit?: number;
  /** Pagination offset */
  offset?: number;
};
export type DriverRequestControllerCreateApiResponse = unknown;
export type DriverRequestControllerCreateApiArg = CreateDriverRequestDto;
export type DriverRequestControllerFindOneApiResponse = unknown;
export type DriverRequestControllerFindOneApiArg = string;
export type DriverRequestControllerUpdateApiResponse = unknown;
export type DriverRequestControllerUpdateApiArg = {
  id: string;
  updateDriverRequestDto: UpdateDriverRequestDto;
};
export type DriverRequestControllerRemoveApiResponse = unknown;
export type DriverRequestControllerRemoveApiArg = string;
export type DriverRequestControllerSearchApiResponse = unknown;
export type DriverRequestControllerSearchApiArg = {
  query: string;
  userId: string;
};
export type ProviderAgencyControllerCreateApiResponse = unknown;
export type ProviderAgencyControllerCreateApiArg = CreateProviderAgencyDto;
export type ProviderAgencyControllerFindAllApiResponse = unknown;
export type ProviderAgencyControllerFindAllApiArg = {
  /** Filter by region of the provider agency. */
  queryRegion?: string;
  /** Filter by country of the provider agency. */
  queryCountry?: string;
  /** Filter by approval status of the provider agency. */
  queryApprovalStatus?: "ACCEPTED" | "PROCESSING" | "SUSPENDED" | "REJECTED";
  /** Filter by user ID associated with the provider agency. */
  queryUserId?: string;
  /** Filter by region of the provider agency. */
  _queryRegion?: string;
  /** Filter by country of the provider agency. */
  _queryCountry?: string;
  /** Filter by approval status of the provider agency. */
  _queryApprovalStatus?: "ACCEPTED" | "PROCESSING" | "SUSPENDED" | "REJECTED";
  /** Filter by user ID associated with the provider agency. */
  _queryUserId?: string;
};
export type ProviderAgencyControllerFindOneApiResponse = unknown;
export type ProviderAgencyControllerFindOneApiArg =
  /** Provider agency ID */ string;
export type ProviderAgencyControllerUpdateApiResponse = unknown;
export type ProviderAgencyControllerUpdateApiArg = {
  /** Provider agency ID */
  id: string;
  updateProviderAgencyDto: UpdateProviderAgencyDto;
};
export type ProviderAgencyControllerRemoveApiResponse = unknown;
export type ProviderAgencyControllerRemoveApiArg =
  /** Provider agency ID */ string;
export type LoginUserDto = {
  email: string;
  password: string;
};
export type ResetPasswordDto = {
  email: string;
};
export type ResetPasswordValidateDto = {
  newPassword: string;
};
export type Individual = {
  id: string;
  title: string;
  firstname: string;
  lastname: string;
  phone: string;
  city: string;
  avatar: string;
  userId: string;
  /** The date when the individual was created */
  createdAt: string;
  /** The date when the individual was last updated */
  updatedAt: string;
  /** The individual auth/user detail */
  user: User;
};
export type CorporateBody = {
  id: string;
  companyName: string;
  companyAddress: string;
  companyRC: string;
  phone: string;
  avatar: string;
  userId: string;
  /** The date when the user was created */
  createdAt: string;
  /** The date when the user was last updated */
  updatedAt: string;
  /** The corporate body auth/user detail */
  user: User;
};
export type User = {
  id: string;
  username: string;
  isEmailVerified: boolean;
  email: string;
  role: string;
  userType: string;
  userCategory: string;
  status: string;
  /** The date when the user was created */
  createdAt: string;
  /** The date when the user was last updated */
  updatedAt: string;
  /** The user individual detail */
  individual: Individual;
  /** The user corporate body detail */
  corporateBody: CorporateBody;
};
export type UpdateUserDto = {
  /** Updated username of the user */
  username?: string;
  /** Updated password of the user */
  password?: string;
  /** Updated email of the user */
  email?: string;
  /** Updated role of the user */
  role?: "SUPER_ADMIN" | "ADMIN" | "AGENT" | "USER";
  /** Updated user type */
  userType?:
    | "FLEET_PARTNERS"
    | "PARK"
    | "PROVIDER_AGENCY"
    | "UBAN_MAIN"
    | "PASSENGERS";
  /** Updated user category */
  userCategory?:
    | "DRIVERS"
    | "MANAGER"
    | "PARK_OWNER"
    | "DISPATCH_OFFICER"
    | "PASSENGERS";
  /** Mark email as verified */
  isEmailVerified?: boolean;
};
export type UpdateIndividualDto = {
  title?: string;
  firstname?: string;
  lastname?: string;
  phone?: string;
  city?: string;
  avatar?: string;
  /** Password of the user */
  password?: string;
  /** Email of the user */
  email?: string;
  userId?: string;
  parkId?: string;
  /** Role of the user */
  role?: "SUPER_ADMIN" | "ADMIN" | "AGENT" | "USER";
  /** User type */
  userType?:
    | "FLEET_PARTNERS"
    | "PARK"
    | "PROVIDER_AGENCY"
    | "UBAN_MAIN"
    | "PASSENGERS";
  /** User category */
  userCategory?:
    | "DRIVERS"
    | "MANAGER"
    | "PARK_OWNER"
    | "DISPATCH_OFFICER"
    | "PASSENGERS";
};
export type UpdateCorporateBodyDto = {
  companyName?: string;
  companyAddress?: string;
  companyRC?: string;
  phone?: string;
  avatar?: string;
  /** Password of the user */
  password?: string;
  /** Email of the user */
  email?: string;
  userId?: string;
  parkId?: string;
  /** Role of the user */
  role?: "SUPER_ADMIN" | "ADMIN" | "AGENT" | "USER";
  /** User type */
  userType?:
    | "FLEET_PARTNERS"
    | "PARK"
    | "PROVIDER_AGENCY"
    | "UBAN_MAIN"
    | "PASSENGERS";
  /** User category */
  userCategory?:
    | "DRIVERS"
    | "MANAGER"
    | "PARK_OWNER"
    | "DISPATCH_OFFICER"
    | "PASSENGERS";
};
export type CreateCorporateBodyDto = {
  companyName: string;
  companyAddress: string;
  companyRC: string;
  phone: string;
  avatar: string;
  /** Password of the user */
  password: string;
  /** Email of the user */
  email: string;
  userId: string;
  parkId: string;
  /** Role of the user */
  role: "SUPER_ADMIN" | "ADMIN" | "AGENT" | "USER";
  /** User type */
  userType:
    | "FLEET_PARTNERS"
    | "PARK"
    | "PROVIDER_AGENCY"
    | "UBAN_MAIN"
    | "PASSENGERS";
  /** User category */
  userCategory:
    | "DRIVERS"
    | "MANAGER"
    | "PARK_OWNER"
    | "DISPATCH_OFFICER"
    | "PASSENGERS";
};
export type CreateIndividualDto = {
  title: string;
  firstname: string;
  lastname: string;
  phone: string;
  city: string;
  avatar: string;
  /** Password of the user */
  password: string;
  /** Email of the user */
  email: string;
  userId: string;
  parkId: string;
  /** Role of the user */
  role: "SUPER_ADMIN" | "ADMIN" | "AGENT" | "USER";
  /** User type */
  userType:
    | "FLEET_PARTNERS"
    | "PARK"
    | "PROVIDER_AGENCY"
    | "UBAN_MAIN"
    | "PASSENGERS";
  /** User category */
  userCategory:
    | "DRIVERS"
    | "MANAGER"
    | "PARK_OWNER"
    | "DISPATCH_OFFICER"
    | "PASSENGERS";
};
export type CreateParkDto = {
  /** Description of the park */
  description: string;
  /** Phone number to contact the park */
  phone: string;
  /** GPS coordinates of the park */
  coordinate: string;
  /** City where the park is located */
  city: string;
  /** Region where the park is located */
  region: string;
  /** Image URL for the park */
  image: string;
  /** UUID of the park owner (user who owns the park) */
  parkOwnerId: string;
  /** UUID of the user (authenticated user creating the park) */
  userId: string;
};
export type UpdateParkDto = {
  /** Description of the park */
  description?: string;
  /** Phone number to contact the park */
  phone?: string;
  /** GPS coordinates of the park */
  coordinate?: string;
  /** City where the park is located */
  city?: string;
  /** Region where the park is located */
  region?: string;
  /** Image URL for the park */
  image?: string;
  /** UUID of the park owner (user who owns the park) */
  parkOwnerId?: string;
  /** UUID of the user (authenticated user updating the park) */
  userId: string;
};
export type Text = string;
export type String = string;
export type Park = {
  id: string;
  /** The description of document */
  description: Text;
  /** The phone to contact a park */
  phone: String;
  /** The gps coordinate */
  coordinate: String;
  /** The city where park is */
  city: String;
  /** The region where park is */
  region: String;
  /** The image url */
  image: String;
  parkOwnerId: string;
  userId: string;
  /** The date when the document was created */
  createdAt: string;
  /** The date when the document was last updated */
  updatedAt: string;
  /** Instance of the User */
  parkOwner: User;
  /** The user who owns this resource */
  user: User;
  /** Users associated with this park */
  otherUsers: User;
};
export type Driver = {
  id: string;
  userId: string;
  license: string;
  fullName: string;
  age: number;
  nationalIdentityNumber: string;
  sex: string;
  maritalStatus: string;
  stateOfOrigin: string;
  localGovernment: string;
  houseAddress: string;
  avatar: string;
  otherDocument: string;
  /** any other relevant detail */
  otherDetail: string;
  latitude: string;
  longitude: string;
  status: string;
  /** admin approval */
  approvalStatus: string;
  /** The date when the driver detail was created */
  createdAt: string;
  /** The date when the driver detail was last updated */
  updatedAt: string;
  /** The user who added the detail */
  user: User;
};
export type VehicleType = {
  id: string;
  /** the category the vehicle falls into e.g, Bus, Van, etc. */
  category: string;
  /** any other relevant detail */
  otherDetail: string;
  numberOfSeats: number;
  numberOfRows: number;
  numberOfColumns: number;
  /** the seat arrangement of the vehicle eg. e.g., 1-3-4-4  */
  seatFormation: string;
  /** The date when the type was added */
  createdAt: string;
  /** The date when the type was last updated */
  updatedAt: string;
  userId: string;
  vehicles: string[];
  /** The user who owns this resource */
  user: User;
};
export type FleetPartners = {
  id: string;
  /** any other relevant detail */
  otherDetail: string;
  /** The date when the user was created */
  createdAt: string;
  /** The date when the user was last updated */
  updatedAt: string;
  userId: string;
  /** The user who owns this resource */
  user: User;
  /** vehicles added by this fleet partner */
  vehicles: Vehicle;
};
export type ProviderAgency = {
  id: string;
  /** any other relevant detail */
  otherDetail: string;
  /** provider agency region */
  region: string;
  /** provider agency country */
  country: string;
  /** admin approval */
  approvalStatus: string;
  /** The date when this details was created */
  createdAt: string;
  /** The date when this details was last updated */
  updatedAt: string;
  userId: string;
  /** The user who owns this resource */
  user: User;
};
export type Vehicle = {
  id: string;
  color: string;
  /** any other relevant detail */
  otherDetail: string;
  /** human readable unique id */
  uniqueID: string;
  plateNumber: string;
  status: string;
  /** admin approval */
  approvalStatus: string;
  totalRevenue: number;
  enrollmentCity: string;
  registrationDate: string;
  vehicleTypeId: string;
  driverId: string;
  providerAgencyId: string;
  fleetPartnersId: string;
  userId: string;
  /** The date when the vehicle was added */
  createdAt: string;
  /** The date when the vehicle was last updated */
  updatedAt: string;
  /** The user who owns this resource */
  user: User;
  vehicleType: VehicleType;
  fleetPartners: FleetPartners;
  providerAgency: ProviderAgency;
  driver: ProviderAgency;
};
export type Trip = {
  id: string;
  /** The description of the trip */
  description: Text;
  driverId: string;
  departureId: string;
  destinationId: string;
  vehicleId: string;
  /** Departure location of the trip */
  departure: Park;
  /** Destination location of the trip */
  destination: Park;
  uniqueID: string;
  cost: number;
  /** Driver of the trip */
  driver: Driver;
  /** Vehicle used for the trip */
  vehicle: Vehicle;
  /** The date when the request was created */
  createdAt: string;
  /** The date when the document was last updated */
  updatedAt: string;
  userId: string;
  /** The user who owns this resource */
  user: User;
};
export type CreateTripDto = {
  description: string;
  driverId: string;
  departureId: string;
  destinationId: string;
  vehicleId: string;
  uniqueID: string;
  cost: number;
};
export type UpdateTripDto = {
  description?: string;
  driverId?: string;
  departureId?: string;
  destinationId?: string;
  vehicleId?: string;
  uniqueID?: string;
  cost?: number;
};
export type Booking = {
  id: string;
  /** extra detail of trip */
  extraDetail: Text;
  seatNumber: string;
  nextOfKinName: string;
  nextOfKinPhone: string;
  costOfExtraLuggage: number;
  extraLuggageWeight: number;
  uniqueID: string;
  userId: string;
  tripId: string;
  /** The date when the document was created */
  createdAt: string;
  /** The date when the document was last updated */
  updatedAt: string;
  /** The user who owns this resource */
  user: User;
  /** Instance of the Trip */
  trip: Trip;
};
export type CreateBookingDto = {
  /** Seat number for the booking */
  seatNumber: string;
  /** Name of the next of kin */
  nextOfKinName: string;
  /** Phone number of the next of kin */
  nextOfKinPhone: string;
  /** Cost of extra luggage */
  costOfExtraLuggage: number;
  /** Weight of extra luggage */
  extraLuggageWeight: number;
  /** Unique ID for the booking */
  uniqueID: string;
  /** User ID of the person who made the booking */
  userId?: string;
  /** Trip ID for the associated trip */
  tripId: string;
};
export type UpdateBookingDto = {
  /** Seat number for the booking */
  seatNumber?: string;
  /** Name of the next of kin */
  nextOfKinName?: string;
  /** Phone number of the next of kin */
  nextOfKinPhone?: string;
  /** Cost of extra luggage */
  costOfExtraLuggage?: number;
  /** Weight of extra luggage */
  extraLuggageWeight?: number;
  /** Unique ID for the booking */
  uniqueID?: string;
  /** User ID of the person who made the booking */
  userId?: string;
  /** Trip ID for the associated trip */
  tripId?: string;
};
export type CreateVehicleTypeDto = {
  /** The category of the vehicle type, e.g., Bus, Van */
  category: string;
  /** Additional details about the vehicle type */
  otherDetail?: string;
  /** Number of seats in the vehicle */
  numberOfSeats: number;
  /** Number of rows in the vehicle */
  numberOfRows: number;
  /** Number of columns in the vehicle */
  numberOfColumns: number;
  /** The seating arrangement of the vehicle, e.g., 1-3-4-4 */
  seatFormation: string;
};
export type UpdateVehicleTypeDto = {
  /** The category of the vehicle type, e.g., Bus, Van */
  category?: string;
  /** Additional details about the vehicle type */
  otherDetail?: string;
  /** Number of seats in the vehicle */
  numberOfSeats?: number;
  /** Number of rows in the vehicle */
  numberOfRows?: number;
  /** Number of columns in the vehicle */
  numberOfColumns?: number;
  /** The seating arrangement of the vehicle, e.g., 1-3-4-4 */
  seatFormation?: string;
};
export type CreateVehicleDto = {
  /** The color of the vehicle */
  color: string;
  /** Additional details about the vehicle */
  otherDetail?: string;
  /** The unique human-readable ID of the vehicle */
  uniqueID?: string;
  /** The plate number of the vehicle */
  plateNumber: string;
  /** The status of the vehicle */
  status: "ACTIVE" | "INACTIVE" | "PROCESSING" | "CANCELLED";
  /** The total revenue generated by the vehicle */
  totalRevenue: number;
  /** The city where the vehicle was enrolled */
  enrollmentCity?: string;
  /** The registration date of the vehicle */
  registrationDate: string;
  /** The ID of the vehicle type */
  vehicleTypeId: string;
  /** The ID of the driver */
  driverId?: string;
  /** The ID of the provider agency */
  providerAgencyId?: string;
  /** The ID of the fleet partner */
  fleetPartnersId?: string;
};
export type UpdateVehicleDto = {
  /** The color of the vehicle */
  color?: string;
  /** Additional details about the vehicle */
  otherDetail?: string;
  /** The unique human-readable ID of the vehicle */
  uniqueID?: string;
  /** The plate number of the vehicle */
  plateNumber?: string;
  /** The status of the vehicle */
  status?: "ACTIVE" | "INACTIVE" | "PROCESSING" | "CANCELLED";
  /** The total revenue generated by the vehicle */
  totalRevenue?: number;
  /** The city where the vehicle was enrolled */
  enrollmentCity?: string;
  /** The registration date of the vehicle */
  registrationDate?: string;
  /** The ID of the vehicle type */
  vehicleTypeId?: string;
  /** The ID of the driver */
  driverId?: string;
  /** The ID of the provider agency */
  providerAgencyId?: string;
  /** The ID of the fleet partner */
  fleetPartnersId?: string;
};
export type CreateVehicleRequestDto = {
  vehicleTypeId: string;
  numberOfSeats: number;
};
export type UpdateVehicleRequestDto = {
  vehicleTypeId?: string;
  numberOfSeats?: number;
};
export type CreateVehicleReportDto = {
  reportType: string;
  description: string;
  cost?: number;
  maintenanceDate?: string;
  extraData: object;
  vehicleId: string;
};
export type UpdateVehicleReportDto = {
  reportType?: string;
  description?: string;
  cost?: number;
  maintenanceDate?: string;
  extraData?: object;
  vehicleId?: string;
};
export type CreateVehicleDocumentDto = {
  /** The type of the document */
  documentType: string;
  /** The description of the document */
  description: string;
  /** The file URL of the document */
  file: string;
  /** The ID of the associated vehicle */
  vehicleId: string;
  /** The expiration date of the document (optional) */
  expireAt: string;
};
export type UpdateVehicleDocumentDto = {
  /** The type of the document */
  documentType?: string;
  /** The description of the document */
  description?: string;
  /** The file URL of the document */
  file?: string;
  /** The ID of the associated vehicle */
  vehicleId?: string;
  /** The expiration date of the document (optional) */
  expireAt?: string;
};
export type CreateDriverDto = {
  license: string;
  age: number;
  nationalIdentityNumber: string;
  sex: string;
  maritalStatus: string;
  stateOfOrigin: string;
  localGovernment: string;
  houseAddress: string;
  otherDocument: string;
  otherDetail: string;
  latitude: string;
  longitude: string;
  status: string;
  approvalStatus: string;
  providerAgencyId: string;
  title: string;
  firstname: string;
  lastname: string;
  phone: string;
  avatar: string;
  /** Password of the user */
  password: string;
  /** Email of the user */
  email: string;
};
export type UpdateDriverDto = {
  license: string;
  fullName: string;
  age: number;
  nationalIdentityNumber: string;
  sex: string;
  maritalStatus: string;
  stateOfOrigin: string;
  localGovernment: string;
  houseAddress: string;
  avatar: string;
  otherDocument: string;
  otherDetail: string;
  latitude: string;
  longitude: string;
  status: string;
  approvalStatus: string;
  providerAgencyId: string;
};
export type DriverDocument = {
  id: string;
  documentType: string;
  /** The description of document */
  description: Text;
  /** The file url */
  file: String;
  driverId: string;
  /** The date when the document will expire */
  expireAt: string;
  /** The date when the request was created */
  createdAt: string;
  /** The date when the document was last updated */
  updatedAt: string;
  userId: string;
  /** Instance of the Driver */
  driver: Driver;
  /** The user who owns this resource */
  user: User;
};
export type CreateDriverDocumentDto = {
  documentType: string;
  description: string;
  file: string;
  driverId: string;
  expireAt: string;
};
export type UpdateDriverDocumentDto = {
  documentType: string;
  description: string;
  file: string;
  driverId: string;
  expireAt: string;
};
export type CreateDriverReportDto = {
  description: string;
  extraData: object;
  vehicleId: string;
};
export type UpdateDriverReportDto = {
  description: string;
  extraData: object;
  vehicleId: string;
};
export type CreateDriverRequestDto = {
  /** The ID of the trip associated with this driver request */
  tripId: string;
  /** The description or details of the driver request */
  description: string;
  /** Additional data related to the driver request (JSON object) */
  extraData: object;
};
export type UpdateDriverRequestDto = {
  /** The ID of the trip associated with this driver request */
  tripId: string;
  /** The description or details of the driver request */
  description: string;
  /** Additional data related to the driver request (JSON object) */
  extraData: object;
};
export type CreateProviderAgencyDto = {
  /** Any other relevant detail about the provider agency. */
  otherDetail?: string;
  /** Region of the provider agency. */
  region?: string;
  /** Country of the provider agency. */
  country?: string;
  /** Approval status of the provider agency. */
  approvalStatus?: "ACCEPTED" | "PROCESSING" | "SUSPENDED" | "REJECTED";
  /** The user ID associated with the provider agency. */
  userId: string;
};
export type UpdateProviderAgencyDto = {
  /** Any other relevant detail about the provider agency. */
  otherDetail?: string;
  /** Region of the provider agency. */
  region?: string;
  /** Country of the provider agency. */
  country?: string;
  /** Approval status of the provider agency. */
  approvalStatus?: "ACCEPTED" | "PROCESSING" | "SUSPENDED" | "REJECTED";
  /** The user ID associated with the provider agency. */
  userId?: string;
};
export const {
  useAppControllerGetHelloQuery,
  useLazyAppControllerGetHelloQuery,
  useAuthControllerLoginMutation,
  useAuthControllerVerifyEmailQuery,
  useLazyAuthControllerVerifyEmailQuery,
  useAuthControllerRequestPasswordResetMutation,
  useAuthControllerResetPasswordMutation,
  useUserControllerFindAllQuery,
  useLazyUserControllerFindAllQuery,
  useUserControllerFindIndividualAllQuery,
  useLazyUserControllerFindIndividualAllQuery,
  useUserControllerFindCorporateBodyAllQuery,
  useLazyUserControllerFindCorporateBodyAllQuery,
  useUserControllerFindOneByIdQuery,
  useLazyUserControllerFindOneByIdQuery,
  useUserControllerUpdateMutation,
  useUserControllerDeleteMutation,
  useUserControllerFindOneIndividualByIdQuery,
  useLazyUserControllerFindOneIndividualByIdQuery,
  useUserControllerUpdateIndividualByIdMutation,
  useUserControllerDeleteIndividualMutation,
  useUserControllerFindOneCorporateBodyByIdQuery,
  useLazyUserControllerFindOneCorporateBodyByIdQuery,
  useUserControllerUpdateCorporateByIdMutation,
  useUserControllerDeleteCorporateBodyMutation,
  useUserControllerCreateCorporateBodyMutation,
  useUserControllerCreateIndividualBodyMutation,
  useUserControllerCreateDispatchOfficerBodyMutation,
  useUserControllerCreateParkManagerBodyMutation,
  useUserControllerCreateParkOwnerBodyMutation,
  useUserControllerCreateParkOwnerCorporateBodyMutation,
  useParkControllerCreateParkMutation,
  useParkControllerFindAllParksQuery,
  useLazyParkControllerFindAllParksQuery,
  useParkControllerFindParkByIdQuery,
  useLazyParkControllerFindParkByIdQuery,
  useParkControllerUpdateParkMutation,
  useParkControllerDeleteParkMutation,
  useTripControllerCreateTripMutation,
  useTripControllerFindAllQuery,
  useLazyTripControllerFindAllQuery,
  useTripControllerFindOneQuery,
  useLazyTripControllerFindOneQuery,
  useTripControllerUpdateTripMutation,
  useTripControllerDeleteTripMutation,
  useBookingControllerCreateBookingMutation,
  useBookingControllerFindAllBookingsQuery,
  useLazyBookingControllerFindAllBookingsQuery,
  useBookingControllerFindBookingByIdQuery,
  useLazyBookingControllerFindBookingByIdQuery,
  useBookingControllerUpdateBookingMutation,
  useBookingControllerDeleteBookingMutation,
  useBookingControllerSearchBookingsQuery,
  useLazyBookingControllerSearchBookingsQuery,
  useVehicleControllerCreateVehicleTypeMutation,
  useVehicleControllerGetAllVehicleTypesQuery,
  useLazyVehicleControllerGetAllVehicleTypesQuery,
  useVehicleControllerGetVehicleTypeByIdQuery,
  useLazyVehicleControllerGetVehicleTypeByIdQuery,
  useVehicleControllerUpdateVehicleTypeMutation,
  useVehicleControllerDeleteVehicleTypeMutation,
  useVehicleControllerCreateVehicleMutation,
  useVehicleControllerGetAllVehiclesQuery,
  useLazyVehicleControllerGetAllVehiclesQuery,
  useVehicleControllerGetVehicleByIdQuery,
  useLazyVehicleControllerGetVehicleByIdQuery,
  useVehicleControllerUpdateVehicleMutation,
  useVehicleControllerDeleteVehicleMutation,
  useVehicleControllerCreateVehicleRequestMutation,
  useVehicleControllerGetAllVehicleRequestsQuery,
  useLazyVehicleControllerGetAllVehicleRequestsQuery,
  useVehicleControllerGetVehicleRequestByIdQuery,
  useLazyVehicleControllerGetVehicleRequestByIdQuery,
  useVehicleControllerUpdateVehicleRequestMutation,
  useVehicleControllerDeleteVehicleRequestMutation,
  useVehicleControllerCreateVehicleReportMutation,
  useVehicleControllerGetAllVehicleReportsQuery,
  useLazyVehicleControllerGetAllVehicleReportsQuery,
  useVehicleControllerGetVehicleReportByIdQuery,
  useLazyVehicleControllerGetVehicleReportByIdQuery,
  useVehicleControllerUpdateVehicleReportMutation,
  useVehicleControllerDeleteVehicleReportMutation,
  useVehicleDocumentControllerCreateMutation,
  useVehicleDocumentControllerSearchQuery,
  useLazyVehicleDocumentControllerSearchQuery,
  useVehicleDocumentControllerUpdateMutation,
  useVehicleDocumentControllerDeleteMutation,
  useDriverControllerCreateMutation,
  useDriverControllerFindAllQuery,
  useLazyDriverControllerFindAllQuery,
  useDriverControllerFindOneQuery,
  useLazyDriverControllerFindOneQuery,
  useDriverControllerUpdateMutation,
  useDriverControllerRemoveMutation,
  useDriverControllerUpdateApprovalStatusMutation,
  useDriverControllerUpdateStatusMutation,
  useDriverDocumentControllerCreateMutation,
  useDriverDocumentControllerFindOneQuery,
  useLazyDriverDocumentControllerFindOneQuery,
  useDriverDocumentControllerUpdateMutation,
  useDriverDocumentControllerRemoveMutation,
  useDriverDocumentControllerSearchQuery,
  useLazyDriverDocumentControllerSearchQuery,
  useDriverReportControllerCreateMutation,
  useDriverReportControllerFindAllQuery,
  useLazyDriverReportControllerFindAllQuery,
  useDriverReportControllerFindOneQuery,
  useLazyDriverReportControllerFindOneQuery,
  useDriverReportControllerUpdateMutation,
  useDriverReportControllerRemoveMutation,
  useDriverReportControllerSearchQuery,
  useLazyDriverReportControllerSearchQuery,
  useDriverRequestControllerCreateMutation,
  useDriverRequestControllerFindOneQuery,
  useLazyDriverRequestControllerFindOneQuery,
  useDriverRequestControllerUpdateMutation,
  useDriverRequestControllerRemoveMutation,
  useDriverRequestControllerSearchQuery,
  useLazyDriverRequestControllerSearchQuery,
  useProviderAgencyControllerCreateMutation,
  useProviderAgencyControllerFindAllQuery,
  useLazyProviderAgencyControllerFindAllQuery,
  useProviderAgencyControllerFindOneQuery,
  useLazyProviderAgencyControllerFindOneQuery,
  useProviderAgencyControllerUpdateMutation,
  useProviderAgencyControllerRemoveMutation,
} = injectedRtkApi;
