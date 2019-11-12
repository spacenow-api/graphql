import { gql } from "apollo-server";

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
    reservations: [String]
  }

  type BookingOutput {
    bookingId: String
    status: Boolean
  }

  type HourlyAvailability {
    status: Boolean
    hours: Int
    isAvailable: Boolean
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
  }
`;

export default typeDefs;
