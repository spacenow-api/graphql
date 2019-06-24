import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLInt as IntType
} from 'graphql';

const Auth = new ObjectType({
  name: 'Auth',
  description: "Represents Auth",
  fields: {
    email: { type: StringType },
    password: { type: StringType }
  }
});

const Token = new ObjectType({
  name: 'Token',
  description: "Represents Token",
  fields: {
    token: { type: StringType },
    expiresIn: { type: IntType }
  }
});

export { Auth as default, Token }