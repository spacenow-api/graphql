import { ApolloError } from "apollo-server";

import { toError } from "./../helpers/exceptions/HttpException";

import PersonalizationAPI from '../interfaces/personalization.inteface';

import * as _ from "../interfaces/listing.interface";

class SearchAPI extends PersonalizationAPI {

  constructor(apiAddress: string) {
    super();
    this.baseURL = apiAddress;
  }

  searchByAddress = async (lat: string, lng: string, userId: string) => {
    try {
      const searchResult = await this.get(`/search/${userId}/listings/${lat},${lng}`);
      return {
        status: 'OK',
        searchKey: searchResult.searchKey,
        result: searchResult.listings
      }
    } catch (err) {
      throw new ApolloError(toError(err));
    }
  };

  searchByFilters = async (key: string, categories: string, duration: string, priceMin: number, priceMax: number, instant: boolean) => {
    return this.get(`/search/${key}/query`, {
      categories,
      duration,
      priceMin,
      priceMax,
      instant
    }).catch((err) => new ApolloError(toError(err)));
  };
}

export default SearchAPI;
