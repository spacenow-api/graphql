import { ApolloServer } from 'apollo-server-express';

import AuthAPI from '../../services/api-authentication';
import BookingsAPI from '../../services/api-bookings';
import ListingsAPI from '../../services/api-listings';
import UsersAPI from '../../services/api-users';
import CategoriesAPI from '../../services/api-categories';
import LocationsAPI from '../../services/api-locations';
import AvailabilitiesAPI from '../../services/api-availabilities';

import schema from '../../graphql/schema';

const GATEWAY_HOST = process.env.GATEWAY_HOST;

export default (): ApolloServer => {
  const gatewayHost = `${GATEWAY_HOST}/gateway`;
  return new ApolloServer({
    schema,
    dataSources: () => {
      return {
        authAPI: new AuthAPI(gatewayHost),
        bookingsAPI: new BookingsAPI(gatewayHost),
        listingsAPI: new ListingsAPI(gatewayHost),
        usersAPI: new UsersAPI(gatewayHost),
        categoriesAPI: new CategoriesAPI(gatewayHost),
        locationsAPI: new LocationsAPI(gatewayHost),
        availabilitiesAPI: new AvailabilitiesAPI(gatewayHost)
      };
    },
    context: ({ req }) => {
      return {
        token: req.headers.authorization
      };
    }
  });
};
