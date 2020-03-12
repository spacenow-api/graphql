import { IEmail } from "../interfaces";
import PersonalizationAPI from "../interfaces/personalization.inteface";
import { ApolloError } from "apollo-server-express";
import { toError } from "./../helpers/exceptions/HttpException";

class EmailsAPI extends PersonalizationAPI {
  private path = "/email";

  constructor(apiAddress: string) {
    super();
    this.baseURL = apiAddress;
  }

  sendEmail = async (email: IEmail): Promise<IEmail> => {
    return this.post(`${this.path}/send`, email).catch(err => new ApolloError(toError(err)));
  };

  sendEmailReferral = async (data: any, listingId: any): Promise<any> => {
    return this.post(`${this.path}/listing/${listingId}/referral`, data).catch(err => new ApolloError(toError(err)));
  };
}

export default EmailsAPI;
