import { ApolloError } from 'apollo-server';

import { toError } from './../helpers/exceptions/HttpException';

import {
  IAuth,
  IUser,
  IToken,
  ITokenValidation
} from "../interfaces";

import PersonalizationAPI from "../interfaces/personalization.inteface";

class AuthAPI extends PersonalizationAPI {

  private path = "/auth";

  constructor(apiAddress: string) {
    super();
    this.baseURL = apiAddress;
  }

  signup = async (email: string, password: string, firstName: string, lastName: string) => {
    try {
      await this.post(`${this.path}/signup`, {
        email,
        password,
        firstName,
        lastName
      });
      return { status: 'success' }
    } catch (err) {
      throw new ApolloError(toError(err));
    }
  };

  login = async (auth: IAuth): Promise<IUser> => {
    return this.post(`${this.path}/signin`, auth);
  };

  loginAdmin = async (auth: IAuth): Promise<IUser> => {
    return this.post(`${this.path}/adminSignin`, auth);
  };

  tokenValidate = async (token: IToken): Promise<ITokenValidation> => {
    return <ITokenValidation>(await this.post(`${this.path}/token/validate`, token));
  };

  tokenGoogleValidate = async (iToken: IToken): Promise<ITokenValidation> => {
    return <ITokenValidation>(await this.post(`${this.path}/token/google/validate?access_token=${iToken.token}`));
  };

  tokenFacebookValidate = async (iToken: IToken): Promise<ITokenValidation> => {
    return <ITokenValidation>(await this.post(`${this.path}/token/facebook/validate?access_token=${iToken.token}`));
  };

  tokenAdminValidate = async (token: IToken): Promise<ITokenValidation> => {
    return <ITokenValidation>(await this.post(`${this.path}/token/adminValidate`, token));
  };
}

export default AuthAPI;
