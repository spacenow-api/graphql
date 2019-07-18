import { ApolloError } from 'apollo-server';

import { toError } from './../helpers/exceptions/HttpException';

import { IAuth, IUser, IToken } from '../interfaces';
import PersonalizationAPI from '../interfaces/personalization.inteface';

class AuthAPI extends PersonalizationAPI {
  private path = '/auth';

  constructor(gatewayHost: string) {
    super();
    this.baseURL = gatewayHost;
  }

  register = async (user: IUser) => {
    return this.post(`${this.path}/register`, user);
  };

  login = async (auth: IAuth): Promise<IUser> => {
    return this.post(`${this.path}/signin`, auth);
  };

  tokenValidate = async (token: IToken) => {
    const status = await this.post(`${this.path}/token/validate`, token);
    return { status };
  };
}

export default AuthAPI;
