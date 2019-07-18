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

const gatewayHost = `${config.GATEWAY_HOST}/gateway`;
const assetHost = `${config.ASSETS_HOST}`;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      assetsAPI: new AssetsAPI(assetHost),
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
  },
  onHealthCheck: () => {
    return new Promise((resolve, reject) => {
      if (true) {
        resolve();
      } else {
        reject();
      }
    });
  }
});

server.listen().then(({ url }) => {
  console.info(`Server * GraphQL * listening on ${url}`);
});
