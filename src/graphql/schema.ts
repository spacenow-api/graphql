import {
  GraphQLSchema as Schema,
  GraphQLObjectType as ObjectType
} from "graphql";

import { getAllAssets, getAsset } from "./queries/assets";
import { getListingById } from "./queries/listings";
import { getAllUsers, getUser } from "./queries/users";
import { getAllBookings, getBooking } from "./queries/bookings";
import { getRootCategories, getCategory } from "./queries/categories";

import { createAsset } from "./mutations/assets";
import { createCategory } from "./mutations/categories";
import { createUser } from "./mutations/users";
import login from "./mutations/auth/login";

const schema = new Schema({
  query: new ObjectType({
    name: "Query",
    fields: {
      getAllAssets,
      getAsset,
      getListingById,
      getAllUsers,
      getUser,
      getAllBookings,
      getBooking,
      getRootCategories,
      getCategory
    }
  }),
  mutation: new ObjectType({
    name: "Mutation",
    fields: {
      login,
      createAsset,
      createUser,
      createCategory
    }
  })
});

export default schema;
