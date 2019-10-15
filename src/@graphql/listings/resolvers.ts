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
    getListingAttributes: async (
      _source: any,
      _args: any,
      { dataSources }: any
    ) => {
      return dataSources.listingsAPI.getListingAttributes(
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
      return dataSources.listingsAPI.getListingCategory(_args.id);
    },
    getListingAttribute: async (
      _source: any,
      _args: any,
      { dataSources }: any
    ) => {
      return dataSources.listingsAPI.getListingAttribute(_args.id, _args.type);
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
    postListingAttribute: async (
      _source: any,
      _args: any,
      { dataSources }: any
    ) => {
      const attr = await dataSources.attributesAPI.getAttribute(
        _args.data.attributeId
      );
      return dataSources.listingsAPI.postListingAttribute(
        _args.data,
        attr.backendType
      );
    },
    putListingCategory: async (
      _source: any,
      _args: any,
      { dataSources }: any
    ) => {
      return dataSources.listingsAPI.putListingCategory(_args.id, _args.data);
    },
    putListingAttribute: async (
      _source: any,
      _args: any,
      { dataSources }: any
    ) => {
      const attr = await dataSources.attributesAPI.getAttribute(
        _args.data.attributeId
      );
      return dataSources.listingsAPI.putListingAttribute(
        _args.id,
        _args.data,
        attr.backendType
      );
    },
    deleteListingCategory: async (
      _source: any,
      _args: any,
      { dataSources }: any
    ) => {
      return dataSources.listingsAPI.deleteListingCategory(_args.id);
    },
    deleteListingAttribute: async (
      _source: any,
      _args: any,
      { dataSources }: any
    ) => {
      return dataSources.listingsAPI.deleteListingAttribute(
        _args.id,
        _args.type
      );
    }
  }
};

export default resolvers;
