import {
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

import { Token } from '../../types';

const login = {

  type: Token,

  args: {
    email: { type: new NonNull(StringType) },
    password: { type: new NonNull(StringType) },
  },

  async resolve(_source: any, _args: any, { dataSources }:any ) {
    return await dataSources.authAPI.login(_args)
  },

};

export default login;
