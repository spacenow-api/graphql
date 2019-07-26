import PersonalizationAPI from '../interfaces/personalization.inteface';

import * as _ from '../interfaces/availabilities.interface';

class AvailabilitiesAPI extends PersonalizationAPI {
  constructor(apiAddress: string) {
    super();
    this.baseURL = apiAddress;
  }

  getAvailabilitiesByListingId = async (id: number): Promise<_.IAvailabilitiesResponse> => {
    return this.get(`/getByListing/${id}`);
  };
}

export default AvailabilitiesAPI;
