import PersonalizationAPI from '../interfaces/personalization.inteface';

import * as _ from '../interfaces/availabilities.interface';

class AvailabilitiesAPI extends PersonalizationAPI {
  constructor(gatewayHost: string) {
    super();
    this.baseURL = gatewayHost;
  }

  getAvailabilitiesByListingId = async (id: number): Promise<_.IAvailabilitiesResponse> => {
    return this.get(`/availabilities/${id}`);
  };
}

export default AvailabilitiesAPI;
