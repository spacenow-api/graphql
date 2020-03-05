import { UserInputError } from "apollo-server-express";
import axios from "axios";
import moment from "moment";
import GraphQLUpload from "graphql-upload";

import * as config from "../../config";

import { IHolidayResponse, IListingResponse, IUpdateRequest, IDraftRequest, IInspection, ISavedListing } from "../../interfaces";

const resolvers = {
  Upload: GraphQLUpload,

  Booking: {
    guest(parent: any, args: any, context: any, info: any) {
      return context.dataSources.usersAPI.getUserLegacyById(parent.guestId);
    },
    host(parent: any, args: any, context: any, info: any) {
      return context.dataSources.usersAPI.getUserLegacyById(parent.hostId);
    },
    listing(parent: any, args: any, { dataSources }: any, info: any) {
      return dataSources.listingsAPI.getListingById(parent.listingId, false, false);
    }
  },
  Listing: {
    amenities(parent: any, args: any, context: any, info: any) {
      return context.dataSources.listingsAPI.getAllAmenitiesByListingId(parent.id);
    },
    listingData(parent: any, args: any, context: any, info: any) {
      return context.dataSources.listingsAPI.getListingDataByListingId(parent.id);
    },
    location(parent: any, args: any, context: any, info: any) {
      return context.dataSources.locationsAPI.getLocationById(parent.locationId);
    },
    photos(parent: any, args: any, context: any, info: any) {
      return context.dataSources.listingsAPI.getPhotosByListingId(parent.id);
    },
    settingsParent(parent: any, args: any, context: any, info: any) {
      return context.dataSources.listingsAPI.getListingSettingsByListingId(parent.id);
    },
    accessDays(parent: any, args: any, context: any, info: any) {
      return context.dataSources.listingsAPI.getListingAccessDaysByListingId(parent.id);
    },
    user(parent: any, args: any, context: any, info: any) {
      return context.dataSources.usersAPI.getUserLegacyById(parent.userId);
    }
  },

  Review: {
    author(parent: any, args: any, context: any, info: any) {
      return context.dataSources.usersAPI.getUserLegacyById(parent.authorId);
    }
  },

  PrivateReview: {
    author(parent: any, args: any, context: any, info: any) {
      return context.dataSources.usersAPI.getUserLegacyById(parent.authorId);
    }
  },

  ExternalClicksObject: {
    listing(parent: any, args: any, { dataSources }: any, info: any) {
      return dataSources.listingsAPI.getListingById(parent.listingId, false, false);
    }
  },

  Query: {
    getPhotosByListingId: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.listingsAPI.getPhotosByListingId(args.listingId);
    },

    getVideoByListingId: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.listingsAPI.getVideoByListingId(args.listingId);
    },

    getAvailabilitiesByListingId: async (_: any, args: any, { dataSources }: any) => {
      const { availability } = await dataSources.availabilitiesAPI.getAvailabilitiesByListingId(args.listingId);
      return {
        bookingDates: availability.bookingDates,
        exceptionDates: availability.exceptionDates
      };
    },

    getAllBookings: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.bookingsAPI.getAllBookings();
    },

    getBooking: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.bookingsAPI.getBooking();
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
      return dataSources.listingsAPI.getAllListingsByUser(args.userId);
    },

    getAllPlainListings: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.listingsAPI.getAllPlainListings(args.page, args.limit);
    },

    getAllListings: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.listingsAPI.getAllListings();
    },

    getTotalListingsByDate: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.listingsAPI.getAllListingsByDate(args.days, args.category);
    },

    getTotalListingsByCategory: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.listingsAPI.getAllListingsByCategory(args.category);
    },

    getListingsCategories: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.listingsAPI.getListingsCategories();
    },

    getListingById: async (_: any, args: any, { dataSources }: any) => {
      const { listingsAPI, locationsAPI, usersAPI } = dataSources;
      return listingsAPI.fetchWholeListing(args.id, locationsAPI, usersAPI, args.isPublic);
    },

    getLetterListingsByState: async (_: any, args: any, { dataSources }: any) => {
      const { listingsAPI, locationsAPI, usersAPI } = dataSources;
      return listingsAPI.getLetterListingsByState(args.state, locationsAPI, usersAPI);
    },

    getLocationById: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.locationsAPI.getLocationById(args.id);
    },

    getLocationsCountListings: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.locationsAPI.getLocationsCountListings();
    },

    getAllAmenitiesBySubCategoryId: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.listingsAPI.getAllAmenitiesBySubCategoryId(args.subCategoryId);
    },

    getAllAmenitiesByListingId: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.listingsAPI.getAllAmenitiesByListingId(args.listingId);
    },

    getAllRules: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.listingsAPI.getAllRules();
    },

    getAllAccessTypes: async (_: any, args: any, { dataSources }: any) => {
      console.log("dataSources", dataSources);
      return dataSources.listingsAPI.getAllAccessTypes();
    },

    getAllSpecificationsByParentId: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.listingsAPI.getListingSpecificationsByParentId(args.listSettingsParentId);
    },

    getPublicReviews: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.listingsAPI.getPublicReviews(args.listingId, args.page, args.pageSize);
    },

    getGoogleReviews: async (_: any, args: any, { dataSources }: any) => {
      const { result } = await dataSources.listingsAPI.getGoogleReviews(args.placeId);
      return result;
    },

    getPrivateReviews: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.listingsAPI.getPrivateReviews(args.listingId);
    },

    getExternalClicksByUser: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.listingsAPI.getExternalClicksByUser(args.userId);
    },

    fetchAddonsByListing: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.listingsAPI.fetchAddonsByListing(args.listingId);
    },

    fetchAddonsBySubCategory: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.listingsAPI.fetchAddonsBySubCategory(args.listSettingsId);
    },

    fetchAddonsByBooking: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.listingsAPI.fetchAddonsByBooking(args.bookingId);
    },

    getInspections: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.listingsAPI.getInspections();
    },

    getSavedListingsByUser: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.listingsAPI.getSavedListingsByUser(args.userId);
    },

    checkSavedListingByUser: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.listingsAPI.checkSavedListingByUser(args.listingId, args.userId);
    }
  },

  Mutation: {
    uploadPhoto: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.assetsAPI.uploadPhoto(args);
    },

    deletePhoto: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.assetsAPI.deletePhoto(args);
    },

    setCoverPhoto: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.assetsAPI.setCoverPhoto(args);
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
          listingRules: args.listingRules,
          listingActivities: args.listingActivities,
          link: args.link
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
          quantity: args.quantity,
          listingActivities: args.listingActivities
        };
        listingObj = await listingsAPI.createDraft(requestDraftObj);
      }
      return listingsAPI.fetchWholeListing(listingObj.id, locationsAPI, usersAPI);
    },

    getOrCreateLocation: async (_: any, args: any, { dataSources }: any) => {
      const { locationsAPI } = dataSources;
      return locationsAPI.getOrCreateLocation({
        suggestAddress: args.suggestAddress,
        unit: args.unit,
        placeId: args.placeId
      });
    },

    publish: async (_: any, args: any, { dataSources }: any) => {
      const { listingsAPI } = dataSources;
      return listingsAPI.publish(args.listingId, args.status);
    },

    cleanListingAvailabilities: async (_: any, args: any, { dataSources }: any) => {
      const { bookingsAPI } = dataSources;
      return bookingsAPI.cleanListingAvailabilities(args.listingId);
    },

    removeListingById: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.listingsAPI.removeListingById(args.listingId);
    },

    changeListingStatus: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.listingsAPI.changeListingStatus(args.listingId, args.status);
    },

    claimListing: async (_: any, args: any, { dataSources }: any) => {
      const { listingsAPI } = dataSources;
      return listingsAPI.claimListing(args.listingId);
    },

    createReviewFromGuest: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.listingsAPI.createReviewFromGuest(
        args.bookingId,
        args.publicComment,
        args.privateComment,
        args.ratingOverall,
        args.ratingCheckIn,
        args.ratingHost,
        args.ratingValue,
        args.ratingCleanliness,
        args.ratingLocation
      );
    },

    createReviewFromHost: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.listingsAPI.createReviewFromHost(args.bookingId, args.publicComment, args.ratingOverall);
    },

    saveClicksByListing: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.listingsAPI.saveClicksByListing(args.listingId);
    },

    createAddon: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.listingsAPI.createAddon(args.listingId, args.description, args.value);
    },

    deleteAddon: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.listingsAPI.deleteAddon(args.id);
    },

    createAddonSuggestion: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.listingsAPI.createAddonSuggestion(args.listSettingsId, args.description);
    },

    deleteAddonSuggestion: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.listingsAPI.deleteAddonSuggestion(args.id);
    },

    setAddonOnBooking: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.listingsAPI.setAddonOnBooking(args.bookingId, args.addonId);
    },

    removeAddonFromBooking: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.listingsAPI.removeAddonFromBooking(args.bookingId, args.addonId);
    },

    createInspection: async (_: any, args: IInspection, { dataSources }: any) => {
      return dataSources.listingsAPI.createInspection(args.listingId, args.messageId, args.guestId, args.date, args.time);
    },

    updateInspection: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.listingsAPI.updateInspection(args.id, args.status);
    },

    createSavedListing: async (_: any, args: ISavedListing, { dataSources }: any) => {
      return dataSources.listingsAPI.createSavedListing(args.listingId, args.userId);
    },

    removeSavedListingByUser: async (_: any, args: any, { dataSources }: any) => {
      return dataSources.listingsAPI.removeSavedListingByUser(args.listingId, args.userId);
    }
  }
};

export default resolvers;
