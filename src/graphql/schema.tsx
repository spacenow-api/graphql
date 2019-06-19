import {
  GraphQLSchema as Schema,
  GraphQLObjectType as ObjectType,
} from 'graphql';

// Queries
import listing from './queries/listing';

// Mutation
import login from './mutations/auth/login';

const schema = new Schema({
  query: new ObjectType({
    name: 'Query',
    fields: {
      listing
    }
  }),
  mutation: new ObjectType({
    name: 'Mutation',
    fields: {
      login
    }
  })
});

export default schema;
