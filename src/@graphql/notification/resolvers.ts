const resolvers = {
  Mutation: {
    sendSMSMessage: async (_: any, args: any, { dataSources }: any) => {
      const { notificationAPI } = dataSources;
      await notificationAPI.sendSMSMessage(args.body);
      return { status: "success" }
    },
  },
  Query: {
    getNotifications: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.notificationAPI.getNotifications()
    }
  }
}

export default resolvers
