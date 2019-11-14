import { ApolloError } from 'apollo-server-express';

import { toError } from './../helpers/exceptions/HttpException';

import PersonalizationAPI from '../interfaces/personalization.inteface';
import { ILocationRequest } from '../interfaces/location.interface';

class LocationsAPI extends PersonalizationAPI {

  constructor(apiAddress: string) {
    super();
    this.baseURL = apiAddress;
  }

  getLocationById = async (id: number) => {
    return this.get(`/locations/${id}`).catch((err) => new ApolloError(toError(err)));
  };

  getOrCreateLocation = async (location: ILocationRequest) => {
    return this.post('/locations', location).catch((err) => new ApolloError(toError(err)));
  };
}

export default LocationsAPI;
