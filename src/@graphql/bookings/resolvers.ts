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
      const user = await dataSources.usersAPI.getUserLegacyById(args.hostId)
      const message = 'New booking request'
      return dataSources.bookingsAPI.createBooking(args).then(dataSources.notificationAPI.sendSMSMessage({ message, sender: "Spacenow", receiver: user.profile.phoneNumber }));
    },

    timeoutBooking: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.bookingsAPI.timeoutBooking(args.bookingId);
    },

    acceptBooking: async (_: any, args: any, { dataSources }: any) => {
      const user = dataSources.bookingsAPI.getBookingById(args.bookingId)
      const message = 'Booking confirmed'
      return dataSources.bookingsAPI.acceptBooking(args.bookingId).then(dataSources.notificationAPI.sendSMSMessage({ message, sender: "Spacenow", receiver: user.guest.profile.phoneNumber }));
    },

    declineBooking: async (_: any, args: any, { dataSources }: any) => {
      const user = dataSources.bookingsAPI.getBookingById(args.bookingId)
      const message = 'Booking declined'
      return dataSources.bookingsAPI.declineBooking(args.bookingId).then(dataSources.twilioAPI.sendMessage(user.guest.profile.phoneNumber, message));
    }
  }
};

export default resolvers;
