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

    const listingDataObj = (id: number) => listingsAPI.getListingDataByListingId(id);
    const locationObj = (id: number) => locationsAPI.getLocationById(id);
    const settingsObj = (id: number) => listingsAPI.getListingSettingsByListingId(id);
    const amenitiesArray = (id: number) => listingsAPI.getListingAmenitiesByListingId(id);
    const rulesArray = (id: number) => listingsAPI.getListingRulesByListingId(id);
    const accessDaysObj = (id: number) => listingsAPI.getListingAccessDaysByListingId(id);

    return Promise.all([
      listingDataObj(args.id),
      locationObj(listingObj.locationId),
      settingsObj(args.id),
      amenitiesArray(args.id),
      rulesArray(args.id),
      accessDaysObj(args.id)]
    ).then((values) => {
      return {
        ...listingObj,
        listingData: values[0],
        location: values[1],
        settingsParent: values[2],
        amenities: values[3],
        rules: values[4],
        accessDays: values[5]
      };
    });
  }
};

export default getListingById;
