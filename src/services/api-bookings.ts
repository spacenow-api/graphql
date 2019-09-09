import { IBooking } from "../interfaces";
import PersonalizationAPI from "../interfaces/personalization.inteface";

import { toError } from "./../helpers/exceptions/HttpException";

import { ApolloError } from "apollo-server";

class BookingsAPI extends PersonalizationAPI {

  constructor(apiAddress: string) {
    super();
    this.baseURL = apiAddress;
  }

  getAllBookings = async (): Promise<[IBooking]> => {
    return this.get(`/bookings`).catch(err => new ApolloError(toError(err)));
  };

  getBookingById = async (id: string): Promise<IBooking> => {
    return this.get(`/bookings/${id}`).catch(err => new ApolloError(toError(err)));
  };

  cleanListingAvailabilities = async (id: string): Promise<IBooking> => {
    return await this.put(`/bookings/cleanListingAvailabilities/${id}`).catch(err => new ApolloError(toError(err)));
  };

  createBooking = async (booking: IBooking): Promise<IBooking> => {
    return this.post(`/bookings`, booking).catch(err => new ApolloError(toError(err)));
  };

  timeoutBooking = async (bookingId: String): Promise<IBooking> => {
    return this.put(`/bookings/timeout/${bookingId}`).catch(err => new ApolloError(toError(err)));
  };

  getPendingBookingsByUser = async (args: any): Promise<IBooking> => {
    return this.get(`/bookings/getPendingByGuestId/${args.userId}/${args.listingId}`).catch(err => new ApolloError(toError(err)));
  };

  getAllBookingsByUser = async (args: any): Promise<IBooking> => {
    if (args.userType === "host")
      return this.get(`/bookings/byHostId/${args.userId}`).catch(err => new ApolloError(toError(err)));
    return this.get(`/bookings/byGuestId/${args.userId}`).catch(err => new ApolloError(toError(err)));
  };

}

export default BookingsAPI;
