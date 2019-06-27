import {
  GraphQLObjectType as ObjectType,
  GraphQLInt as IntType
} from 'graphql';

export default new ObjectType({
  name: 'Listing',
  description: 'Represents Listings (Spaces)',
  fields: {
    id: { type: IntType }
  }
});
