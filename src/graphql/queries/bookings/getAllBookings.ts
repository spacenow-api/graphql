import {
  GraphQLList as List
} from 'graphql';

import { Booking } from '../../types';

const getAllBookings = {

  type: new List(Booking),

  async resolve(_source: any, _args: any, { dataSources }:any ) {
    return await dataSources.bookingsAPI.getAllBookings();
  },
};

export default getAllBookings;