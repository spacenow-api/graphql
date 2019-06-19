import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
} from 'graphql';

export default new ObjectType({
  name: 'User',
  description: "Represents User",
  fields: {
    id: { type: StringType },
    name: { type: StringType },
    email: { type: StringType },
    password: { type: StringType }
  }
});