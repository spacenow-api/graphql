import { gql } from 'apollo-server-express'

const typeDefs = gql`

  type Notification {
    id: String
    name: String
    slug: String
    message: String
  }

  input SMSMessageInput {
    message: String
    receiver: String
    sender: String
  }
  
  type SMSMessage {
    status: String
  }

  extend type Mutation {
    sendSMSMessage(
      input: SMSMessageInput
    ): SMSMessage
  }

  extend type Query {
    getNotifications: [Notification]
  }

`

export default typeDefs
