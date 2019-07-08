import { GraphQLString, GraphQLInt, GraphQLNonNull } from 'graphql';

import {
  IDraftRequest,
  IListingResponse
} from './../../../interfaces/listing.interface';

import { SuccessOutput } from './../../types/mutation';

const createOrUpdateListing = {
  type: SuccessOutput,

  args: {
    userId: { type: new GraphQLNonNull(GraphQLString) },
    locationId: { type: new GraphQLNonNull(GraphQLInt) },
    listSettingsParentId: { type: new GraphQLNonNull(GraphQLInt) },
    bookingPeriod: { type: GraphQLString },
    title: { type: GraphQLString },
    coverPhotoId: { type: GraphQLInt },
    quantity: { type: GraphQLInt }
  },

  async resolve(_: any, args: any, { dataSources }: any) {
    const { listingsAPI } = dataSources;
    const requestDraftObj: IDraftRequest = {
      userId: args.userId,
      locationId: args.locationId,
      listSettingsParentId: args.listSettingsParentId,
      bookingPeriod: args.bookingPeriod,
      title: args.title,
      coverPhotoId: args.coverPhotoId,
      quantity: args.quantity
    };
    const listingObj: IListingResponse = await listingsAPI.createDraft(
      requestDraftObj
    );
    return {
      status: `Listing ${listingObj.id} Created/Updated with success!`
    };
  }
};

export default createOrUpdateListing;
