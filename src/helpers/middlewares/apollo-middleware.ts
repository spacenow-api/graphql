import { ApolloServer } from 'apollo-server-express';

import AuthAPI from '../../services/api-authentication';
import BookingsAPI from '../../services/api-bookings';
import ListingsAPI from '../../services/api-listings';
import UsersAPI from '../../services/api-users';
import CategoriesAPI from '../../services/api-categories';

import schema from '../../graphql/schema';

export default (): ApolloServer => {
  return new ApolloServer({
    schema,
    dataSources: () => {
      return {
        authAPI: new AuthAPI(),
        bookingsAPI: new BookingsAPI(),
        listingsAPI: new ListingsAPI(),
        usersAPI: new UsersAPI(),
        categoriesAPI: new CategoriesAPI()
      };
    }
  });
};
