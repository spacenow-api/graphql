import GraphQLUpload from "graphql-upload";

const resolvers = {
  Upload: GraphQLUpload,
  Query: {
    getV2Listing: async (_: any, args: any, { dataSources }: any) => {
      const { v2ListingAPI } = dataSources;
      return v2ListingAPI.getV2Listing(args.id);
    },
    getV2Steps: async (_: any, args: any, { dataSources }: any) => {
      const { v2ListingAPI } = dataSources;
      return v2ListingAPI.getV2Steps(args.id);
    }
  },
  Mutation: {
    postV2Listing: async (_: any, args: any, { dataSources }: any) => {
      const { v2ListingAPI } = dataSources;
      return v2ListingAPI.postV2Listing();
    },
    putV2Listing: async (_: any, args: any, { dataSources }: any) => {
      const { v2ListingAPI } = dataSources;
      return v2ListingAPI.putV2Listing(args.input);
    }
  }
};

export default resolvers;
