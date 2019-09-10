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
  AvailabilitiesAPI,
  PaymentsAPI,
  WeWorkAPI,
  HubSpotAPI,
  PricesAPI,
  EmailsAPI,
  SearchAPI
} from "./services";

import * as config from "./config";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: config.PLAYGROUND,
  playground: config.PLAYGROUND,
  onHealthCheck: () => Promise.resolve(),
  context: ({ req, res }) => ({ token: req.headers.authorization, res }),
  dataSources: () => {
    return {
      assetsAPI: new AssetsAPI(config.ASSETS_API_HOST),
      authAPI: new AuthAPI(config.USERS_API_HOST),
      bookingsAPI: new BookingsAPI(config.API_BOOKING),
      listingsAPI: new ListingsAPI(config.SPACES_API_HOST),
      usersAPI: new UsersAPI(config.USERS_API_HOST),
      paymentsAPI: new PaymentsAPI(config.PAYMENTS_API_HOST),
      categoriesAPI: new CategoriesAPI(config.CATEGORIES_API_HOST),
      locationsAPI: new LocationsAPI(config.LOCATIONS_API_HOST),
      availabilitiesAPI: new AvailabilitiesAPI(config.API_AVAILABILITIES),
      weWorkAPI: new WeWorkAPI(config.WEWORK_API),
      hubSpotAPI: new HubSpotAPI(config.HUBSPOT_FORMS_API),
      pricesAPI: new PricesAPI(config.API_CAMPAIGNS),
      emailsAPI: new EmailsAPI(config.EMAILS_API),
      searchAPI: new SearchAPI(config.SEARCH_API_HOST)
    };
  }
});

server.listen().then(({ url }) => {
  console.info(`Server * GraphQL * listening on ${url}`);
});
