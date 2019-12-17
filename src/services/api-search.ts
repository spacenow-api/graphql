import { ApolloError } from "apollo-server-express";

import { toError } from "./../helpers/exceptions/HttpException";

import PersonalizationAPI from '../interfaces/personalization.inteface';

import * as _ from "../interfaces/listing.interface";

class SearchAPI extends PersonalizationAPI {

  constructor(apiAddress: string) {
    super();
    this.baseURL = apiAddress;
  }

  searchByAddress = async (lat: string, lng: string, categories: string, duration: string, priceMin: number, priceMax: number, instant: string, page: number, limit: number, radius: number, availability: Array<string>) => {
    return this.post(`/search/listings/${lat},${lng}`, {
      categories,
      duration,
      priceMin,
      priceMax,
      instant,
      page,
      limit,
      radius,
      availability
    }).catch((err) => new ApolloError(toError(err)));
  };

  searchByFilters = async (key: string, categories: string, duration: string, priceMin: number, priceMax: number, instant: string, page: number, limit: number, radius: number, availability: Array<string>) => {
    return this.post(`/search/${key}/query`, {
      categories,
      duration,
      priceMin,
      priceMax,
      instant,
      page,
      limit,
      radius,
      availability
    }).catch((err) => new ApolloError(toError(err)));
  };

  searchSimilarSpaces = async (listingId: number) => {
    return this.get(`/search/${listingId}/similar`).catch((err) => new ApolloError(toError(err)));
  }
}

export default SearchAPI;
