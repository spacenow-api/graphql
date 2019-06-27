import { GraphQLInt } from 'graphql';

import { Listing } from '../../types';

const getListingById = {
  type: Listing,

  args: {
    id: { type: GraphQLInt }
  },

  async resolve(req: any, args: any, { dataSources }: any) {
    return await dataSources.listingsAPI.getListingById(args.id);
  }
};

export default getListingById;
