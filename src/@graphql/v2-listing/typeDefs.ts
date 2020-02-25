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
    listSettingsParentId: String
    bookingPeriod: String
    title: String
    bookingType: String
    isPublished: Boolean
    isReady: Boolean
    status: String
    listingData: V2Data
    location: V2Location
    accessDays: V2AccessDays
    photos: [V2Media]
    rules: [V2Rule]
    features: [V2Feature]
    amenities: [V2Amenity]
    tags: [V2Tag]
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
    maxPrice: Float
    peakPrice: Float
    currency: String
    checkInStart: String
    checkInEnd: String
    checkOut: String
    isAbsorvedFee: Boolean
    capacity: Int
    cancellationPolicy: Int
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
    listingStyle: String
    direction: String
    alcoholLicence: String
    wifiSpeed: String
    wifiNetwork: String
    wifiPassword: String
    capacityCocktail: Int
    capacityBanquet: Int
    capacityTheatre: Int
    capacityClassroom: Int
    capacityBoardroom: Int
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

  type V2Media {
    name: String
    type: String
    isCover: Boolean
    category: String
    createdAt: Date @date
    updatedAt: Date @date
  }

  type V2UploadMedia {
    name: String
    type: String
    isCover: Boolean
    category: String
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
    openHour: Date
    closeHour: Date
    allday: Boolean
    peaktime: Boolean
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

  type V2Tag {
    id: String
    name: String
    slug: String
    order: Int
    categoryId: String
    isActive: Boolean
    createdAt: Date @date
    updatedAt: Date @date
  }

  type V2Cancellation {
    id: String
    policyName: String
    policyContent: String
    isActive: Boolean
    createdAt: Date @date
    updatedAt: Date @date
  }

  input V2InputListing {
    id: Int
    userId: String
    locationId: Int
    listSettingsParentId: String
    bookingPeriod: String
    title: String
    bookingType: String
    isPublished: Boolean
    isReady: Boolean
    status: String
    location: V2InputLocation
    listingData: V2InputListingData
    photos: [V2InputMedia]
    accessDays: V2InputAccessDays
    amenities: [V2InputAmenity]
    rules: [V2InputRule]
    features: [V2InputFeature]
    category: [V2InputCategory]
    tags: [V2InputTag]
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
    maxPrice: Float
    peakPrice: Float
    currency: String
    checkInStart: String
    checkInEnd: String
    checkOut: String
    isAbsorvedFee: Boolean
    capacity: Int
    cancellationPolicy: Int
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
    listingStyle: String
    direction: String
    alcoholLicence: String
    wifiSpeed: String
    wifiNetwork: String
    wifiPassword: String
    capacityCocktail: Int
    capacityBanquet: Int
    capacityTheatre: Int
    capacityClassroom: Int
    capacityBoardroom: Int
  }

  input V2InputLocation {
    address: String
    unit: String
    placeId: String
  }

  input V2InputUpload {
    file: Upload,
    category: String
    listingId: Int
  }

  input V2InputMedia {
    name: String
    type: String
    isCover: Boolean
    category: String
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
    openHour: Date
    closeHour: Date
    allday: Boolean
    peaktime: Boolean
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

  input V2InputTag {
    id: String
  }

  extend type Query {
    getV2Listing(id: Int!): V2Listing
    getV2Steps(id: Int!): V2Step
    getV2Rules: [V2Rule]
    getV2Amenities: [V2Amenity]
    getV2Features: [V2Feature]
    getV2RootCategories: [V2Category]
    getV2CategoryTags(id: String!): [V2Tag]
    getV2Cancellations: [V2Cancellation]
  }

  extend type Mutation {
    postV2Listing: V2Listing
    putV2Listing(input: V2InputListing): V2Listing
    postV2Location(input: V2InputLocation): V2Location
    postV2Media(input: V2InputUpload): V2UploadMedia
  }
`;

export default typeDefs;
