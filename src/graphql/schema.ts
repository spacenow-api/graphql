import {
  GraphQLSchema as Schema,
  GraphQLObjectType as ObjectType
} from 'graphql';

import { getListingById } from './queries/listings';
import { getAllUsers, getUser } from './queries/users';
import { getAllBookings, getBooking } from './queries/bookings';
import {
  getRootCategories,
  getCategory,
  getCategoriesLegacy
} from './queries/categories';

import { createUser } from './mutations/users';
import { createCategory } from './mutations/categories';
import login from './mutations/auth/login';

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
      getCategoriesLegacy
    }
  }),
  mutation: new ObjectType({
    name: 'Mutation',
    fields: {
      login,
      createUser,
      createCategory
    }
  })
});

export default schema;
