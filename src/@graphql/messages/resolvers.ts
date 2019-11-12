import GraphQLUpload from 'graphql-upload'

const resolvers = {
  Upload: GraphQLUpload,

  Message: {
    listing(parent: any, args: any, context: any, info: any) {
      return context.dataSources.listingsAPI.getListingById(parent.listingId, true, true)
    },
    guest(parent: any, args: any, context: any, info: any) {
      return context.dataSources.usersAPI.getUserLegacyById(parent.guestId)
    },
    host(parent: any, args: any, context: any, info: any) {
      return context.dataSources.usersAPI.getUserLegacyById(parent.hostId)
    },
    unreadItems(parent: any, args: any, context: any, info: any) {
      let token = context.token.replace('Bearer ', '')
      return context.dataSources.authAPI.tokenValidate({ token: token }).then((res: any) => {
        return context.dataSources.messagesAPI.countUnreadMessageItems(parent.id, res.user.id)
      })
    }
  },

  MessageItem: {
    sent(parent: any, args: any, context: any, info: any) {
      return context.dataSources.usersAPI.getUserLegacyById(parent.sentBy)
    }
  },

  Query: {
    getMessagesByUser: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.messagesAPI.getMessagesByUser(args)
    },
    getMessage: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.messagesAPI.getMessage(args.id)
    },
    countUnreadMessages: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.messagesAPI.countUnreadMessages(args)
    },
    getMessageItems: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.messagesAPI.getMessageItems(args)
    },
    countUnreadMessageItems: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.messagesAPI.countUnreadMessageItems(args)
    }
  },

  Mutation: {
    postMessage: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.messagesAPI.postMessage(args)
    },
    readMessage: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.messagesAPI.readMessage(args)
    },
    postMessageItem: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.messagesAPI.postMessageItem(args)
    },
    readMessageItems: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.messagesAPI.readMessageItems(args.id)
    }
  }
}

export default resolvers
