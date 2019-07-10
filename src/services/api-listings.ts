import PersonalizationAPI from '../interfaces/personalization.inteface';

import * as _ from '../interfaces/listing.interface';

class ListingsAPI extends PersonalizationAPI {
  constructor(gatewayHost: string) {
    super();
    this.baseURL = gatewayHost;
  }

  getListingById = async (id: string): Promise<_.IListingResponse> => {
    return this.get(`/listings/${id}`);
  };

  getListingDataByListingId = async (listingId: string): Promise<_.IListingDataResponse> => {
    return this.get(`/listings/data/${listingId}`);
  };

  getListingSettingsByListingId = async (listingId: string): Promise<_.IListingSettingsResponse> => {
    return this.get(`/listings/settings/${listingId}`);
  };

  getListingAccessDaysByListingId = async (listingId: string): Promise<_.IListingAccessDaysResponse> => {
    return this.get(`/listings/access/${listingId}`);
  };

  getListingAmenitiesByListingId = async (listingId: string): Promise<_.IListingAmenitiesResponse> => {
    return this.get(`/listings/amenities/${listingId}`);
  };

  getListingRulesByListingId = async (listingId: string): Promise<_.IListingRulesResponse> => {
    return this.get(`/listings/rules/${listingId}`);
  };

  createDraft = async (listing: _.IDraftRequest) => {
    return this.post(`/listings/draft`, listing);
  };

  update = async (listing: _.IUpdateRequest) => {
    return this.put(`/listings/update`, listing);
  };
}

export default ListingsAPI;
