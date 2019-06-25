import { RESTDataSource } from 'apollo-datasource-rest';

class ListingsAPI extends RESTDataSource {
  private path = '/listings';

  constructor(gatewayHost: string) {
    super();
    this.baseURL = gatewayHost;
  }

  getAllListings = async () => {
    return this.get(`${this.path}`);
  };

  getListing = async (id: string) => {
    return this.get(`${this.path}/${id}`);
  };
}

export default ListingsAPI;
