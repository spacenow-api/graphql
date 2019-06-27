import PersonalizationAPI from '../interfaces/personalization.inteface';

class ListingsAPI extends PersonalizationAPI {
  constructor(gatewayHost: string) {
    super();
    this.baseURL = gatewayHost;
  }

  getListingById = async (id: string) => {
    return this.get(`/listings/${id}`);
  };

  getListingDataByListingId = async (listingId: string) => {
    return this.get(`/listings/data/${listingId}`);
  };
}

export default ListingsAPI;
