import { ApolloError } from 'apollo-server-express'

import { toError } from './../helpers/exceptions/HttpException'

import { LocationsAPI, UsersAPI } from './../services'

import PersonalizationAPI from '../interfaces/personalization.inteface'

import * as config from '../config'

import * as _ from '../interfaces/listing.interface'
import { IInspection } from 'interfaces'

class ListingsAPI extends PersonalizationAPI {
  constructor(apiAddress: string) {
    super()
    this.baseURL = apiAddress
  }

  public fetchWholeListing = async (
    listingId: string,
    locationsAPI: LocationsAPI,
    usersAPI: UsersAPI,
    isPublic: boolean
  ): Promise<_.IListingResponse> => {
    try {
      const listingObj = await this.getListingById(listingId, true, isPublic)
      const listingDataObj = (id: string) => this.getListingDataByListingId(id)
      const locationObj = (id: number) => locationsAPI.getLocationById(id)
      const settingsObj = (id: string) => this.getListingSettingsByListingId(id)
      const amenitiesArray = (id: string) => this.getAllAmenitiesByListingId(id)
      const photosArray = (id: string) => this.getPhotosByListingId(id)
      const rulesArray = (id: string) => this.getListingRulesByListingId(id)
      const accessDaysObj = (id: string) => this.getListingAccessDaysByListingId(id)
      const userObj = (id: string) => usersAPI.getUserLegacyById(id)
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
        }
      })
    } catch (err) {
      throw new ApolloError(toError(err))
    }
  }

  getAllPlainListings = async (page: number, limit: number) => {
    return this.get(`/listings?page=${page}&limit=${limit}`).catch(err => new ApolloError(toError(err)))
  }

  getAllListings = async () => {
    return this.get(`/listings/count/all`).catch(err => new ApolloError(toError(err)))
  }

  getAllListingsByDate = async (days: number, category: number): Promise<any> => {
    return this.get(`/listings/count/date?days=${days}&category=${category}`).catch(
      err => new ApolloError(toError(err))
    )
  }

  getAllListingsByCategory = async (category: string): Promise<any> => {
    return this.get(`/listings/count/category?category=${category}`).catch(err => new ApolloError(toError(err)))
  }

  getListingsCategories = async (): Promise<any> => {
    return this.get(`/listings/count/categories`).catch(err => new ApolloError(toError(err)))
  }

  getAllListingsByUser = async (userId: string): Promise<_.IListingSettingsResponse> => {
    return this.get(`/listings/user/${userId}`).catch(err => new ApolloError(toError(err)))
  }

  getListingById = async (id: string, cleanCache: boolean = false, isPublic: boolean): Promise<_.IListingResponse> => {
    if (cleanCache) this.memoizedResults.clear()
    return isPublic ? this.get(`/listings/public/${id}`) : this.get(`/listings/${id}`)
  }

  getListingDataByListingId = async (listingId: string): Promise<_.IListingDataResponse> => {
    return this.get(`/listings/data/${listingId}`).catch(err => new ApolloError(toError(err)))
  }

  getLetterListingsByState = async (
    state: string,
    locationsAPI: LocationsAPI,
    usersAPI: UsersAPI
  ): Promise<Array<any>> => {
    const listingsArray: Array<_.IListingResponse> = await this.get(`/listings/letter/state/${state}`)
    try {
      return listingsArray.map(o => this.fetchWholeListing(o.id.toString(), locationsAPI, usersAPI, true))
    } catch (err) {
      throw new ApolloError(toError(err))
    }
  }

  getListingSettingsByListingId = async (listingId: string): Promise<_.IListingSettingsResponse> => {
    return this.get(`/listings/settings/${listingId}`).catch(err => new ApolloError(toError(err)))
  }

  getListingSpecificationsByParentId = async (listSettingsParentId: string): Promise<_.IListingSettingsResponse> => {
    return this.get(`/listings/settings/specifications/${listSettingsParentId}`).catch(
      err => new ApolloError(toError(err))
    )
  }

  getListingAccessDaysByListingId = async (listingId: string): Promise<_.IListingAccessDaysResponse> => {
    return this.get(`/listings/access/${listingId}`).catch(err => new ApolloError(toError(err)))
  }

  getAllAmenitiesByListingId = async (listingId: string): Promise<_.IListingAmenitiesResponse> => {
    return this.get(`/listings/amenities/${listingId}`).catch(err => new ApolloError(toError(err)))
  }

  getListingRulesByListingId = async (listingId: string): Promise<_.IListingRulesResponse> => {
    return this.get(`/listings/rules/${listingId}`).catch(err => new ApolloError(toError(err)))
  }

  getAllAmenitiesBySubCategoryId = async (subCategoryId: number): Promise<_.IListingSettingsResponse> => {
    return this.get(`/listings/fetch/amenities/${subCategoryId}`).catch(err => new ApolloError(toError(err)))
  }

  getAllRules = async (): Promise<_.IListingSettingsResponse> => {
    return this.get(`/listings/fetch/rules`).catch(err => new ApolloError(toError(err)))
  }

  getAllAccessTypes = async (): Promise<_.IListingSettingsResponse> => {
    return this.get(`/listings/fetch/accesstypes`).catch(err => new ApolloError(toError(err)))
  }

  getPhotosByListingId = async (listingId: string): Promise<Array<_.IListingPhotosResponse>> => {
    return this.get(`/listings/photos/${listingId}`).catch(err => new ApolloError(toError(err)))
  }

  getVideoByListingId = async (listingId: string): Promise<_.IListingPhotosResponse> => {
    return this.get(`/listings/video/${listingId}`).catch(err => new ApolloError(toError(err)))
  }

  createDraft = async (listing: _.IDraftRequest) => {
    return this.post(`/listings/draft`, listing).catch(err => new ApolloError(toError(err)))
  }

  update = async (listing: _.IUpdateRequest) => {
    return await this.put(`/listings/update`, listing).catch(err => new ApolloError(toError(err)))
  }

  removeListingById = async (listingId: string): Promise<any> => {
    return this.delete(`/listings/${listingId}`).catch(err => new ApolloError(toError(err)))
  }

  changeListingStatus = async (listingId: number, status: string): Promise<any> => {
    return this.put(`/listings/${listingId}/status/${status}`).catch(err => new ApolloError(toError(err)))
  }

  publish = async (listingId: number, status: boolean) => {
    return this.put(`/listings/${listingId}/publish/${status}`).catch(err => new ApolloError(toError(err)))
  }

  claimListing = async (listingId: number) => {
    return this.put(`/listings/claim/${listingId}`).catch(err => new ApolloError(toError(err)))
  }

  getPublicReviews = async (listingId: number, page: number, pageSize: number): Promise<Array<_.IReviews>> => {
    return this.get(`/listing/${listingId}/reviews?page=${page}&pageSize=${pageSize}`).catch(
      err => new ApolloError(toError(err))
    )
  }

  getGoogleReviews = async (placeId: string): Promise<Array<any>> => {
    return this.get(
      `${config.GOOGLE_PLACE_API_URL}${placeId}&fields=rating,reviews&key=${config.GOOGLE_MAP_API}`
    ).catch(err => new ApolloError(toError(err)))
  }

  getPrivateReviews = async (listingId: number): Promise<Array<_.IReviews>> => {
    return this.get(`/listing/${listingId}/reviews/private`).catch(err => new ApolloError(toError(err)))
  }

  createReviewFromGuest = async (
    bookingId: string,
    publicComment: string,
    privateComment: string,
    ratingOverall: number,
    ratingCheckIn: number,
    ratingHost: number,
    ratingValue: number,
    ratingCleanliness: number,
    ratingLocation: number
  ): Promise<any> => {
    return this.post(`/listing/${bookingId}/reviews`, {
      publicComment,
      privateComment,
      ratingOverall,
      ratingCheckIn,
      ratingHost,
      ratingValue,
      ratingCleanliness,
      ratingLocation
    }).catch(err => new ApolloError(toError(err)))
  }

  createReviewFromHost = async (bookingId: string, publicComment: string, ratingOverall: number): Promise<any> => {
    return this.post(`/listing/${bookingId}/reviews`, {
      publicComment,
      ratingOverall,
      isAdmin: 1
    }).catch(err => new ApolloError(toError(err)))
  }

  getExternalClicksByUser = async (userId: string) => {
    return this.get(`/external/clicks/${userId}`).catch(err => new ApolloError(toError(err)))
  }

  saveClicksByListing = async (listingId: Number) => {
    return this.post(`/external/clicks`, { listingId }).catch(err => new ApolloError(toError(err)))
  }

  fetchAddonsByListing = async (listingId: number) => {
    return this.get(`/addons/listing/${listingId}`).catch(err => new ApolloError(toError(err)))
  }

  createAddon = async (listingId: number, description: string, value: number) => {
    return this.post('/addons/listing', { listingId, description, value }).catch(err => new ApolloError(toError(err)))
  }

  deleteAddon = async (id: string) => {
    return this.delete(`/addons/listing/${id}`).catch(err => new ApolloError(toError(err)))
  }

  fetchAddonsBySubCategory = async (listSettingsId: number) => {
    return this.get(`/addons/suggestion/${listSettingsId}`).catch(err => new ApolloError(toError(err)))
  }

  createAddonSuggestion = async (listSettingsId: number, description: string) => {
    return this.post('/addons/suggestion', { listSettingsId, description }).catch(err => new ApolloError(toError(err)))
  }

  deleteAddonSuggestion = async (id: string) => {
    return this.delete(`/addons/suggestion/${id}`).catch(err => new ApolloError(toError(err)))
  }

  fetchAddonsByBooking = async (bookingId: string) => {
    return this.get(`/addons/booking/${bookingId}`).catch(err => new ApolloError(toError(err)))
  }

  setAddonOnBooking = async (bookingId: string, addonId: string) => {
    return this.put('/addons/booking/set', { bookingId, addonId }).catch(err => new ApolloError(toError(err)))
  }

  removeAddonFromBooking = async (bookingId: string, addonId: string) => {
    return this.put('/addons/booking/remove', { bookingId, addonId }).catch(err => new ApolloError(toError(err)))
  }

  getInspections = async () => {
    return this.get('/inspections').catch(err => new ApolloError(toError(err)))
  }

  createInspection = async (listingId: any, messageId: any, guestId: any, date: any, time: any) => {
    return this.post('/inspection', { listingId, messageId, guestId, date, time }).catch(
      err => new ApolloError(toError(err))
    )
  }

  updateInspection = async (id: any, status: any) => {
    return this.put('/inspection', { id, status }).catch(err => new ApolloError(toError(err)))
  }

  getSavedListingsByUser = async (userId: string) => {
    return this.get(`/saved-listings/${userId}`).catch(err => new ApolloError(toError(err)))
  }

  createSavedListing = async (listingId: number, userId: string) => {
    return this.post('/saved-listing', { listingId, userId }).catch(err => new ApolloError(toError(err)))
  }

  checkSavedListingByUser = async (listingId: string, userId: string) => {
    return this.get(`/saved-listing/${userId}/${listingId}`).catch(err => new ApolloError(toError(err)))
  }

  removeSavedListingByUser = async (listingId: string, userId: string) => {
    return this.delete(`/saved-listing/${userId}/${listingId}`).catch(err => new ApolloError(toError(err)))
  }
}

export default ListingsAPI
