import {
  GraphQLObjectType as ObjectType,
  GraphQLInt as IntType,
  GraphQLString as StringType,
  GraphQLBoolean as BooleanType,
  GraphQLFloat as FloatType,
  GraphQLList as List
} from 'graphql';

import { OutputLocationType } from './location';

const ListSettingsType = new ObjectType({
  name: 'ListSettingsType',
  fields: {
    id: { type: IntType },
    typeId: { type: IntType },
    itemName: { type: StringType },
    otherItemName: { type: StringType },
    description: { type: StringType },
    maximum: { type: StringType },
    minimum: { type: StringType },
    startValue: { type: StringType },
    endValue: { type: StringType },
    step: { type: StringType },
    isEnable: { type: StringType },
    photo: { type: StringType },
    photoType: { type: StringType },
    isSpecification: { type: BooleanType },
    createdAt: { type: StringType },
    updatedAt: { type: StringType },
    specData: { type: StringType }
  }
});

const ListSettingsParentType = new ObjectType({
  name: 'ListSettingsParentType',
  fields: {
    id: { type: IntType },
    category: { type: ListSettingsType },
    subcategory: { type: ListSettingsType }
  }
});

const ListingDataType = new ObjectType({
  name: 'ListingDataType',
  fields: {
    listingId: { type: IntType },
    accessType: { type: StringType },
    bookingNoticeTime: { type: StringType },
    minTerm: { type: FloatType },
    maxTerm: { type: FloatType },
    description: { type: StringType },
    basePrice: { type: FloatType },
    currency: { type: StringType },
    isAbsorvedFee: { type: BooleanType },
    capacity: { type: IntType },
    size: { type: IntType },
    meetingRooms: { type: IntType },
    isFurnished: { type: BooleanType },
    carSpace: { type: IntType },
    sizeOfVehicle: { type: StringType },
    maxEntranceHeight: { type: StringType },
    bookingType: { type: StringType },
    spaceType: { type: StringType },
    listingAmenities: { type: new List(IntType) },
    listingExceptionDates: { type: new List(StringType) },
    listingRules: { type: new List(IntType) },
    status: { type: StringType }
  }
});

const OutputListingType = new ObjectType({
  name: 'OutputListingType',
  fields: {
    id: { type: IntType },
    userId: { type: StringType },
    title: { type: StringType },
    coverPhotoId: { type: IntType },
    bookingPeriod: { type: StringType },
    isPublished: { type: BooleanType },
    isReady: { type: BooleanType },
    quantity: { type: IntType },
    status: { type: StringType },
    updatedAt: { type: StringType },
    createdAt: { type: StringType },
    count: { type: IntType },
    listingData: { type: ListingDataType },
    location: { type: OutputLocationType },
    listSettingsParent: { type: ListSettingsParentType }
  }
});

export { OutputListingType };
