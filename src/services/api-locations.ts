import PersonalizationAPI from '../interfaces/personalization.inteface';

import {
  ILocationRequest,
  ILocationResponse
} from '../interfaces/location.interface';

class LocationsAPI extends PersonalizationAPI {
  constructor(gatewayHost: string) {
    super();
    this.baseURL = gatewayHost;
  }

  getLocationById = async (id: number) => {
    return this.get(`/locations/${id}`);
  };

  getOrCreateLocation = async (
    location: ILocationRequest
  ): Promise<ILocationResponse> => {
    return this.post('/locations', location);
  };
}

export default LocationsAPI;
