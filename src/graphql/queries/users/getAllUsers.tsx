import {
  GraphQLList as List
} from 'graphql';

import { User } from '../../types';

const getAllUsers = {

  type: new List(User),

  async resolve(_source: any, _args: any, { dataSources }:any ) {
    return await dataSources.usersAPI.getAllUsers();
  },
};

export default getAllUsers;