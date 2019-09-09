import { ApolloError } from 'apollo-server';

import { PersonalizationAPI, IAccountRequest, IAccountResponse, IAccountDeleteConfirmation } from "../interfaces";

import { toError } from './../helpers/exceptions/HttpException';
import AuthUtils from './../helpers/authentication/auth.utils';

class PaymentsAPI extends PersonalizationAPI {

  constructor(apiAddress: string) {
    super();
    this.baseURL = apiAddress;
  }

  getAccount = async (): Promise<IAccountResponse> => {
    const userId = await AuthUtils.getUserIdByToken(this.context.token);
    return this.get(`/payments/${userId}/account`).catch(err => new ApolloError(toError(err)));
  };

  createAccount = async (data: IAccountRequest): Promise<IAccountResponse> => {
    const userId = await AuthUtils.getUserIdByToken(this.context.token);
    return this.post(`/payments/${userId}/account`, data).catch(err => new ApolloError(toError(err)));
  };

  removeAccount = async (): Promise<IAccountDeleteConfirmation> => {
    const userId = await AuthUtils.getUserIdByToken(this.context.token);
    return this.delete(`/payments/${userId}/account`).catch(err => new ApolloError(toError(err)));
  };
}

export default PaymentsAPI;
