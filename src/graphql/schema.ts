import {
  GraphQLSchema as Schema,
  GraphQLObjectType as ObjectType,
} from 'graphql';

import { getAllListings, getListing } from './queries/listings';
import { getAllUsers, getUser } from './queries/users';
import { getAllBookings, getBooking } from './queries/bookings';
import { getRootCategories, getCategory } from './queries/categories';

import { createUser } from './mutations/users';
import { createCategory } from './mutations/categories';
import login from './mutations/auth/login';

const schema = new Schema({
  query: new ObjectType({
    name: 'Query',
    fields: {
      getAllListings,
      getListing,
      getAllUsers,
      getUser,
      getAllBookings,
      getBooking,
      getRootCategories, 
      getCategory
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