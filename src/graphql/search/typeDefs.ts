import { gql } from "apollo-server";

const typeDefs = gql`

  type SearchPhotos {
    id: Int
    name: String
    isCover: Boolean
  }

  type SearchListingData {
    id: Int
    basePrice: Float
    currency: String
    minTerm: Float
    isAbsorvedFee: Int
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
    location: SearchLocation
    category: SearchCategory
    subcategory: SearchSubCategory
    photos: [SearchPhotos]
    host: SearchHost
  }

  type SearchResult {
    status: String
    searchKey: String
    result: [SearchListing]
  }
  
  extend type Query {  
    searchByAddress(lat: String!, lng: String!): SearchResult
    searchByFilters(key: String!, categories: String, duration: String, priceMin: Float, priceMax: Float, instant: String): SearchResult
  }
`;

export default typeDefs;
