const resolvers = {
  Mutation: {
    sendSMSMessage: async (_: any, args: any, { dataSources }: any) => {
      const { notificationAPI } = dataSources;
      await notificationAPI.sendSMSMessage(args.input);
      return { status: "success" }
    },
    postNotification: async (_: any, args: any, { dataSources }: any) => {
      const { notificationAPI } = dataSources;
      await notificationAPI.postNotification(args.input);
      return { status: "success" }
    },
    putNotification: async (_: any, args: any, { dataSources }: any) => {
      const { notificationAPI } = dataSources;
      await notificationAPI.putNotification(args.id, args.input);
      return { status: "success" }
    },
  },
  Query: {
    getNotifications: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.notificationAPI.getNotifications()
    },
    getNotificationsByType: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.notificationAPI.getNotificationsByType(args.type)
    },
    getNotification: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.notificationAPI.getNotification(args.id)
    }
  }
}

export default resolvers
