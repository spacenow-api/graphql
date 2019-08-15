import { ApolloError } from 'apollo-server';

import { PersonalizationAPI, IAccountRequest, IAccountResponse, IAccountDeleteConfirmation } from "../interfaces";

import { toError } from './../helpers/exceptions/HttpException';

class PaymenstsAPI extends PersonalizationAPI {

  constructor(apiAddress: string) {
    super();
    this.baseURL = apiAddress;
  }

  getAccount = async (): Promise<IAccountResponse> => {
    return this.get('/payment/account').catch(err => new ApolloError(toError(err)));
  };

  createAccount = async (data: IAccountRequest): Promise<IAccountResponse> => {
    return this.post('/payment/account', data).catch(err => new ApolloError(toError(err)));
  };

  removeAccount = async (): Promise<IAccountDeleteConfirmation> => {
    return this.delete('/payment/account').catch(err => new ApolloError(toError(err)));
  };
}

export default PaymenstsAPI;
