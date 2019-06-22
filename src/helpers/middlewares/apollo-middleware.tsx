import { ApolloServer } from 'apollo-server-express';

import AuthAPI from '../../service/api-authentication'
import BookingsAPI from '../../service/api-bookings'
import ListingsAPI from '../../service/api-listings'
import UsersAPI from '../../service/api-users'
import CategoriesAPI from '../../service/api-categories'

import schema from "../../graphql/schema"

export default (): ApolloServer => {

  return new ApolloServer({
    schema,
    dataSources: () => {
      return {
        authAPI: new AuthAPI(),
        bookingsAPI: new BookingsAPI(),
        listingsAPI: new ListingsAPI(),
        usersAPI: new UsersAPI(),
        categoriesAPI: new CategoriesAPI(),
      };
    }
  })
}