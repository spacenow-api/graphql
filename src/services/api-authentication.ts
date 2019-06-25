import { RESTDataSource } from 'apollo-datasource-rest';

import { IAuth, IUser } from '../interfaces';

class AuthAPI extends RESTDataSource {
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
}

export default AuthAPI;
