import { gql } from 'apollo-server-express'

const typeDefs = gql`

  type Notification {
    id: String
    name: String
    slug: String
    message: String
  }

  type SMSMessage {
    status: String
  }

  extend type Mutation {
    sendSMSMessage(
      message: String
      receiver: String
      sender: String
    ): SMSMessage
  }

  extend type Query {
    getNotifications: [Notification]
  }

`

export default typeDefs
