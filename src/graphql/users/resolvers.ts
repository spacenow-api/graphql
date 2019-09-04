const resolvers = {
  Query: {
    getAllUsers: async (_: any, args: any, { dataSources }: any) => {
      return await dataSources.usersAPI.getAllUsers();
    },

    getUserLegacyById: async (_: any, args: any, { dataSources }: any) => {
      return await dataSources.usersAPI.getUserLegacyById(args.id);
    },

    getAllUsersLegacy: async (_: any, args: any, { dataSources }: any) => {
      return await dataSources.usersAPI.getAllUsersLegacy();
    },

    getUser: async (_: any, args: any, { dataSources }: any) => {
      return await dataSources.usersAPI.getUser(args.id);
    }
  },

  Mutation: {
    login: async (_: any, args: any, { dataSources }: any) => {
      return await dataSources.authAPI.login(args);
    },

    loginAdmin: async (_: any, args: any, { dataSources }: any) => {
      return await dataSources.authAPI.loginAdmin(args);
    },

    tokenValidate: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.authAPI.tokenValidate({ token: args.token });
    },

    tokenAdminValidate: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.authAPI.tokenAdminValidate({ token: args.token });
    },

    updateUserLegacy: async (_: any, args: any, { dataSources }: any) => {
      return await dataSources.usersAPI.updateUserLegacy(args.input);
    },

    updateUserProfileLegacy: async (
      _: any,
      args: any,
      { dataSources }: any
    ) => {
      return await dataSources.usersAPI.updateUserProfileLegacy(args.userId, {
        data: args.input
      });
    },

    updateProfilePicture: async (_: any, args: any, { dataSources }: any) => {
      return await dataSources.usersAPI.updateProfilePicture(args);
    },

    deleteUserByEmail: async (_: any, args: any, { dataSources }: any) => {
      return await dataSources.usersAPI.deleteUserByEmail(args.email);
    }
  }
};

export default resolvers;
