import { RESTDataSource } from 'apollo-datasource-rest';

import { IBooking } from '../interfaces';

class BookingsAPI extends RESTDataSource {
  private path = '/bookings';

  constructor(gatewayHost: string) {
    super();
    this.baseURL = gatewayHost;
  }

  getAllBookings = async (): Promise<[IBooking]> => {
    return this.get(`${this.path}`);
  };

  getBooking = async (id: string): Promise<IBooking> => {
    return this.get(`${this.path}/${id}`);
  };
}

export default BookingsAPI;
