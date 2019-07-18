import { GraphQLUpload } from "graphql-upload";

const resolvers = {
  Upload: GraphQLUpload,
  Query: {
    getAllAssets: (_: any, args: any, { dataSources }: any) => {
      const { assetsAPI } = dataSources;
      return assetsAPI.getAllAssets(args);
    },
    /**
     * Get a location by ID.
     */
    getLocationById: (_: any, args: any, { dataSources }: any) => {
      const { locationsAPI } = dataSources;
      return locationsAPI.getLocationById(args.id);
    }
  },
  Mutation: {
    createAsset: (_: any, args: any, { dataSources }: any) => {
      const { assetsAPI } = dataSources;
      return assetsAPI.createAsset(args);
    }
  }
};

export default resolvers;
