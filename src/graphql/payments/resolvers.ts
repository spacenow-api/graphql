import { UserInputError } from "apollo-server";

import * as config from "./../../config";

import { IAccountRequest, IAccountResponse } from "./../../interfaces";

const resolvers = {

  Query: {

    getPaymentAccount: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.paymenstsAPI.getAccount();
    }
  },

  Mutation: {

    createPaymentAccount: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.paymenstsAPI.createAccount();
    },

    removePaymentAccount: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.paymenstsAPI.removeAccount();
    }
  }
};

export default resolvers;
