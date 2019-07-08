import PersonalizationAPI from '../interfaces/personalization.inteface';
import { IDraftRequest, IUpdateRequest } from '../interfaces/listing.interface';

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

  createDraft = async (listing: IDraftRequest) => {
    return this.post(`/listings/draft`, listing);
  };

  update = async (listing: IUpdateRequest) => {
    return this.put(`/listings/update`, listing);
  };
}

export default ListingsAPI;
