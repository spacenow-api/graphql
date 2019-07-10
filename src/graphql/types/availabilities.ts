import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLList as List
} from 'graphql';

const AvailabilitiesType = new ObjectType({
  name: 'AvailabilitiesType',
  fields: {
    bookingDates: { type: new List(StringType) },
    exceptionDates: { type: new List(StringType) }
  }
});

export { AvailabilitiesType };
