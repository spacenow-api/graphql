import { GraphQLString, GraphQLNonNull } from 'graphql';

import { OutputLocationType } from '../../types/location';

const getOrCreateLocation = {
  type: OutputLocationType,

  args: {
    suggestAddress: { type: new GraphQLNonNull(GraphQLString) },
    userId: { type: GraphQLString },
    country: { type: GraphQLString },
    address1: { type: GraphQLString },
    address2: { type: GraphQLString },
    buildingName: { type: GraphQLString },
    city: { type: GraphQLString },
    state: { type: GraphQLString },
    zipcode: { type: GraphQLString },
    lat: { type: GraphQLString },
    lng: { type: GraphQLString }
  },

  async resolve(_: any, args: any, { dataSources }: any) {
    const { locationsAPI } = dataSources;
    return locationsAPI.getOrCreateLocation({
      suggestAddress: args.suggestAddress,
      userId: args.userId,
      country: args.country,
      address1: args.address1,
      address2: args.address2,
      buildingName: args.buildingName,
      city: args.city,
      state: args.state,
      zipcode: args.zipcode,
      lat: args.lat,
      lng: args.lng
    });
  }
};

export default getOrCreateLocation;
