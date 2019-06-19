import { RESTDataSource } from 'apollo-datasource-rest';
import { IAuth, IUser } from '../interfaces';

class AuthAPI extends RESTDataSource {

  private path = '/auth';

  constructor() {
    super();
    this.baseURL = 'http://localhost:4000';
  }

  register = async (user: IUser) => {
    return this.post(`${this.path}/register`, user);
  }

  login = async (auth: IAuth): Promise<IUser> => {
    return this.post(`${this.path}/signin`, auth);
  }

  logout = async () => {
    return this.post(`${this.path}/logout`);
  }

}

export default AuthAPI;
