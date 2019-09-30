const resolvers = {

  Query: {

    searchByAddress: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.searchAPI.searchByAddress(args.lat, args.lng, args.categories, args.duration, args.priceMin, args.priceMax, args.instant, args.page, args.limit, args.radius);
    },

    searchByFilters: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.searchAPI.searchByFilters(args.key, args.categories, args.duration, args.priceMin, args.priceMax, args.instant, args.page, args.limit, args.radius);
    }
  }
};

export default resolvers;
