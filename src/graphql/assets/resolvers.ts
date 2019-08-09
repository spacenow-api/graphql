const resolvers = {

  Mutation: {

    sendMail: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.assetsAPI.sendMail({ to: args.to, subject: args.subject, html: args.html });
    }
  }
};

export default resolvers;
