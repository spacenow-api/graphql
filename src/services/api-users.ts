import { catchApolloError } from "./../helpers/exceptions/HttpException";

import { IUser, IResponseUser } from "../interfaces";
import PersonalizationAPI from "../interfaces/personalization.inteface";

class UsersAPI extends PersonalizationAPI {
  private path = "/users";

  constructor(apiAddress: string) {
    super();
    this.baseURL = apiAddress;
  }

  getAllUsers = async (): Promise<[IUser]> => {
    return this.get(`${this.path}`).catch(catchApolloError);
  };

  getAllUsersLegacy = async (): Promise<IResponseUser> => {
    return this.get(`${this.path}/legacy`).catch(catchApolloError);
  };

  getUser = async (id: string): Promise<IUser> => {
    return this.get(`${this.path}/${id}`).catch(catchApolloError);
  };

  getUserLegacyById = async (id: string): Promise<IUser> => {
    return this.get(`${this.path}/legacy/${id}`).catch(catchApolloError);
  };

  createUser = async (user: IUser): Promise<IUser> => {
    return this.post(`${this.path}`, user).catch(catchApolloError);
  };

  updateUserLegacy = async (user: IUser): Promise<IUser> => {
    return this.patch(`${this.path}/legacy?id=${user.id}`, user).catch(catchApolloError);
  };

  deleteUserByEmail = async (email: string): Promise<IUser> => {
    return this.delete(`${this.path}/legacy?email=${email}`).catch(catchApolloError);
  };

  resetPassword = async (email: string) => {
    return this.post(`${this.path}/legacy/password/reset`, { email }).catch(catchApolloError);
  }

  resetPasswordUpdate = async (email: string, token: string, password: string) => {
    return this.post(`${this.path}/legacy/password/reset/update`, { email, token, password }).catch(catchApolloError);
  }
}

export default UsersAPI;
