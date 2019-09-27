import { gql } from "apollo-server";

const typeDefs = gql`
  
  type MailConfirmation {
    messageId: String
  }

  extend type Mutation {
    
    sendMail(to: String!, subject: String!, html: String!): MailConfirmation
  }
`;

export default typeDefs;
