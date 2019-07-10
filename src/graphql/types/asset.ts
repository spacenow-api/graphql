import {
  GraphQLObjectType as ObjectType,
  GraphQLBoolean as BooleanType,
  GraphQLString as StringType,
  GraphQLList as List,
  GraphQLNonNull as NonNull
} from "graphql";

import { GraphQLUpload as UploadType } from "graphql-upload";

const AssetSize = new ObjectType({
  name: "AssetSize",
  description: "Represents Asset Size",
  fields: {
    xs: { type: StringType },
    sm: { type: StringType },
    md: { type: StringType },
    lg: { type: StringType },
    original: { type: StringType }
  }
});

const Asset = new ObjectType({
  name: "Asset",
  description: "Represents Asset",
  fields: {
    id: { type: StringType },
    title: { type: StringType },
    description: { type: StringType },
    fileType: { type: StringType },
    fileName: { type: StringType },
    sizes: { type: AssetSize },
    accessControl: { type: StringType },
    isActive: { type: BooleanType },
    createdAt: { type: StringType },
    updatedAt: { type: StringType }
  }
});

export { Asset as default };
