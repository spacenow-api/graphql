import { Booking } from '../../types';

const getBooking = {

  type: Booking,

  async resolve(_source: any, _args: any, { dataSources }:any ) {
    return await dataSources.bookingsAPI.getBooking();
  },
};

export default getBooking;