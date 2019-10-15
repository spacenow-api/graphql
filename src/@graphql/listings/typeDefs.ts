import { gql } from "apollo-server";

const typeDefs = gql`
  enum AttributeType {
    varchar
    integer
    datetime
    text
    decimal
  }

  type ListingCategory {
    id: ID
    categoryId: ID
    listingId: Int
  }

  input ListingCategoryInput {
    categoryId: ID
    listingId: Int
  }

  type ListingAttribute {
    id: ID
    listingId: Int
    attributeId: ID
    value: _Any
  }

  input ListingAttributeInput {
    listingId: Int
    attributeId: ID
    value: _Any
  }

  extend type Query {
    getListingCategories(id: Int!, pageIndex: Int, pageSize: Int): Response
      @cacheControl(maxAge: 30)
    getListingCategory(id: ID!): ListingCategory
    getListingAttributes(id: Int!): [ListingAttribute] @cacheControl(maxAge: 30)
    getListingAttribute(id: ID!): ListingAttribute
  }

  extend type Mutation {
    postListingCategory(data: ListingCategoryInput): ListingCategory
    putListingCategory(id: ID!, data: ListingCategoryInput): ListingCategory
    deleteListingCategory(id: ID!): Response
    postListingAttribute(data: ListingAttributeInput): ListingAttribute
    putListingAttribute(id: ID!, data: ListingAttributeInput): ListingAttribute
    deleteListingAttribute(id: ID!): Response
  }
`;

export default typeDefs;
