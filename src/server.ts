import { ApolloServer } from 'apollo-server';

import { typeDefs, resolvers } from './graphql';

import { AssetsAPI, AuthAPI, BookingsAPI, ListingsAPI, UsersAPI, CategoriesAPI, LocationsAPI, AvailabilitiesAPI } from './services';

import * as config from './config';

const gatewayHost = `${config.GATEWAY_HOST}/gateway`;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      assetsAPI: new AssetsAPI(gatewayHost),
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

server.listen().then(({ url }) => {
  console.info(`Server * GraphQL * listening on ${url}`);
});
