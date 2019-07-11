const resolvers = {
  Query: {
    /**
     * Get a location by ID.
     */
    getLocationById: (_: any, args: any, { dataSources }: any) => {
      const { locationsAPI } = dataSources;
      return locationsAPI.getLocationById(args.id);
    }
  }
};

export default resolvers;
