import GraphQLUpload from "graphql-upload";

const resolvers = {
  Upload: GraphQLUpload,

  BookingType: {
    listing(parent: any, args: any, context: any, info: any) {
      return context.dataSources.listingsAPI.getListingById(parent.listingId);
    }
  },

  Query: {
    getPendingBookingsByUser: async (
      _: any,
      args: any,
      { dataSources }: any
    ) => {
      const { bookingsAPI } = dataSources;
      console.log(args);
      return await bookingsAPI.getPendingBookingsByUser(args);
    },

    getAllBookingsByUser: async (_: any, args: any, { dataSources }: any) => {
      const { bookingsAPI } = dataSources;
      console.log(args);
      return await bookingsAPI.getAllBookingsByUser(args);
    }
  },

  Mutation: {
    createBooking: async (_: any, args: any, { dataSources }: any) => {
      const { bookingsAPI } = dataSources;

      return bookingsAPI.createBooking(args);
    },

    timeoutBooking: async (_: any, args: any, { dataSources }: any) => {
      const { bookingsAPI } = dataSources;

      return bookingsAPI.timeoutBooking(args.bookingId);
    }
  }
};

export default resolvers;
