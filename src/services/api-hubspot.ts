import { ApolloError } from 'apollo-server';

import { toError } from '../helpers/exceptions/HttpException';

import PersonalizationAPI from '../interfaces/personalization.inteface';
import { IWeWork } from 'interfaces/integrations.interface';
import { HUBSPOT_PORTAL_ID, HUBSPOT_FORM_GUID } from '../config'


class HubSpotAPI extends PersonalizationAPI {

  constructor(apiAddress: string) {
    super();
    this.baseURL = apiAddress;
  }

  sendHubSpotForm = async (hubspot: IWeWork) => {
    const queryParams =  `?email=${hubspot.email}
                          &name=${hubspot.name}
                          &phone=${hubspot.phone}
                          &city=${hubspot.city}
                          &company=${hubspot.company_name}
                          &desks_estimated=${hubspot.desks_estimated}
                          &requested_move_in_date=${hubspot.requested_move_in_date}
                          &notes=${hubspot.notes}`

    return this.post(`/uploads/form/v2/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}${queryParams}`).catch(
      err => new ApolloError(toError(err))
    );
  };

}

export default HubSpotAPI;
