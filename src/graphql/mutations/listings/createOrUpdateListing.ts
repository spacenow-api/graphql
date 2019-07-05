import { GraphQLString, GraphQLInt } from 'graphql';

import { SuccessOutput } from './../../types/mutation';

const createOrUpdateListing = {
  type: SuccessOutput,

  args: {
    id: { type: GraphQLInt }
  },

  async resolve(_: any, args: any, { dataSources }: any) {
    const { listingsAPI, locationsAPI } = dataSources;
    // const listingObj = await listingsAPI.getListingById(args.id);
    return {
      status: 'Listing Created/Updated with success!'
    };
  }
};

export default createOrUpdateListing;
