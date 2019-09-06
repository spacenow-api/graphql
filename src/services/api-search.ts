import { ApolloError } from "apollo-server";

import { toError } from "./../helpers/exceptions/HttpException";

import PersonalizationAPI from '../interfaces/personalization.inteface';

import * as _ from "../interfaces/listing.interface";

class SearchAPI extends PersonalizationAPI {

  constructor(apiAddress: string) {
    super();
    this.baseURL = apiAddress;
  }

  searchByAddress = async (lat: string, lng: string) => {
    return this.get(`/search/listings/${lat},${lng}`).catch((err) => new ApolloError(toError(err)));
  };

  searchByFilters = async (key: string, categories: string, duration: string, priceMin: number, priceMax: number, instant: string, page: number) => {
    return this.post(`/search/${key}/query`, {
      categories,
      duration,
      priceMin,
      priceMax,
      instant,
      page
    }).catch((err) => new ApolloError(toError(err)));
  };
}

export default SearchAPI;
