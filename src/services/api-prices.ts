import PersonalizationAPI from '../interfaces/personalization.inteface';

import { IPriceEstimation } from '../interfaces/prices.interface';

import estimationsData from './../helpers/data/estimations';

class PricesAPI extends PersonalizationAPI {

  constructor(apiAddress: string) {
    super();
    this.baseURL = apiAddress;
  }

  list = async (type: string): Promise<Array<IPriceEstimation>> => {
    return estimationsData.filter(o => o.type === type);
  };
}

export default PricesAPI;
