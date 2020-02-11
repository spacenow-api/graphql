import { ApolloError } from "apollo-server-express";
import { toError } from "../helpers/exceptions/HttpException";
import PersonalizationAPI from "../interfaces/personalization.inteface";

class V2ListingsAPI extends PersonalizationAPI {
  private path = `/v2`;

  constructor(apiAddress: string) {
    super();
    this.baseURL = apiAddress;
  }

  getV2Steps = (id: any) => {
    return this.get(`${this.path}/listing/${id}/steps`).catch(
      err => new ApolloError(toError(err))
    );
  };

  getV2Rules = () => {
    return this.get(`${this.path}/rules`).catch(
      err => new ApolloError(toError(err))
    );
  };

  getV2Amenities = () => {
    return this.get(`${this.path}/amenities`).catch(
      err => new ApolloError(toError(err))
    );
  };

  getV2Features = () => {
    return this.get(`${this.path}/features`).catch(
      err => new ApolloError(toError(err))
    );
  };

  getV2Category = (id: any) => {
    return this.get(`${this.path}/category/${id}`).catch(
      err => new ApolloError(toError(err))
    );
  };

  getV2RootCategories = () => {
    return this.get(`${this.path}/root-categories`).catch(
      err => new ApolloError(toError(err))
    );
  };

  getV2Cancellations = () => {
    return this.get(`${this.path}/cancellations`).catch(
      err => new ApolloError(toError(err))
    );
  };

  getV2Listing = (id: any) => {
    return this.get(`${this.path}/listing/${id}`).catch(
      err => new ApolloError(toError(err))
    );
  };

  postV2Listing = () => {
    return this.post(`${this.path}/listing`).catch(
      err => new ApolloError(toError(err))
    );
  };

  putV2Listing = async (input: any) => {
    return await this.patch(
      `${this.path}/listing/${input.id}`,
      new Object({ ...input })
    ).catch(err => new ApolloError(toError(err)));
  };

  postV2Location = async (input: any) => {
    return await this.post(
      `${this.path}/location`,
      new Object({ ...input })
    ).catch(err => new ApolloError(toError(err)));
  };
}

export default V2ListingsAPI;
