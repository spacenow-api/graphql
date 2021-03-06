import { gql } from "apollo-server-express";

const typeDefs = gql`
  
  type TosAcceptance {
    date: Int
    ip: String
    user_agent: String
  }

  type PayoutSchedule {
    delay_days: Int
    interval: String
  }

  type Verification {
    details: String
    details_code: String
    document: String
    document_back: String
    status: String
  }

  type PersonalAddress {
    city: String
    country: String
    line1: String
    line2: String
    postal_code: String
    state: String
  }

  type Dob {
    day: Int
    month: Int
    year: Int
  }

  type Address {
    city: String
    country: String
    line1: String
    line2: String
    postal_code: String
    state: String
  }

  type LegalEntity {
    business_name: String
    business_tax_id_provided: Boolean
    first_name: String
    last_name: String
    personal_id_number_provided: Boolean
    ssn_last_4_provided: Boolean
    type: String
    verification: Verification
    personal_address: PersonalAddress
    dob: Dob
    address: Address
    additional_owners: [String]
  }

  type Data {
    id: String
    object: String
    account: String
    account_holder_name: String
    account_holder_type: String
    bank_name: String
    country: String
    currency: String
    default_for_currency: Boolean
    fingerprint: String
    last4: String
    routing_number: String
    status: String
  }

  type ExternalAccounts {
    object: String
    has_more: Boolean
    total_count: Int
    url: String
    data: [Data]
  }

  type DeclineChargeOn {
    avs_failure: Boolean
    cvc_failure: Boolean
  }

  type StripeAccountType {
    id: String
    object: String
    business_logo: String
    business_logo_large: String
    business_name: String
    business_primary_color: String
    business_url: String
    charges_enabled: Boolean
    country: String
    created: Int
    debit_negative_balances: Boolean
    default_currency: String
    details_submitted: Boolean
    display_name: String
    email: String
    mcc: String
    payout_statement_descriptor: String
    payouts_enabled: Boolean
    product_description: String
    statement_descriptor: String
    statement_descriptor_kana: String
    statement_descriptor_kanji: String
    support_address: String
    support_email: String
    support_phone: String
    support_url: String
    timezone: String
    type: String
    verification: Verification
    tos_acceptance: TosAcceptance
    payout_schedule: PayoutSchedule
    legal_entity: LegalEntity
    external_accounts: ExternalAccounts
    decline_charge_on: DeclineChargeOn
  }

  type StripeAccountDeleteConfirmation {
    id: String
    object: String
    deleted: Boolean
  }

  type TaxIds {
    object: String
    has_more: Boolean
    total_count: Int
    url: String
    data: [String]
  }
  
  type Subscriptions {
    object: String
    has_more: Boolean
    total_count: Int
    url: String
    data: [String]
  }
  
  type SourceData {
    id: String
    object: String
    address_city: String
    address_country: String
    address_line1: String
    address_line1_check: String
    address_line2: String
    address_state: String
    address_zip: String
    address_zip_check: String
    brand: String
    country: String
    customer: String
    cvc_check: String
    dynamic_last4: String
    exp_month: Int
    exp_year: Int
    fingerprint: String
    funding: String
    last4: String
    name: String
    tokenization_method: String
  }
  
  type Sources {
    object: String
    has_more: Boolean
    total_count: Int
    url: String
    data: [SourceData]
  }
  
  type InvoiceSettings {
    custom_fields: String
    default_payment_method: String
    footer: String
  }
  
  type StripeSourceType {
    id: String
    object: String
    account_balance: Int
    address: String
    balance: Int
    created: Int
    currency: String
    default_source: String
    delinquent: Boolean
    description: String
    discount: String
    email: String
    invoice_prefix: String
    livemode: Boolean
    name: String
    phone: String
    shipping: String
    tax_exempt: String
    tax_info: String
    tax_info_verification: String
    tax_ids: TaxIds
    subscriptions: Subscriptions
    sources: Sources
    preferred_locales: [String]
    invoice_settings: InvoiceSettings
    lastCardCreated: SourceData
  }

  type PaymentResponse {
    status: String
    bookingId: String
    bookingState: String
  }

  extend type Query {
    getPaymentAccount: StripeAccountType
    getPaymentCards: StripeSourceType
  }

  extend type Mutation {
    createPaymentAccount(
      type: String!
      email: String!
      country: String!
      object: String!
      external_account_country: String!
      currency: String!
      routing_number: String!
      account_number: String!
      personal_id_number: String!
      first_name: String!
      last_name: String!
      legal_entity_type: String!
      business_tax_id: String
      business_name: String
      city: String!
      line1: String!
      postal_code: Int!
      state: String!
      day: Int!
      month: Int!
      year: Int!
    ): StripeAccountType
    removePaymentAccount: StripeAccountDeleteConfirmation
    createPaymentCard(cardName: String!, cardNumber: String!, expMonth: Int!, expYear: Int!, cvc: String!): StripeSourceType
    deletePaymentCard(cardId: String!): StripeSourceType
    createPayment(cardId: String!, bookingId: String!): PaymentResponse
    updateDefaultCard(cardId: String!): StripeSourceType
  }
`;

export default typeDefs;
