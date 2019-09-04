import GraphQLUpload from "graphql-upload";

const resolvers = {
  Upload: GraphQLUpload,
  Query: {

    getPendingBookingsByUser: async (_: any, args: any, { dataSources }: any) => {
      const { bookingsAPI } = dataSources;
      console.log(args)
      return await bookingsAPI.getPendingBookingsByUser(
        args
      );
    }
    
  },

  Mutation: {

    createBooking: async (_: any, args: any, { dataSources }: any) => {
      const { bookingsAPI } = dataSources;
      
      return bookingsAPI.createBooking(
        args
      );
    },

    timeoutBooking: async (_: any, args: any, { dataSources }: any) => {
      const { bookingsAPI } = dataSources;
      
      return bookingsAPI.timeoutBooking(
        args.bookingId
      );
    },
    
  }
};

export default resolvers;
