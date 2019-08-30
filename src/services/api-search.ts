import { ApolloError } from "apollo-server";

import { toError } from "./../helpers/exceptions/HttpException";

import PersonalizationAPI from '../interfaces/personalization.inteface';

import { ListingsAPI, LocationsAPI, UsersAPI } from './';

import * as _ from "../interfaces/listing.interface";

class SearchAPI extends PersonalizationAPI {

  constructor(apiAddress: string) {
    super();
    this.baseURL = apiAddress;
  }

  private getListings = async (ids: Array<number>, listingsAPI: ListingsAPI, locationsAPI: LocationsAPI, usersAPI: UsersAPI): Promise<Array<any>> => {
    try {
      const listingsArray = [];
      for (const id of ids) {
        const listingData = await listingsAPI.fetchWholeListing(id.toString(), locationsAPI, usersAPI, false);
        listingsArray.push(listingData);
      }
      return listingsArray;
    } catch (err) {
      throw new ApolloError(toError(err));
    }
  }

  searchByAddress = async (lat: string, lng: string, userId: string, listingsAPI: ListingsAPI, locationsAPI: LocationsAPI, usersAPI: UsersAPI) => {
    try {
      const listingIds: Array<number> = await this.get(`/search/${lat},${lng}/listings`);
      if (!listingIds || listingIds.length <= 0)
        return { status: 'empty', result: [] };
      const listings = await this.getListings(listingIds, listingsAPI, locationsAPI, usersAPI);
      const response = await this.post(`/search/${lat},${lng}/store`, { userId, listings });
      return {
        status: 'OK',
        searchKey: response.searchKey,
        result: listings
      }
    } catch (err) {
      throw new ApolloError(toError(err));
    }
  };

  searchByFilters = async (key: string, categories: string, duration: string, priceMin: number, priceMax: number, instant: boolean) => {
    return this.get(`/search/query/${key}`, {
      categories,
      duration,
      priceMin,
      priceMax,
      instant
    }).catch((err) => new ApolloError(toError(err)));
  };
}

export default SearchAPI;
