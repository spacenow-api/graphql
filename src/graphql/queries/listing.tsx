import {
  GraphQLList as List
} from 'graphql';


import Listing from '../types/listing';

const listing = {

  type: new List(Listing),

  async resolve(_source: any, _args: any, { dataSources }:any ) {
    return await dataSources.bookingsAPI.getAllBookings()
  },
};

export default listing;
