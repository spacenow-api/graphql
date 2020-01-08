import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Location {
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

  type Availabilities {
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
    createdAt: Date @date
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
    checkIn: String
    checkOut: String
    guest: User
    host: User
    listing: Listing
  }

  type BookingPeriodLegacy {
    id: Int
    listSettingsParentId: Int
    monthly: Int
    weekly: Int
    daily: Int
    hourly: Int
  }

  type Holidays {
    date: String
    description: String
  }

  type ListSettings {
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

  type ListingRules {
    id: Int
    listingId: Int
    listSettingsId: Int
    createdAt: String
    updatedAt: String
    settingsData: ListSettings
  }

  type ListingAmenities {
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
    settingsData: ListSettings
  }

  type Amenity {
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
    settingsData: ListSettings
  }

  type ListSettingsParent {
    id: Int
    category: ListSettings
    subcategory: ListSettings
    bookingPeriod: BookingPeriodLegacy
  }

  type ListingAccessHours {
    id: Int
    listingAccessDaysId: Int
    weekday: Int
    openHour: String
    closeHour: String
    allday: Boolean
    createdAt: String
    updatedAt: String
  }

  type ListingPhotos {
    id: Int
    listingId: Int
    name: String
    isCover: Boolean
    bucket: String
    region: String
    key: String
    type: String
    createdAt: String
    updatedAt: String
  }

  type ListingAccessDays {
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
    listingAccessHours: [ListingAccessHours]
  }

  input ListingAccessHoursInput {
    weekday: Int
    openHour: String
    closeHour: String
    allday: Boolean
  }

  input ListingAccessDaysInput {
    listingId: Int
    mon: Boolean
    tue: Boolean
    wed: Boolean
    thu: Boolean
    fri: Boolean
    sat: Boolean
    sun: Boolean
    all247: Boolean
    listingAccessHours: [ListingAccessHoursInput]
  }

  type ListingData {
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
    listingAmenities: [Int]
    listingExceptionDates: [String]
    listingRules: [Int]
    listingAccessDays: ListingAccessDays
    status: String
    link: String
  }

  type Listing {
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
    listingData: ListingData
    location: Location
    amenities: [Amenity]
    rules: [ListingRules]
    photos: [ListingPhotos]
    accessDays: ListingAccessDays
    settingsParent: ListSettingsParent
    user: User
  }

  type Listings {
    count: Int
    rows: [Listing]
  }

  type CountAll {
    all: Int
    active: Int
    deleted: Int
    published: Int
  }

  type ListingsCount {
    count: CountAll
  }

  type ListingsCategoriesCount {
    category: String
    count: CountAll
  }

  type LocationsCountListings {
    state: String
    count: CountAll
  }

  type ListingAsset {
    listingId: Int
    assetId: String
    isCover: Boolean
    asset: Asset
  }

  type Review {
    id: Int
    reservationId: String
    listId: Int
    author: User
    reviewContent: String
    ratingOverall: Float
    ratingCheckIn: Float
    ratingHost: Float
    ratingValue: Float
    ratingCleanliness: Float
    ratingLocation: Float
    createdAt: String
  }

  type PublicReview {
    totalPages: Int
    result: [Review]
  }

  type GoogleReview {
    author_name: String
    profile_photo_url: String
    rating: Float
    text: String
    time: Float
    relative_time_description: String
  }

  type GoogleReviews {
    rating: Float
    reviews: [GoogleReview]
  }

  type PrivateReview {
    id: Int
    reservationId: String
    listId: Int
    author: User
    reviewContent: String
    privateFeedback: String
    ratingOverall: Float
    ratingCheckIn: Float
    ratingHost: Float
    ratingValue: Float
    ratingCleanliness: Float
    ratingLocation: Float
    createdAt: String
  }

  type ExternalClicksObject {
    id: String
    userId: String
    listingId: Int
    clicks: Int
    createdAt: String
    updatedAt: String
    listing: Listing
  }

  type ExternalClicksType {
    totalClicks: Int
    rows: [ExternalClicksObject]
  }

  extend type Query {
    getAvailabilitiesByListingId(listingId: Int!): Availabilities
    getAllBookings: [Booking]
    getBooking: Booking
    getAllHolidays(
      countryShortName: String
      year: Int
      state: String!
    ): [Holidays]
    getListingById(id: Int!, isPublic: Boolean): Listing
    getAllListingsByUser(userId: String!, isPublic: Boolean): Listings
    getAllPlainListings: [Listing]
    getAllListings: Listings
    getTotalListingsByDate(days: Int, category: Int): ListingsCount
    getTotalListingsByCategory(category: ID): ListingsCount
    getListingsCategories: [ListingsCategoriesCount]
    getPhotosByListingId(listingId: Int!): [ListingPhotos]
    getVideoByListingId(listingId: Int!): ListingPhotos
    getLocationById(id: Int!): Location
    getLocationsCountListings: [LocationsCountListings]
    getAllAmenitiesBySubCategoryId(subCategoryId: Int!): [ListSettings]
    getAllAmenitiesByListingId(listing: Int!): [Amenity]
    getAllRules: [ListSettings]
    getAllAccessTypes: [ListSettings]
    getAllSpecificationsByParentId(listSettingsParentId: Int!): [ListSettings]
    getLetterListingsByState(state: String!): [Listing]
    getPublicReviews(listingId: Int!, page: Int, pageSize: Int): PublicReview
    getGoogleReviews(placeId: String): GoogleReviews
    getPrivateReviews(listingId: Int!): [PrivateReview]
    getExternalClicksByUser(userId: String!): ExternalClicksType
  }

  extend type Mutation {
    uploadPhoto(file: Upload, listingId: Int!): ListingPhotos
    deletePhoto(photoId: Int!, listingId: Int!): Success
    setCoverPhoto(photoId: Int!, listingId: Int!): Success
    createOrUpdateListing(
      locationId: Int!
      listSettingsParentId: Int!
      bookingPeriod: String
      title: String
      coverPhotoId: Int
      quantity: Int
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
      spaceType: String
      bookingType: String
      bookingPeriod: String
      listingAmenities: [Int]
      listingAccessDays: ListingAccessDaysInput
      listingExceptionDates: [String]
      listingRules: [Int]
      link: String
    ): Listing
    getOrCreateLocation(
      suggestAddress: String!
      unit: String
      placeId: String
    ): Location
    publish(listingId: Int!, status: Boolean!): Listing
    cleanListingAvailabilities(listingId: Int!): Success
    removeListingById(listingId: Int!): Success
    changeListingStatus(listingId: Int!, status: String!): Listing
    claimListing(listingId: Int!): Success
    createReviewFromGuest(
      bookingId: String!
      publicComment: String!
      privateComment: String
      ratingOverall: Int!
      ratingCheckIn: Int!
      ratingHost: Int!
      ratingValue: Int!
      ratingCleanliness: Int!
      ratingLocation: Int!
    ): [Review]
    createReviewFromHost(
      bookingId: String!
      publicComment: String!
      ratingOverall: Int!
    ): [Review]
    saveClicksByListing(listingId: Int!): ExternalClicksType
  }
`;

export default typeDefs;
