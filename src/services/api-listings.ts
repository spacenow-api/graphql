import { ApolloError } from "apollo-server";

import { toError } from "./../helpers/exceptions/HttpException";

import { LocationsAPI, UsersAPI } from "./../services";

import PersonalizationAPI from "../interfaces/personalization.inteface";

import * as _ from "../interfaces/listing.interface";

class ListingsAPI extends PersonalizationAPI {
  constructor(apiAddress: string) {
    super();
    this.baseURL = apiAddress;
  }

  public fetchWholeListing = async (
    listingId: string,
    locationsAPI: LocationsAPI,
    usersAPI: UsersAPI,
    isPublic: boolean
  ): Promise<_.IListingResponse> => {
    try {
      const listingObj = await this.getListingById(listingId, true, isPublic);
      const listingDataObj = (id: string) => this.getListingDataByListingId(id);
      const locationObj = (id: number) => locationsAPI.getLocationById(id);
      const settingsObj = (id: string) =>
        this.getListingSettingsByListingId(id);
      const amenitiesArray = (id: string) =>
        this.getListingAmenitiesByListingId(id);
      const photosArray = (id: string) => this.getPhotosByListingId(id);
      const rulesArray = (id: string) => this.getListingRulesByListingId(id);
      const accessDaysObj = (id: string) =>
        this.getListingAccessDaysByListingId(id);
      const userObj = (id: string) => usersAPI.getUserLegacyById(id);
      return Promise.all([
        listingDataObj(listingId),
        locationObj(listingObj.locationId),
        settingsObj(listingId),
        amenitiesArray(listingId),
        photosArray(listingId),
        rulesArray(listingId),
        accessDaysObj(listingId),
        userObj(listingObj.userId)
      ]).then(values => {
        return {
          ...listingObj,
          listingData: values[0],
          location: values[1],
          settingsParent: values[2],
          amenities: values[3],
          photos: values[4],
          rules: values[5],
          accessDays: values[6],
          user: values[7]
        };
      });
    } catch (err) {
      throw new ApolloError(toError(err));
    }
  };

  getListingById = async (
    id: string,
    cleanCache: boolean = false,
    isPublic: boolean
  ): Promise<_.IListingResponse> => {
    if (cleanCache) this.memoizedResults.clear();
    return isPublic
      ? this.get(`/listings/public/${id}`)
      : this.get(`/listings/${id}`);
  };

  getListingDataByListingId = async (
    listingId: string
  ): Promise<_.IListingDataResponse> => {
    return this.get(`/listings/data/${listingId}`).catch(
      err => new ApolloError(toError(err))
    );
  };

	getLetterListingsByState = async (state: string, locationsAPI: LocationsAPI, usersAPI: UsersAPI): Promise<Array<any>> => {
		const listingsArray: Array<_.IListingResponse> = await this.get(`/listings/letter/state/${state}`);
		try {
			return listingsArray.map(o => this.fetchWholeListing(o.id.toString(), locationsAPI, usersAPI, true));
		} catch (err) {
			throw new ApolloError(toError(err));
		}
	};

	getListingSettingsByListingId = async (
		listingId: string,
	): Promise<_.IListingSettingsResponse> => {
		return this.get(`/listings/settings/${listingId}`).catch(
			err => new ApolloError(toError(err)),
		);
	};

  getListingSpecificationsByParentId = async (
    listSettingsParentId: string
  ): Promise<_.IListingSettingsResponse> => {
    return this.get(
      `/listings/settings/specifications/${listSettingsParentId}`
    ).catch(err => new ApolloError(toError(err)));
  };

  getListingAccessDaysByListingId = async (
    listingId: string
  ): Promise<_.IListingAccessDaysResponse> => {
    return this.get(`/listings/access/${listingId}`).catch(
      err => new ApolloError(toError(err))
    );
  };

  getListingAmenitiesByListingId = async (
    listingId: string
  ): Promise<_.IListingAmenitiesResponse> => {
    return this.get(`/listings/amenities/${listingId}`).catch(
      err => new ApolloError(toError(err))
    );
  };

  getListingRulesByListingId = async (
    listingId: string
  ): Promise<_.IListingRulesResponse> => {
    return this.get(`/listings/rules/${listingId}`).catch(
      err => new ApolloError(toError(err))
    );
  };

  getAllAmenitiesBySubCategoryId = async (
    subCategoryId: number
  ): Promise<_.IListingSettingsResponse> => {
    return this.get(`/listings/fetch/amenities/${subCategoryId}`).catch(
      err => new ApolloError(toError(err))
    );
  };

  getAllRules = async (): Promise<_.IListingSettingsResponse> => {
    return this.get(`/listings/fetch/rules`).catch(
      err => new ApolloError(toError(err))
    );
  };

  getAllAccessTypes = async (): Promise<_.IListingSettingsResponse> => {
    return this.get(`/listings/fetch/accesstypes`).catch(
      err => new ApolloError(toError(err))
    );
  };

  getPhotosByListingId = async (
    listingId: string
  ): Promise<_.IListingPhotosResponse> => {
    return this.get(`/listings/photos/${listingId}`).catch(
      err => new ApolloError(toError(err))
    );
  };

  createDraft = async (listing: _.IDraftRequest) => {
    return this.post(`/listings/draft`, listing).catch(
      err => new ApolloError(toError(err))
    );
  };

  update = async (listing: _.IUpdateRequest) => {
    return await this.put(`/listings/update`, listing).catch(
      err => new ApolloError(toError(err))
    );
  };

  publish = async (listingId: number, status: boolean) => {
    return this.put(`/listings/${listingId}/publish/${status}`).catch(
      err => new ApolloError(toError(err))
    );
  };
}

export default ListingsAPI;
