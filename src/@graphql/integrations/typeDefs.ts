import { gql } from "apollo-server-express";

const typeDefs = gql`

input WeWorkInput {
  email: String
  name: String
  phone: String
  city: String
  requested_location: String
  company_name: String
  requested_move_in_date: String
  desks_estimated: String
  contact_allowed: Boolean
  notes: String
}

  type WeWork {
    email: String
    name: String
    phone: String
    city: String
    requested_location: String
    company_name: String
    requested_move_in_date: String
    desks_estimated: String
    contact_allowed: Boolean
    notes: String
  }

  type Output {
    status: String
  }

  extend type Mutation {
    createWeWorkReferral(
      wework: WeWorkInput
    ): Output

    sendHubSpotForm (
      hubspot: WeWorkInput
    ): Output
  }
`;

export default typeDefs;
