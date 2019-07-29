import { IAuth, IUser, IToken, IUserProfileLegancy, ITokenValidation } from '../interfaces';
import PersonalizationAPI from '../interfaces/personalization.inteface';

class AuthAPI extends PersonalizationAPI {
  private path = '/auth';

  constructor(apiAddress: string) {
    super();
    this.baseURL = apiAddress;
  }

  register = async (user: IUser) => {
    return this.post(`${this.path}/register`, user);
  };

  login = async (auth: IAuth): Promise<IUser> => {
    return this.post(`${this.path}/signin`, auth);
  };

  tokenValidate = async (token: IToken): Promise<ITokenValidation> => {
    return <ITokenValidation>await this.post(`${this.path}/token/validate`, token);
  };
}

export default AuthAPI;
