import {
  GraphQLObjectType as ObjectType,
  GraphQLBoolean as BooleanType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull
} from 'graphql';

export default new ObjectType({
  name: 'User',
  description: "Represents User",
  fields: {
    id: { type: new NonNull(StringType) },
    email: { type: new NonNull(StringType) },
    password: { type: new NonNull(StringType) },
    isEmailConfirmed: { type: new NonNull(BooleanType) }
  }
});