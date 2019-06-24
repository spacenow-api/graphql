import { RESTDataSource } from 'apollo-datasource-rest';
import { IAuth, IUser } from '../interfaces';

class AuthAPI extends RESTDataSource {

  private path = '/auth';

  constructor() {
    super();
    this.baseURL = 'http://localhost:4001';
  }

  register = async (user: IUser) => {
    return this.post(`${this.path}/register`, user);
  }

  login = async (auth: IAuth): Promise<IUser> => {
    return this.post(`${this.path}/signin`, auth);
  }

}

export default AuthAPI;