import {
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

import { User } from '../../types';

const getUser = {

  type: User,

  args: {
    id: { type: new NonNull(StringType) },
  },

  async resolve(_source: any, _args: any, { dataSources }:any ) {
    return await dataSources.usersAPI.getUser(_args.id)
  },
};

export default getUser;