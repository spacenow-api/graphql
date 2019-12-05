import { IBooking } from "../interfaces";
import PersonalizationAPI from "../interfaces/personalization.inteface";

import { toError } from "./../helpers/exceptions/HttpException";

import { ApolloError } from "apollo-server-express";

class BookingsAPI extends PersonalizationAPI {

  constructor(apiAddress: string) {
    super();
    this.baseURL = apiAddress;
  }

  getAllBookings = async (): Promise<[IBooking]> => {
    return this.get(`/`).catch(err => new ApolloError(toError(err)));
  };

  getBookingById = async (id: string): Promise<IBooking> => {
    return this.get(`/${id}`).catch(err => new ApolloError(toError(err)));
  };

  cleanListingAvailabilities = async (id: string): Promise<IBooking> => {
    return await this.put(`/cleanListingAvailabilities/${id}`).catch(err => new ApolloError(toError(err)));
  };

  createBooking = async (booking: IBooking): Promise<IBooking> => {
    return this.post(`/`, booking).catch(err => new ApolloError(toError(err)));
  };

  timeoutBooking = async (bookingId: String): Promise<IBooking> => {
    return this.put(`/timeout/${bookingId}`).catch(err => new ApolloError(toError(err)));
  };

  acceptBooking = async (bookingId: String): Promise<IBooking> => {
    return this.put(`/approve/${bookingId}`).catch(err => new ApolloError(toError(err)));
  };

  declineBooking = async (bookingId: String): Promise<IBooking> => {
    return this.put(`/decline/${bookingId}`).catch(err => new ApolloError(toError(err)));
  };

  getPendingBookingsByUser = async (args: any): Promise<IBooking> => {
    return this.get(`/getPendingByGuestId/${args.userId}/${args.listingId}`)
      .catch(err => new ApolloError(toError(err)));
  };

  getAllBookingsByUser = async (args: any): Promise<any> => {
    this.memoizedResults.clear()
    let bookingsApi = `/byGuestId/${args.userId}`
    if (args.userType === "host")
      bookingsApi = `/byHostId/${args.userId}`
    const bookings = await this.get(bookingsApi).catch(err => new ApolloError(toError(err)));
    const sortedItems = bookings.items.sort((a: IBooking, b: IBooking) => b.updatedAt - a.updatedAt);
    return {
      count: bookings.count,
      items: sortedItems
    };
  };

  getHourlyAvailability = async (listingId: number, date: string, checkInHour: string, checkOutHour: string): Promise<any> => {
    return this.post(`/getHourlyAvailability`, { listingId, date, checkInHour, checkOutHour })
      .catch(err => new ApolloError(toError(err)));
  }

  getTotalBookingsByDate = async (days: number): Promise<any> => {
    return this.get(`/date?days=${days}`).catch(err => new ApolloError(toError(err)));
  };

  listVouchers = async () => {
    return this.get('/voucher').catch(err => new ApolloError(toError(err)));
  }

  createVoucher = async (type: string, value: number, limit: number, expireAt: string) => {
    return this.post('/voucher', { type, value, limit, expireAt }).catch(err => new ApolloError(toError(err)));
  }

  desactiveVoucher = async (voucherCode: string) => {
    return this.delete(`/voucher/${voucherCode}`).catch(err => new ApolloError(toError(err)));
  }

  validateVoucher = async (voucherCode: string) => {
    return this.get(`/voucher/${voucherCode}/validate`).catch(err => new ApolloError(toError(err)));
  }

  insertVoucher = async (voucherCode: string, bookingId: string) => {
    return this.put(`/voucher/${voucherCode}/booking/${bookingId}/insert`).catch(err => new ApolloError(toError(err)));
  }

  removeVoucher = async (voucherCode: string, bookingId: string) => {
    return this.put(`/voucher/${voucherCode}/booking/${bookingId}/remove`).catch(err => new ApolloError(toError(err)));
  }
}

export default BookingsAPI;
