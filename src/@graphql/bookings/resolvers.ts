import GraphQLUpload from "graphql-upload";

const resolvers = {
  Upload: GraphQLUpload,

  BookingType: {
    listing(parent: any, args: any, context: any, info: any) {
      return context.dataSources.listingsAPI.getListingById(parent.listingId);
    }
  },

  Query: {
    getBookingById: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.bookingsAPI.getBookingById(args.id);
    },

    getPendingBookingsByUser: async (
      _: any,
      args: any,
      { dataSources }: any
    ) => {
      return dataSources.bookingsAPI.getPendingBookingsByUser(args);
    },

    getAllBookingsByUser: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.bookingsAPI.getAllBookingsByUser(args);
    },

    getHourlyPeriod: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.bookingsAPI.getHourlyPeriod(args.checkInHour, args.checkOutHour);
    },
  },

  Mutation: {
    createBooking: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.bookingsAPI.createBooking(args);
    },

    timeoutBooking: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.bookingsAPI.timeoutBooking(args.bookingId);
    },

    acceptBooking: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.bookingsAPI.acceptBooking(args.bookingId);
    },

    declineBooking: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.bookingsAPI.declineBooking(args.bookingId);
    }
  }
};

export default resolvers;
