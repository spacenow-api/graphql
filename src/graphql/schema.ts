// import {
//   GraphQLSchema as Schema,
//   GraphQLObjectType as ObjectType
// } from "graphql";

// import login from "./mutations/auth/login";
// import { getAllAssets, getAsset } from "./queries/assets";
// import { getAllBookings, getBooking } from "./queries/bookings";
// import { getAllHolidays } from "./queries/holidays";
// import { getAllUsers, getUser } from "./queries/users";
// import { createAsset } from "./mutations/assets";
// import { createUser } from "./mutations/users";
// import { getListingById } from "./queries/listings";
// import { createCategory } from "./mutations/categories";
// import { createOrUpdateListing } from "./mutations/listings";

// import {
//   getRootCategories,
//   getCategory,
//   getCategoriesLegacy
// } from "./queries/categories";

// import { getLocationById } from "./queries/locations";
// import { getAvailabilitiesByListingId } from "./queries/availabilities";
// import { getOrCreateLocation } from "./mutations/locations";

// const schema = new Schema({
//   query: new ObjectType({
//     name: "Query",
//     fields: {
//       getAllAssets,
//       getAsset,
//       getListingById,
//       getAllUsers,
//       getUser,
//       getAllBookings,
//       getBooking,
//       getRootCategories,
//       getCategory,
//       getCategoriesLegacy,
//       getLocationById,
//       getAvailabilitiesByListingId,
//       getAllHolidays
//     }
//   }),
//   mutation: new ObjectType({
//     name: "Mutation",
//     fields: {
//       login,
//       createAsset,
//       createUser,
//       createCategory,
//       getOrCreateLocation,
//       createOrUpdateListing
//     }
//   })
// });

// export default schema;
