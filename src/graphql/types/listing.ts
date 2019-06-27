import {
  GraphQLObjectType as ObjectType,
  GraphQLInt as IntType,
  GraphQLString as StringType,
  GraphQLBoolean as BooleanType,
  GraphQLFloat as FloatType,
  GraphQLList as List
} from 'graphql';

const OutputListingDataByListingIdType = new ObjectType({
  name: 'OutputListingDataByListingIdType',
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

const OutputListingByIdType = new ObjectType({
  name: 'OutputListingByIdType',
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
    listingData: { type: OutputListingDataByListingIdType }
  }
});

export { OutputListingByIdType };
