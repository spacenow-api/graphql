import { GraphQLInt } from 'graphql';

import { OutputListingType } from '../../types/listing';

const getListingById = {
  type: OutputListingType,

  args: {
    id: { type: GraphQLInt }
  },

  async resolve(_: any, args: any, { dataSources }: any) {
    const { listingsAPI, locationsAPI } = dataSources;
    const listingObj = await listingsAPI.getListingById(args.id);
    const listingDataObj = await listingsAPI.getListingDataByListingId(args.id);
    const settingsObj = await listingsAPI.getListingSettingsByListingId(args.id);
    const locationObj = await locationsAPI.getLocationById(listingObj.locationId);
    return {
      ...listingObj,
      listingData: listingDataObj,
      location: locationObj,
      listSettingsParent: settingsObj
    };
  }
};

export default getListingById;
