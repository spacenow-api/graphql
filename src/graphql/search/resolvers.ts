const resolvers = {

  Query: {

    searchByAddress: async (_: any, args: any, { dataSources }: any) => {
      const { listingsAPI, locationsAPI, searchAPI, usersAPI } = dataSources;
      return searchAPI.searchByAddress(args.lat, args.lng, args.userId, listingsAPI, locationsAPI, usersAPI);
    },

    searchByFilters: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.searchAPI.searchByFilters(args.key, args.categories, args.duration, args.priceMin, args.priceMax, args.instant);
    }
  }
};

export default resolvers;
