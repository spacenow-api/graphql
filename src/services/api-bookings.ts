import { IBooking } from "../interfaces";
import PersonalizationAPI from "../interfaces/personalization.inteface";
import { ApolloError } from "apollo-server";
import { toError } from "./../helpers/exceptions/HttpException";

class BookingsAPI extends PersonalizationAPI {
  private path = "/bookings";

  constructor(apiAddress: string) {
    super();
    this.baseURL = apiAddress;
  }

  getAllBookings = async (): Promise<[IBooking]> => {
    return this.get(`${this.path}`);
  };

  getBooking = async (id: string): Promise<IBooking> => {
    return this.get(`${this.path}/${id}`);
  };

  cleanListingAvailabilities = async (id: string): Promise<IBooking> => {
    return await this.put(
      `${this.path}/cleanListingAvailabilities/${id}`
    ).catch(err => new ApolloError(toError(err)));
  };

  createBooking = async (booking: IBooking): Promise<IBooking> => {
    return this.post(`${this.path}`, booking).catch(
      err => new ApolloError(toError(err))
    );
  };

  timeoutBooking = async (bookingId: String): Promise<IBooking> => {
    return this.put(`${this.path}/timeout/${bookingId}`).catch(
      err => new ApolloError(toError(err))
    );
  };

  getPendingBookingsByUser = async (args: any): Promise<IBooking> => {
    return this.get(
      `${this.path}/getPendingByGuestId/${args.userId}/${args.listingId}`
    );
  };

  getAllBookingsByUser = async (args: any): Promise<IBooking> => {
    if (args.userType === "host")
      return this.get(`${this.path}/byHostId/${args.userId}`);
    return this.get(`${this.path}/byGuestId/${args.userId}`);
  };
}

export default BookingsAPI;
