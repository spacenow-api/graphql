const resolvers = {
  Query: {
    getAllUsers: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.usersAPI.getAllUsers();
    },

    getUserLegacyById: async (_: any, args: any, { dataSources }: any) => {
      return await dataSources.usersAPI.getUserLegacyById(args.id);
    },

    getAllUsersLegacy: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.usersAPI.getAllUsersLegacy();
    },

    getUser: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.usersAPI.getUser(args.id);
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

    tokenAdminValidate: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.authAPI.tokenAdminValidate({ token: args.token });
    },

    updateUserLegacy: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.usersAPI.updateUserLegacy(args.input);
    },

    deleteUserByEmail: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.usersAPI.deleteUserByEmail(args.email);
    },

    signup: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.authAPI.signup(args.email, args.password, args.firstName, args.lastName);
    }
  }
};

export default resolvers;
