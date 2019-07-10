import { GraphQLInt } from 'graphql';

import { AvailabilitiesType } from '../../types/availabilities';

const getAvailabilitiesByListingId = {
  type: AvailabilitiesType,

  args: {
    listingId: { type: GraphQLInt }
  },

  async resolve(_: any, args: any, { dataSources }: any) {
    const { availabilitiesAPI } = dataSources;
    const { availability } = await availabilitiesAPI.getAvailabilitiesByListingId(args.listingId);
    return {
      bookingDates: availability.bookingDates,
      exceptionDates: availability.exceptionDates
    }
  }
};

export default getAvailabilitiesByListingId;
