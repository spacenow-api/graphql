import { gql } from "apollo-server";

const typeDefs = gql`
  type EAVAttribute {
    id: ID
    entityTypeId: ID
    attributeCode: String
    attributeModel: String
    frontendInput: String
    frontendLabel: String
    backendType: String
    backendModel: String
    isRequired: Boolean
  }

  input EAVAttributeInput {
    entityTypeId: ID
    attributeCode: String
    attributeModel: String
    frontendInput: String
    frontendLabel: String
    backendType: String
    backendModel: String
    isRequired: Boolean
  }

  type EAVEntityAttribute {
    id: ID
    entityId: ID
    attributeId: ID
  }
  input EAVEntityAttributeInput {
    entityId: ID
    attributeId: ID
  }

  extend type Query {
    getEAVAttributes(pageIndex: Int, pageSize: Int): Response
      @cacheControl(maxAge: 30)
    getEAVAttribute(id: ID!): EAVAttribute
    getEAVEntityAttributes(id: ID, pageIndex: Int, pageSize: Int): Response
      @cacheControl(maxAge: 30)
  }
`;

export default typeDefs;
