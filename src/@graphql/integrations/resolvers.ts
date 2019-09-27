import GraphQLUpload from "graphql-upload";

const resolvers = {
  Upload: GraphQLUpload,
  Query: {

  },

  Mutation: {

    createWeWorkReferral: async (_: any, args: any, { dataSources }: any) => {
      const { weWorkAPI } = dataSources;
      
      return weWorkAPI.createWeWorkReferral(
        args.wework
      );
    },
    
    sendHubSpotForm: async (_: any, args: any, { dataSources }: any) => {
      const { hubSpotAPI } = dataSources;

      await hubSpotAPI.sendHubSpotForm(
        args.hubspot
      );

      return { status: "success" }
    },

  }
};

export default resolvers;
