import { GraphQLInt } from 'graphql';

import { OutputListingType } from '../../types/listing';

const getListingById = {
  type: OutputListingType,

  args: {
    id: { type: GraphQLInt }
  },

  async resolve(_: any, args: any, { dataSources }: any) {
    const api = dataSources.listingsAPI;
    const listingObj = await api.getListingById(args.id);
    const listingDataObj = await api.getListingDataByListingId(args.id);
    return {
      ...listingObj,
      listingData: listingDataObj
    };
  }
};

export default getListingById;
