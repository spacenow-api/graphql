import { gql } from "apollo-server";

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

  type WeWorkOutput {
    id: Int
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

  extend type Query {
    getWeWorkReferrals: [WeWorkOutput]
  }

  extend type Mutation {
    createWeWorkReferral(
      wework: WeWorkInput
    ): WeWorkOutput
  }
`;

export default typeDefs;
