import PersonalizationAPI from '../interfaces/personalization.inteface';

import { IPriceEstimationList, IPriceEstimation } from '../interfaces/prices.interface';

class PricesAPI extends PersonalizationAPI {

  constructor(apiAddress: string) {
    super();
    this.baseURL = apiAddress;
  }

  list = async (): Promise<Array<IPriceEstimation>> => {
    const estimations: IPriceEstimationList = await this.get(`/list`);
    if (estimations)
      return estimations.results;
    return [];
  };
}

export default PricesAPI;
