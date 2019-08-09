import { IUser } from "../interfaces";
import PersonalizationAPI from "../interfaces/personalization.inteface";

class UsersAPI extends PersonalizationAPI {
  private path = "/users";

  constructor(apiAddress: string) {
    super();
    this.baseURL = apiAddress;
  }

  getAllUsers = async (): Promise<[IUser]> => {
    return this.get(`${this.path}`);
  };

  getAllUsersLegacy = async (): Promise<[IUser]> => {
    return this.get(`/users/legacy`);
  };

  getUser = async (id: string): Promise<IUser> => {
    return this.get(`${this.path}/${id}`);
  };

  createUser = async (user: IUser): Promise<IUser> => {
    return this.post(`${this.path}`, user);
  };

  udpateUser = async (user: IUser): Promise<IUser> => {
    return this.patch(`${this.path}`, user);
  };
}

export default UsersAPI;
