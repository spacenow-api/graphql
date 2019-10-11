import { gql } from "apollo-server";

const typeDefs = gql`
  type Category {
    id: ID
    name: String
    slug: String
    parentId: ID
    order: Int
    children: [Category]
  }

  input CategoryInput {
    name: String
    parentId: String
    order: Int
  }

  type CategoryAttribute {
    id: ID
    categoryId: ID
    attributeId: ID
  }
  input CategoryAttributeInput {
    categoryId: ID
    attributeId: ID
  }

  extend type Query {
    getCategories(pageIndex: Int, pageSize: Int): Response
      @cacheControl(maxAge: 30)
    getRootCategories: Response
    getCategory(id: ID!): Category
    getCategoryAttributes(id: ID, pageIndex: Int, pageSize: Int): Response
      @cacheControl(maxAge: 30)
  }

  extend type Mutation {
    postCategory(category: CategoryInput): Category
    putCategory(id: ID!, category: CategoryInput): Category
  }
`;

export default typeDefs;
