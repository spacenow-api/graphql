import {
  GraphQLObjectType as ObjectType,
  GraphQLBoolean as BooleanType,
  GraphQLString as StringType
} from 'graphql';

export default new ObjectType({
  name: 'User',
  description: "Represents User",
  fields: {
    id: { type: StringType },
    email: { type: StringType },
    password: { type: StringType },
    emailConfirmed: { type: BooleanType }
  }
});