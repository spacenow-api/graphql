import {
  GraphQLString as StringType,
  GraphQLNonNull as NonNull
} from "graphql";

import { Asset } from "../../types";

const getAsset = {
  type: Asset,

  args: {
    id: { type: new NonNull(StringType) }
  },

  async resolve(_: any, _args: any, { dataSources }: any) {
    return await dataSources.assetsAPI.getAsset(_args.id);
  }
};

export default getAsset;
