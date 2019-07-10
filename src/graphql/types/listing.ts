import {
  GraphQLInputObjectType as InputObjectType,
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

const OutputListingRulesType = new ObjectType({
  name: 'OutputListingRulesType',
  fields: {
    id: { type: IntType },
    listingId: { type: IntType },
    listSettingsId: { type: IntType },
    createdAt: { type: StringType },
    updatedAt: { type: StringType },
    settingsData: { type: ListSettingsType },
  }
});

const OutputListingAmenitiesType = new ObjectType({
  name: 'OutputListingAmenitiesType',
  fields: {
    id: { type: IntType },
    listingId: { type: IntType },
    listSettingsId: { type: IntType },
    amount: { type: IntType },
    quantity: { type: IntType },
    currency: { type: StringType },
    settings: { type: StringType },
    type: { type: StringType },
    createdAt: { type: StringType },
    updatedAt: { type: StringType },
    settingsData: { type: ListSettingsType },
  }
});

const OutputListSettingsParentType = new ObjectType({
  name: 'OutputListSettingsParentType',
  fields: {
    id: { type: IntType },
    category: { type: ListSettingsType },
    subcategory: { type: ListSettingsType }
  }
});

const OutputListingAccessHoursType = new ObjectType({
  name: 'OutputListingAccessHoursType',
  description: 'Represents listing opening hours',
  fields: {
    id: { type: IntType },
    listingAccessDaysId: { type: IntType },
    weekday: { type: IntType },
    openHour: { type: StringType },
    closeHour: { type: StringType },
    allday: { type: BooleanType },
    createdAt: { type: StringType },
    updatedAt: { type: StringType },
  }
});

const InputListingAccessHoursType = new InputObjectType({
  name: 'InputListingAccessHoursType',
  description: 'Represents listing opening hours',
  fields: {
    weekday: { type: IntType },
    openHour: { type: StringType },
    closeHour: { type: StringType },
    allday: { type: BooleanType },
  }
});

const OutputListingAccessDaysType = new ObjectType({
  name: 'OutputListingAccessDaysType',
  fields: {
    id: { type: IntType },
    listingId: { type: IntType },
    mon: { type: BooleanType },
    tue: { type: BooleanType },
    wed: { type: BooleanType },
    thu: { type: BooleanType },
    fri: { type: BooleanType },
    sat: { type: BooleanType },
    sun: { type: BooleanType },
    all247: { type: BooleanType },
    createdAt: { type: StringType },
    updatedAt: { type: StringType },
    listingAccessHours: {
      type: new List(OutputListingAccessHoursType)
    }
  }
});

const InputListingAccessDaysType = new InputObjectType({
  name: 'InputListingAccessDaysType',
  fields: {
    listingId: { type: IntType },
    mon: { type: BooleanType },
    tue: { type: BooleanType },
    wed: { type: BooleanType },
    thu: { type: BooleanType },
    fri: { type: BooleanType },
    sat: { type: BooleanType },
    sun: { type: BooleanType },
    all247: { type: BooleanType },
    listingAccessHours: {
      type: new List(InputListingAccessHoursType)
    }
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
    listingAccessDays: { type: OutputListingAccessDaysType },
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
    createdAt: { type: StringType },
    updatedAt: { type: StringType },
    count: { type: IntType },
    listingData: { type: ListingDataType },
    location: { type: OutputLocationType },
    amenities: { type: new List(OutputListingAmenitiesType) },
    rules: { type: new List(OutputListingRulesType) },
    accessDays: { type: OutputListingAccessDaysType },
    settingsParent: { type: OutputListSettingsParentType }
  }
});

export { OutputListingType, InputListingAccessDaysType };
