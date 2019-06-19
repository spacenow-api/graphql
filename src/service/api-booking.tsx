import { RESTDataSource } from 'apollo-datasource-rest';

class BookingsAPI extends RESTDataSource {

  private path = '/bookings';

  constructor() {
    super();
    this.baseURL = 'http://localhost:4000';
  }

  getAllBookings = async () => {
    return this.get(`${this.path}`);
  }

  getBooking = async (id: string) => {
    return this.get(`${this.path}/${id}`);
  }

}

export default BookingsAPI;
