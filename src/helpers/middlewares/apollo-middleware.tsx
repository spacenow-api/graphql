import { ApolloServer } from 'apollo-server-express';

import BookingsAPI from '../../service/api-booking'
import AuthAPI from '../../service/api-authentication'

import schema from "../../graphql/schema"

export default (): ApolloServer => {

  return new ApolloServer({
    schema,
    dataSources: () => {
      return {
        bookingsAPI: new BookingsAPI(),
        authAPI: new AuthAPI(),
      };
    }
  })
}