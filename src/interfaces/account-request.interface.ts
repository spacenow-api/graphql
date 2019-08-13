interface IAccountRequest {
  type: string;
  email: string;
  country: string;
  legal_entity: LegalEntity;
  external_account: ExternalAccount;
}

interface ExternalAccount {
  object: string;
  country: string;
  currency: string;
  routing_number: string;
  account_number: string;
}

interface LegalEntity {
  personal_id_number: string;
  first_name: string;
  last_name: string;
  type: string;
  business_tax_id?: string;
  business_name?: string;
  address: Address;
  dob: Dob;
}

interface Address {
  city: string;
  line1: string;
  postal_code: number;
  state: string;
}

interface Dob {
  day: number;
  month: number;
  year: number;
}

export { IAccountRequest }