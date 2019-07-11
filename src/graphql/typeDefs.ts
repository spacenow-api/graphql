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

  type Query {
    getLocationById(id: Int): OutputLocationType
  }
`;

export default typeDefs;
