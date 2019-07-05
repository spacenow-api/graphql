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

  getListingSettingsByListingId = async (listingId: string) => {
    return this.get(`/listings/settings/${listingId}`);
  };

  createDraft = async (listing: any) => {
    return this.post(`/listings/draft`, listing);
  };

  update = async (listing: any) => {
    return this.put(`/listings/update`, listing);
  };
}

export default ListingsAPI;
