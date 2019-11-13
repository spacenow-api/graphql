
const resolvers = {
  Mutation: {
    
    sendMessage: async (_: any, args: any, { dataSources }: any) => {
      const { twilioAPI } = dataSources;

      await twilioAPI.sendMessage(args.to, args.body);

      return { status: "success" }
    },

  }
};

export default resolvers;
