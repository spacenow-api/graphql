export interface IAvailability {
  bookingDates: Array<String>;
  exceptionDates: Array<String>;
}

export interface IAvailabilitiesResponse {
  availability: IAvailability;
}
