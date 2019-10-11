const resolvers = {
  Query: {
    getCategories: async (_source: any, _args: any, { dataSources }: any) => {
      return dataSources.categoriesAPI.getCategories(
        _args.pageIndex,
        _args.pageSize
      );
    },
    getRootCategories: async (
      _source: any,
      _args: any,
      { dataSources }: any
    ) => {
      return dataSources.categoriesAPI.getRootCategories();
    },
    getCategory: async (_source: any, _args: any, { dataSources }: any) => {
      return dataSources.categoriesAPI.getCategory(_args.id);
    },
    getCategoryAttributes: async (
      _source: any,
      _args: any,
      { dataSources }: any
    ) => {
      return dataSources.categoriesAPI.getCategoryAttributes(
        _args.id,
        _args.pageIndex,
        _args.pageSize
      );
    }
  },
  Mutation: {
    postCategory: async (_source: any, _args: any, { dataSources }: any) => {
      return dataSources.categoriesAPI.postCategory(_args.category);
    },
    putCategory: async (_source: any, _args: any, { dataSources }: any) => {
      return dataSources.categoriesAPI.putCategory(_args.id, _args.category);
    }
  }
};

export default resolvers;
