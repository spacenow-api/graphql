import { gql } from 'apollo-server-express'

const typeDefs = gql`

  enum NotificationType {
    guest
    host
  }

  type Notification {
    id: ID
    name: String
    slug: String
    message: String
    type: NotificationType
  }

  input NotificationInput {
    name: String
    message: String
    type: NotificationType
  }

  type NotificationResponse {
    status: String
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
    postNotification(
      input: NotificationInput
    ): NotificationResponse
    putNotification(
      id: ID,
      input: NotificationInput
    ): NotificationResponse
  }

  extend type Query {
    getNotifications: [Notification]
    getNotificationsByType(type: NotificationType): [Notification]
    getNotification(id: ID): NotificationResponse
  }

`

export default typeDefs
