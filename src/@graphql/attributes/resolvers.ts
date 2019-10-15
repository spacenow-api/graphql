const resolvers = {
  Query: {
    getAttributes: async (_source: any, _args: any, { dataSources }: any) => {
      return dataSources.attributesAPI.getAttributes(
        _args.pageIndex,
        _args.pageSize
      );
    },
    getAttribute: async (_source: any, _args: any, { dataSources }: any) => {
      return dataSources.attributesAPI.getAttribute(_args.id);
    }
  }
};

export default resolvers;
