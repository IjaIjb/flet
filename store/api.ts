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
      query: (queryArg) => ({
        url: `/parks`,
        params: {
          offset: queryArg.offset,
          limit: queryArg.limit,
          region: queryArg.region,
          city: queryArg.city,
          description: queryArg.description,
        },
      }),
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
          departureState: queryArg.departureState,
          destinationState: queryArg.destinationState,
          departureDate: queryArg.departureDate,
          limit: queryArg.limit,
          offset: queryArg.offset,
        },
      }),
    }),
    tripControllerFindAllCustom: build.query<
      TripControllerFindAllCustomApiResponse,
      TripControllerFindAllCustomApiArg
    >({
      query: (queryArg) => ({
        url: `/trips/trips-for-booking`,
        params: {
          description: queryArg.description,
          departureState: queryArg.departureState,
          destinationState: queryArg.destinationState,
          departureDate: queryArg.departureDate,
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
      query: (queryArg) => ({
        url: `/bookings`,
        params: { limit: queryArg.limit, offset: queryArg.offset },
      }),
    }),
    bookingControllerCreateBookingUnregisteredDto: build.mutation<
      BookingControllerCreateBookingUnregisteredDtoApiResponse,
      BookingControllerCreateBookingUnregisteredDtoApiArg
    >({
      query: (queryArg) => ({
        url: `/bookings/create-booking-unregistered-individual`,
        method: "POST",
        body: queryArg,
      }),
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
      query: (queryArg) => ({
        url: `/drivers`,
        params: {
          search: queryArg.search,
          limit: queryArg.limit,
          offset: queryArg.offset,
        },
      }),
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
    driverDocumentControllerFindAll: build.query<
      DriverDocumentControllerFindAllApiResponse,
      DriverDocumentControllerFindAllApiArg
    >({
      query: (queryArg) => ({
        url: `/driver-documents`,
        params: { limit: queryArg.limit, offset: queryArg.offset },
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
    driverDocumentControllerFindAllByDriver: build.query<
      DriverDocumentControllerFindAllByDriverApiResponse,
      DriverDocumentControllerFindAllByDriverApiArg
    >({
      query: (queryArg) => ({ url: `/driver-documents/by-driver/${queryArg}` }),
    }),
    driverDocumentControllerFindExpiredDocuments: build.query<
      DriverDocumentControllerFindExpiredDocumentsApiResponse,
      DriverDocumentControllerFindExpiredDocumentsApiArg
    >({
      query: () => ({ url: `/driver-documents/expired-document` }),
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
    driverRequestControllerFinAll: build.query<
      DriverRequestControllerFinAllApiResponse,
      DriverRequestControllerFinAllApiArg
    >({
      query: () => ({ url: `/driver-requests` }),
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
          limit: queryArg.limit,
          offset: queryArg.offset,
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
    fleetPartnerControllerFindMe: build.query<
      FleetPartnerControllerFindMeApiResponse,
      FleetPartnerControllerFindMeApiArg
    >({
      query: () => ({ url: `/fleet-partners/me` }),
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
    locationCityControllerFindAll: build.query<
      LocationCityControllerFindAllApiResponse,
      LocationCityControllerFindAllApiArg
    >({
      query: () => ({ url: `/location-cities` }),
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
    commissionControllerFindAll: build.query<
      CommissionControllerFindAllApiResponse,
      CommissionControllerFindAllApiArg
    >({
      query: () => ({ url: `/commissions` }),
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
  /** status 200 List of users with either corporate body or individual information */ ResponseDto;
export type UserControllerFindAllApiArg = void;
export type UserControllerFindIndividualAllApiResponse =
  /** status 200 List of individuals with users information */ ResponseDto;
export type UserControllerFindIndividualAllApiArg = void;
export type UserControllerFindCorporateBodyAllApiResponse =
  /** status 200 List of corporateBodys with users information */ ResponseDto;
export type UserControllerFindCorporateBodyAllApiArg = void;
export type UserControllerFindOneByIdApiResponse =
  /** status 200 User details */ ResponseDto;
export type UserControllerFindOneByIdApiArg = /** User ID */ string;
export type UserControllerUpdateApiResponse =
  /** status 200 User updated successfully */ ResponseDto;
export type UserControllerUpdateApiArg = {
  /** User ID */
  id: string;
  updateUserDto: UpdateUserDto;
};
export type UserControllerDeleteApiResponse = unknown;
export type UserControllerDeleteApiArg = /** User ID */ string;
export type UserControllerFindOneIndividualByIdApiResponse =
  /** status 200 Individual details */ ResponseDto;
export type UserControllerFindOneIndividualByIdApiArg =
  /** Individual ID */ string;
export type UserControllerUpdateIndividualByIdApiResponse =
  /** status 200 Individual updated successfully */ ResponseDto;
export type UserControllerUpdateIndividualByIdApiArg = {
  /** Individual ID */
  id: string;
  updateIndividualDto: UpdateIndividualDto;
};
export type UserControllerDeleteIndividualApiResponse = unknown;
export type UserControllerDeleteIndividualApiArg = /** Individual ID */ string;
export type UserControllerFindOneCorporateBodyByIdApiResponse =
  /** status 200 CorporateBody details */ ResponseDto;
export type UserControllerFindOneCorporateBodyByIdApiArg =
  /** CorporateBody ID */ string;
export type UserControllerUpdateCorporateByIdApiResponse =
  /** status 200 CorporateBody updated successfully */ ResponseDto;
export type UserControllerUpdateCorporateByIdApiArg = {
  /** CorporateBody ID */
  id: string;
  updateCorporateBodyDto: UpdateCorporateBodyDto;
};
export type UserControllerDeleteCorporateBodyApiResponse = unknown;
export type UserControllerDeleteCorporateBodyApiArg =
  /** CorporateBody ID */ string;
export type UserControllerCreateCorporateBodyApiResponse =
  /** status 201 Corporate Body added successfully */ ResponseDto;
export type UserControllerCreateCorporateBodyApiArg = CreateCorporateBodyDto;
export type UserControllerCreateIndividualBodyApiResponse =
  /** status 201 Individual added successfully */ ResponseDto;
export type UserControllerCreateIndividualBodyApiArg = CreateIndividualDto;
export type UserControllerCreateDispatchOfficerBodyApiResponse =
  /** status 201 Individual added successfully */ ResponseDto;
export type UserControllerCreateDispatchOfficerBodyApiArg = CreateIndividualDto;
export type UserControllerCreateParkManagerBodyApiResponse =
  /** status 201 Manager added successfully */ ResponseDto;
export type UserControllerCreateParkManagerBodyApiArg = CreateIndividualDto;
export type UserControllerCreateParkOwnerBodyApiResponse =
  /** status 201 Park owner added successfully */ ResponseDto;
export type UserControllerCreateParkOwnerBodyApiArg = CreateIndividualDto;
export type UserControllerCreateParkOwnerCorporateBodyApiResponse =
  /** status 201 Park owner added successfully */ ResponseDto;
export type UserControllerCreateParkOwnerCorporateBodyApiArg =
  CreateCorporateBodyDto;
export type CorporateBodyDocumentControllerCreateApiResponse =
  /** status 201 CorporateBody document created successfully */ ResponseDto;
export type CorporateBodyDocumentControllerCreateApiArg =
  CreateCorporateBodyDocumentDto;
export type CorporateBodyDocumentControllerSearchApiResponse =
  /** status 200 CorporateBody documents retrieved successfully */ ResponseDto;
export type CorporateBodyDocumentControllerSearchApiArg = {
  /** Filter by document type */
  documentType?: string;
  /** Filter by associated corporateBody ID */
  corporateBodyId?: string;
  /** Search by document description */
  description?: string;
};
export type CorporateBodyDocumentControllerUpdateApiResponse =
  /** status 200 CorporateBody document updated successfully */ ResponseDto;
export type CorporateBodyDocumentControllerUpdateApiArg = {
  id: string;
  updateCorporateBodyDocumentDto: UpdateCorporateBodyDocumentDto;
};
export type CorporateBodyDocumentControllerDeleteApiResponse =
  /** status 200 CorporateBody document deleted successfully */ ResponseDto;
export type CorporateBodyDocumentControllerDeleteApiArg = string;
export type VehicleControllerCreateVehicleTypeApiResponse =
  /** status 201 Vehicle type successfully created */ ResponseDto;
export type VehicleControllerCreateVehicleTypeApiArg = CreateVehicleTypeDto;
export type VehicleControllerGetAllVehicleTypesApiResponse =
  /** status 200 List of vehicle types */ ResponseDto;
export type VehicleControllerGetAllVehicleTypesApiArg = void;
export type VehicleControllerGetVehicleTypeByIdApiResponse =
  /** status 200 Vehicle type found */ ResponseDto;
export type VehicleControllerGetVehicleTypeByIdApiArg =
  /** Vehicle type ID */ string;
export type VehicleControllerUpdateVehicleTypeApiResponse =
  /** status 200 Vehicle type successfully updated */ ResponseDto;
export type VehicleControllerUpdateVehicleTypeApiArg = {
  /** Vehicle type ID */
  id: string;
  updateVehicleTypeDto: UpdateVehicleTypeDto;
};
export type VehicleControllerDeleteVehicleTypeApiResponse = unknown;
export type VehicleControllerDeleteVehicleTypeApiArg =
  /** Vehicle type ID */ string;
export type VehicleControllerCreateVehicleApiResponse =
  /** status 201 Vehicle successfully created */ ResponseDto;
export type VehicleControllerCreateVehicleApiArg = CreateVehicleDto;
export type VehicleControllerGetAllVehiclesApiResponse =
  /** status 200 List of vehicles */ ResponseDto;
export type VehicleControllerGetAllVehiclesApiArg = void;
export type VehicleControllerGetMyVehiclesApiResponse =
  /** status 200 List of vehicles */ ResponseDto;
export type VehicleControllerGetMyVehiclesApiArg = void;
export type VehicleControllerGetVehicleByIdApiResponse =
  /** status 200 Vehicle found */ ResponseDto;
export type VehicleControllerGetVehicleByIdApiArg = /** Vehicle ID */ string;
export type VehicleControllerUpdateVehicleApiResponse =
  /** status 200 Vehicle successfully updated */ ResponseDto;
export type VehicleControllerUpdateVehicleApiArg = {
  /** Vehicle ID */
  id: string;
  updateVehicleDto: UpdateVehicleDto;
};
export type VehicleControllerDeleteVehicleApiResponse = unknown;
export type VehicleControllerDeleteVehicleApiArg = /** Vehicle ID */ string;
export type VehicleControllerCreateVehicleRequestApiResponse =
  /** status 201 Vehicle request successfully created */ ResponseDto;
export type VehicleControllerCreateVehicleRequestApiArg =
  CreateVehicleRequestDto;
export type VehicleControllerGetAllVehicleRequestsApiResponse =
  /** status 200 List of vehicle requests */ ResponseDto;
export type VehicleControllerGetAllVehicleRequestsApiArg = void;
export type VehicleControllerGetVehicleRequestByIdApiResponse =
  /** status 200 Vehicle request found */ ResponseDto;
export type VehicleControllerGetVehicleRequestByIdApiArg =
  /** Vehicle request ID */ string;
export type VehicleControllerUpdateVehicleRequestApiResponse =
  /** status 200 Vehicle request successfully updated */ ResponseDto;
export type VehicleControllerUpdateVehicleRequestApiArg = {
  /** Vehicle request ID */
  id: string;
  updateVehicleRequestDto: UpdateVehicleRequestDto;
};
export type VehicleControllerDeleteVehicleRequestApiResponse = unknown;
export type VehicleControllerDeleteVehicleRequestApiArg =
  /** Vehicle request ID */ string;
export type VehicleControllerCreateVehicleReportApiResponse =
  /** status 201 Vehicle report successfully created */ ResponseDto;
export type VehicleControllerCreateVehicleReportApiArg = CreateVehicleReportDto;
export type VehicleControllerGetAllVehicleReportsApiResponse =
  /** status 200 List of vehicle reports */ ResponseDto;
export type VehicleControllerGetAllVehicleReportsApiArg = void;
export type VehicleControllerGetVehicleReportByIdApiResponse =
  /** status 200 Vehicle report found */ ResponseDto;
export type VehicleControllerGetVehicleReportByIdApiArg =
  /** Vehicle report ID */ string;
export type VehicleControllerUpdateVehicleReportApiResponse =
  /** status 200 Vehicle report successfully updated */ ResponseDto;
export type VehicleControllerUpdateVehicleReportApiArg = {
  /** Vehicle report ID */
  id: string;
  updateVehicleReportDto: UpdateVehicleReportDto;
};
export type VehicleControllerDeleteVehicleReportApiResponse = unknown;
export type VehicleControllerDeleteVehicleReportApiArg =
  /** Vehicle report ID */ string;
export type VehicleDocumentControllerCreateApiResponse =
  /** status 201 Vehicle document created successfully */ ResponseDto;
export type VehicleDocumentControllerCreateApiArg = CreateVehicleDocumentDto;
export type VehicleDocumentControllerSearchApiResponse =
  /** status 200 Vehicle documents retrieved successfully */ ResponseDto;
export type VehicleDocumentControllerSearchApiArg = {
  /** Filter by document type */
  documentType?: string;
  /** Filter by associated vehicle ID */
  vehicleId?: string;
  /** Search by document description */
  description?: string;
};
export type VehicleDocumentControllerUpdateApiResponse =
  /** status 200 Vehicle document updated successfully */ ResponseDto;
export type VehicleDocumentControllerUpdateApiArg = {
  id: string;
  updateVehicleDocumentDto: UpdateVehicleDocumentDto;
};
export type VehicleDocumentControllerDeleteApiResponse =
  /** status 200 Vehicle document deleted successfully */ ResponseDto;
export type VehicleDocumentControllerDeleteApiArg = string;
export type ParkControllerCreateParkApiResponse =
  /** status 201 Park created successfully */ ResponseDto;
export type ParkControllerCreateParkApiArg = CreateParkDto;
export type ParkControllerFindAllParksApiResponse =
  /** status 200 Parks retrieved successfully */ ResponseDto[];
export type ParkControllerFindAllParksApiArg = {
  /** offset the number of parks returned */
  offset?: number;
  /** limit the number of parks returned */
  limit?: number;
  /** search for park by region */
  region?: string;
  /** search for park by city */
  city?: string;
  /** search for park by description */
  description?: string;
};
export type ParkControllerFindParkByIdApiResponse =
  /** status 200 Park retrieved successfully */ ResponseDto;
export type ParkControllerFindParkByIdApiArg = /** ID of the park */ string;
export type ParkControllerUpdateParkApiResponse =
  /** status 200 Park updated successfully */ ResponseDto;
export type ParkControllerUpdateParkApiArg = {
  /** ID of the park to update */
  id: string;
  updateParkDto: UpdateParkDto;
};
export type ParkControllerDeleteParkApiResponse = unknown;
export type ParkControllerDeleteParkApiArg =
  /** ID of the park to delete */ string;
export type TripControllerCreateTripApiResponse =
  /** status 201 Trip created successfully */ ResponseDto;
export type TripControllerCreateTripApiArg = CreateTripDto;
export type TripControllerFindAllApiResponse =
  /** status 200 List of trips */ ResponseDto;
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
  /** Filter by departure state */
  departureState?: string;
  /** Filter by destination state */
  destinationState?: string;
  /** Filter by departure date, Please use ISO format (YYYY-MM-DD) */
  departureDate?: string;
  limit: number;
  offset: number;
};
export type TripControllerFindAllCustomApiResponse =
  /** status 200 List of trips */ ResponseDto;
export type TripControllerFindAllCustomApiArg = {
  /** Filter by description */
  description?: string;
  /** Filter by departure state */
  departureState?: string;
  /** Filter by destination state */
  destinationState?: string;
  /** Filter by departure date, Please use ISO format (YYYY-MM-DD) */
  departureDate?: string;
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
  /** status 200 Trip updated successfully */ ResponseDto;
export type TripControllerUpdateTripApiArg = {
  /** Trip ID */
  id: string;
  updateTripDto: UpdateTripDto;
};
export type TripControllerDeleteTripApiResponse = unknown;
export type TripControllerDeleteTripApiArg = /** Trip ID */ string;
export type BookingControllerCreateBookingApiResponse =
  /** status 201 Booking successfully created */ ResponseDto;
export type BookingControllerCreateBookingApiArg = CreateBookingDto;
export type BookingControllerFindAllBookingsApiResponse =
  /** status 200 Bookings retrieved successfully */ ResponseDto[];
export type BookingControllerFindAllBookingsApiArg = {
  limit?: number;
  offset?: number;
};
export type BookingControllerCreateBookingUnregisteredDtoApiResponse =
  /** status 201 Booking successfully created */ ResponseDto;
export type BookingControllerCreateBookingUnregisteredDtoApiArg =
  CreateBookingUnregisteredDto;
export type BookingControllerFindBookingByIdApiResponse =
  /** status 200 Booking retrieved successfully */ ResponseDto;
export type BookingControllerFindBookingByIdApiArg = /** Booking ID */ string;
export type BookingControllerUpdateBookingApiResponse =
  /** status 200 Booking updated successfully */ ResponseDto;
export type BookingControllerUpdateBookingApiArg = {
  /** Booking ID */
  id: string;
  updateBookingDto: UpdateBookingDto;
};
export type BookingControllerDeleteBookingApiResponse =
  /** status 200 Booking deleted successfully */ ResponseDto;
export type BookingControllerDeleteBookingApiArg = /** Booking ID */ string;
export type BookingControllerSearchBookingsApiResponse =
  /** status 200 Bookings search completed successfully */ ResponseDto;
export type BookingControllerSearchBookingsApiArg =
  /** Search query string for various fields */ string;
export type DriverControllerCreateApiResponse =
  /** status 201 Driver created successfully. */ ResponseDto;
export type DriverControllerCreateApiArg = CreateDriverDto;
export type DriverControllerFindAllApiResponse =
  /** status 200 Drivers retrieved successfully. */ ResponseDto;
export type DriverControllerFindAllApiArg = {
  /** search for drivers by name */
  search?: string;
  /** limit for pagination */
  limit?: number;
  /** offset for pagination */
  offset?: number;
};
export type DriverControllerFindOneApiResponse =
  /** status 200 Driver retrieved successfully. */ ResponseDto;
export type DriverControllerFindOneApiArg = string;
export type DriverControllerUpdateApiResponse =
  /** status 200 Driver updated successfully. */ ResponseDto;
export type DriverControllerUpdateApiArg = {
  id: string;
  updateDriverDto: UpdateDriverDto;
};
export type DriverControllerRemoveApiResponse =
  /** status 200 Driver deleted successfully. */ ResponseDto;
export type DriverControllerRemoveApiArg = string;
export type DriverControllerUpdateApprovalStatusApiResponse =
  /** status 200 Driver approval status updated successfully. */ ResponseDto;
export type DriverControllerUpdateApprovalStatusApiArg = string;
export type DriverControllerUpdateStatusApiResponse =
  /** status 200 Driver status updated successfully. */ ResponseDto;
export type DriverControllerUpdateStatusApiArg = string;
export type DriverDocumentControllerCreateApiResponse =
  /** status 201 The driver document has been successfully created. */ ResponseDto;
export type DriverDocumentControllerCreateApiArg = CreateDriverDocumentDto;
export type DriverDocumentControllerFindAllApiResponse =
  /** status 200 Successfully retrieved driver documents */ ResponseDto;
export type DriverDocumentControllerFindAllApiArg = {
  limit?: number;
  offset?: number;
};
export type DriverDocumentControllerFindOneApiResponse =
  /** status 200 The driver document was found. */ ResponseDto;
export type DriverDocumentControllerFindOneApiArg = string;
export type DriverDocumentControllerUpdateApiResponse =
  /** status 200 The driver document has been successfully updated. */ ResponseDto;
export type DriverDocumentControllerUpdateApiArg = {
  id: string;
  updateDriverDocumentDto: UpdateDriverDocumentDto;
};
export type DriverDocumentControllerRemoveApiResponse =
  /** status 200 The driver document has been successfully deleted. */ ResponseDto;
export type DriverDocumentControllerRemoveApiArg = string;
export type DriverDocumentControllerFindAllByDriverApiResponse =
  /** status 200 The driver document was found. */ ResponseDto;
export type DriverDocumentControllerFindAllByDriverApiArg = string;
export type DriverDocumentControllerFindExpiredDocumentsApiResponse =
  /** status 200 The driver document was found. */ ResponseDto;
export type DriverDocumentControllerFindExpiredDocumentsApiArg = void;
export type DriverDocumentControllerSearchApiResponse =
  /** status 200 List of matching driver documents. */ ResponseDto[];
export type DriverDocumentControllerSearchApiArg = {
  documentType?: string;
  driverId?: string;
  description?: string;
  expireAt?: string;
  limit?: number;
  offset?: number;
};
export type DriverReportControllerCreateApiResponse =
  /** status 201 Driver report created successfully */ ResponseDto;
export type DriverReportControllerCreateApiArg = CreateDriverReportDto;
export type DriverReportControllerFindAllApiResponse =
  /** status 200 Successfully retrieved driver reports */ ResponseDto;
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
export type DriverReportControllerFindOneApiResponse =
  /** status 200 Successfully retrieved the driver report */ ResponseDto;
export type DriverReportControllerFindOneApiArg = string;
export type DriverReportControllerUpdateApiResponse =
  /** status 200 Driver report updated successfully */ ResponseDto;
export type DriverReportControllerUpdateApiArg = {
  id: string;
  updateDriverReportDto: UpdateDriverReportDto;
};
export type DriverReportControllerRemoveApiResponse = unknown;
export type DriverReportControllerRemoveApiArg = string;
export type DriverReportControllerSearchApiResponse =
  /** status 200 Successfully retrieved search results */ ResponseDto;
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
export type DriverRequestControllerCreateApiResponse =
  /** status 201 The driver request has been successfully created. */ ResponseDto;
export type DriverRequestControllerCreateApiArg = CreateDriverRequestDto;
export type DriverRequestControllerFinAllApiResponse =
  /** status 200 Driver requests found. */ ResponseDto;
export type DriverRequestControllerFinAllApiArg = void;
export type DriverRequestControllerFindOneApiResponse =
  /** status 200 Driver request found. */ ResponseDto;
export type DriverRequestControllerFindOneApiArg = string;
export type DriverRequestControllerUpdateApiResponse =
  /** status 200 The driver request has been successfully updated. */ ResponseDto;
export type DriverRequestControllerUpdateApiArg = {
  id: string;
  updateDriverRequestDto: UpdateDriverRequestDto;
};
export type DriverRequestControllerRemoveApiResponse =
  /** status 200 The driver request has been successfully deleted. */ ResponseDto;
export type DriverRequestControllerRemoveApiArg = string;
export type DriverRequestControllerSearchApiResponse =
  /** status 200 Driver requests found. */ ResponseDto;
export type DriverRequestControllerSearchApiArg = {
  /** search query */
  query?: string;
  /** search by UserId */
  userId?: string;
};
export type ProviderAgencyControllerCreateApiResponse =
  /** status 201 created successfully. */ ResponseDto;
export type ProviderAgencyControllerCreateApiArg = CreateProviderAgencyDto;
export type ProviderAgencyControllerFindAllApiResponse =
  /** status 201 Retrieved successfully. */ ResponseDto;
export type ProviderAgencyControllerFindAllApiArg = {
  /** Filter by region of the provider agency. */
  region?: string;
  /** Filter by country of the provider agency. */
  country?: string;
  /** Filter by approval status of the provider agency. */
  approvalStatus?: "ACCEPTED" | "PROCESSING" | "SUSPENDED" | "REJECTED";
  /** Filter by user ID associated with the provider agency. */
  userId?: string;
  limit?: number;
  offset?: number;
};
export type ProviderAgencyControllerFindOneApiResponse =
  /** status 201 retrieved successfully. */ ResponseDto;
export type ProviderAgencyControllerFindOneApiArg =
  /** Provider agency ID */ string;
export type ProviderAgencyControllerUpdateApiResponse =
  /** status 201 updated successfully. */ ResponseDto;
export type ProviderAgencyControllerUpdateApiArg = {
  /** Provider agency ID */
  id: string;
  updateProviderAgencyDto: UpdateProviderAgencyDto;
};
export type ProviderAgencyControllerRemoveApiResponse =
  /** status 201 deleted successfully. */ ResponseDto;
export type ProviderAgencyControllerRemoveApiArg =
  /** Provider agency ID */ string;
export type FleetPartnerControllerFindAllApiResponse =
  /** status 200 Fleet partners found */ ResponseDto;
export type FleetPartnerControllerFindAllApiArg = void;
export type FleetPartnerControllerFindOneApiResponse =
  /** status 200 Fleet partner found */ ResponseDto;
export type FleetPartnerControllerFindOneApiArg =
  /** The ID of the Fleet Partner */ string;
export type FleetPartnerControllerDeleteFleetPartnerApiResponse =
  /** status 200 Fleet partner deleted */ ResponseDto;
export type FleetPartnerControllerDeleteFleetPartnerApiArg =
  /** Fleet partner ID */ string;
export type FleetPartnerControllerFindMeApiResponse =
  /** status 200 Fleet partner found */ ResponseDto;
export type FleetPartnerControllerFindMeApiArg = void;
export type FuelAgencyControllerCreateApiResponse =
  /** status 201 Fuel agency created successfully */ ResponseDto;
export type FuelAgencyControllerCreateApiArg = CreateFuelAgencyDto;
export type FuelAgencyControllerFindAllApiResponse =
  /** status 200 Fuel agencies retrieved successfully */ ResponseDto;
export type FuelAgencyControllerFindAllApiArg = void;
export type FuelAgencyControllerFindByIdApiResponse =
  /** status 200 Fuel agency retrieved successfully */ ResponseDto;
export type FuelAgencyControllerFindByIdApiArg =
  /** ID of the fuel agency */ string;
export type FuelAgencyControllerUpdateApiResponse =
  /** status 200 Fuel agency updated successfully */ ResponseDto;
export type FuelAgencyControllerUpdateApiArg = {
  /** ID of the fuel agency */
  id: string;
  updateFuelAgencyDto: UpdateFuelAgencyDto;
};
export type FuelAgencyControllerDeleteApiResponse = unknown;
export type FuelAgencyControllerDeleteApiArg =
  /** ID of the fuel agency */ string;
export type FuelAgencyControllerFindMeApiResponse =
  /** status 200 Fuel agency retrieved successfully */ ResponseDto;
export type FuelAgencyControllerFindMeApiArg = void;
export type FuelAgencyControllerFindByStateApiResponse =
  /** status 200 Fuel agencies retrieved successfully by state */ ResponseDto;
export type FuelAgencyControllerFindByStateApiArg =
  /** State to search for fuel agencies */ string;
export type FuelAgencyControllerCheckUniqueIdApiResponse =
  /** status 200 Unique ID existence checked successfully */ ResponseDto;
export type FuelAgencyControllerCheckUniqueIdApiArg =
  /** Unique ID to check */ string;
export type HotelControllerCreateApiResponse =
  /** status 201 Hotel successfully created. */ ResponseDto;
export type HotelControllerCreateApiArg = CreateHotelDto;
export type HotelControllerFindAllApiResponse =
  /** status 200 Hotels retrieved successfully. */ ResponseDto;
export type HotelControllerFindAllApiArg = void;
export type HotelControllerFindByIdApiResponse =
  /** status 200 Hotel retrieved successfully. */ ResponseDto;
export type HotelControllerFindByIdApiArg = /** Hotel ID */ string;
export type HotelControllerUpdateApiResponse =
  /** status 200 Hotel updated successfully. */ ResponseDto;
export type HotelControllerUpdateApiArg = {
  /** Hotel ID */
  id: string;
  updateHotelDto: UpdateHotelDto;
};
export type HotelControllerDeleteApiResponse = unknown;
export type HotelControllerDeleteApiArg = /** Hotel ID */ string;
export type HotelControllerFindByCityApiResponse =
  /** status 200 Hotels retrieved successfully. */ ResponseDto;
export type HotelControllerFindByCityApiArg = FindByCityDto;
export type HotelControllerCheckUniqueIdApiResponse =
  /** status 200 Unique ID check completed. */ ResponseDto;
export type HotelControllerCheckUniqueIdApiArg = CheckUniqueIdDto;
export type MerchantCategoryControllerCreateApiResponse =
  /** status 201 Merchant category created successfully */ ResponseDto;
export type MerchantCategoryControllerCreateApiArg = CreateMerchantCategoryDto;
export type MerchantCategoryControllerFindAllApiResponse =
  /** status 200 Merchant categories retrieved successfully */ ResponseDto;
export type MerchantCategoryControllerFindAllApiArg = void;
export type MerchantCategoryControllerFindByIdApiResponse =
  /** status 200 Merchant category retrieved successfully */ ResponseDto;
export type MerchantCategoryControllerFindByIdApiArg = string;
export type MerchantCategoryControllerUpdateApiResponse =
  /** status 200 Merchant category updated successfully */ ResponseDto;
export type MerchantCategoryControllerUpdateApiArg = {
  id: string;
  updateMerchantCategoryDto: UpdateMerchantCategoryDto;
};
export type MerchantCategoryControllerDeleteApiResponse = unknown;
export type MerchantCategoryControllerDeleteApiArg = string;
export type MerchantCategoryControllerFindByNameApiResponse =
  /** status 200 Merchant categories retrieved successfully */ ResponseDto;
export type MerchantCategoryControllerFindByNameApiArg = string;
export type MerchantControllerCreateApiResponse =
  /** status 201 Merchant created successfully */ ResponseDto;
export type MerchantControllerCreateApiArg = CreateMerchantDto;
export type MerchantControllerFindAllApiResponse =
  /** status 200 Fetched all merchants */ ResponseDto;
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
  /** status 200 Fetched merchant details */ ResponseDto;
export type MerchantControllerFindOneApiArg =
  /** The ID of the merchant */ string;
export type MerchantControllerUpdateApiResponse =
  /** status 200 Merchant updated successfully */ ResponseDto;
export type MerchantControllerUpdateApiArg = {
  /** The ID of the merchant */
  id: string;
  updateMerchantDto: UpdateMerchantDto;
};
export type MerchantControllerRemoveApiResponse = unknown;
export type MerchantControllerRemoveApiArg =
  /** The ID of the merchant */ string;
export type LocationCountryControllerCreateApiResponse =
  /** status 201 The location country has been created successfully. */ ResponseDto;
export type LocationCountryControllerCreateApiArg = CreateLocationCountryDto;
export type LocationCountryControllerFindAllApiResponse =
  /** status 200 List of all location countries. */ ResponseDto[];
export type LocationCountryControllerFindAllApiArg = void;
export type LocationCountryControllerFindOneApiResponse =
  /** status 200 Details of the location country. */ ResponseDto;
export type LocationCountryControllerFindOneApiArg = string;
export type LocationCountryControllerUpdateApiResponse =
  /** status 200 The location country has been updated successfully. */ ResponseDto;
export type LocationCountryControllerUpdateApiArg = {
  id: string;
  updateLocationCountryDto: UpdateLocationCountryDto;
};
export type LocationCountryControllerRemoveApiResponse =
  /** status 200 The location country has been deleted successfully. */ ResponseDto;
export type LocationCountryControllerRemoveApiArg = string;
export type LocationStateControllerCreateApiResponse =
  /** status 201 The location state has been created. */ ResponseDto;
export type LocationStateControllerCreateApiArg = CreateLocationStateDto;
export type LocationStateControllerFindAllApiResponse =
  /** status 200 List of location states retrieved. */ ResponseDto;
export type LocationStateControllerFindAllApiArg = void;
export type LocationStateControllerFindOneApiResponse =
  /** status 200 Location state retrieved. */ ResponseDto;
export type LocationStateControllerFindOneApiArg = string;
export type LocationStateControllerUpdateApiResponse =
  /** status 200 The location state has been updated. */ ResponseDto;
export type LocationStateControllerUpdateApiArg = {
  id: string;
  updateLocationStateDto: UpdateLocationStateDto;
};
export type LocationStateControllerDeleteApiResponse = unknown;
export type LocationStateControllerDeleteApiArg = string;
export type TestimonialsControllerCreateApiResponse =
  /** status 201 Testimonial created successfully. */ ResponseDto;
export type TestimonialsControllerCreateApiArg = CreateTestimonialDto;
export type TestimonialsControllerFindAllApiResponse =
  /** status 200 Testimonials fetched successfully. */ ResponseDto[];
export type TestimonialsControllerFindAllApiArg = void;
export type TestimonialsControllerFindOneApiResponse =
  /** status 200 Testimonial fetched successfully. */ ResponseDto;
export type TestimonialsControllerFindOneApiArg = string;
export type TestimonialsControllerUpdateApiResponse =
  /** status 200 Testimonial updated successfully. */ ResponseDto;
export type TestimonialsControllerUpdateApiArg = {
  id: string;
  updateTestimonialDto: UpdateTestimonialDto;
};
export type TestimonialsControllerRemoveApiResponse = unknown;
export type TestimonialsControllerRemoveApiArg = string;
export type TestimonialsControllerFindByStatusApiResponse =
  /** status 200 Testimonials fetched successfully by status. */ ResponseDto;
export type TestimonialsControllerFindByStatusApiArg = string;
export type LuaguageControllerCreateApiResponse =
  /** status 200 The Luaguage has been successfully created. */ ResponseDto;
export type LuaguageControllerCreateApiArg = CreateLuaguageDto;
export type LuaguageControllerFindAllApiResponse =
  /** status 200 All Luaguages retrieved successfully. */ ResponseDto;
export type LuaguageControllerFindAllApiArg = void;
export type LuaguageControllerFindOneApiResponse =
  /** status 200 The Luaguage with the specified ID. */ ResponseDto;
export type LuaguageControllerFindOneApiArg = string;
export type LuaguageControllerUpdateApiResponse =
  /** status 200 The Luaguage has been successfully updated. */ ResponseDto;
export type LuaguageControllerUpdateApiArg = {
  id: string;
  updateLuaguageDto: UpdateLuaguageDto;
};
export type LuaguageControllerRemoveApiResponse =
  /** status 200 The Luaguage has been successfully deleted. */ ResponseDto;
export type LuaguageControllerRemoveApiArg = string;
export type LuaguageControllerFindByUniqueIdApiResponse =
  /** status 200 The Luaguage with the specified uniqueID. */ ResponseDto;
export type LuaguageControllerFindByUniqueIdApiArg = string;
export type LuaguageControllerFindAllByUserIdApiResponse =
  /** status 200 All Luaguages for the user retrieved successfully. */ ResponseDto[];
export type LuaguageControllerFindAllByUserIdApiArg = string;
export type LocationCityControllerCreateApiResponse =
  /** status 201 City successfully created */ ResponseDto;
export type LocationCityControllerCreateApiArg = CreateLocationCityDto;
export type LocationCityControllerFindAllApiResponse =
  /** status 200 list of cities */ ResponseDto;
export type LocationCityControllerFindAllApiArg = void;
export type LocationCityControllerFindOneApiResponse =
  /** status 200 City found */ ResponseDto;
export type LocationCityControllerFindOneApiArg = string;
export type LocationCityControllerUpdateApiResponse =
  /** status 200 City successfully updated */ ResponseDto;
export type LocationCityControllerUpdateApiArg = {
  id: string;
  updateLocationCityDto: UpdateLocationCityDto;
};
export type LocationCityControllerRemoveApiResponse = unknown;
export type LocationCityControllerRemoveApiArg = string;
export type CommissionControllerCreateApiResponse =
  /** status 201 The commission has been successfully created. */ ResponseDto;
export type CommissionControllerCreateApiArg = CreateCommissionDto;
export type CommissionControllerFindAllApiResponse =
  /** status 200 The commissions has been successfully fetched. */ ResponseDto;
export type CommissionControllerFindAllApiArg = void;
export type CommissionControllerFindOneApiResponse =
  /** status 200 The commission has been successfully fetched. */ ResponseDto;
export type CommissionControllerFindOneApiArg = string;
export type CommissionControllerUpdateApiResponse =
  /** status 200 The commission has been successfully updated. */ ResponseDto;
export type CommissionControllerUpdateApiArg = {
  id: string;
  updateCommissionDto: UpdateCommissionDto;
};
export type CommissionControllerRemoveApiResponse = unknown;
export type CommissionControllerRemoveApiArg = string;
export type CarouselsControllerCreateApiResponse =
  /** status 201 Carousel created successfully */ ResponseDto;
export type CarouselsControllerCreateApiArg = CreateCarouselDto;
export type CarouselsControllerFindAllApiResponse =
  /** status 200 Carousels retrieved successfully */ ResponseDto;
export type CarouselsControllerFindAllApiArg = void;
export type CarouselsControllerFindOneApiResponse =
  /** status 200 Carousel retrieved successfully */ ResponseDto;
export type CarouselsControllerFindOneApiArg = string;
export type CarouselsControllerUpdateApiResponse =
  /** status 200 Carousel updated successfully */ ResponseDto;
export type CarouselsControllerUpdateApiArg = {
  id: string;
  updateCarouselDto: UpdateCarouselDto;
};
export type CarouselsControllerRemoveApiResponse =
  /** status 200 Carousel deleted successfully */ ResponseDto;
export type CarouselsControllerRemoveApiArg = string;
export type CarouselsControllerFindByStatusApiResponse =
  /** status 200 Carousels retrieved successfully */ ResponseDto[];
export type CarouselsControllerFindByStatusApiArg = string;
export type UrbanCardControllerCreateApiResponse =
  /** status 201 Urban card created successfully */ ResponseDto;
export type UrbanCardControllerCreateApiArg = CreateUrbanCardDto;
export type UrbanCardControllerFindAllApiResponse =
  /** status 200 Urban cards fetched successfully */ ResponseDto;
export type UrbanCardControllerFindAllApiArg = UrbanCardFilterDto;
export type UrbanCardControllerFindOneApiResponse =
  /** status 200 Urban card found successfully */ ResponseDto;
export type UrbanCardControllerFindOneApiArg = string;
export type UrbanCardControllerUpdateApiResponse =
  /** status 200 Urban card updated successfully */ ResponseDto;
export type UrbanCardControllerUpdateApiArg = {
  id: string;
  updateUrbanCardDto: UpdateUrbanCardDto;
};
export type UrbanCardControllerRemoveApiResponse =
  /** status 200 Urban card deleted successfully */ ResponseDto;
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
export type UserLoginResponse = {
  status: number;
  data: {
    user: User;
    token: string;
  };
  message: string;
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
export type ResponseDto = {
  status: number;
  data?: object;
  error?: string;
  message?: string;
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
  /** The plate number of the vehicle */
  plateNumber: string;
  /** Color of the vehicle */
  color?: string;
  /** Additional details of the vehicle */
  otherDetail?: string;
  /** Engine number of the vehicle */
  engineNumber?: string;
  /** Engine type of the vehicle */
  engineType?: string;
  /** The date when the vehicle was registered */
  registrationDate?: string;
  /** The vehicle type ID */
  vehicleTypeId: string;
  /** The driver ID if assigned */
  driverId?: string;
  /** The provider agency ID if assigned */
  providerAgencyId?: string;
  /** The fleet partner ID if assigned */
  fleetPartnersId?: string;
  /** The user ID of the vehicle owner */
  userId?: string;
  /** Status of the vehicle */
  status: "ACTIVE" | "INACTIVE" | "PROCESSING" | "CANCELLED";
  /** Approval status of the vehicle */
  approvalStatus: "ACCEPTED" | "PROCESSING" | "SUSPENDED" | "REJECTED";
  /** The total revenue generated by the vehicle */
  totalRevenue?: number;
  /** The city where the vehicle is enrolled */
  enrollmentCity?: string;
};
export type UpdateVehicleDto = {
  /** The plate number of the vehicle */
  plateNumber?: string;
  /** Color of the vehicle */
  color?: string;
  /** Additional details of the vehicle */
  otherDetail?: string;
  /** Engine number of the vehicle */
  engineNumber?: string;
  /** Engine type of the vehicle */
  engineType?: string;
  /** The date when the vehicle was registered */
  registrationDate?: string;
  /** The vehicle type ID */
  vehicleTypeId?: string;
  /** The driver ID if assigned */
  driverId?: string;
  /** The provider agency ID if assigned */
  providerAgencyId?: string;
  /** The fleet partner ID if assigned */
  fleetPartnersId?: string;
  /** Status of the vehicle */
  status?: "ACTIVE" | "INACTIVE" | "PROCESSING" | "CANCELLED";
  /** Approval status of the vehicle */
  approvalStatus?: "ACCEPTED" | "PROCESSING" | "SUSPENDED" | "REJECTED";
  /** The total revenue generated by the vehicle */
  totalRevenue?: number;
  /** The city where the vehicle is enrolled */
  enrollmentCity?: string;
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
  extraData?: object;
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
  /** City where the park is located, preferably name from city information retrieved from db */
  city: string;
  /** UUID of the Location City after user has selected country, state and then city */
  locationCityId?: string;
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
  /** trip status */
  status?:
    | "STARTED"
    | "COMPLETED"
    | "CANCELLED"
    | "SUSPENDED"
    | "EMERGENCY_INCIDENT"
    | "AVAILABLE_FOR_BOOKING"
    | "NOT_STARTED"
    | "IN_TRANSIT"
    | "ARRIVED"
    | "PICKED_UP"
    | "DROPPED_OFF"
    | "WAITING_FOR_CUSTOMER"
    | "WAITING_FOR_DRIVER"
    | "NOT_AVAILABLE";
  departureDate: string;
  vehicleId: string;
  uniqueID: string;
  cost: number;
};
export type Text = {};
export type String = {};
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
  locationCityId: string;
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
  /** The city where the park is located, based on the locationCityId from Added city on the db */
  locationCity: LocationCity;
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
  engineNumber?: string;
  engineType?: string;
  registrationDate?: string;
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
  /** The date when the trip is scheduled to start, ISO format (YYYY-MM-DD) */
  departureDate: string;
  status: string;
  /** The date when the request was created */
  createdAt: string;
  /** The date when the document was last updated */
  updatedAt: string;
  userId: string;
  /** The user who owns this resource */
  user: User;
};
export type UpdateTripDto = {
  description?: string;
  driverId?: string;
  departureId?: string;
  destinationId?: string;
  /** trip status */
  status?:
    | "STARTED"
    | "COMPLETED"
    | "CANCELLED"
    | "SUSPENDED"
    | "EMERGENCY_INCIDENT"
    | "AVAILABLE_FOR_BOOKING"
    | "NOT_STARTED"
    | "IN_TRANSIT"
    | "ARRIVED"
    | "PICKED_UP"
    | "DROPPED_OFF"
    | "WAITING_FOR_CUSTOMER"
    | "WAITING_FOR_DRIVER"
    | "NOT_AVAILABLE";
  departureDate?: string;
  vehicleId?: string;
  uniqueID?: string;
  cost?: number;
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
export type CreateBookingUnregisteredDto = {
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
export type CreateTestimonialDto = {
  name: string;
  tag?: string;
  content: string;
  location: string;
  file?: string;
  status;
  testifierUserId?: string;
};
export type UpdateTestimonialDto = {
  name?: string;
  tag?: string;
  content?: string;
  location?: string;
  file?: string;
  status?;
  testifierUserId?: string;
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
export type CreateCommissionDto = {
  /** The commission amount */
  commission: number;
  /** Agency the commission is set for */
  agency;
  /** The user ID who owns this commission */
  userId: string;
};
export type UpdateCommissionDto = {
  /** The commission amount */
  commission?: number;
  /** Agency the commission is set for */
  agency?;
  /** The user ID who owns this commission */
  userId?: string;
};
export type CreateCarouselDto = {
  name: string;
  file: string;
  status;
  coordinate?: string;
  locationStateId: string;
};
export type UpdateCarouselDto = {
  name?: string;
  file?: string;
  status?;
  coordinate?: string;
};
export type CreateUrbanCardDto = {
  title: string;
  file: string;
};
export type UrbanCardFilterDto = {
  title?: string;
  userId?: string;
  limit?: number;
  offset?: number;
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
  useTripControllerFindAllCustomQuery,
  useLazyTripControllerFindAllCustomQuery,
  useTripControllerFindOneQuery,
  useLazyTripControllerFindOneQuery,
  useTripControllerUpdateTripMutation,
  useTripControllerDeleteTripMutation,
  useBookingControllerCreateBookingMutation,
  useBookingControllerFindAllBookingsQuery,
  useLazyBookingControllerFindAllBookingsQuery,
  useBookingControllerCreateBookingUnregisteredDtoMutation,
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
  useDriverDocumentControllerFindAllQuery,
  useLazyDriverDocumentControllerFindAllQuery,
  useDriverDocumentControllerFindOneQuery,
  useLazyDriverDocumentControllerFindOneQuery,
  useDriverDocumentControllerUpdateMutation,
  useDriverDocumentControllerRemoveMutation,
  useDriverDocumentControllerFindAllByDriverQuery,
  useLazyDriverDocumentControllerFindAllByDriverQuery,
  useDriverDocumentControllerFindExpiredDocumentsQuery,
  useLazyDriverDocumentControllerFindExpiredDocumentsQuery,
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
  useDriverRequestControllerFinAllQuery,
  useLazyDriverRequestControllerFinAllQuery,
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
  useFleetPartnerControllerFindMeQuery,
  useLazyFleetPartnerControllerFindMeQuery,
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
  useLocationCityControllerFindAllQuery,
  useLazyLocationCityControllerFindAllQuery,
  useLocationCityControllerFindOneQuery,
  useLazyLocationCityControllerFindOneQuery,
  useLocationCityControllerUpdateMutation,
  useLocationCityControllerRemoveMutation,
  useCommissionControllerCreateMutation,
  useCommissionControllerFindAllQuery,
  useLazyCommissionControllerFindAllQuery,
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
