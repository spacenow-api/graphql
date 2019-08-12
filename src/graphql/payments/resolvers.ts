import { IAccountRequest } from "./../../interfaces";

const resolvers = {

  Query: {

    getPaymentAccount: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.paymenstsAPI.getAccount();
    }
  },

  Mutation: {

    createPaymentAccount: async (_: any, args: any, { dataSources }: any) => {
      const iCreateAccount = <IAccountRequest>{
        type: args.type,
        email: args.email,
        country: args.country,
        legal_entity: {
          personal_id_number: args.personal_id_number,
          first_name: args.first_name,
          last_name: args.last_name,
          type: args.legal_entity_type,
          business_tax_id: args.business_tax_id,
          business_name: args.business_name,
          address: {
            city: args.city,
            line1: args.line1,
            postal_code: args.postal_code,
            state: args.state,
          },
          dob: {
            day: args.day,
            month: args.month,
            year: args.year,
          }
        },
        external_account: {
          object: args.object,
          country: args.external_account_country,
          currency: args.currency,
          routing_number: args.routing_number,
          account_number: args.account_number,
        }
      }
      return dataSources.paymenstsAPI.createAccount(iCreateAccount);
    },

    removePaymentAccount: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.paymenstsAPI.removeAccount();
    }
  }
};

export default resolvers;
