import { ApolloError } from 'apollo-server';

import { toError } from './../helpers/exceptions/HttpException';

import PersonalizationAPI from '../interfaces/personalization.inteface';
import IWeWork from 'interfaces/integrations.interface';

// 3rd party integrations
class IntegrationsAPI extends PersonalizationAPI {

  constructor() {
    super();
    // this.baseURL = '';
  }

  getWeWorkReferrals = async () => {
    return this.get('https://refer.wework.com/api/v1/partners/referrals', { headers: { token: '123' }}).catch((err) => new ApolloError(toError(err)));
  };

  createWeWorkReferral = async (wework: IWeWork) => {
    return this.post('https://refer.wework.com/api/v1/partners/referrals', wework, { headers: { token: '123' }}).catch((err) => new ApolloError(toError(err)));
  };
}


export default IntegrationsAPI;
