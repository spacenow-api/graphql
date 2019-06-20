import { RESTDataSource } from 'apollo-datasource-rest';
import { IUser } from '../interfaces';

class UsersAPI extends RESTDataSource {

  private path = '/users';

  constructor() {
    super();
    this.baseURL = 'http://localhost:4001';
  }

  getAllUsers = async (): Promise<[IUser]> => {
    return this.get(`${this.path}`);
  }

  getUser = async (id: string): Promise<IUser> => {
    return this.get(`${this.path}/${id}`);
  }

  createUser = async (user: IUser): Promise<IUser> => {
    return this.post(`${this.path}`, user);
  }

}

export default UsersAPI;