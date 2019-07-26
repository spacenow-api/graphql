interface ILocationRequest {
  suggestAddress: string;
  unit?: string;
}

interface ILocationResponse {
  id: number;
  userId: string;
  country: string;
  address1: string;
  address2: string;
  buildingName: string;
  city: string;
  state: string;
  zipcode: string;
  lat: string;
  lng: string;
  createdAt: Date;
  updatedAt: Date;
}

export { ILocationRequest, ILocationResponse };
