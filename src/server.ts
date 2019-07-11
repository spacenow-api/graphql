import { ApolloServer } from 'apollo-server';

import { typeDefs, resolvers } from './graphql';

import { LocationsAPI } from './services';

import * as config from './config';

const gatewayHost = `${config.GATEWAY_HOST}/gateway`;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      locationsAPI: new LocationsAPI(gatewayHost),
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
