const resolvers = {
  Query: {
    getEAVAttributes: async (
      _source: any,
      _args: any,
      { dataSources }: any
    ) => {
      return dataSources.eavAPI.getEAVAttributes(
        _args.pageIndex,
        _args.pageSize
      );
    },
    getEAVAttribute: async (_source: any, _args: any, { dataSources }: any) => {
      return dataSources.eavAPI.getEAVAttribute(_args.id);
    },
    getEAVEntityAttributes: async (
      _source: any,
      _args: any,
      { dataSources }: any
    ) => {
      return dataSources.eavAPI.getEAVEntityAttributes(
        _args.id,
        _args.pageIndex,
        _args.pageSize
      );
    }
  }
};

export default resolvers;
