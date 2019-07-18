import { UserInputError } from "apollo-server";
import axios from "axios";
import moment from "moment";
import GraphQLUpload from "graphql-upload";

import * as config from "./../config";

import {
  IHolidayResponse,
  IListingResponse,
  IUpdateRequest,
  IDraftRequest
} from "./../interfaces";

const resolvers = {
  Upload: GraphQLUpload,
  Query: {
    getAllAssets: async (_: any, args: any, { dataSources }: any) => {
      return await dataSources.assetsAPI.getAllAssets();
    },

    getAsset: async (_: any, args: any, { dataSources }: any) => {
      return await dataSources.assetsAPI.getAsset(args.id);
    },

    getAvailabilitiesByListingId: async (
      _: any,
      args: any,
      { dataSources }: any
    ) => {
      const { availabilitiesAPI } = dataSources;
      const {
        availability
      } = await availabilitiesAPI.getAvailabilitiesByListingId(args.listingId);
      return {
        bookingDates: availability.bookingDates,
        exceptionDates: availability.exceptionDates
      };
    },

    getAllBookings: async (_: any, args: any, { dataSources }: any) => {
      return await dataSources.bookingsAPI.getAllBookings();
    },

    getBooking: async (_: any, args: any, { dataSources }: any) => {
      return await dataSources.bookingsAPI.getBooking();
    },

    getCategoriesLegacy: async (_: any, args: any, { dataSources }: any) => {
      return await dataSources.categoriesAPI.getCategoriesLegacy();
    },

    getCategory: async (_: any, args: any, { dataSources }: any) => {
      return await dataSources.categoriesAPI.getCategory(args.id);
    },

    getRootCategories: async (_: any, args: any, { dataSources }: any) => {
      return await dataSources.categoriesAPI.getRootCategories();
    },

    getAllHolidays: async (_: any, args: any, { dataSources }: any) => {
      const response = await axios.get(config.HOLIDAYS_HOST);
      const data: IHolidayResponse = response.data;
      const holidays = data.result.records
        .filter(o => !o.Jurisdiction.indexOf(args.state.toLowerCase()))
        .map(o => ({
          date: moment(o["Date"], "YYYYMMDD").format("YYYY-MM-DD"),
          description: o["Holiday Name"]
        }));
      if (holidays) {
        return holidays;
      }
      return {
        status: "failed to get Holidays"
      };
    },

    getListingById: async (_: any, args: any, { dataSources }: any) => {
      const { listingsAPI, locationsAPI } = dataSources;

      const listingObj = await listingsAPI.getListingById(args.id);

      const listingDataObj = (id: number) =>
        listingsAPI.getListingDataByListingId(id);
      const locationObj = (id: number) => locationsAPI.getLocationById(id);
      const settingsObj = (id: number) =>
        listingsAPI.getListingSettingsByListingId(id);
      const amenitiesArray = (id: number) =>
        listingsAPI.getListingAmenitiesByListingId(id);
      const rulesArray = (id: number) =>
        listingsAPI.getListingRulesByListingId(id);
      const accessDaysObj = (id: number) =>
        listingsAPI.getListingAccessDaysByListingId(id);

      return Promise.all([
        listingDataObj(args.id),
        locationObj(listingObj.locationId),
        settingsObj(args.id),
        amenitiesArray(args.id),
        rulesArray(args.id),
        accessDaysObj(args.id)
      ]).then(values => {
        return {
          ...listingObj,
          listingData: values[0],
          location: values[1],
          settingsParent: values[2],
          amenities: values[3],
          rules: values[4],
          accessDays: values[5]
        };
      });
    },

    getLocationById: async (_: any, args: any, { dataSources }: any) => {
      return await dataSources.locationsAPI.getLocationById(args.id);
    },

    getAllUsers: async (_: any, args: any, { dataSources }: any) => {
      return await dataSources.usersAPI.getAllUsers();
    },

    getUser: async (_: any, args: any, { dataSources }: any) => {
      return await dataSources.usersAPI.getUser(args.id);
    }
  },

  Mutation: {
    createAsset: async (_: any, args: any, { dataSources }: any) => {
      return await dataSources.assetsAPI.createAsset(args);
    },

    login: async (_: any, args: any, { dataSources }: any) => {
      return await dataSources.authAPI.login(args);
    },

    createCategory: async (_: any, args: any, { dataSources }: any) => {
      return await dataSources.categoriesAPI.createCategory(args);
    },

    createOrUpdateListing: async (_: any, args: any, { dataSources }: any) => {
      const { listingsAPI } = dataSources;
      let listingObj: IListingResponse;
      if (args.listingId) {
        // Update an existent Listing;
        const listingExists = await listingsAPI.getListingById(args.listingId);
        if (!listingExists) {
          throw new UserInputError(`Listing ${args.listingId} not found.`);
        }
        const requestUpdateObj: IUpdateRequest = {
          listingId: args.listingId,
          title: args.title,
          accessType: args.accessType,
          bookingNoticeTime: args.bookingNoticeTime,
          minTerm: args.minTerm,
          maxTerm: args.maxTerm,
          description: args.description,
          basePrice: args.basePrice,
          currency: args.currency,
          isAbsorvedFee: args.isAbsorvedFee,
          capacity: args.capacity,
          size: args.size,
          meetingRooms: args.meetingRooms,
          isFurnished: args.isFurnished,
          carSpace: args.carSpace,
          sizeOfVehicle: args.sizeOfVehicle,
          maxEntranceHeight: args.maxEntranceHeight,
          spaceType: args.spaceType,
          bookingType: args.bookingType,
          listingAmenities: args.listingAmenities,
          listingAccessDays: args.listingAccessDays,
          listingExceptionDates: args.listingExceptionDates,
          listingRules: args.listingRules
        };
        listingObj = await listingsAPI.update(requestUpdateObj);
      } else {
        // Considering a new listing from scratch;
        const requestDraftObj: IDraftRequest = {
          userId: args.userId,
          locationId: args.locationId,
          listSettingsParentId: args.listSettingsParentId,
          bookingPeriod: args.bookingPeriod,
          title: args.title,
          coverPhotoId: args.coverPhotoId,
          quantity: args.quantity
        };
        listingObj = await listingsAPI.createDraft(requestDraftObj);
      }
      return {
        status: `Listing ${listingObj.id} Created/Updated with success!`
      };
    },

    getOrCreateLocation: async (_: any, args: any, { dataSources }: any) => {
      const { locationsAPI } = dataSources;
      return locationsAPI.getOrCreateLocation({
        suggestAddress: args.suggestAddress
      });
    },

    tokenValidate: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.authAPI.tokenValidate({ token: args.token });
    }
  }
};

export default resolvers;
