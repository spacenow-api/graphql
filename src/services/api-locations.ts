import { ApolloError } from 'apollo-server';

import { toError } from './../helpers/exceptions/HttpException';

import PersonalizationAPI from '../interfaces/personalization.inteface';
import { ILocationRequest } from '../interfaces/location.interface';

class LocationsAPI extends PersonalizationAPI {

  constructor(gatewayHost: string) {
    super();
    this.baseURL = gatewayHost;
  }

  getLocationById = async (id: number) => {
    return this.get(`/locations/${id}`);
  };

  getOrCreateLocation = async (location: ILocationRequest) => {
    return this.post('/locations', location).catch((err) => new ApolloError(toError(err)));
  };
}

export default LocationsAPI;
