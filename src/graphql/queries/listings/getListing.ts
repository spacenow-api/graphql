import { Listing } from '../../types';

const getListing = {

  type: Listing,

  async resolve(_source: any, _args: any, { dataSources }:any ) {
    return await dataSources.listingsAPI.getListing();
  },
};

export default getListing;