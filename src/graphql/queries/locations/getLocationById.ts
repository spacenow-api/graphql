import { GraphQLInt } from 'graphql';

import { OutputLocationType } from '../../types/location';

const getLocationById = {
  type: OutputLocationType,

  args: {
    id: { type: GraphQLInt }
  },

  async resolve(_: any, args: any, { dataSources }: any) {
    const { locationsAPI } = dataSources;
    return locationsAPI.getLocationById(args.id);
  }
};

export default getLocationById;
