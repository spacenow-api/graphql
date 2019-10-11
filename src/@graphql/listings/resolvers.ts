const resolvers = {
  Query: {
    getListingCategories: async (
      _source: any,
      _args: any,
      { dataSources }: any
    ) => {
      return dataSources.listingsAPI.getListingCategories(
        _args.id,
        _args.pageIndex,
        _args.pageSize
      );
    },
    getListingCategory: async (
      _source: any,
      _args: any,
      { dataSources }: any
    ) => {
      return dataSources.categoriesAPI.getListingCategory(_args.id);
    }
  },
  Mutation: {
    postListingCategory: async (
      _source: any,
      _args: any,
      { dataSources }: any
    ) => {
      return dataSources.listingsAPI.postListingCategory(_args.data);
    },
    putListingCategory: async (
      _source: any,
      _args: any,
      { dataSources }: any
    ) => {
      return dataSources.listingsAPI.putListingCategory(_args.id, _args.data);
    },
    deleteListingCategory: async (
      _source: any,
      _args: any,
      { dataSources }: any
    ) => {
      return dataSources.listingsAPI.deleteListingCategory(_args.id);
    }
  }
};

export default resolvers;
