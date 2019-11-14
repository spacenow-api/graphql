import { gql } from "apollo-server-express";

const typeDefs = gql`

  type OutputMessage {
    status: String
  }

  extend type Mutation {
    sendMessage(
      to: String
      body: String
    ): OutputMessage
  }
`;

export default typeDefs;
