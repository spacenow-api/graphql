import {
  IAuth,
  IUser,
  IToken,
  IUserProfileLegancy,
  ITokenValidation
} from "../interfaces";
import PersonalizationAPI from "../interfaces/personalization.inteface";

class AuthAPI extends PersonalizationAPI {
  private path = "/auth";

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

  loginAdmin = async (auth: IAuth): Promise<IUser> => {
    return this.post(`${this.path}/adminSignin`, auth);
  };

  tokenValidate = async (token: IToken): Promise<ITokenValidation> => {
    return <ITokenValidation>(
      await this.post(`${this.path}/token/validate`, token)
    );
  };

  tokenAdminValidate = async (token: IToken): Promise<ITokenValidation> => {
    return <ITokenValidation>(
      await this.post(`${this.path}/token/adminValidate`, token)
    );
  };
}

export default AuthAPI;
