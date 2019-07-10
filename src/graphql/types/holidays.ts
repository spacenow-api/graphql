import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType
} from 'graphql';

const HolidaysType = new ObjectType({
  name: 'HolidaysType',
  fields: {
    date: { type: StringType },
    description: { type: StringType },
  },
});

export { HolidaysType };
