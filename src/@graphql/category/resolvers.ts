const resolvers = {
  Query: {
    getCategories: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.categoriesAPI.getCategories();
    }
  }
};

export default resolvers;
