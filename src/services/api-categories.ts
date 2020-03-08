import { ICategory } from "../interfaces";
import PersonalizationAPI from "../interfaces/personalization.inteface";
import { ApolloError } from "apollo-server-express";
import { toError } from "./../helpers/exceptions/HttpException";

class CategoriesAPI extends PersonalizationAPI {
  private path = "/categories";

  constructor(apiAddress: string) {
    super();
    this.baseURL = apiAddress;
  }

  getCategories = async (): Promise<ICategory> => {
    return this.get(`${this.path}`);
  };

  getCategoryActivities = async (id: number): Promise<any> => {
    return this.get(`/v2/category/${id}/activities`).catch(err => new ApolloError(toError(err)));
  };

  getCategorySpecifications = async (id: number): Promise<any> => {
    return this.get(`/v2/category/${id}/specifications`).catch(err => new ApolloError(toError(err)));
  };

  getCategoryFeatures = async (id: number): Promise<any> => {
    return this.get(`/v2/category/${id}/features`).catch(err => new ApolloError(toError(err)));
  };

  getCategoryStyles = async (id: number): Promise<any> => {
    return this.get(`/v2/category/${id}/styles`).catch(err => new ApolloError(toError(err)));
  };

  getCategoryRules = async (id: number): Promise<any> => {
    return this.get(`/v2/category/${id}/rules`).catch(err => new ApolloError(toError(err)));
  };

  getCategoryAmenities = async (id: number): Promise<any> => {
    return this.get(`/v2/category/${id}/amenities`).catch(err => new ApolloError(toError(err)));
  };

  getCategoryAccess = async (id: number): Promise<any> => {
    return this.get(`/v2/category/${id}/access`).catch(err => new ApolloError(toError(err)));
  };

  getCategoryCheckinTypes = async (id: number): Promise<any> => {
    return this.get(`/v2/category/${id}/checkin-types`).catch(err => new ApolloError(toError(err)));
  };

  getCategoryBookingPeriod = async (id: number): Promise<any> => {
    return this.get(`/v2/category/${id}/booking-period`).catch(err => new ApolloError(toError(err)));
  };
}

export default CategoriesAPI;
