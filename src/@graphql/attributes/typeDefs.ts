import { gql } from "apollo-server";

const typeDefs = gql`
  type Attribute {
    id: ID
    attributeCode: String
    attributeModel: String
    frontendInput: String
    frontendLabel: String
    backendType: String
    backendModel: String
    isRequired: Boolean
  }

  input AttributeInput {
    attributeCode: String
    attributeModel: String
    frontendInput: String
    frontendLabel: String
    backendType: String
    backendModel: String
    isRequired: Boolean
  }

  extend type Query {
    getAttributes(pageIndex: Int, pageSize: Int): Response
      @cacheControl(maxAge: 30)
    getAttribute(id: ID!): Attribute
  }
`;

export default typeDefs;
