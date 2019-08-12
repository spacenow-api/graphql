interface IAccountResponse {
  id: string;
  object: string;
  business_logo: null;
  business_logo_large: null;
  business_name: string;
  business_primary_color: null;
  business_url: null;
  charges_enabled: boolean;
  country: string;
  created: number;
  debit_negative_balances: boolean;
  decline_charge_on: DeclineChargeOn;
  default_currency: string;
  details_submitted: boolean;
  display_name: null;
  email: string;
  external_accounts: ExternalAccounts;
  legal_entity: LegalEntity;
  mcc: null;
  metadata: Metadata;
  payout_schedule: PayoutSchedule;
  payout_statement_descriptor: null;
  payouts_enabled: boolean;
  product_description: null;
  statement_descriptor: string;
  statement_descriptor_kana: null;
  statement_descriptor_kanji: null;
  support_address: null;
  support_email: null;
  support_phone: null;
  support_url: null;
  timezone: string;
  tos_acceptance: TosAcceptance;
  type: string;
  verification: IAccountResponseVerification;
}

interface DeclineChargeOn {
  avs_failure: boolean;
  cvc_failure: boolean;
}

interface ExternalAccounts {
  object: string;
  data: Datum[];
  has_more: boolean;
  total_count: number;
  url: string;
}

interface Datum {
  id: string;
  object: string;
  account: string;
  account_holder_name: null;
  account_holder_type: null;
  bank_name: string;
  country: string;
  currency: string;
  default_for_currency: boolean;
  fingerprint: string;
  last4: string;
  metadata: Metadata;
  routing_number: string;
  status: string;
}

interface Metadata {
}

interface LegalEntity {
  additional_owners: any[];
  address: Address;
  business_name: string;
  business_tax_id_provided?: boolean;
  dob: Dob;
  first_name: string;
  last_name: string;
  personal_address: Address;
  personal_id_number_provided: boolean;
  ssn_last_4_provided: boolean;
  type: string;
  verification: LegalEntityVerification;
}

interface Address {
  city: null | string;
  country: string;
  line1: null | string;
  line2: null;
  postal_code: null | string;
  state: null | string;
}

interface Dob {
  day: number;
  month: number;
  year: number;
}

interface LegalEntityVerification {
  details: null;
  details_code: null;
  document: null;
  document_back: null;
  status: string;
}

interface PayoutSchedule {
  delay_days: number;
  interval: string;
}

interface TosAcceptance {
  date: number;
  ip: string;
  user_agent: null;
}

interface IAccountResponseVerification {
  disabled_reason: null;
  due_by: null;
  fields_needed: any[];
}

interface IAccountDeleteConfirmation {
  id: string;
  object: string;
  deleted: boolean;
}

export { IAccountResponse, IAccountDeleteConfirmation }