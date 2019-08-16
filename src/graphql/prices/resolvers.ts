const resolvers = {

  Query: {

    getPricesEstimation: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.pricesAPI.list();
    }
  }
};

export default resolvers;
