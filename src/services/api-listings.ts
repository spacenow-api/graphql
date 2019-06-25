import PersonalizationAPI from '../interfaces/personalization.inteface';

class ListingsAPI extends PersonalizationAPI {
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
