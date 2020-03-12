const resolvers = {
  Mutation: {
    sendEmail: async (_: any, args: any, { dataSources }: any) => {
      const { emailsAPI } = dataSources;

      await emailsAPI.sendEmail(args);

      return { status: "success" };
    }
  }
};

export default resolvers;
