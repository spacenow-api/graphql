import { ApolloServer, gql } from 'apollo-server-express';
import { GraphQLSchema } from 'graphql';

import BookingsAPI from '../../graphql/API/api-booking'
import schema from "../../graphql/schema"

export default (): ApolloServer => {

  return new ApolloServer({
    schema,
    dataSources: () => {
      return {
        bookingsAPI: new BookingsAPI(),
      };
    }
  })
}