import {
  GraphQLList as List
} from 'graphql';

import { Listing } from '../../types';

const getAllListings = {

  type: new List(Listing),

  async resolve(_source: any, _args: any, { dataSources }:any ) {
    return await dataSources.listingsAPI.getAllListings();
  },
};

export default getAllListings;
