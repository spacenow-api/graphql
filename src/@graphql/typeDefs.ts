import { gql } from 'apollo-server-express'

const typeDefs = gql`
  directive @currency on FIELD_DEFINITION

  type Success {
    status: String
  }

  type Query {
    root: String
  }

  type Mutation {
    root: String
  }
`

export default typeDefs
