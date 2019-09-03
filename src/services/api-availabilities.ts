import PersonalizationAPI from '../interfaces/personalization.inteface';

import * as _ from '../interfaces/availabilities.interface';

class AvailabilitiesAPI extends PersonalizationAPI {
  private path = '/availabilities';

  constructor(apiAddress: string) {
    super();
    this.baseURL = apiAddress;
  }

  getAvailabilitiesByListingId = async (id: number): Promise<_.IAvailabilitiesResponse> => {
    return this.get(`${this.path}/getByListing/${id}`);
  };
}

export default AvailabilitiesAPI;
