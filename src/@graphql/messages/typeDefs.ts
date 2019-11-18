import { gql } from 'apollo-server-express'

const typeDefs = gql`

  type Messages {
    count: Int
    rows: [Message]
  }

  type MessageItems {
    count: Int
    rows: [MessageItem]
  }

  type MessageHost {
    id: String
    messageId: String
    flexibleTime: Int
    peopleQuantity: Int
    bookingPeriod: String
    period: Int
    reason: String
    reservations: [String]
    startTime: String
    endTime: String
  }

  type Message {
    id: String
    guest: User
    guestId: String
    host: User
    hostId: String
    listing: Listing
    listingId: Int
    isRead: Int
    unreadItems: Int
    messageItems: [MessageItem]
    messageHost: MessageHost
    createdAt: String
    updatedAt: String
  }

  type MessageItem {
    id: String
    messageId: String
    sent: User
    sentBy: String
    content: String
    isRead: Int
    createdAt: String
    updatedAt: String
  }

  type CountMessage {
    count: Int
  }

  extend type Query {
    getMessagesByUser(id: String!, type: String!, pageIndex: Int!, pageSize: Int!): Messages
    getMessage(id: String!): Message
    getMessageItems(id: String!, pageIndex: Int!, pageSize: Int): MessageItems
    countUnreadMessages(id: String!, type: String!): CountMessage
    countUnreadMessageItems(id: String!, userId: String!): CountMessage
  }

  extend type Mutation {
    postMessage(listingId: Int!, guestId: String!, hostId: String!, content: String!): Message
    postMessageToHost(listingId: Int!, guestId: String!, hostId: String!, content: String!, bookingPeriod: String!, period: Int!, reservations: [String]!, checkInTime: String, checkOutTime: String, hasFlexibleTime: Boolean!, peopleQuantity: Int, reason: String!): Message
    readMessage(id: String!, userId: String!): Message
    postMessageItem(messageId: String!, sentBy: String!, content: String!, isRead: Int): MessageItem
    readMessageItems(id: String!): MessageItem
  }
`

export default typeDefs
