const resolvers = {
  Query: {
    getAllUsers: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.usersAPI.getAllUsers();
    },

    getTotalUsersLegacy: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.usersAPI.getTotalUsersLegacy();
    },

    getTotalUsersLegacyByDate: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.usersAPI.getTotalUsersLegacyByDate(args.days);
    },

    getUserLegacyById: async (_: any, args: any, { dataSources }: any) => {
      return await dataSources.usersAPI.getUserLegacyById(args.id, args.token);
    },

    getAllUsersLegacy: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.usersAPI.getAllUsersLegacy(args.days);
    },

    getUsersByProvider: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.usersAPI.getUsersByProvider(args.provider);
    },

    getUser: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.usersAPI.getUser(args.id);
    },

    getUserDocuments: async (_: any, args: any, { dataSources }: any) => {
      return await dataSources.usersAPI.getUserDocuments(args.userId);
    },

    getUserNotifications: async (_: any, args: any, { dataSources }: any) => {
      return await dataSources.usersAPI.getUserNotifications(args.userId);
    }
  },

  Mutation: {
    login: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.authAPI.login(args);
    },

    loginAdmin: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.authAPI.loginAdmin(args);
    },

    tokenValidate: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.authAPI.tokenValidate({ token: args.token });
    },

    tokenGoogleValidate: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.authAPI.tokenGoogleValidate({ token: args.token }, args.userType);
    },

    tokenFacebookValidate: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.authAPI.tokenFacebookValidate({ token: args.token }, args.userType);
    },

    tokenAdminValidate: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.authAPI.tokenAdminValidate({ token: args.token });
    },

    deleteDocument: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.usersAPI.deleteDocument(args.id, args.userId);
    },

    updateUserLegacy: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.usersAPI.updateUserLegacy(args.input);
    },

    updateUserNotification: async (_: any, args: any, { dataSources }: any) => {
      return await dataSources.usersAPI.updateUserNotification(args.userId, args.notificationId, {
        data: args.input
      });
    },

    updateUserProfileLegacy: async (_: any, args: any, { dataSources }: any) => {
      return await dataSources.usersAPI.updateUserProfileLegacy(args.userId, {
        data: args.input
      });
    },

    updateProfilePicture: async (_: any, args: any, { dataSources }: any) => {
      return await dataSources.usersAPI.updateProfilePicture(args);
    },

    uploadDocument: async (_: any, args: any, { dataSources }: any) => {
      return await dataSources.usersAPI.uploadDocument(args);
    },

    deleteUserByEmail: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.usersAPI.deleteUserByEmail(args.email);
    },

    signup: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.authAPI.signup(args.email, args.password, args.phoneNumber, args.firstName, args.lastName, args.userType);
    },

    resetPassword: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.usersAPI.resetPassword(args.email);
    },

    resetPasswordUpdate: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.usersAPI.resetPasswordUpdate(args.token, args.password);
    },

    resendEmail: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.usersAPI.resendEmail(args.email);
    }
  }
};

export default resolvers;
