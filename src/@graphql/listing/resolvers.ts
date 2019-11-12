import { UserInputError } from "apollo-server";
import axios from "axios";
import moment from "moment";
import GraphQLUpload from "graphql-upload";

import * as config from "../../config";

import {
  IHolidayResponse,
  IListingResponse,
  IUpdateRequest,
  IDraftRequest
} from "../../interfaces";

const resolvers = {
  Upload: GraphQLUpload,

  Listing: {
    amenities(parent: any, args: any, context: any, info: any) {
      return context.dataSources.listingsAPI.getAllAmenitiesByListingId(
        parent.id
      );
    },
    listingData(parent: any, args: any, context: any, info: any) {
      return context.dataSources.listingsAPI.getListingDataByListingId(
        parent.id
      );
    },
    location(parent: any, args: any, context: any, info: any) {
      return context.dataSources.locationsAPI.getLocationById(
        parent.locationId
      );
    },
    photos(parent: any, args: any, context: any, info: any) {
      return context.dataSources.listingsAPI.getPhotosByListingId(parent.id);
    },
    settingsParent(parent: any, args: any, context: any, info: any) {
      return context.dataSources.listingsAPI.getListingSettingsByListingId(
        parent.id
      );
    },
    accessDays(parent: any, args: any, context: any, info: any) {
      return context.dataSources.listingsAPI.getListingAccessDaysByListingId(
        parent.id
      );
    },
    user(parent: any, args: any, context: any, info: any) {
      return context.dataSources.usersAPI.getUserLegacyById(parent.userId);
    }
  },

  Query: {
    getPhotosByListingId: async (_: any, args: any, { dataSources }: any) => {
      return await dataSources.listingsAPI.getPhotosByListingId(args.listingId);
    },

    getAvailabilitiesByListingId: async (
      _: any,
      args: any,
      { dataSources }: any
    ) => {
      const {
        availability
      } = await dataSources.availabilitiesAPI.getAvailabilitiesByListingId(
        args.listingId
      );
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
      if (holidays) return holidays;
      return {
        status: "failed to get Holidays"
      };
    },

    getAllListingsByUser: async (_: any, args: any, { dataSources }: any) => {
      return await dataSources.listingsAPI.getAllListingsByUser(args.userId);
    },

    getAllListings: async (_: any, args: any, { dataSources }: any) => {
      return await dataSources.listingsAPI.getAllListings();
    },

    getTotalListingsByDate: async (_: any, args: any, { dataSources }: any) => {
      return await dataSources.listingsAPI.getAllListingsByDate(args.days, args.category);
    },

    getTotalListingsByCategory: async (_: any, args: any, { dataSources }: any) => {
      return await dataSources.listingsAPI.getAllListingsByCategory(args.category);
    },

    getListingById: async (_: any, args: any, { dataSources }: any) => {
      const { listingsAPI, locationsAPI, usersAPI } = dataSources;
      return listingsAPI.fetchWholeListing(
        args.id,
        locationsAPI,
        usersAPI,
        args.isPublic
      );
    },

    getLetterListingsByState: async (
      _: any,
      args: any,
      { dataSources }: any
    ) => {
      const { listingsAPI, locationsAPI, usersAPI } = dataSources;
      return listingsAPI.getLetterListingsByState(
        args.state,
        locationsAPI,
        usersAPI
      );
    },

    getLocationById: async (_: any, args: any, { dataSources }: any) => {
      return await dataSources.locationsAPI.getLocationById(args.id);
    },

    getAllAmenitiesBySubCategoryId: async (
      _: any,
      args: any,
      { dataSources }: any
    ) => {
      return await dataSources.listingsAPI.getAllAmenitiesBySubCategoryId(
        args.subCategoryId
      );
    },

    getAllAmenitiesByListingId: async (
      _: any,
      args: any,
      { dataSources }: any
    ) => {
      return await dataSources.listingsAPI.getAllAmenitiesByListingId(
        args.listingId
      );
    },

    getAllRules: async (_: any, args: any, { dataSources }: any) => {
      return await dataSources.listingsAPI.getAllRules();
    },

    getAllAccessTypes: async (_: any, args: any, { dataSources }: any) => {
      return await dataSources.listingsAPI.getAllAccessTypes();
    },

    getAllSpecificationsByParentId: async (
      _: any,
      args: any,
      { dataSources }: any
    ) => {
      return await dataSources.listingsAPI.getListingSpecificationsByParentId(
        args.listSettingsParentId
      );
    }
  },

  Mutation: {
    uploadPhoto: async (_: any, args: any, { dataSources }: any) => {
      return await dataSources.assetsAPI.uploadPhoto(args);
    },

    deletePhoto: async (_: any, args: any, { dataSources }: any) => {
      return await dataSources.assetsAPI.deletePhoto(args);
    },

    setCoverPhoto: async (_: any, args: any, { dataSources }: any) => {
      return await dataSources.assetsAPI.setCoverPhoto(args);
    },

    createCategory: async (_: any, args: any, { dataSources }: any) => {
      return await dataSources.categoriesAPI.createCategory(args);
    },

    createOrUpdateListing: async (_: any, args: any, { dataSources }: any) => {
      const { listingsAPI, locationsAPI, usersAPI } = dataSources;
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
          bookingPeriod: args.bookingPeriod,
          listingAmenities: args.listingAmenities,
          listingAccessDays: args.listingAccessDays,
          listingExceptionDates: args.listingExceptionDates,
          listingRules: args.listingRules
        };
        listingObj = await listingsAPI.update(requestUpdateObj);
      } else {
        // Considering a new listing from scratch;
        const requestDraftObj: IDraftRequest = {
          locationId: args.locationId,
          listSettingsParentId: args.listSettingsParentId,
          bookingPeriod: args.bookingPeriod,
          title: args.title,
          coverPhotoId: args.coverPhotoId,
          quantity: args.quantity
        };
        listingObj = await listingsAPI.createDraft(requestDraftObj);
      }
      return listingsAPI.fetchWholeListing(
        listingObj.id,
        locationsAPI,
        usersAPI
      );
    },

    getOrCreateLocation: async (_: any, args: any, { dataSources }: any) => {
      const { locationsAPI } = dataSources;
      return locationsAPI.getOrCreateLocation({
        suggestAddress: args.suggestAddress,
        unit: args.unit
      });
    },

    publish: async (_: any, args: any, { dataSources }: any) => {
      const { listingsAPI } = dataSources;
      return listingsAPI.publish(args.listingId, args.status);
    },

    cleanListingAvailabilities: async (
      _: any,
      args: any,
      { dataSources }: any
    ) => {
      const { bookingsAPI } = dataSources;
      return bookingsAPI.cleanListingAvailabilities(args.listingId);
    },

    removeListingById: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.listingsAPI.removeListingById(args.listingId);
    },

    claimListing: async (_: any, args: any, { dataSources }: any) => {
      const { listingsAPI } = dataSources;
      return listingsAPI.claimListing(args.listingId);
    }
  }
};

export default resolvers;
