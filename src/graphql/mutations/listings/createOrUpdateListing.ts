import {
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLBoolean,
  GraphQLList,
  GraphQLNonNull
} from 'graphql';

import { UserInputError } from 'apollo-server';

import {
  IDraftRequest,
  IUpdateRequest,
  IListingResponse
} from './../../../interfaces/listing.interface';

import { InputListingAccessDaysType } from './../../types/listing';
import { SuccessOutput } from './../../types/mutation';

const createOrUpdateListing = {
  type: SuccessOutput,

  args: {
    // Draft arguments...
    userId: { type: new GraphQLNonNull(GraphQLString) },
    locationId: { type: new GraphQLNonNull(GraphQLInt) },
    listSettingsParentId: { type: new GraphQLNonNull(GraphQLInt) },
    bookingPeriod: { type: GraphQLString },
    title: { type: GraphQLString },
    coverPhotoId: { type: GraphQLInt },
    quantity: { type: GraphQLInt },
    // Update arguments...
    listingId: { type: GraphQLInt },
    accessType: { type: GraphQLString },
    bookingNoticeTime: { type: GraphQLString },
    minTerm: { type: GraphQLFloat },
    maxTerm: { type: GraphQLFloat },
    description: { type: GraphQLString },
    basePrice: { type: GraphQLFloat },
    currency: { type: GraphQLString },
    isAbsorvedFee: { type: GraphQLBoolean },
    capacity: { type: GraphQLInt },
    size: { type: GraphQLInt },
    meetingRooms: { type: GraphQLInt },
    isFurnished: { type: GraphQLBoolean },
    carSpace: { type: GraphQLInt },
    sizeOfVehicle: { type: GraphQLString },
    maxEntranceHeight: { type: GraphQLString },
    spaceType: { type: GraphQLString },
    bookingType: { type: GraphQLString },
    listingAmenities: { type: new GraphQLList(GraphQLInt) },
    listingAccessDays: { type: InputListingAccessDaysType },
    listingExceptionDates: { type: new GraphQLList(GraphQLString) },
    listingRules: { type: new GraphQLList(GraphQLInt) }
  },

  async resolve(_: any, args: any, { dataSources }: any) {
    const { listingsAPI } = dataSources;
    let listingObj: IListingResponse;
    if (args.listingId) {
      // Update an existent Listing;
      const listingExists = await listingsAPI.getListingById(args.listingId);
      if (!listingExists) {
        throw new UserInputError(`Listing ${args.listingId} not found.`);
      }
      const requestUpdateObj: IUpdateRequest = {
        listingId: args.listingId,
        title: args.title,
        accessType: args.accessType,
        bookingNoticeTime: args.bookingNoticeTime,
        minTerm: args.minTerm,
        maxTerm: args.maxTerm,
        description: args.description,
        basePrice: args.basePrice,
        currency: args.currency,
        isAbsorvedFee: args.isAbsorvedFee,
        capacity: args.capacity,
        size: args.size,
        meetingRooms: args.meetingRooms,
        isFurnished: args.isFurnished,
        carSpace: args.carSpace,
        sizeOfVehicle: args.sizeOfVehicle,
        maxEntranceHeight: args.maxEntranceHeight,
        spaceType: args.spaceType,
        bookingType: args.bookingType,
        listingAmenities: args.listingAmenities,
        listingAccessDays: args.listingAccessDays,
        listingExceptionDates: args.listingExceptionDates,
        listingRules: args.listingRules
      };
      listingObj = await listingsAPI.update(requestUpdateObj);
    } else {
      // Considering a new listing from scratch;
      const requestDraftObj: IDraftRequest = {
        userId: args.userId,
        locationId: args.locationId,
        listSettingsParentId: args.listSettingsParentId,
        bookingPeriod: args.bookingPeriod,
        title: args.title,
        coverPhotoId: args.coverPhotoId,
        quantity: args.quantity
      };
      listingObj = await listingsAPI.createDraft(requestDraftObj);
    }
    return {
      status: `Listing ${listingObj.id} Created/Updated with success!`
    };
  }
};

export default createOrUpdateListing;
