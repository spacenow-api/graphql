import { GraphQLObjectType, GraphQLString } from 'graphql';

const SuccessOutput = new GraphQLObjectType({
  name: 'SuccessOutput',
  fields: {
    status: { type: GraphQLString }
  }
});

export { SuccessOutput };
