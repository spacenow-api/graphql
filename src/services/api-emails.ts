import { IEmail } from '../interfaces';
import PersonalizationAPI from '../interfaces/personalization.inteface';
import { ApolloError } from "apollo-server";
import { toError } from "./../helpers/exceptions/HttpException";

class EmailsAPI extends PersonalizationAPI {
  private path = '/email/send';

  constructor(apiAddress: string) {
    super();
    this.baseURL = apiAddress;
  }

  sendEmail = async (email: IEmail): Promise<IEmail>  => {
    return this.post(`${this.path}`, email).catch(
      err => new ApolloError(toError(err))
    );
  };

}

export default EmailsAPI;
