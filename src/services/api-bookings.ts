import { IBooking } from '../interfaces';
import PersonalizationAPI from '../interfaces/personalization.inteface';

class BookingsAPI extends PersonalizationAPI {
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
