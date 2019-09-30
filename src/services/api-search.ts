import { ApolloError } from "apollo-server";

import { toError } from "./../helpers/exceptions/HttpException";

import PersonalizationAPI from '../interfaces/personalization.inteface';

import * as _ from "../interfaces/listing.interface";

class SearchAPI extends PersonalizationAPI {

  constructor(apiAddress: string) {
    super();
    this.baseURL = apiAddress;
  }

  searchByAddress = async (lat: string, lng: string, categories: string, duration: string, priceMin: number, priceMax: number, instant: string, page: number, limit: number, radius: number) => {
    return this.post(`/search/listings/${lat},${lng}`, {
      categories,
      duration,
      priceMin,
      priceMax,
      instant,
      page,
      limit,
      radius
    }).catch((err) => new ApolloError(toError(err)));
  };

  searchByFilters = async (key: string, categories: string, duration: string, priceMin: number, priceMax: number, instant: string, page: number, limit: number, radius: number) => {
    return this.post(`/search/${key}/query`, {
      categories,
      duration,
      priceMin,
      priceMax,
      instant,
      page,
      limit,
      radius
    }).catch((err) => new ApolloError(toError(err)));
  };
}

export default SearchAPI;
