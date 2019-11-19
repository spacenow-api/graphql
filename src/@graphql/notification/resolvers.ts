const resolvers = {
  Query: {
    getNotifications: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.notificationAPI.getNotifications()
    }
  }
}

export default resolvers
