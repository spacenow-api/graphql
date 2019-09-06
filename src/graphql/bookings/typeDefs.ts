import { gql } from "apollo-server";

const typeDefs = gql`
  type Bookings {
    count: Int
    items: [BookingType]
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
    paymentState: String
    updatedAt: Float
    priceType: String
    guestId: String
    checkIn: String
    checkOut: String
    reservations: [String]
  }

  type BookingOutput {
    bookingId: String
    status: Boolean
  }

  extend type Query {
    getPendingBookingsByUser(listingId: Int, userId: String): Bookings
    getAllBookingsByUser(
      userId: String
      userType: String
      status: String
      period: [String]
    ): Bookings
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
    ): BookingOutput

    timeoutBooking(bookingId: String): BookingOutput
  }
`;

export default typeDefs;
