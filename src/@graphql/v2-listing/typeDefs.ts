import { gql } from "apollo-server-express";

const typeDefs = gql`
  type V2Step {
    id: Int
    listingId: Int
    step1: String
    step2: String
    step3: String
    step4: String
    step5: String
    step6: String
    step7: String
    step8: String
    completed: Float
    createdAt: Date @date
    updatedAt: Date @date
  }

  type V2Listing {
    id: Int
    userId: String
    locationId: Int
    listSettingsParentId: Int
    bookingPeriod: String
    title: String
    bookingType: String
    isPublished: Boolean
    isReady: Boolean
    status: String
    listingData: V2Data
    location: V2Location
    accessDays: V2AccessDays
    photos: [V2Photos]
    rules: [V2Rule]
    amenities: [V2Amenity]
    features: [V2Feature]
    createdAt: Date @date
    updatedAt: Date @date
  }

  type V2Data {
    id: Int
    listingId: Int
    accessType: String
    bookingNoticeTime: String
    minTerm: Float
    maxTerm: Float
    description: String
    basePrice: Float
    currency: String
    isAbsorvedFee: Boolean
    capacity: Int
    size: Float
    meetingRooms: Int
    isFurnished: Boolean
    carSpace: Int
    sizeOfVehicle: String
    maxEntranceHeight: String
    bookingType: String
    spaceType: String
    status: String
    link: String
    listingType: String
    direction: String
    alcoholLicence: String
    wifiNetwork: String
    wifiUsername: String
    wifiPassword: String
    wifiPasswordDecrypt: String
    createdAt: Date @date
    updatedAt: Date @date
  }

  type V2Location {
    id: Int
    userId: String
    country: String
    address1: String
    address2: String
    buildingName: String
    city: String
    state: String
    zipcode: String
    lat: String
    lng: String
    placeId: String
    createdAt: Date @date
    updatedAt: Date @date
  }

  type V2Photos {
    id: Int
    listingId: Int
    name: String
    isCover: Boolean
    createdAt: Date @date
    updatedAt: Date @date
  }

  type V2AccessDays {
    id: Int
    listingId: Int
    mon: Boolean
    tue: Boolean
    wed: Boolean
    thu: Boolean
    fri: Boolean
    sat: Boolean
    sun: Boolean
    all247: Boolean
    accessHours: [V2AccessHours]
    createdAt: Date @date
    updatedAt: Date @date
  }

  type V2AccessHours {
    id: Int
    listingAccessDaysId: Int
    weekday: Int
    openHour: String
    closeHour: String
    allday: Boolean
    createdAt: Date @date
    updatedAt: Date @date
  }

  type V2Rule {
    id: String
    name: String
    order: Int
    isActive: Boolean
    createdAt: Date @date
    updatedAt: Date @date
  }

  type V2Amenity {
    id: String
    name: String
    order: Int
    isActive: Boolean
    createdAt: Date @date
    updatedAt: Date @date
  }

  type V2Feature {
    id: String
    name: String
    order: Int
    isActive: Boolean
    createdAt: Date @date
    updatedAt: Date @date
  }

  type V2Category {
    id: String
    name: String
    slug: String
    order: Int
    parentId: String
    isActive: Boolean
    children: [V2Category]
    createdAt: Date @date
    updatedAt: Date @date
  }

  input V2InputListing {
    id: Int
    userId: String
    locationId: Int
    listSettingsParentId: Int
    bookingPeriod: String
    title: String
    bookingType: String
    isPublished: Boolean
    isReady: Boolean
    status: String
    location: V2InputLocation
    listingData: V2InputListingData
    photos: [V2InputPhotos]
    accessDays: V2InputAccessDays
    amenities: [V2InputAmenity]
    rules: [V2InputRule]
    features: [V2InputFeature]
    category: [V2InputCategory]
  }

  input V2InputListingData {
    id: Int
    listingId: Int
    accessType: String
    bookingNoticeTime: String
    minTerm: Float
    maxTerm: Float
    description: String
    basePrice: Float
    currency: String
    isAbsorvedFee: Boolean
    capacity: Int
    size: Float
    meetingRooms: Int
    isFurnished: Boolean
    carSpace: Int
    sizeOfVehicle: String
    maxEntranceHeight: String
    bookingType: String
    spaceType: String
    status: String
    link: String
    listingType: String
    direction: String
    alcoholLicence: String
    wifiNetwork: String
    wifiUsername: String
    wifiPassword: String
  }

  input V2InputLocation {
    address: String
    unit: String
    placeId: String
  }

  input V2InputPhotos {
    id: Int
    listingId: Int
    name: String
    isCover: Boolean
  }

  input V2InputAccessDays {
    id: Int
    listingId: Int
    mon: Boolean
    tue: Boolean
    wed: Boolean
    thu: Boolean
    fri: Boolean
    sat: Boolean
    sun: Boolean
    all247: Boolean
    accessHours: [V2InputAccessHours]
  }

  input V2InputAccessHours {
    id: Int
    listingAccessDaysId: Int
    weekday: Int
    openHour: String
    closeHour: String
    allday: Boolean
  }

  input V2InputAmenity {
    id: String
  }

  input V2InputRule {
    id: String
  }

  input V2InputFeature {
    id: String
  }

  input V2InputCategory {
    id: String
  }

  extend type Query {
    getV2Listing(id: Int!): V2Listing
    getV2Steps(id: Int!): V2Step
    getV2Rules: [V2Rule]
    getV2Amenities: [V2Amenity]
    getV2Features: [V2Feature]
    getV2RootCategories: [V2Category]
    getV2Category(id: String!): [V2Category]
  }

  extend type Mutation {
    postV2Listing: V2Listing
    putV2Listing(input: V2InputListing): V2Listing
  }
`;

export default typeDefs;
