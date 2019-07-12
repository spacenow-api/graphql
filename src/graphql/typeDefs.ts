import { gql } from 'apollo-server';

const typeDefs = gql`

  type OutputLocationType {
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
    createdAt: String
    updatedAt: String
  }

  type AssetSize {
    xs: String
    sm: String
    md: String
    lg: String
    original: String
  }

  type Asset {
    id: String
    title: String
    description: String
    fileType: String
    fileName: String
    sizes: AssetSize
    accessControl: String
    isActive: Boolean
    createdAt: String
    updatedAt: String
  }

  type Auth {
    email: String
    password: String
  }

  type Token {
    token: String
    expiresIn: Int
  }

  type AvailabilitiesType {
    bookingDates: [String]
    exceptionDates: [String]
  }

  type Booking {
    listingId: Int
    quantity: Int
    currency: String
    totalPrice: Float
    bookingType: String
    basePrice: Float
    createdAt: Int
    period: Int
    sourceId: String
    bookingState: String
    chargeId: String
    hostServiceFee: Float
    confirmationCode: Int
    bookingId: String
    guestServiceFee: Float
    hostId: String
    paymentState: String
    updatedAt: Int
    priceType: String
    guestId: String
  }

  type Category {
    id: String!
    name: String!
    slug: String!
    parentId: String
    order: Int!
    isActive: Boolean!
    children: [Category]
  }

  type BookingPeriodLegacyType {
    id: Int
    listSettingsParentId: Int
    monthly: Int
    weekly: Int
    daily: Int
    hourly: Int
  }

  type SubCategoryLegacyType {
    id: Int
    listSettingsParentId: Int
    listSettingsChildId: Int
    typeId: Int
    itemName: String
    otherItemName: String
    description: String
    maximum: Int
    minimum: Int
    startValue: Int
    endValue: Int
    step: String
    isEnable: String
    photo: String
    photoType: String
    isSpecification: Int
    specData: String
    bookingPeriod: BookingPeriodLegacyType
  }

  type CategoryLegacyType {
    id: Int
    typeId: Int
    itemName: String
    otherItemName: String
    description: String
    maximum: Int
    minimum: Int
    startValue: Int
    endValue: Int
    step: String
    isEnable: String
    photo: String
    photoType: String
    isSpecification: Int
    specData: String
    subCategories: [SubCategoryLegacyType]
  }

  type HolidaysType {
    date: String
    description: String
  }

  type User {
    id: String!
    email: String!
    password: String!
    isEmailConfirmed: Boolean!
  }

  type ListSettingsType {
    id: Int
    typeId: Int
    itemName: String
    otherItemName: String
    description: String
    maximum: String
    minimum: String
    startValue: String
    endValue: String
    step: String
    isEnable: String
    photo: String
    photoType: String
    isSpecification: Boolean
    createdAt: String
    updatedAt: String
    specData: String
  }

  type OutputListingRulesType {
    id: Int
    listingId: Int
    listSettingsId: Int
    createdAt: String
    updatedAt: String
    settingsData: ListSettingsType
  }

  type OutputListingAmenitiesType {
    id: Int
    listingId: Int
    listSettingsId: Int
    amount: Int
    quantity: Int
    currency: String
    settings: String
    type: String
    createdAt: String
    updatedAt: String
    settingsData: ListSettingsType
  }

  type OutputListSettingsParentType {
    id: Int
    category: ListSettingsType
    subcategory: ListSettingsType
  }

  type OutputListingAccessHoursType {
    id: Int
    listingAccessDaysId: Int
    weekday: Int
    openHour: String
    closeHour: String
    allday: Boolean
    createdAt: String
    updatedAt: String
  }

  type InputListingAccessHoursType {
    weekday: Int
    openHour: String
    closeHour: String
    allday: Boolean
  }

  type OutputListingAccessDaysType {
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
    createdAt: String
    updatedAt: String
    listingAccessHours: [OutputListingAccessHoursType]
  }

  type InputListingAccessDaysType {
    listingId: Int
    mon: Boolean
    tue: Boolean
    wed: Boolean
    thu: Boolean
    fri: Boolean
    sat: Boolean
    sun: Boolean
    all247: Boolean
    listingAccessHours: [InputListingAccessHoursType]
  }

  type ListingDataType {
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
    size: Int
    meetingRooms: Int
    isFurnished: Boolean
    carSpace: Int
    sizeOfVehicle: String
    maxEntranceHeight: String
    bookingType: String
    spaceType: String
    listingAmenities: [Int]
    listingExceptionDates: [String]
    listingRules: [Int]
    listingAccessDays: OutputListingAccessDaysType
    status: String
  }

  type OutputListingType {
    id: Int
    userId: String
    title: String
    coverPhotoId: Int
    bookingPeriod: String
    isPublished: Boolean
    isReady: Boolean
    quantity: Int
    status: String
    createdAt: String
    updatedAt: String
    count: Int
    listingData: ListingDataType
    location: OutputLocationType
    amenities: [OutputListingAmenitiesType]
    rules: [OutputListingRulesType]
    accessDays: OutputListingAccessDaysType
    settingsParent: OutputListSettingsParentType
  }

  type SuccessOutput {
    status: String
  }

  type Query {
    getLocationById(id: Int): OutputLocationType
  }
`;

export default typeDefs;
