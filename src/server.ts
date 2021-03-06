import express from "express";
import compression from "compression";
import { ApolloServer } from "apollo-server-express";

import { typeDefs, resolvers } from "./@graphql";
import {
  CurrencyDirective,
  FormattableDateDirective
} from "./@graphql/directives";

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
  SearchAPI,
  MessagesAPI,
  TwilioAPI,
  NotificationAPI,
  V2ListingsAPI
} from "./services";

import * as config from "./config";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  schemaDirectives: {
    currency: CurrencyDirective,
    date: FormattableDateDirective
  },
  introspection: config.PLAYGROUND,
  playground: config.PLAYGROUND,
  context: ({ req, res }) => ({ token: req.headers.authorization, res }),
  dataSources: () => {
    return {
      assetsAPI: new AssetsAPI(config.SPACES_API_HOST),
      authAPI: new AuthAPI(config.USERS_API_HOST),
      bookingsAPI: new BookingsAPI(config.API_BOOKING),
      listingsAPI: new ListingsAPI(config.SPACES_API_HOST),
      usersAPI: new UsersAPI(config.USERS_API_HOST),
      paymentsAPI: new PaymentsAPI(config.PAYMENTS_API_HOST),
      categoriesAPI: new CategoriesAPI(config.SPACES_API_HOST),
      locationsAPI: new LocationsAPI(config.SPACES_API_HOST),
      availabilitiesAPI: new AvailabilitiesAPI(config.API_AVAILABILITIES),
      weWorkAPI: new WeWorkAPI(config.WEWORK_API),
      hubSpotAPI: new HubSpotAPI(config.HUBSPOT_FORMS_API),
      pricesAPI: new PricesAPI(config.API_CAMPAIGNS),
      emailsAPI: new EmailsAPI(config.EMAILS_API),
      searchAPI: new SearchAPI(config.SEARCH_API_HOST),
      messagesAPI: new MessagesAPI(config.MESSAGES_API),
      twilioAPI: new TwilioAPI(),
      notificationAPI: new NotificationAPI(config.NOTIFICATION_API),
      v2ListingAPI: new V2ListingsAPI(config.SPACES_API_HOST)
    };
  }
});

const app = express();
app.use(compression());
server.applyMiddleware({ app, path: "/" });

app.listen({ port: config.PORT }, () => {
  console.info(`Server * GraphQL * Running`);
});
