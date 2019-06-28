import {
  GraphQLObjectType as ObjectType,
  GraphQLInt as IntType,
  GraphQLString as StringType
} from 'graphql';

const OutputLocationType = new ObjectType({
  name: 'OutputLocationType',
  fields: {
    id: { type: IntType },
    userId: { type: StringType },
    country: { type: StringType },
    address1: { type: StringType },
    address2: { type: StringType },
    buildingName: { type: StringType },
    city: { type: StringType },
    state: { type: StringType },
    zipcode: { type: StringType },
    lat: { type: StringType },
    lng: { type: StringType },
    createdAt: { type: StringType },
    updatedAt: { type: StringType }
  }
});

export { OutputLocationType };
