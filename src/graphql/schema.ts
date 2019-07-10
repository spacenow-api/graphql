import {
  GraphQLSchema as Schema,
  GraphQLObjectType as ObjectType
} from 'graphql';

import { getLocationById } from './queries/locations';
import { getListingById } from './queries/listings';
import { getAllUsers, getUser } from './queries/users';
import { getAllBookings, getBooking } from './queries/bookings';
import { getAvailabilitiesByListingId } from './queries/availabilities';
import { getAllHolidays } from './queries/holidays';

import {
  getRootCategories,
  getCategory,
  getCategoriesLegacy
} from './queries/categories';

import { createUser } from './mutations/users';
import { createCategory } from './mutations/categories';
import login from './mutations/auth/login';
import { getOrCreateLocation } from './mutations/locations';
import { createOrUpdateListing } from './mutations/listings';

const schema = new Schema({
  query: new ObjectType({
    name: 'Query',
    fields: {
      getListingById,
      getAllUsers,
      getUser,
      getAllBookings,
      getBooking,
      getRootCategories,
      getCategory,
      getCategoriesLegacy,
      getLocationById,
      getAvailabilitiesByListingId,
      getAllHolidays
    }
  }),
  mutation: new ObjectType({
    name: 'Mutation',
    fields: {
      login,
      createUser,
      createCategory,
      getOrCreateLocation,
      createOrUpdateListing
    }
  })
});

export default schema;
