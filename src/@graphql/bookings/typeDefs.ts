import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Bookings {
    count: Int
    items: [BookingType]
  }

  type BookingsCount {
    count: Int
  }

  type BookingType {
    listing: Listing
    listingId: Int
    quantity: Int
    currency: String
    totalPrice: Float
    bookingType: String
    basePrice: Float
    createdAt: Float
    period: Int
    sourceId: String
    bookingState: String
    chargeId: String
    hostServiceFee: Float
    confirmationCode: Float
    bookingId: String
    guestServiceFee: Float
    hostId: String
    host: User
    paymentState: String
    updatedAt: Float
    priceType: String
    guestId: String
    guest: User
    checkIn: String
    checkOut: String
    checkInHour: String
    checkOutHour: String
    message: String
    voucherCode: String
    reservations: [String]
    priceDetails: PriceDetails
  }

  type BookingOutput {
    bookingId: String
    status: Boolean
  }

  type HourlySuggestion {
    firstHour: String
    lastHour: String
    openRange: [String]
    closeRange: [String]
    openSuggestion: String
    closeSuggestion: String
  }

  type HourlyAvailability {
    status: Boolean
    hours: Int
    isAvailable: Boolean
    suggestion: HourlySuggestion
  }

  type Voucher {
    id: String
    code: String
    type: String
    value: Int
    usageCount: Int
    usageLimit: Int
    expireAt: String
    status: String
    createdAt: String
    updatedAt: String
  }

  type VoucherValidation {
    status: String
    data: Voucher
  }

  type PriceDetails {
    valueUnit: Float 
    valuePerQuantity: Float 
    valueFee: Float 
    valueVoucher: Float
    valueDiscount: Float
    total: Float
  }

  extend type Query {
    getBookingById(id: String!): BookingType
    getPendingBookingsByUser(listingId: Int, userId: String): Bookings
    getAllBookingsByUser(
      userId: String
      userType: String
      status: String
      period: [String]
    ): Bookings
    getHourlyAvailability(listingId: Int!, date: String!, checkInHour: String!, checkOutHour: String!): HourlyAvailability
    getTotalBookingsByDate(days: Int): BookingsCount
    getVouchers: [Voucher]
    getVoucherValidation(voucherCode: String!): VoucherValidation
  }

  extend type Mutation {
    createBooking(
      listingId: Int
      currency: String
      bookingType: String
      basePrice: Float
      period: Int
      hostId: String
      priceType: String
      guestId: String
      isAbsorvedFee: Boolean
      reservations: [String]
      checkInHour: String
      checkOutHour: String
      message: String
    ): BookingOutput
    timeoutBooking(bookingId: String): BookingOutput
    acceptBooking(bookingId: String!): BookingOutput
    declineBooking(bookingId: String!): BookingOutput
    createVoucher(type: String!, value: Float!, usageLimit: Int!): Voucher
    desactiveVoucher(voucherCode: String!): Voucher
    insertVoucher(voucherCode: String!, bookingId: String!): BookingType
    removeVoucher(voucherCode: String!, bookingId: String!): BookingType
  }
`;

export default typeDefs;
