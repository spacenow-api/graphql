import { ApolloError } from "apollo-server-express";
import { toError } from "../helpers/exceptions/HttpException";
import PersonalizationAPI from "../interfaces/personalization.inteface";

class V2ListingsAPI extends PersonalizationAPI {
  private path = `/v2/listing`;

  constructor(apiAddress: string) {
    super();
    this.baseURL = apiAddress;
  }

  getV2Listing = (id: any) => {
    return this.get(`${this.path}/${id}`).catch(
      err => new ApolloError(toError(err))
    );
  };

  getV2Steps = (id: any) => {
    return this.get(`${this.path}/${id}/steps`).catch(
      err => new ApolloError(toError(err))
    );
  };

  postV2Listing = () => {
    return this.post(`${this.path}`).catch(
      err => new ApolloError(toError(err))
    );
  };

  putV2Listing = (input: any) => {
    return this.patch(`${this.path}/${input.id}`, input).catch(
      err => new ApolloError(toError(err))
    );
  };
}

export default V2ListingsAPI;
