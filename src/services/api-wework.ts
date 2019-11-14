import { ApolloError } from 'apollo-server-express';

import { toError } from '../helpers/exceptions/HttpException';

import PersonalizationAPI from '../interfaces/personalization.inteface';
import { IWeWork } from 'interfaces/integrations.interface';

import { WEWORK_API_KEY } from '../config'


class WeWorkAPI extends PersonalizationAPI {

  constructor(apiAddress: string) {
    super();
    this.baseURL = apiAddress;
  }

  createWeWorkReferral = async (wework: IWeWork) => {
    return this.post(`/`, wework, { headers: { token: WEWORK_API_KEY }}).catch(
      err => new ApolloError(toError(err))
    );
  };

}


export default WeWorkAPI;
