import { gql } from "apollo-server";

const typeDefs = gql`
  type ListingCategory {
    id: ID
    categoryId: ID
    listingId: ID
  }

  input ListingCategoryInput {
    categoryId: ID
    listingId: ID
  }

  extend type Query {
    getListingCategories(id: Int!, pageIndex: Int, pageSize: Int): Response
      @cacheControl(maxAge: 30)
    getListingCategory(id: ID!): ListingCategory
  }

  extend type Mutation {
    postListingCategory(data: ListingCategoryInput): ListingCategory
    putListingCategory(id: ID!, data: ListingCategoryInput): ListingCategory
    deleteListingCategory(id: ID!): Response
  }
`;

export default typeDefs;
