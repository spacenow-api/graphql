import { ApolloServer } from "apollo-server";

import { typeDefs, resolvers } from "./graphql";

import {
  AssetsAPI,
  AuthAPI,
  BookingsAPI,
  ListingsAPI,
  UsersAPI,
  CategoriesAPI,
  LocationsAPI,
  AvailabilitiesAPI
} from "./services";

import * as config from "./config";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: config.PLAYGROUND,
  playground: config.PLAYGROUND,
  onHealthCheck: () => Promise.resolve(),
  context: ({ req }) => ({ token: req.headers.authorization }),
  dataSources: () => {
    return {
      assetsAPI: new AssetsAPI(config.ASSETS_API_HOST),
      authAPI: new AuthAPI(config.USERS_AUTHENTICATION_API_HOST),
      bookingsAPI: new BookingsAPI(config.BOOKINGS_API_HOST),
      listingsAPI: new ListingsAPI(config.SPACES_API_HOST),
      usersAPI: new UsersAPI(config.USERS_AUTHENTICATION_API_HOST),
      categoriesAPI: new CategoriesAPI(config.CATEGORIES_API_HOST),
      locationsAPI: new LocationsAPI(config.LOCATIONS_API_HOST),
      availabilitiesAPI: new AvailabilitiesAPI(config.AVAILABILITIES_API_HOST)
    };
  }
});

server.listen().then(({ url }) => {
  console.info(`Server * GraphQL * listening on ${url}`);
});
