import { RESTDataSource } from 'apollo-datasource-rest';

class ListingsAPI extends RESTDataSource {
  private path = '/listings';

  constructor() {
    super();
    this.baseURL = 'http://localhost:4001/gateway';
  }

  getAllListings = async () => {
    return this.get(`${this.path}`);
  };

  getListing = async (id: string) => {
    return this.get(`${this.path}/${id}`);
  };
}

export default ListingsAPI;
