import { GraphQLList as List } from "graphql";

import { Asset } from "../../types";

const getAllAssets = {
  type: new List(Asset),

  async resolve(_: any, _args: any, { dataSources }: any) {
    return await dataSources.assetsAPI.getAllAssets();
  }
};

export default getAllAssets;
