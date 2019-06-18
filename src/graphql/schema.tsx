import {
  GraphQLSchema as Schema,
  GraphQLObjectType as ObjectType,
} from 'graphql';

import listing from './queries/listing';

const schema = new Schema({
  query: new ObjectType({
    name: 'Query',
    fields: {
      listing
    }
  })
});

export default schema;
