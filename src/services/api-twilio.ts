import twilio from 'twilio'

import PersonalizationAPI from '../interfaces/personalization.inteface';

import { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_FROM } from '../config'

class TwilioAPI extends PersonalizationAPI {

  constructor() {
    super();
  }

  sendMessage = async (to: string, body: string) => {
    return twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN).messages.create({
      to,
      from: TWILIO_PHONE_FROM,
      body
    }).then(response => console.log(response)).catch(error => console.log(error));
  }

}


export default TwilioAPI;
