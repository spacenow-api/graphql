interface IDraftRequest {
  userId: string;
  locationId: number;
  listSettingsParentId: number;
  bookingPeriod?: string;
  title?: string;
  coverPhotoId?: number;
  quantity?: number;
}

interface IAccessHoursRequest {
  weekday?: number;
  allday?: Boolean;
  openHour?: string;
  closeHour?: string;
}

interface IAccessDaysRequest {
  listingId: number;
  mon?: Boolean;
  tue?: Boolean;
  wed?: Boolean;
  thu?: Boolean;
  fri?: Boolean;
  sat?: Boolean;
  sun?: Boolean;
  all247?: Boolean;
  listingAccessHours?: Array<IAccessHoursRequest>;
}

interface IUpdateRequest {
  listingId: number;
  title?: string;
  accessType?: string;
  bookingNoticeTime?: string;
  minTerm?: number;
  maxTerm?: number;
  description?: string;
  basePrice?: number;
  currency?: string;
  isAbsorvedFee?: Boolean;
  capacity?: number;
  size?: number;
  meetingRooms?: number;
  isFurnished?: Boolean;
  carSpace?: number;
  sizeOfVehicle?: string;
  maxEntranceHeight?: string;
  spaceType?: string;
  bookingType?: string;
  listingAmenities?: Array<number>;
  listingAccessDays?: IAccessDaysRequest;
  listingExceptionDates?: Array<string>;
  listingRules?: Array<number>;
}

interface IListingResponse {
  id: number;
  locationId: number;
  userId: string;
  listSettingsParentId: number;
  bookingPeriod: string;
  roomType: string;
  houseType: string;
  residenceType: string;
  bedrooms: string;
  buildingSize: string;
  bedType: string;
  beds: number;
  personCapacity: number;
  bathrooms: number;
  bathroomType: string;
  country: string;
  street: string;
  buildingName: string;
  city: string;
  state: string;
  zipcode: string;
  lat: string;
  lng: string;
  isMapTouched: boolean;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  description: string;
  coverPhoto: number;
  bookingType: string;
  isPublished: boolean;
  isReady: boolean;
  coverPhotoId: number;
  quantity: number;
  status: string;
}

export { IDraftRequest, IUpdateRequest, IListingResponse };
