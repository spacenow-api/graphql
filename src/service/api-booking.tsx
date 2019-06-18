import { RESTDataSource } from 'apollo-datasource-rest';

class BookingsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:4000/';
  }

  getAllBookings = async () => {
    return this.get(`bookings/`)
  }
}

export default BookingsAPI;
