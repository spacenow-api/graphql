import { ApolloError } from 'apollo-server';

import { toError } from './../helpers/exceptions/HttpException';

import PersonalizationAPI from '../interfaces/personalization.inteface';

import * as _ from '../interfaces/listing.interface';

class ListingsAPI extends PersonalizationAPI {
  constructor(apiAddress: string) {
    super();
    this.baseURL = apiAddress;
  }

  getListingById = async (id: string): Promise<_.IListingResponse> => {
    return this.get(`/listings/${id}`).catch((err) => new ApolloError(toError(err)));
  };

  getListingDataByListingId = async (listingId: string): Promise<_.IListingDataResponse> => {
    return this.get(`/listings/data/${listingId}`).catch((err) => new ApolloError(toError(err)));
  };

  getListingSettingsByListingId = async (listingId: string): Promise<_.IListingSettingsResponse> => {
    return this.get(`/listings/settings/${listingId}`).catch((err) => new ApolloError(toError(err)));
  };

  getListingAccessDaysByListingId = async (listingId: string): Promise<_.IListingAccessDaysResponse> => {
    return this.get(`/listings/access/${listingId}`).catch((err) => new ApolloError(toError(err)));
  };

  getListingAmenitiesByListingId = async (listingId: string): Promise<_.IListingAmenitiesResponse> => {
    return this.get(`/listings/amenities/${listingId}`).catch((err) => new ApolloError(toError(err)));
  };

  getListingRulesByListingId = async (listingId: string): Promise<_.IListingRulesResponse> => {
    return this.get(`/listings/rules/${listingId}`).catch((err) => new ApolloError(toError(err)));
  };

  createDraft = async (listing: _.IDraftRequest) => {
    return this.post(`/listings/draft`, listing).catch((err) => new ApolloError(toError(err)));
  };

  update = async (listing: _.IUpdateRequest) => {
    return this.put(`/listings/update`, listing).catch((err) => new ApolloError(toError(err)));
  };
}

export default ListingsAPI;
