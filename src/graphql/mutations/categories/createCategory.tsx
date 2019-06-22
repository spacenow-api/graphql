import {
  GraphQLNonNull as NonNull,
  GraphQLInt as IntType,
  GraphQLString as StringType
} from "graphql";

import { Category } from "../../types";

const createCategory = {
  type: Category,

  args: {
    name: { type: new NonNull(StringType) },  
    parentId: { type: StringType },
    order: { type: new NonNull(IntType) }
  },

  async resolve(_source: any, _args: any, { dataSources }: any) {
    return await dataSources.categoriesAPI.createCategory(_args);
  }
};

export default createCategory;
