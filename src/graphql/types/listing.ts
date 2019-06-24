import {
  GraphQLObjectType as ObjectType,
  GraphQLInt as IntType
} from 'graphql';

export default new ObjectType({
  name: 'Listing',
  description: "Represents Listing",
  fields: {
    listingId: { type: IntType }
  }
});