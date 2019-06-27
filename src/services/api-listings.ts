import PersonalizationAPI from '../interfaces/personalization.inteface';

const PATH = '/listings';

class ListingsAPI extends PersonalizationAPI {
  constructor(gatewayHost: string) {
    super();
    this.baseURL = gatewayHost;
  }

  getListingById = async (id: string) => {
    return this.get(`${PATH}/${id}`);
  };
}

export default ListingsAPI;
