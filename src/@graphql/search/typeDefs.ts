import { gql } from "apollo-server";

const typeDefs = gql`

  type SearchPhotos {
    id: Int
    name: String
    isCover: Boolean
    type: String
  }

  type SearchListingData {
    id: Int
    basePrice: Float
    currency: String
    minTerm: Float
    capacity: Int
    size: Float
    meetingRooms: Int
    isFurnished: Int
    carSpace: Int
    sizeOfVehicle: String
    maxEntranceHeight: String
    spaceType: String
    bookingType: String
    accessType: String
  }

  type SearchSpecification {
    id: Int
    typeId: Int
    itemName: String
    otherItemName: String
    specData: String
  }

  type SearchLocation {
    id: Int
    country: String
    address1: String
    buildingName: String
    city: String
    state: String
    zipcode: String
    lat: String
    lng: String
  }

  type SearchCategory {
    id: Int
    typeId: Int
    itemName: String
    otherItemName: String
  }

  type SearchSubCategory {
    id: Int
    typeId: Int
    itemName: String
    otherItemName: String
  }

  type SearchHostProfile {
    profileId: Int
    firstName: String
    lastName: String
    displayName: String
    picture: String
  }

  type SearchHost {
    id: String
    email: String
    profile: SearchHostProfile
  }

  type SearchListing {
    id: Int
    title: String
    userId: String
    locationId: Int
    bookingPeriod: String
    listSettingsParentId: Int
    listingData: SearchListingData
    specifications: [SearchSpecification]
    location: SearchLocation
    category: SearchCategory
    subcategory: SearchSubCategory
    photos: [SearchPhotos]
    host: SearchHost
  }

  type SearchResult {
    status: String
    searchKey: String
    page: Int
    perPage: Int
    prePage: Int
    nextPage: Int
    total: Int
    totalPages: Int
    frequencies: [String]
    result: [SearchListing]
  }
  
  extend type Query {  
    searchByAddress(lat: String!, lng: String!, categories: String, duration: String, priceMin: Float, priceMax: Float, instant: String, page: Int, limit: Int, radius: Int, availability: [String]): SearchResult
    searchByFilters(key: String!, categories: String, duration: String, priceMin: Float, priceMax: Float, instant: String, page: Int, limit: Int, radius: Int, availability: [String]): SearchResult
  }
`;

export default typeDefs;
