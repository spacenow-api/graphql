import PersonalizationAPI from '../interfaces/personalization.inteface';

class LocationsAPI extends PersonalizationAPI {
  constructor(gatewayHost: string) {
    super();
    this.baseURL = gatewayHost;
  }

  getLocationById = async (id: number) => {
    return this.get(`/locations/${id}`);
  };
}

export default LocationsAPI;
