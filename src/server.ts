import { ApolloServer } from "apollo-server";

import { typeDefs, resolvers } from "./graphql";

import { LocationsAPI, AssetsAPI } from "./services";

import * as config from "./config";

const gatewayHost = `${config.GATEWAY_HOST}/gateway`;
const assetHost = `${config.ASSETS_HOST}`;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      locationsAPI: new LocationsAPI(gatewayHost),
      assetsAPI: new AssetsAPI(assetHost)
    };
  },
  context: ({ req }) => {
    return {
      token: req.headers.authorization
    };
  },
  onHealthCheck: () => {
    return new Promise((resolve, reject) => {
      // Replace the `true` in this conditional with more specific checks!
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
  console.info(
    `Try your health check at: ${url}.well-known/apollo/server-health`
  );
});
