import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { IUser } from '../interfaces';

class UsersAPI extends RESTDataSource {
  private path = '/users';

  constructor(gatewayHost: string) {
    super();
    this.baseURL = gatewayHost;
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', this.context.token);
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
