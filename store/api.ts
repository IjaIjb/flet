import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
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
    corporateBodyDocumentControllerCreate: build.mutation<
      CorporateBodyDocumentControllerCreateApiResponse,
      CorporateBodyDocumentControllerCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/corporateBody-documents`,
        method: "POST",
        body: queryArg,
      }),
    }),
    corporateBodyDocumentControllerSearch: build.query<
      CorporateBodyDocumentControllerSearchApiResponse,
      CorporateBodyDocumentControllerSearchApiArg
    >({
      query: (queryArg) => ({
        url: `/corporateBody-documents`,
        params: {
          documentType: queryArg.documentType,
          corporateBodyId: queryArg.corporateBodyId,
          description: queryArg.description,
        },
      }),
    }),
    corporateBodyDocumentControllerUpdate: build.mutation<
      CorporateBodyDocumentControllerUpdateApiResponse,
      CorporateBodyDocumentControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/corporateBody-documents/${queryArg.id}`,
        method: "PUT",
        body: queryArg.updateCorporateBodyDocumentDto,
      }),
    }),
    corporateBodyDocumentControllerDelete: build.mutation<
      CorporateBodyDocumentControllerDeleteApiResponse,
      CorporateBodyDocumentControllerDeleteApiArg
    >({
      query: (queryArg) => ({
        url: `/corporateBody-documents/${queryArg}`,
        method: "DELETE",
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
    vehicleControllerGetMyVehicles: build.query<
      VehicleControllerGetMyVehiclesApiResponse,
      VehicleControllerGetMyVehiclesApiArg
    >({
      query: () => ({ url: `/vehicles/me` }),
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
          region: queryArg.region,
          country: queryArg.country,
          approvalStatus: queryArg.approvalStatus,
          userId: queryArg.userId,
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
    fleetPartnerControllerFindAll: build.query<
      FleetPartnerControllerFindAllApiResponse,
      FleetPartnerControllerFindAllApiArg
    >({
      query: () => ({ url: `/fleet-partners` }),
    }),
    fleetPartnerControllerFindOne: build.query<
      FleetPartnerControllerFindOneApiResponse,
      FleetPartnerControllerFindOneApiArg
    >({
      query: (queryArg) => ({ url: `/fleet-partners/${queryArg}` }),
    }),
    fleetPartnerControllerDeleteFleetPartner: build.mutation<
      FleetPartnerControllerDeleteFleetPartnerApiResponse,
      FleetPartnerControllerDeleteFleetPartnerApiArg
    >({
      query: (queryArg) => ({
        url: `/fleet-partners/${queryArg}`,
        method: "DELETE",
      }),
    }),
    fleetPartnerControllerFindme: build.query<
      FleetPartnerControllerFindmeApiResponse,
      FleetPartnerControllerFindmeApiArg
    >({
      query: (queryArg) => ({ url: `/fleet-partners/me` }),
    }),
    fuelAgencyControllerCreate: build.mutation<
      FuelAgencyControllerCreateApiResponse,
      FuelAgencyControllerCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/fuel-agency`,
        method: "POST",
        body: queryArg,
      }),
    }),
    fuelAgencyControllerFindAll: build.query<
      FuelAgencyControllerFindAllApiResponse,
      FuelAgencyControllerFindAllApiArg
    >({
      query: () => ({ url: `/fuel-agency` }),
    }),
    fuelAgencyControllerFindById: build.query<
      FuelAgencyControllerFindByIdApiResponse,
      FuelAgencyControllerFindByIdApiArg
    >({
      query: (queryArg) => ({ url: `/fuel-agency/${queryArg}` }),
    }),
    fuelAgencyControllerUpdate: build.mutation<
      FuelAgencyControllerUpdateApiResponse,
      FuelAgencyControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/fuel-agency/${queryArg.id}`,
        method: "PUT",
        body: queryArg.updateFuelAgencyDto,
      }),
    }),
    fuelAgencyControllerDelete: build.mutation<
      FuelAgencyControllerDeleteApiResponse,
      FuelAgencyControllerDeleteApiArg
    >({
      query: (queryArg) => ({
        url: `/fuel-agency/${queryArg}`,
        method: "DELETE",
      }),
    }),
    fuelAgencyControllerFindMe: build.query<
      FuelAgencyControllerFindMeApiResponse,
      FuelAgencyControllerFindMeApiArg
    >({
      query: () => ({ url: `/fuel-agency/me` }),
    }),
    fuelAgencyControllerFindByState: build.query<
      FuelAgencyControllerFindByStateApiResponse,
      FuelAgencyControllerFindByStateApiArg
    >({
      query: (queryArg) => ({ url: `/fuel-agency/state/${queryArg}` }),
    }),
    fuelAgencyControllerCheckUniqueId: build.query<
      FuelAgencyControllerCheckUniqueIdApiResponse,
      FuelAgencyControllerCheckUniqueIdApiArg
    >({
      query: (queryArg) => ({ url: `/fuel-agency/check-unique/${queryArg}` }),
    }),
    hotelControllerCreate: build.mutation<
      HotelControllerCreateApiResponse,
      HotelControllerCreateApiArg
    >({
      query: (queryArg) => ({ url: `/hotels`, method: "POST", body: queryArg }),
    }),
    hotelControllerFindAll: build.query<
      HotelControllerFindAllApiResponse,
      HotelControllerFindAllApiArg
    >({
      query: () => ({ url: `/hotels` }),
    }),
    hotelControllerFindById: build.query<
      HotelControllerFindByIdApiResponse,
      HotelControllerFindByIdApiArg
    >({
      query: (queryArg) => ({ url: `/hotels/${queryArg}` }),
    }),
    hotelControllerUpdate: build.mutation<
      HotelControllerUpdateApiResponse,
      HotelControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/hotels/${queryArg.id}`,
        method: "PUT",
        body: queryArg.updateHotelDto,
      }),
    }),
    hotelControllerDelete: build.mutation<
      HotelControllerDeleteApiResponse,
      HotelControllerDeleteApiArg
    >({
      query: (queryArg) => ({ url: `/hotels/${queryArg}`, method: "DELETE" }),
    }),
    hotelControllerFindByCity: build.mutation<
      HotelControllerFindByCityApiResponse,
      HotelControllerFindByCityApiArg
    >({
      query: (queryArg) => ({
        url: `/hotels/find-by-city`,
        method: "POST",
        body: queryArg,
      }),
    }),
    hotelControllerCheckUniqueId: build.mutation<
      HotelControllerCheckUniqueIdApiResponse,
      HotelControllerCheckUniqueIdApiArg
    >({
      query: (queryArg) => ({
        url: `/hotels/check-unique-id`,
        method: "POST",
        body: queryArg,
      }),
    }),
    merchantCategoryControllerCreate: build.mutation<
      MerchantCategoryControllerCreateApiResponse,
      MerchantCategoryControllerCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/merchant-categories`,
        method: "POST",
        body: queryArg,
      }),
    }),
    merchantCategoryControllerFindAll: build.query<
      MerchantCategoryControllerFindAllApiResponse,
      MerchantCategoryControllerFindAllApiArg
    >({
      query: () => ({ url: `/merchant-categories` }),
    }),
    merchantCategoryControllerFindById: build.query<
      MerchantCategoryControllerFindByIdApiResponse,
      MerchantCategoryControllerFindByIdApiArg
    >({
      query: (queryArg) => ({ url: `/merchant-categories/${queryArg}` }),
    }),
    merchantCategoryControllerUpdate: build.mutation<
      MerchantCategoryControllerUpdateApiResponse,
      MerchantCategoryControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/merchant-categories/${queryArg.id}`,
        method: "PUT",
        body: queryArg.updateMerchantCategoryDto,
      }),
    }),
    merchantCategoryControllerDelete: build.mutation<
      MerchantCategoryControllerDeleteApiResponse,
      MerchantCategoryControllerDeleteApiArg
    >({
      query: (queryArg) => ({
        url: `/merchant-categories/${queryArg}`,
        method: "DELETE",
      }),
    }),
    merchantCategoryControllerFindByName: build.query<
      MerchantCategoryControllerFindByNameApiResponse,
      MerchantCategoryControllerFindByNameApiArg
    >({
      query: (queryArg) => ({ url: `/merchant-categories/search/${queryArg}` }),
    }),
    merchantControllerCreate: build.mutation<
      MerchantControllerCreateApiResponse,
      MerchantControllerCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/merchants`,
        method: "POST",
        body: queryArg,
      }),
    }),
    merchantControllerFindAll: build.query<
      MerchantControllerFindAllApiResponse,
      MerchantControllerFindAllApiArg
    >({
      query: (queryArg) => ({
        url: `/merchants`,
        params: {
          name: queryArg.name,
          cityId: queryArg.cityId,
          categoryId: queryArg.categoryId,
          discount: queryArg.discount,
          phone: queryArg.phone,
          coordinates: queryArg.coordinates,
        },
      }),
    }),
    merchantControllerFindOne: build.query<
      MerchantControllerFindOneApiResponse,
      MerchantControllerFindOneApiArg
    >({
      query: (queryArg) => ({ url: `/merchants/${queryArg}` }),
    }),
    merchantControllerUpdate: build.mutation<
      MerchantControllerUpdateApiResponse,
      MerchantControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/merchants/${queryArg.id}`,
        method: "PUT",
        body: queryArg.updateMerchantDto,
      }),
    }),
    merchantControllerRemove: build.mutation<
      MerchantControllerRemoveApiResponse,
      MerchantControllerRemoveApiArg
    >({
      query: (queryArg) => ({
        url: `/merchants/${queryArg}`,
        method: "DELETE",
      }),
    }),
    locationCountryControllerCreate: build.mutation<
      LocationCountryControllerCreateApiResponse,
      LocationCountryControllerCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/location-country`,
        method: "POST",
        body: queryArg,
      }),
    }),
    locationCountryControllerFindAll: build.query<
      LocationCountryControllerFindAllApiResponse,
      LocationCountryControllerFindAllApiArg
    >({
      query: () => ({ url: `/location-country` }),
    }),
    locationCountryControllerFindOne: build.query<
      LocationCountryControllerFindOneApiResponse,
      LocationCountryControllerFindOneApiArg
    >({
      query: (queryArg) => ({ url: `/location-country/${queryArg}` }),
    }),
    locationCountryControllerUpdate: build.mutation<
      LocationCountryControllerUpdateApiResponse,
      LocationCountryControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/location-country/${queryArg.id}`,
        method: "PATCH",
        body: queryArg.updateLocationCountryDto,
      }),
    }),
    locationCountryControllerRemove: build.mutation<
      LocationCountryControllerRemoveApiResponse,
      LocationCountryControllerRemoveApiArg
    >({
      query: (queryArg) => ({
        url: `/location-country/${queryArg}`,
        method: "DELETE",
      }),
    }),
    locationStateControllerCreate: build.mutation<
      LocationStateControllerCreateApiResponse,
      LocationStateControllerCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/location-states`,
        method: "POST",
        body: queryArg,
      }),
    }),
    locationStateControllerFindAll: build.query<
      LocationStateControllerFindAllApiResponse,
      LocationStateControllerFindAllApiArg
    >({
      query: () => ({ url: `/location-states` }),
    }),
    locationStateControllerFindOne: build.query<
      LocationStateControllerFindOneApiResponse,
      LocationStateControllerFindOneApiArg
    >({
      query: (queryArg) => ({ url: `/location-states/${queryArg}` }),
    }),
    locationStateControllerUpdate: build.mutation<
      LocationStateControllerUpdateApiResponse,
      LocationStateControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/location-states/${queryArg.id}`,
        method: "PUT",
        body: queryArg.updateLocationStateDto,
      }),
    }),
    locationStateControllerDelete: build.mutation<
      LocationStateControllerDeleteApiResponse,
      LocationStateControllerDeleteApiArg
    >({
      query: (queryArg) => ({
        url: `/location-states/${queryArg}`,
        method: "DELETE",
      }),
    }),
    testimonialsControllerCreate: build.mutation<
      TestimonialsControllerCreateApiResponse,
      TestimonialsControllerCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/testimonials`,
        method: "POST",
        body: queryArg,
      }),
    }),
    testimonialsControllerFindAll: build.query<
      TestimonialsControllerFindAllApiResponse,
      TestimonialsControllerFindAllApiArg
    >({
      query: () => ({ url: `/testimonials` }),
    }),
    testimonialsControllerFindOne: build.query<
      TestimonialsControllerFindOneApiResponse,
      TestimonialsControllerFindOneApiArg
    >({
      query: (queryArg) => ({ url: `/testimonials/${queryArg}` }),
    }),
    testimonialsControllerUpdate: build.mutation<
      TestimonialsControllerUpdateApiResponse,
      TestimonialsControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/testimonials/${queryArg.id}`,
        method: "PUT",
        body: queryArg.updateTestimonialDto,
      }),
    }),
    testimonialsControllerRemove: build.mutation<
      TestimonialsControllerRemoveApiResponse,
      TestimonialsControllerRemoveApiArg
    >({
      query: (queryArg) => ({
        url: `/testimonials/${queryArg}`,
        method: "DELETE",
      }),
    }),
    testimonialsControllerFindByStatus: build.query<
      TestimonialsControllerFindByStatusApiResponse,
      TestimonialsControllerFindByStatusApiArg
    >({
      query: (queryArg) => ({ url: `/testimonials/status/${queryArg}` }),
    }),
    luaguageControllerCreate: build.mutation<
      LuaguageControllerCreateApiResponse,
      LuaguageControllerCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/luaguages`,
        method: "POST",
        body: queryArg,
      }),
    }),
    luaguageControllerFindAll: build.query<
      LuaguageControllerFindAllApiResponse,
      LuaguageControllerFindAllApiArg
    >({
      query: () => ({ url: `/luaguages` }),
    }),
    luaguageControllerFindOne: build.query<
      LuaguageControllerFindOneApiResponse,
      LuaguageControllerFindOneApiArg
    >({
      query: (queryArg) => ({ url: `/luaguages/${queryArg}` }),
    }),
    luaguageControllerUpdate: build.mutation<
      LuaguageControllerUpdateApiResponse,
      LuaguageControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/luaguages/${queryArg.id}`,
        method: "PUT",
        body: queryArg.updateLuaguageDto,
      }),
    }),
    luaguageControllerRemove: build.mutation<
      LuaguageControllerRemoveApiResponse,
      LuaguageControllerRemoveApiArg
    >({
      query: (queryArg) => ({
        url: `/luaguages/${queryArg}`,
        method: "DELETE",
      }),
    }),
    luaguageControllerFindByUniqueId: build.query<
      LuaguageControllerFindByUniqueIdApiResponse,
      LuaguageControllerFindByUniqueIdApiArg
    >({
      query: (queryArg) => ({ url: `/luaguages/uniqueID/${queryArg}` }),
    }),
    luaguageControllerFindAllByUserId: build.query<
      LuaguageControllerFindAllByUserIdApiResponse,
      LuaguageControllerFindAllByUserIdApiArg
    >({
      query: (queryArg) => ({ url: `/luaguages/user/${queryArg}` }),
    }),
    locationCityControllerCreate: build.mutation<
      LocationCityControllerCreateApiResponse,
      LocationCityControllerCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/location-cities`,
        method: "POST",
        body: queryArg,
      }),
    }),
    locationCityControllerFindOne: build.query<
      LocationCityControllerFindOneApiResponse,
      LocationCityControllerFindOneApiArg
    >({
      query: (queryArg) => ({ url: `/location-cities/${queryArg}` }),
    }),
    locationCityControllerUpdate: build.mutation<
      LocationCityControllerUpdateApiResponse,
      LocationCityControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/location-cities/${queryArg.id}`,
        method: "PUT",
        body: queryArg.updateLocationCityDto,
      }),
    }),
    locationCityControllerRemove: build.mutation<
      LocationCityControllerRemoveApiResponse,
      LocationCityControllerRemoveApiArg
    >({
      query: (queryArg) => ({
        url: `/location-cities/${queryArg}`,
        method: "DELETE",
      }),
    }),
    commissionControllerCreate: build.mutation<
      CommissionControllerCreateApiResponse,
      CommissionControllerCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/commissions`,
        method: "POST",
        body: queryArg,
      }),
    }),
    commissionControllerFindOne: build.query<
      CommissionControllerFindOneApiResponse,
      CommissionControllerFindOneApiArg
    >({
      query: (queryArg) => ({ url: `/commissions/${queryArg}` }),
    }),
    commissionControllerUpdate: build.mutation<
      CommissionControllerUpdateApiResponse,
      CommissionControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/commissions/${queryArg.id}`,
        method: "PUT",
        body: queryArg.updateCommissionDto,
      }),
    }),
    commissionControllerRemove: build.mutation<
      CommissionControllerRemoveApiResponse,
      CommissionControllerRemoveApiArg
    >({
      query: (queryArg) => ({
        url: `/commissions/${queryArg}`,
        method: "DELETE",
      }),
    }),
    carouselsControllerCreate: build.mutation<
      CarouselsControllerCreateApiResponse,
      CarouselsControllerCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/carousels`,
        method: "POST",
        body: queryArg,
      }),
    }),
    carouselsControllerFindAll: build.query<
      CarouselsControllerFindAllApiResponse,
      CarouselsControllerFindAllApiArg
    >({
      query: () => ({ url: `/carousels` }),
    }),
    carouselsControllerFindOne: build.query<
      CarouselsControllerFindOneApiResponse,
      CarouselsControllerFindOneApiArg
    >({
      query: (queryArg) => ({ url: `/carousels/${queryArg}` }),
    }),
    carouselsControllerUpdate: build.mutation<
      CarouselsControllerUpdateApiResponse,
      CarouselsControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/carousels/${queryArg.id}`,
        method: "PUT",
        body: queryArg.updateCarouselDto,
      }),
    }),
    carouselsControllerRemove: build.mutation<
      CarouselsControllerRemoveApiResponse,
      CarouselsControllerRemoveApiArg
    >({
      query: (queryArg) => ({
        url: `/carousels/${queryArg}`,
        method: "DELETE",
      }),
    }),
    carouselsControllerFindByStatus: build.query<
      CarouselsControllerFindByStatusApiResponse,
      CarouselsControllerFindByStatusApiArg
    >({
      query: (queryArg) => ({ url: `/carousels/status/${queryArg}` }),
    }),
    urbanCardControllerCreate: build.mutation<
      UrbanCardControllerCreateApiResponse,
      UrbanCardControllerCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/urban-cards`,
        method: "POST",
        body: queryArg,
      }),
    }),
    urbanCardControllerFindAll: build.query<
      UrbanCardControllerFindAllApiResponse,
      UrbanCardControllerFindAllApiArg
    >({
      query: (queryArg) => ({ url: `/urban-cards`, body: queryArg }),
    }),
    urbanCardControllerFindOne: build.query<
      UrbanCardControllerFindOneApiResponse,
      UrbanCardControllerFindOneApiArg
    >({
      query: (queryArg) => ({ url: `/urban-cards/${queryArg}` }),
    }),
    urbanCardControllerUpdate: build.mutation<
      UrbanCardControllerUpdateApiResponse,
      UrbanCardControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/urban-cards/${queryArg.id}`,
        method: "PUT",
        body: queryArg.updateUrbanCardDto,
      }),
    }),
    urbanCardControllerRemove: build.mutation<
      UrbanCardControllerRemoveApiResponse,
      UrbanCardControllerRemoveApiArg
    >({
      query: (queryArg) => ({
        url: `/urban-cards/${queryArg}`,
        method: "DELETE",
      }),
    }),
    appControllerGetHello: build.query<
      AppControllerGetHelloApiResponse,
      AppControllerGetHelloApiArg
    >({
      query: () => ({ url: `/` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as api };
export type AuthControllerLoginApiResponse =
  /** status 200 Login successful */ UserLoginResponse;
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
  /** status 200 List of users with either corporate body or individual information */ User[];
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
export type CorporateBodyDocumentControllerCreateApiResponse =
  /** status 201 CorporateBody document created successfully */ CorporateBodyDocument;
export type CorporateBodyDocumentControllerCreateApiArg =
  CreateCorporateBodyDocumentDto;
export type CorporateBodyDocumentControllerSearchApiResponse =
  /** status 200 CorporateBody documents retrieved successfully */ CorporateBodyDocument[];
export type CorporateBodyDocumentControllerSearchApiArg = {
  /** Filter by document type */
  documentType?: string;
  /** Filter by associated corporateBody ID */
  corporateBodyId?: string;
  /** Search by document description */
  description?: string;
};
export type CorporateBodyDocumentControllerUpdateApiResponse =
  /** status 200 CorporateBody document updated successfully */ CorporateBodyDocument;
export type CorporateBodyDocumentControllerUpdateApiArg = {
  id: string;
  updateCorporateBodyDocumentDto: UpdateCorporateBodyDocumentDto;
};
export type CorporateBodyDocumentControllerDeleteApiResponse =
  /** status 200 CorporateBody document deleted successfully */ CorporateBodyDocument;
export type CorporateBodyDocumentControllerDeleteApiArg = string;
export type VehicleControllerCreateVehicleTypeApiResponse =
  /** status 201 Vehicle type successfully created */ VehicleType;
export type VehicleControllerCreateVehicleTypeApiArg = CreateVehicleTypeDto;
export type VehicleControllerGetAllVehicleTypesApiResponse =
  /** status 200 List of vehicle types */ VehicleType[];
export type VehicleControllerGetAllVehicleTypesApiArg = void;
export type VehicleControllerGetVehicleTypeByIdApiResponse =
  /** status 200 Vehicle type found */ VehicleType;
export type VehicleControllerGetVehicleTypeByIdApiArg =
  /** Vehicle type ID */ string;
export type VehicleControllerUpdateVehicleTypeApiResponse =
  /** status 200 Vehicle type successfully updated */ VehicleType;
export type VehicleControllerUpdateVehicleTypeApiArg = {
  /** Vehicle type ID */
  id: string;
  updateVehicleTypeDto: UpdateVehicleTypeDto;
};
export type VehicleControllerDeleteVehicleTypeApiResponse = unknown;
export type VehicleControllerDeleteVehicleTypeApiArg =
  /** Vehicle type ID */ string;
export type VehicleControllerCreateVehicleApiResponse =
  /** status 201 Vehicle successfully created */ Vehicle;
export type VehicleControllerCreateVehicleApiArg = CreateVehicleDto;
export type VehicleControllerGetAllVehiclesApiResponse =
  /** status 200 List of vehicles */ Vehicle[];
export type VehicleControllerGetAllVehiclesApiArg = void;
export type VehicleControllerGetMyVehiclesApiResponse =
  /** status 200 List of vehicles */ Vehicle[];
export type VehicleControllerGetMyVehiclesApiArg = void;
export type VehicleControllerGetVehicleByIdApiResponse =
  /** status 200 Vehicle found */ Vehicle;
export type VehicleControllerGetVehicleByIdApiArg = /** Vehicle ID */ string;
export type VehicleControllerUpdateVehicleApiResponse =
  /** status 200 Vehicle successfully updated */ Vehicle;
export type VehicleControllerUpdateVehicleApiArg = {
  /** Vehicle ID */
  id: string;
  updateVehicleDto: UpdateVehicleDto;
};
export type VehicleControllerDeleteVehicleApiResponse = unknown;
export type VehicleControllerDeleteVehicleApiArg = /** Vehicle ID */ string;
export type VehicleControllerCreateVehicleRequestApiResponse =
  /** status 201 Vehicle request successfully created */ VehicleRequest;
export type VehicleControllerCreateVehicleRequestApiArg =
  CreateVehicleRequestDto;
export type VehicleControllerGetAllVehicleRequestsApiResponse =
  /** status 200 List of vehicle requests */ VehicleRequest[];
export type VehicleControllerGetAllVehicleRequestsApiArg = void;
export type VehicleControllerGetVehicleRequestByIdApiResponse =
  /** status 200 Vehicle request found */ VehicleRequest;
export type VehicleControllerGetVehicleRequestByIdApiArg =
  /** Vehicle request ID */ string;
export type VehicleControllerUpdateVehicleRequestApiResponse =
  /** status 200 Vehicle request successfully updated */ VehicleRequest;
export type VehicleControllerUpdateVehicleRequestApiArg = {
  /** Vehicle request ID */
  id: string;
  updateVehicleRequestDto: UpdateVehicleRequestDto;
};
export type VehicleControllerDeleteVehicleRequestApiResponse = unknown;
export type VehicleControllerDeleteVehicleRequestApiArg =
  /** Vehicle request ID */ string;
export type VehicleControllerCreateVehicleReportApiResponse =
  /** status 201 Vehicle report successfully created */ VehicleReport;
export type VehicleControllerCreateVehicleReportApiArg = CreateVehicleReportDto;
export type VehicleControllerGetAllVehicleReportsApiResponse =
  /** status 200 List of vehicle reports */ VehicleReport[];
export type VehicleControllerGetAllVehicleReportsApiArg = void;
export type VehicleControllerGetVehicleReportByIdApiResponse =
  /** status 200 Vehicle report found */ VehicleReport;
export type VehicleControllerGetVehicleReportByIdApiArg =
  /** Vehicle report ID */ string;
export type VehicleControllerUpdateVehicleReportApiResponse =
  /** status 200 Vehicle report successfully updated */ VehicleReport;
export type VehicleControllerUpdateVehicleReportApiArg = {
  /** Vehicle report ID */
  id: string;
  updateVehicleReportDto: UpdateVehicleReportDto;
};
export type VehicleControllerDeleteVehicleReportApiResponse = unknown;
export type VehicleControllerDeleteVehicleReportApiArg =
  /** Vehicle report ID */ string;
export type VehicleDocumentControllerCreateApiResponse =
  /** status 201 Vehicle document created successfully */ VehicleDocument;
export type VehicleDocumentControllerCreateApiArg = CreateVehicleDocumentDto;
export type VehicleDocumentControllerSearchApiResponse =
  /** status 200 Vehicle documents retrieved successfully */ VehicleDocument[];
export type VehicleDocumentControllerSearchApiArg = {
  /** Filter by document type */
  documentType?: string;
  /** Filter by associated vehicle ID */
  vehicleId?: string;
  /** Search by document description */
  description?: string;
};
export type VehicleDocumentControllerUpdateApiResponse =
  /** status 200 Vehicle document updated successfully */ VehicleDocument;
export type VehicleDocumentControllerUpdateApiArg = {
  id: string;
  updateVehicleDocumentDto: UpdateVehicleDocumentDto;
};
export type VehicleDocumentControllerDeleteApiResponse =
  /** status 200 Vehicle document deleted successfully */ VehicleDocument;
export type VehicleDocumentControllerDeleteApiArg = string;
export type ParkControllerCreateParkApiResponse =
  /** status 201 Park created successfully */ Park;
export type ParkControllerCreateParkApiArg = CreateParkDto;
export type ParkControllerFindAllParksApiResponse =
  /** status 200 Parks retrieved successfully */ Park[];
export type ParkControllerFindAllParksApiArg = void;
export type ParkControllerFindParkByIdApiResponse =
  /** status 200 Park retrieved successfully */ Park;
export type ParkControllerFindParkByIdApiArg = /** ID of the park */ string;
export type ParkControllerUpdateParkApiResponse =
  /** status 200 Park updated successfully */ Park;
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
export type DriverDocumentControllerRemoveApiResponse =
  /** status 200 The driver document has been successfully deleted. */ DriverDocument;
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
  region?: string;
  /** Filter by country of the provider agency. */
  country?: string;
  /** Filter by approval status of the provider agency. */
  approvalStatus?: "ACCEPTED" | "PROCESSING" | "SUSPENDED" | "REJECTED";
  /** Filter by user ID associated with the provider agency. */
  userId?: string;
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
export type FleetPartnerControllerFindAllApiResponse =
  /** status 200 Fleet partners found */ FleetPartners[];
export type FleetPartnerControllerFindAllApiArg = void;
export type FleetPartnerControllerFindOneApiResponse =
  /** status 200 Fleet partner found */ FleetPartners;
export type FleetPartnerControllerFindOneApiArg =
  /** The ID of the Fleet Partner */ string;
export type FleetPartnerControllerDeleteFleetPartnerApiResponse =
  /** status 200 Fleet partner deleted */ FleetPartners;
export type FleetPartnerControllerDeleteFleetPartnerApiArg =
  /** Fleet partner ID */ string;
export type FleetPartnerControllerFindmeApiResponse =
  /** status 200 Fleet partner found */ FleetPartners;
export type FleetPartnerControllerFindmeApiArg =
  /** The ID of the Fleet Partner */ string;
export type FuelAgencyControllerCreateApiResponse = unknown;
export type FuelAgencyControllerCreateApiArg = CreateFuelAgencyDto;
export type FuelAgencyControllerFindAllApiResponse = unknown;
export type FuelAgencyControllerFindAllApiArg = void;
export type FuelAgencyControllerFindByIdApiResponse = unknown;
export type FuelAgencyControllerFindByIdApiArg =
  /** ID of the fuel agency */ string;
export type FuelAgencyControllerUpdateApiResponse = unknown;
export type FuelAgencyControllerUpdateApiArg = {
  /** ID of the fuel agency */
  id: string;
  updateFuelAgencyDto: UpdateFuelAgencyDto;
};
export type FuelAgencyControllerDeleteApiResponse = unknown;
export type FuelAgencyControllerDeleteApiArg =
  /** ID of the fuel agency */ string;
export type FuelAgencyControllerFindMeApiResponse = unknown;
export type FuelAgencyControllerFindMeApiArg = void;
export type FuelAgencyControllerFindByStateApiResponse = unknown;
export type FuelAgencyControllerFindByStateApiArg =
  /** State to search for fuel agencies */ string;
export type FuelAgencyControllerCheckUniqueIdApiResponse = unknown;
export type FuelAgencyControllerCheckUniqueIdApiArg =
  /** Unique ID to check */ string;
export type HotelControllerCreateApiResponse = unknown;
export type HotelControllerCreateApiArg = CreateHotelDto;
export type HotelControllerFindAllApiResponse = unknown;
export type HotelControllerFindAllApiArg = void;
export type HotelControllerFindByIdApiResponse = unknown;
export type HotelControllerFindByIdApiArg = /** Hotel ID */ string;
export type HotelControllerUpdateApiResponse = unknown;
export type HotelControllerUpdateApiArg = {
  /** Hotel ID */
  id: string;
  updateHotelDto: UpdateHotelDto;
};
export type HotelControllerDeleteApiResponse = unknown;
export type HotelControllerDeleteApiArg = /** Hotel ID */ string;
export type HotelControllerFindByCityApiResponse = unknown;
export type HotelControllerFindByCityApiArg = FindByCityDto;
export type HotelControllerCheckUniqueIdApiResponse = unknown;
export type HotelControllerCheckUniqueIdApiArg = CheckUniqueIdDto;
export type MerchantCategoryControllerCreateApiResponse = unknown;
export type MerchantCategoryControllerCreateApiArg = CreateMerchantCategoryDto;
export type MerchantCategoryControllerFindAllApiResponse = unknown;
export type MerchantCategoryControllerFindAllApiArg = void;
export type MerchantCategoryControllerFindByIdApiResponse = unknown;
export type MerchantCategoryControllerFindByIdApiArg = string;
export type MerchantCategoryControllerUpdateApiResponse = unknown;
export type MerchantCategoryControllerUpdateApiArg = {
  id: string;
  updateMerchantCategoryDto: UpdateMerchantCategoryDto;
};
export type MerchantCategoryControllerDeleteApiResponse = unknown;
export type MerchantCategoryControllerDeleteApiArg = string;
export type MerchantCategoryControllerFindByNameApiResponse = unknown;
export type MerchantCategoryControllerFindByNameApiArg = string;
export type MerchantControllerCreateApiResponse =
  /** status 201 Merchant created successfully */ Merchant;
export type MerchantControllerCreateApiArg = CreateMerchantDto;
export type MerchantControllerFindAllApiResponse =
  /** status 200 Fetched all merchants */ Merchant[];
export type MerchantControllerFindAllApiArg = {
  /** Filter merchants by name (partial match allowed) */
  name?: string;
  /** Filter merchants by city ID */
  cityId?: string;
  /** Filter merchants by category ID */
  categoryId?: string;
  /** Filter merchants by discount (partial match allowed) */
  discount?: string;
  /** Filter merchants by phone number */
  phone?: string;
  /** Filter merchants by coordinates (e.g., lat,long) */
  coordinates?: string;
};
export type MerchantControllerFindOneApiResponse =
  /** status 200 Fetched merchant details */ Merchant;
export type MerchantControllerFindOneApiArg =
  /** The ID of the merchant */ string;
export type MerchantControllerUpdateApiResponse =
  /** status 200 Merchant updated successfully */ Merchant;
export type MerchantControllerUpdateApiArg = {
  /** The ID of the merchant */
  id: string;
  updateMerchantDto: UpdateMerchantDto;
};
export type MerchantControllerRemoveApiResponse = unknown;
export type MerchantControllerRemoveApiArg =
  /** The ID of the merchant */ string;
export type LocationCountryControllerCreateApiResponse =
  /** status 201 The location country has been created successfully. */ LocationCountry;
export type LocationCountryControllerCreateApiArg = CreateLocationCountryDto;
export type LocationCountryControllerFindAllApiResponse =
  /** status 200 List of all location countries. */ LocationCountry[];
export type LocationCountryControllerFindAllApiArg = void;
export type LocationCountryControllerFindOneApiResponse =
  /** status 200 Details of the location country. */ LocationCountry;
export type LocationCountryControllerFindOneApiArg = string;
export type LocationCountryControllerUpdateApiResponse =
  /** status 200 The location country has been updated successfully. */ LocationCountry;
export type LocationCountryControllerUpdateApiArg = {
  id: string;
  updateLocationCountryDto: UpdateLocationCountryDto;
};
export type LocationCountryControllerRemoveApiResponse =
  /** status 200 The location country has been deleted successfully. */ LocationCountry;
export type LocationCountryControllerRemoveApiArg = string;
export type LocationStateControllerCreateApiResponse =
  /** status 201 The location state has been created. */ LocationState;
export type LocationStateControllerCreateApiArg = CreateLocationStateDto;
export type LocationStateControllerFindAllApiResponse =
  /** status 200 List of location states retrieved. */ LocationState[];
export type LocationStateControllerFindAllApiArg = void;
export type LocationStateControllerFindOneApiResponse =
  /** status 200 Location state retrieved. */ LocationState;
export type LocationStateControllerFindOneApiArg = string;
export type LocationStateControllerUpdateApiResponse =
  /** status 200 The location state has been updated. */ LocationState;
export type LocationStateControllerUpdateApiArg = {
  id: string;
  updateLocationStateDto: UpdateLocationStateDto;
};
export type LocationStateControllerDeleteApiResponse = unknown;
export type LocationStateControllerDeleteApiArg = string;
export type TestimonialsControllerCreateApiResponse =
  /** status 201 Testimonial created successfully. */ Testimonials;
export type TestimonialsControllerCreateApiArg = CreateTestimonialDto;
export type TestimonialsControllerFindAllApiResponse =
  /** status 200 Testimonials fetched successfully. */ Testimonials[];
export type TestimonialsControllerFindAllApiArg = void;
export type TestimonialsControllerFindOneApiResponse =
  /** status 200 Testimonial fetched successfully. */ Testimonials;
export type TestimonialsControllerFindOneApiArg = string;
export type TestimonialsControllerUpdateApiResponse =
  /** status 200 Testimonial updated successfully. */ Testimonials;
export type TestimonialsControllerUpdateApiArg = {
  id: string;
  updateTestimonialDto: UpdateTestimonialDto;
};
export type TestimonialsControllerRemoveApiResponse = unknown;
export type TestimonialsControllerRemoveApiArg = string;
export type TestimonialsControllerFindByStatusApiResponse =
  /** status 200 Testimonials fetched successfully by status. */ Testimonials[];
export type TestimonialsControllerFindByStatusApiArg = string;
export type LuaguageControllerCreateApiResponse =
  /** status 200 The Luaguage has been successfully created. */ Luaguage;
export type LuaguageControllerCreateApiArg = CreateLuaguageDto;
export type LuaguageControllerFindAllApiResponse =
  /** status 200 All Luaguages retrieved successfully. */ Luaguage[];
export type LuaguageControllerFindAllApiArg = void;
export type LuaguageControllerFindOneApiResponse =
  /** status 200 The Luaguage with the specified ID. */ Luaguage;
export type LuaguageControllerFindOneApiArg = string;
export type LuaguageControllerUpdateApiResponse =
  /** status 200 The Luaguage has been successfully updated. */ Luaguage;
export type LuaguageControllerUpdateApiArg = {
  id: string;
  updateLuaguageDto: UpdateLuaguageDto;
};
export type LuaguageControllerRemoveApiResponse =
  /** status 200 The Luaguage has been successfully deleted. */ Luaguage;
export type LuaguageControllerRemoveApiArg = string;
export type LuaguageControllerFindByUniqueIdApiResponse =
  /** status 200 The Luaguage with the specified uniqueID. */ Luaguage;
export type LuaguageControllerFindByUniqueIdApiArg = string;
export type LuaguageControllerFindAllByUserIdApiResponse =
  /** status 200 All Luaguages for the user retrieved successfully. */ Luaguage[];
export type LuaguageControllerFindAllByUserIdApiArg = string;
export type LocationCityControllerCreateApiResponse =
  /** status 201 City successfully created */ LocationCity;
export type LocationCityControllerCreateApiArg = CreateLocationCityDto;
export type LocationCityControllerFindOneApiResponse =
  /** status 200 City found */ LocationCity;
export type LocationCityControllerFindOneApiArg = string;
export type LocationCityControllerUpdateApiResponse =
  /** status 200 City successfully updated */ LocationCity;
export type LocationCityControllerUpdateApiArg = {
  id: string;
  updateLocationCityDto: UpdateLocationCityDto;
};
export type LocationCityControllerRemoveApiResponse = unknown;
export type LocationCityControllerRemoveApiArg = string;
export type CommissionControllerCreateApiResponse =
  /** status 201 The commission has been successfully created. */ Commission;
export type CommissionControllerCreateApiArg = CreateCommissionDto;
export type CommissionControllerFindOneApiResponse =
  /** status 200 The commission has been successfully fetched. */ Commission;
export type CommissionControllerFindOneApiArg = string;
export type CommissionControllerUpdateApiResponse =
  /** status 200 The commission has been successfully updated. */ Commission;
export type CommissionControllerUpdateApiArg = {
  id: string;
  updateCommissionDto: UpdateCommissionDto;
};
export type CommissionControllerRemoveApiResponse = unknown;
export type CommissionControllerRemoveApiArg = string;
export type CarouselsControllerCreateApiResponse =
  /** status 201 Carousel created successfully */ Carousels;
export type CarouselsControllerCreateApiArg = CreateCarouselDto;
export type CarouselsControllerFindAllApiResponse =
  /** status 200 Carousels retrieved successfully */ Carousels[];
export type CarouselsControllerFindAllApiArg = void;
export type CarouselsControllerFindOneApiResponse =
  /** status 200 Carousel retrieved successfully */ Carousels;
export type CarouselsControllerFindOneApiArg = string;
export type CarouselsControllerUpdateApiResponse =
  /** status 200 Carousel updated successfully */ Carousels;
export type CarouselsControllerUpdateApiArg = {
  id: string;
  updateCarouselDto: UpdateCarouselDto;
};
export type CarouselsControllerRemoveApiResponse =
  /** status 200 Carousel deleted successfully */ Carousels;
export type CarouselsControllerRemoveApiArg = string;
export type CarouselsControllerFindByStatusApiResponse =
  /** status 200 Carousels retrieved successfully */ Carousels[];
export type CarouselsControllerFindByStatusApiArg = string;
export type UrbanCardControllerCreateApiResponse =
  /** status 201 Urban card created successfully */ UrbanCardResponseDto;
export type UrbanCardControllerCreateApiArg = CreateUrbanCardDto;
export type UrbanCardControllerFindAllApiResponse =
  /** status 200 Urban cards fetched successfully */ UrbanCardResponseDto[];
export type UrbanCardControllerFindAllApiArg = UrbanCardFilterDto;
export type UrbanCardControllerFindOneApiResponse =
  /** status 200 Urban card found successfully */ UrbanCardResponseDto;
export type UrbanCardControllerFindOneApiArg = string;
export type UrbanCardControllerUpdateApiResponse =
  /** status 200 Urban card updated successfully */ UrbanCardResponseDto;
export type UrbanCardControllerUpdateApiArg = {
  id: string;
  updateUrbanCardDto: UpdateUrbanCardDto;
};
export type UrbanCardControllerRemoveApiResponse =
  /** status 200 Urban card deleted successfully */ UrbanCardResponseDto;
export type UrbanCardControllerRemoveApiArg = string;
export type AppControllerGetHelloApiResponse = unknown;
export type AppControllerGetHelloApiArg = void;
export type User = {
  id: string;
  username: string;
  isEmailVerified: boolean;
  email: string;
  role: string;
  userType: string;
  userCategory: string;
  status: string;
};
// export type UserLoginResponse = {
//   user: User;
//   token: string;
// };
export type UserLoginResponse = {
  status?: number;
  message?: string;
  data: {
    token: string;
    user: any;
  };
  user: User;
  token: string;
};
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
  status?: number;
  message?: string;
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
export type Text = {};
export type String = {};
export type CorporateBodyDocument = {
  id: string;
  documentType: string;
  /** The description of document */
  description: Text;
  /** The file url */
  file: String;
  corporateBodyId: string;
  /** The date when the document will expire */
  expireAt: string;
  /** The date when the request was created */
  createdAt: string;
  /** The date when the document was last updated */
  updatedAt: string;
  userId: string;
  /** Instance of the CorporateBody */
  corporateBody: CorporateBody;
  /** The user who owns this resource */
  user: User;
};
// export type CorporateBody = {
//   id: string;
//   companyName: string;
//   companyAddress: string;
//   companyRC: string;
//   phone: string;
//   avatar: string;
//   userId: string;
//   /** The date when the user was created */
//   createdAt: string;
//   /** The date when the user was last updated */
//   updatedAt: string;
//   /** The corporate body auth/user detail */
//   user: User;
//   /** The corporate body documents */
//   documents: CorporateBodyDocument;
// };
export type CorporateBody = {
  status?: number; // 200 or 201
  message?: string;
  data?: {
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
    /** The corporate body documents */
    documents: CorporateBodyDocument;
  
  }
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
  /** The corporate body documents */
  documents: CorporateBodyDocument;
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
  avatar?: string | null;
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
  avatar?: string | null;
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
  avatar?: string;
  /** Password of the user */
  password: string;
  /** Email of the user */
  email: string;
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
export type CreateIndividualDto = {
  title?: string;
  firstname: string;
  lastname: string;
  phone: string;
  city: string;
  avatar?: string;
  /** Password of the user */
  password: string;
  /** Email of the user */
  email: string;
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
export type CreateCorporateBodyDocumentDto = {
  /** The type of the document */
  documentType: string;
  /** The description of the document */
  description?: string;
  /** The file URL of the document */
  file: string;
  /** The ID of the associated corporateBody */
  corporateBodyId: string;
  /** The expiration date of the document (optional) */
  expireAt?: string;
};
export type UpdateCorporateBodyDocumentDto = {
  /** The type of the document */
  documentType?: string;
  /** The description of the document */
  description?: string;
  /** The file URL of the document */
  file?: string;
  /** The ID of the associated corporateBody */
  corporateBodyId?: string;
  /** The expiration date of the document (optional) */
  expireAt?: string;
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
  trips: Trip;
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
export type VehicleRequest = {
  id: string;
  numberOfSeats: number;
  userId: string;
  /** The date when the user was created */
  createdAt: string;
  /** The date when the user was last updated */
  updatedAt: string;
  /** The user who owns this resource */
  user: User;
};
export type CreateVehicleRequestDto = {
  vehicleTypeId: string;
  numberOfSeats: number;
};
export type UpdateVehicleRequestDto = {
  vehicleTypeId?: string;
  numberOfSeats?: number;
};
export type Decimal = {};
export type Date = {};
export type VehicleReport = {
  id: string;
  reportType: string;
  /** The content of the report */
  description: Text;
  /** The cost for for repair */
  cost: Decimal;
  /** The cost for for repair */
  maintenanceDate: Date;
  extraData: object;
  vehicleId: string;
  userId: string;
  /** The date when the request was created */
  createdAt: string;
  /** The date when the request was last updated */
  updatedAt: string;
  /** Instance of the Vehicle */
  vehicle: Vehicle;
  /** The user who owns this resource */
  user: User;
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
export type VehicleDocument = {
  id: string;
  documentType: string;
  /** The description of document */
  description: Text;
  /** The file url */
  file: String;
  vehicleId: string;
  /** The date when the document will expire */
  expireAt: string;
  /** The date when the document was created */
  createdAt: string;
  /** The date when the document was last updated */
  updatedAt: string;
  userId: string;
  /** The user who owns this resource */
  user: User;
  /** Instance of the Vehicle */
  vehicle: Vehicle;
};
export type CreateVehicleDocumentDto = {
  /** The type of the document */
  documentType: string;
  /** The description of the document */
  description?: string;
  /** The file URL of the document */
  file: string;
  /** The ID of the associated vehicle */
  vehicleId: string;
  /** The expiration date of the document (optional) */
  expireAt?: string;
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
  userId?: string;
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
  userId?: string;
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
  costOfExtraLuggage?: number;
  /** Weight of extra luggage */
  extraLuggageWeight?: number;
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
  otherDetail?: string;
  latitude: string;
  longitude: string;
  status: string;
  approvalStatus: string;
  providerAgencyId: string;
  title?: string;
  firstname: string;
  lastname: string;
  phone: string;
  avatar?: string;
  /** Password of the user */
  password: string;
  /** Email of the user */
  email: string;
};
export type UpdateDriverDto = {
  license?: string;
  fullName?: string;
  age?: number;
  nationalIdentityNumber?: string;
  sex?: string;
  maritalStatus?: string;
  stateOfOrigin?: string;
  localGovernment?: string;
  houseAddress?: string;
  avatar?: string;
  otherDocument?: string;
  otherDetail?: string;
  latitude?: string;
  longitude?: string;
  status?: string;
  approvalStatus?: string;
  providerAgencyId?: string;
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
  expireAt?: string;
};
export type UpdateDriverDocumentDto = {
  documentType?: string;
  description?: string;
  file?: string;
  driverId?: string;
  expireAt?: string;
};
export type CreateDriverReportDto = {
  description: string;
  extraData: object;
  vehicleId: string;
};
export type UpdateDriverReportDto = {
  description?: string;
  extraData?: object;
  vehicleId?: string;
};
export type CreateDriverRequestDto = {
  /** The ID of the trip associated with this driver request */
  tripId: string;
  /** The description or details of the driver request */
  description?: string;
  /** Additional data related to the driver request (JSON object) */
  extraData?: object;
};
export type UpdateDriverRequestDto = {
  /** The ID of the trip associated with this driver request */
  tripId?: string;
  /** The description or details of the driver request */
  description?: string;
  /** Additional data related to the driver request (JSON object) */
  extraData?: object;
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
export type CreateFuelAgencyDto = {
  /** Name of the company */
  companyName: string;
  /** Address of the company */
  companyAddress: string;
  /** Company registration certificate number */
  companyRC: string;
  /** Phone number of the company */
  phone?: string;
  /** State where the company is located */
  state: string;
  /** City where the company is located */
  city: string;
  /** Geographical coordinates of the company */
  coordinates: string;
  /** Unique identifier for the company */
  uniqueID: string;
  /** Avatar URL for the company */
  avatar?: string;
};
export type UpdateFuelAgencyDto = {
  /** Name of the company */
  companyName?: string;
  /** Address of the company */
  companyAddress?: string;
  /** Company registration certificate number */
  companyRC?: string;
  /** Phone number of the company */
  phone?: string;
  /** State where the company is located */
  state?: string;
  /** City where the company is located */
  city?: string;
  /** Geographical coordinates of the company */
  coordinates?: string;
  /** Unique identifier for the company */
  uniqueID?: string;
  /** Avatar URL for the company */
  avatar?: string;
};
export type CreateHotelDto = {
  /** Name of the hotel */
  name: string;
  /** Address of the hotel */
  address: string;
  /** Phone number of the hotel */
  phone?: string;
  /** Discount details of the hotel */
  discount?: string;
  /** City ID where the hotel is located */
  cityId: string;
  /** Coordinates of the hotel location */
  coordinates: string;
  /** Avatar URL of the hotel */
  avatar?: string;
};
export type UpdateHotelDto = {
  /** Name of the hotel */
  name?: string;
  /** Address of the hotel */
  address?: string;
  /** Phone number of the hotel */
  phone?: string;
  /** Discount details of the hotel */
  discount?: string;
  /** City ID where the hotel is located */
  cityId?: string;
  /** Coordinates of the hotel location */
  coordinates?: string;
  /** Avatar URL of the hotel */
  avatar?: string;
};
export type FindByCityDto = {
  /** City ID to find hotels */
  cityId: string;
};
export type CheckUniqueIdDto = {
  /** Unique ID to check */
  uniqueID: string;
};
export type CreateMerchantCategoryDto = {
  /** Name of the merchant category */
  name: string;
  /** Summary of the merchant category */
  summary?: string;
};
export type UpdateMerchantCategoryDto = {
  /** Name of the merchant category */
  name?: string;
  /** Summary of the merchant category */
  summary?: string;
};
export type LocationCountry = {
  id: string;
  name: string;
  coordinate: string;
  /** The date when the user was created */
  createdAt: string;
  /** The date when the user was last updated */
  updatedAt: string;
  userId: string;
  /** The user who owns this resource */
  user: User;
  states: string[];
};
export type LocationState = {
  id: string;
  name: string;
  coordinate: string;
  locationCountryId: string;
  /** The date when the user was created */
  createdAt: string;
  /** The date when the user was last updated */
  updatedAt: string;
  userId: string;
  /** The state that this city belongs to */
  locationCountry: LocationCountry;
  /** The user who owns this resource */
  user: User;
  cities: string[];
};
export type LocationCity = {
  id: string;
  name: string;
  uniqueID: string;
  coordinate: string;
  locationStateId: string;
  /** The date when the user was created */
  createdAt: string;
  /** The date when the user was last updated */
  updatedAt: string;
  userId: string;
  /** The user who owns this resource */
  user: User;
  /** The state that this city belongs to */
  locationState: LocationState;
};
export type MerchantCategory = {
  id: string;
  name: string;
  summary: string;
  /** The date when the user was created */
  createdAt: string;
  /** The date when the user was last updated */
  updatedAt: string;
  userId: string;
  /** The user who owns this resource */
  user: User;
};
export type Merchant = {
  id: string;
  name: string;
  address: string;
  phone: string;
  discount: string;
  cityId: string;
  categoryId: string;
  coordinates: string;
  avatar: string;
  /** The date when the user was created */
  createdAt: string;
  /** The date when the user was last updated */
  updatedAt: string;
  userId: string;
  /** The user who owns this resource */
  user: User;
  /** The user who owns this resource */
  city: LocationCity;
  /** The merchant category */
  category: MerchantCategory;
};
export type CreateMerchantDto = {
  name: string;
  address: string;
  phone?: string;
  discount: string;
  cityId: string;
  categoryId: string;
  coordinates: string;
  avatar?: string;
};
export type UpdateMerchantDto = {
  name?: string;
  address?: string;
  phone?: string;
  discount?: string;
  cityId?: string;
  categoryId?: string;
  coordinates?: string;
  avatar?: string;
  userId?: string;
};
export type CreateLocationCountryDto = {
  /** The name of the country. */
  name: string;
  /** The geographic coordinates of the country. */
  coordinate?: string;
  /** The UUID of the user creating this country. */
  userId?: string;
};
export type UpdateLocationCountryDto = {
  /** The updated name of the country. */
  name?: string;
  /** The updated geographic coordinates of the country. */
  coordinate?: string;
  /** The UUID of the user updating this country. */
  userId?: string;
};
export type CreateLocationStateDto = {
  /** The name of the location state */
  name: string;
  /** The coordinate of the location state */
  coordinate?: string;
  /** The ID of the country this state belongs to */
  locationCountryId: string;
};
export type UpdateLocationStateDto = {
  /** The updated name of the location state */
  name?: string;
  /** The updated coordinate of the location state */
  coordinate?: string;
  /** The updated ID of the country this state belongs to */
  locationCountryId?: string;
};
export type Testimonials = {
  id: string;
  name: string;
  tag: string;
  content: string;
  location: string;
  file: string;
  /** Please use NGN at the moment */
  status: string;
  /** The date when the user was created */
  createdAt: string;
  /** The date when the user was last updated */
  updatedAt: string;
  userId: string;
  testifierUserId: string;
  /** The user who owns this resource */
  user: User;
  /** The user who owns this resource */
  testifier: User;
};
export type CreateTestimonialDto = {
  name: string;
  tag?: string;
  content: string;
  location: string;
  file?: string;
  status: string;
  testifierUserId?: string;
};
export type UpdateTestimonialDto = {
  name?: string;
  tag?: string;
  content?: string;
  location?: string;
  file?: string;
  status?: string;
  testifierUserId?: string;
};
export type Luaguage = {
  id: string;
  weight: number;
  price: number;
  /** Please use KILOGRAM at the moment */
  unitOfWeight: string;
  /** Please use NGN at the moment */
  currency: string;
  uniqueID: string;
  /** The date when the user was created */
  createdAt: string;
  /** The date when the user was last updated */
  updatedAt: string;
  userId: string;
  /** The user who owns this resource */
  user: User;
};
export type CreateLuaguageDto = {
  weight: number;
  price: number;
  unitOfWeight: string;
  currency: string;
  uniqueID?: string;
};
export type UpdateLuaguageDto = {
  weight?: number;
  price?: number;
  unitOfWeight?: string;
  currency?: string;
};
export type CreateLocationCityDto = {
  /** The name of the city */
  name: string;
  /** The coordinate of the city */
  coordinate?: string;
  /** The ID of the state to which the city belongs */
  locationStateId: string;
};
export type UpdateLocationCityDto = {
  /** The name of the city */
  name?: string;
  /** The coordinate of the city */
  coordinate?: string;
  /** The ID of the state to which the city belongs */
  locationStateId?: string;
};
export type Commission = {
  id: string;
  commission: number;
  /** Agency the commission is set for, this is to URBAN by default */
  agency: string;
  /** The date when the user was created */
  createdAt: string;
  /** The date when the user was last updated */
  updatedAt: string;
  userId: string;
  /** The user who owns this resource */
  user: User;
};
export type CreateCommissionDto = {
  /** The commission amount */
  commission: number;
  /** Agency the commission is set for */
  agency: string;
  /** The user ID who owns this commission */
  userId: string;
};
export type UpdateCommissionDto = {
  /** The commission amount */
  commission?: number;
  /** Agency the commission is set for */
  agency?: string;
  /** The user ID who owns this commission */
  userId?: string;
};
export type Carousels = {
  id: string;
  name: string;
  file: string;
  uniqueID: string;
  /** Please use NGN at the moment */
  status: string;
  /** The date when the user was created */
  createdAt: string;
  /** The date when the user was last updated */
  updatedAt: string;
  userId: string;
  /** The user who owns this resource */
  user: User;
};
export type CreateCarouselDto = {
  name: string;
  file: string;
  status: string;
  coordinate?: string;
  locationStateId: string;
};
export type UpdateCarouselDto = {
  name?: string;
  file?: string;
  status?: string;
  coordinate?: string;
};
export type UrbanCardResponseDto = {
  id: string;
  title: string;
  file: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  user: User;
};
export type CreateUrbanCardDto = {
  title: string;
  file: string;
};
export type UrbanCardFilterDto = {
  title?: string;
  userId?: string;
};
export type UpdateUrbanCardDto = {
  title?: string;
  file?: string;
};
export const {
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
  useCorporateBodyDocumentControllerCreateMutation,
  useCorporateBodyDocumentControllerSearchQuery,
  useLazyCorporateBodyDocumentControllerSearchQuery,
  useCorporateBodyDocumentControllerUpdateMutation,
  useCorporateBodyDocumentControllerDeleteMutation,
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
  useVehicleControllerGetMyVehiclesQuery,
  useLazyVehicleControllerGetMyVehiclesQuery,
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
  useFleetPartnerControllerFindAllQuery,
  useLazyFleetPartnerControllerFindAllQuery,
  useFleetPartnerControllerFindOneQuery,
  useLazyFleetPartnerControllerFindOneQuery,
  useFleetPartnerControllerDeleteFleetPartnerMutation,
  useFleetPartnerControllerFindmeQuery,
  useLazyFleetPartnerControllerFindmeQuery,
  useFuelAgencyControllerCreateMutation,
  useFuelAgencyControllerFindAllQuery,
  useLazyFuelAgencyControllerFindAllQuery,
  useFuelAgencyControllerFindByIdQuery,
  useLazyFuelAgencyControllerFindByIdQuery,
  useFuelAgencyControllerUpdateMutation,
  useFuelAgencyControllerDeleteMutation,
  useFuelAgencyControllerFindMeQuery,
  useLazyFuelAgencyControllerFindMeQuery,
  useFuelAgencyControllerFindByStateQuery,
  useLazyFuelAgencyControllerFindByStateQuery,
  useFuelAgencyControllerCheckUniqueIdQuery,
  useLazyFuelAgencyControllerCheckUniqueIdQuery,
  useHotelControllerCreateMutation,
  useHotelControllerFindAllQuery,
  useLazyHotelControllerFindAllQuery,
  useHotelControllerFindByIdQuery,
  useLazyHotelControllerFindByIdQuery,
  useHotelControllerUpdateMutation,
  useHotelControllerDeleteMutation,
  useHotelControllerFindByCityMutation,
  useHotelControllerCheckUniqueIdMutation,
  useMerchantCategoryControllerCreateMutation,
  useMerchantCategoryControllerFindAllQuery,
  useLazyMerchantCategoryControllerFindAllQuery,
  useMerchantCategoryControllerFindByIdQuery,
  useLazyMerchantCategoryControllerFindByIdQuery,
  useMerchantCategoryControllerUpdateMutation,
  useMerchantCategoryControllerDeleteMutation,
  useMerchantCategoryControllerFindByNameQuery,
  useLazyMerchantCategoryControllerFindByNameQuery,
  useMerchantControllerCreateMutation,
  useMerchantControllerFindAllQuery,
  useLazyMerchantControllerFindAllQuery,
  useMerchantControllerFindOneQuery,
  useLazyMerchantControllerFindOneQuery,
  useMerchantControllerUpdateMutation,
  useMerchantControllerRemoveMutation,
  useLocationCountryControllerCreateMutation,
  useLocationCountryControllerFindAllQuery,
  useLazyLocationCountryControllerFindAllQuery,
  useLocationCountryControllerFindOneQuery,
  useLazyLocationCountryControllerFindOneQuery,
  useLocationCountryControllerUpdateMutation,
  useLocationCountryControllerRemoveMutation,
  useLocationStateControllerCreateMutation,
  useLocationStateControllerFindAllQuery,
  useLazyLocationStateControllerFindAllQuery,
  useLocationStateControllerFindOneQuery,
  useLazyLocationStateControllerFindOneQuery,
  useLocationStateControllerUpdateMutation,
  useLocationStateControllerDeleteMutation,
  useTestimonialsControllerCreateMutation,
  useTestimonialsControllerFindAllQuery,
  useLazyTestimonialsControllerFindAllQuery,
  useTestimonialsControllerFindOneQuery,
  useLazyTestimonialsControllerFindOneQuery,
  useTestimonialsControllerUpdateMutation,
  useTestimonialsControllerRemoveMutation,
  useTestimonialsControllerFindByStatusQuery,
  useLazyTestimonialsControllerFindByStatusQuery,
  useLuaguageControllerCreateMutation,
  useLuaguageControllerFindAllQuery,
  useLazyLuaguageControllerFindAllQuery,
  useLuaguageControllerFindOneQuery,
  useLazyLuaguageControllerFindOneQuery,
  useLuaguageControllerUpdateMutation,
  useLuaguageControllerRemoveMutation,
  useLuaguageControllerFindByUniqueIdQuery,
  useLazyLuaguageControllerFindByUniqueIdQuery,
  useLuaguageControllerFindAllByUserIdQuery,
  useLazyLuaguageControllerFindAllByUserIdQuery,
  useLocationCityControllerCreateMutation,
  useLocationCityControllerFindOneQuery,
  useLazyLocationCityControllerFindOneQuery,
  useLocationCityControllerUpdateMutation,
  useLocationCityControllerRemoveMutation,
  useCommissionControllerCreateMutation,
  useCommissionControllerFindOneQuery,
  useLazyCommissionControllerFindOneQuery,
  useCommissionControllerUpdateMutation,
  useCommissionControllerRemoveMutation,
  useCarouselsControllerCreateMutation,
  useCarouselsControllerFindAllQuery,
  useLazyCarouselsControllerFindAllQuery,
  useCarouselsControllerFindOneQuery,
  useLazyCarouselsControllerFindOneQuery,
  useCarouselsControllerUpdateMutation,
  useCarouselsControllerRemoveMutation,
  useCarouselsControllerFindByStatusQuery,
  useLazyCarouselsControllerFindByStatusQuery,
  useUrbanCardControllerCreateMutation,
  useUrbanCardControllerFindAllQuery,
  useLazyUrbanCardControllerFindAllQuery,
  useUrbanCardControllerFindOneQuery,
  useLazyUrbanCardControllerFindOneQuery,
  useUrbanCardControllerUpdateMutation,
  useUrbanCardControllerRemoveMutation,
  useAppControllerGetHelloQuery,
  useLazyAppControllerGetHelloQuery,
} = injectedRtkApi;
