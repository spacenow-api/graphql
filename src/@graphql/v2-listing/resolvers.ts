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
    },
    getV2Rules: async (_: any, args: any, { dataSources }: any) => {
      const { v2ListingAPI } = dataSources;
      return v2ListingAPI.getV2Rules();
    },
    getV2Amenities: async (_: any, args: any, { dataSources }: any) => {
      const { v2ListingAPI } = dataSources;
      return v2ListingAPI.getV2Amenities();
    },
    getV2Features: async (_: any, args: any, { dataSources }: any) => {
      const { v2ListingAPI } = dataSources;
      return v2ListingAPI.getV2Features();
    },
    getV2RootCategories: async (_: any, args: any, { dataSources }: any) => {
      const { v2ListingAPI } = dataSources;
      return v2ListingAPI.getV2RootCategories();
    },
    getV2CategoryTags: async (_: any, args: any, { dataSources }: any) => {
      const { v2ListingAPI } = dataSources;
      return v2ListingAPI.getV2CategoryTags(args.id);
    },
    getV2Cancellations: async (_: any, args: any, { dataSources }: any) => {
      const { v2ListingAPI } = dataSources;
      return v2ListingAPI.getV2Cancellations();
    }
  },
  Mutation: {
    putV2Steps: async (_: any, args: any, { dataSources }: any) => {
      const { v2ListingAPI } = dataSources;
      return v2ListingAPI.putV2Steps(args.id, args.steps);
    },
    postV2Listing: async (_: any, args: any, { dataSources }: any) => {
      const { v2ListingAPI } = dataSources;
      return v2ListingAPI.postV2Listing();
    },
    putV2Listing: async (_: any, args: any, { dataSources }: any) => {
      const { v2ListingAPI } = dataSources;
      return v2ListingAPI.putV2Listing(args.input);
    },
    postV2Location: async (_: any, args: any, { dataSources }: any) => {
      const { v2ListingAPI } = dataSources;
      return v2ListingAPI.postV2Location(args.input);
    },
    postV2Media: async (_: any, args: any, { dataSources }: any) => {
      const { v2ListingAPI } = dataSources;
      return v2ListingAPI.postV2Media(args.input);
    }
  }
};

export default resolvers;
