import { GraphQLInt } from 'graphql';

import { OutputListingByIdType } from '../../types/listing';

const getListingById = {
  type: OutputListingByIdType,

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
