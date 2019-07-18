import { IUser } from '../interfaces';
import PersonalizationAPI from '../interfaces/personalization.inteface';

class UsersAPI extends PersonalizationAPI {
  private path = '/users';

  constructor(apiAddress: string) {
    super();
    this.baseURL = apiAddress;
  }

  getAllUsers = async (): Promise<[IUser]> => {
    return this.get(`${this.path}`);
  };

  getUser = async (id: string): Promise<IUser> => {
    return this.get(`${this.path}/${id}`);
  };

  createUser = async (user: IUser): Promise<IUser> => {
    return this.post(`${this.path}`, user);
  };
}

export default UsersAPI;
