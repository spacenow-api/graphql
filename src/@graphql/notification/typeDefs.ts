import { gql } from 'apollo-server'

const typeDefs = gql`


  type Notification {
    id: String
    name: String
    slug: String
    message: String
  }

  extend type Query {
    getNotifications: [Notification]
  }

`

export default typeDefs
