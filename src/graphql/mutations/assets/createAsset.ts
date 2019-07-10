import {
  GraphQLBoolean as BooleanType,
  GraphQLNonNull as NonNull,
  GraphQLString as StringType
} from "graphql";

import { GraphQLUpload as UploadType } from "graphql-upload";

import { Asset } from "../../types";

const createAsset = {
  type: Asset,

  args: {
    // title: { type: StringType },
    // description: { type: StringType },
    // accessControl: { type: StringType },
    file: { type: UploadType }
    // isActive: { type: BooleanType }
  },

  async resolve(_: any, _args: any, { dataSources }: any) {
    return await dataSources.assetsAPI.createAsset(_args);
  }
};

export default createAsset;
