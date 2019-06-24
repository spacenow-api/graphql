import {
  GraphQLBoolean as BooleanType,
  GraphQLNonNull as NonNull,
  GraphQLString as StringType
} from "graphql";

import { User } from "../../types";

const login = {
  type: User,

  args: {
    email: { type: new NonNull(StringType) },
    password: { type: new NonNull(StringType) },
    isEmailConfirmed: { type: new NonNull(BooleanType) }
  },

  async resolve(_source: any, _args: any, { dataSources }: any) {
    return await dataSources.usersAPI.createUser(_args);
  }
};

export default login;
