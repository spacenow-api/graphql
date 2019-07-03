import { GraphQLList as List } from 'graphql';

import { CategoryLegacyType } from '../../types';

const getCategoriesLegacy = {
  type: new List(CategoryLegacyType),

  async resolve(_source: any, _args: any, { dataSources }: any) {
    return await dataSources.categoriesAPI.getCategoriesLegacy();
  }
};

export default getCategoriesLegacy;
