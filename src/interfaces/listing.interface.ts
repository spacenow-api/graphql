export interface IDraftRequest {
  userId: string;
  locationId: number;
  listSettingsParentId: number;
  bookingPeriod?: string;
  title?: string;
  coverPhotoId?: number;
  quantity?: number;
}

export interface IUpdateRequest {
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
  listingAccessDays?: IListingAccessDaysRequest;
  listingExceptionDates?: Array<string>;
  listingRules?: Array<number>;
}

export interface IListingAccessHoursRequest {
  weekday?: number;
  allday?: Boolean;
  openHour?: string;
  closeHour?: string;
}

export interface IListingAccessDaysRequest {
  listingId: number;
  mon?: Boolean;
  tue?: Boolean;
  wed?: Boolean;
  thu?: Boolean;
  fri?: Boolean;
  sat?: Boolean;
  sun?: Boolean;
  all247?: Boolean;
  listingAccessHours?: Array<IListingAccessHoursRequest>;
}

export interface IListingAccessHoursResponse {
  id: number;
  listingAccessDaysId: number;
  weekday: string;
  openHour: Date;
  closeHour: Date;
  allday: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IListingAccessDaysResponse {
  id: number;
  listingId: number;
  mon: number;
  tue: number;
  wed: number;
  thu: number;
  fri: number;
  sat: number;
  sun: number;
  all247: number;
  createdAt: Date;
  updatedAt: Date;
  listingAccessHours: Array<IListingAccessHoursResponse>;
}

export interface IListingSettingsResponse {
  id: number;
  typeId: number;
  itemName: string;
  otherItemName: string;
  description: string;
  maximum: number;
  minimum: number;
  startValue: number;
  endValue: number;
  step: string;
  isEnable: string;
  photo: string;
  photoType: string;
  isSpecification: number;
  createdAt: Date;
  updatedAt: Date;
  specData: string;
}

export interface IListingAmenitiesResponse {
  id: number;
  listingId: number;
  listSettingsId: number;
  amount: number;
  quantity: number;
  currency: string;
  settings: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  settingsData: IListingSettingsResponse;
}

export interface IListingRulesResponse {
  id: number;
  listingId: number;
  listSettingsId: number;
  createdAt: Date;
  updatedAt: Date;
  settingsData: IListingSettingsResponse;
}

export interface IListingDataResponse {
  id: number;
  listingId: number;
  listId: number;
  bookingNoticeTime: string;
  checkInStart: string;
  checkInEnd: string;
  minNight: number;
  maxNight: number;
  priceMode: number;
  basePrice: number;
  maxPrice: number;
  currency: string;
  hostingFrequency: string;
  weeklyDiscount: string;
  monthlyDiscount: string;
  createdAt: Date;
  updatedAt: Date;
  cleaningPrice: number;
  cancellationPolicy: number;
  minTerm: number;
  maxTerm: number;
  description: string;
  isAbsorvedFee: number;
  capacity: number;
  size: number;
  meetingRooms: number;
  isFurnished: number;
  carSpace: number;
  ListingDatacol: string;
  sizeOfVehicle: string;
  maxEntranceHeight: string;
  spaceType: string;
  bookingType: string;
  accessType: string;
}

export interface IListingResponse {
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
