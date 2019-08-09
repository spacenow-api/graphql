const resolvers = {
  Query: {
    getAllUsers: async (_: any, args: any, { dataSources }: any) => {
      return await dataSources.usersAPI.getAllUsers();
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

    updateUser: async (_: any, args: any, { dataSources }: any) => {
      return await dataSources.usersAPI.updateUser(args);
    }
  }
};

export default resolvers;
