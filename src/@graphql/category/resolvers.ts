const resolvers = {
  Query: {
    getCategories: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.categoriesAPI.getCategories();
    },
    getCategoryActivities: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.categoriesAPI.getCategoryActivities(args.id)
    },
    getCategoryAmenities: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.categoriesAPI.getCategoryAmenities(args.id)
    },
    getCategoryFeatures: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.categoriesAPI.getCategoryFeatures(args.id)
    },
    getCategoryStyles: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.categoriesAPI.getCategoryStyles(args.id)
    },
    getCategoryRules: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.categoriesAPI.getCategoryRules(args.id)
    },
  }
};

export default resolvers;
