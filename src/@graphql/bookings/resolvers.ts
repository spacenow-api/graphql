import GraphQLUpload from "graphql-upload";

const resolvers = {
  Upload: GraphQLUpload,

  BookingType: {
    listing(parent: any, args: any, context: any, info: any) {
      return context.dataSources.listingsAPI.getListingById(parent.listingId);
    },
    guest(parent: any, args: any, context: any, info: any) {
      return context.dataSources.usersAPI.getUserLegacyById(parent.guestId);
    },
    host(parent: any, args: any, context: any, info: any) {
      return context.dataSources.usersAPI.getUserLegacyById(parent.hostId);
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

    getHourlyAvailability: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.bookingsAPI.getHourlyAvailability(args.listingId, args.date, args.checkInHour, args.checkOutHour);
    },

    getTotalBookingsByDate: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.bookingsAPI.getTotalBookingsByDate(args.days);
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
