import {
  GraphQLBoolean as BooleanType,
  GraphQLNonNull as NonNull,
  GraphQLString as StringType
} from "graphql";

import { GraphQLUpload as UploadType } from "graphql-upload";

import { Asset } from "../../types";

interface IFileStream {
  createReadStream: any;
  filename: string;
  mimetype: string;
  encoding: string;
}

const createAsset = {
  type: Asset,

  args: {
    // title: { type: StringType },
    // description: { type: StringType },
    folder: { type: StringType },
    file: { type: UploadType }
    // isActive: { type: BooleanType }
  },

  async resolve(_: any, _args: any, { dataSources }: any) {
    return await dataSources.assetsAPI.createAsset(_args);
  }
};

export default createAsset;
