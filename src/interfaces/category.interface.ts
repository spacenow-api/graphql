interface IBookingPeriod {
  id: number;
  listSettingsParentId: number;
  monthly: number;
  weekly: number;
  daily: number;
  hourly: number;
  createdAt: Date;
  updatedAt: Date;
}

interface ISubCategories {
  id: number;
  listSettingsParentId: number;
  listSettingsChildId: number;
  createdAt: Date;
  updatedAt: Date;
  subcategory: ISubCategory;
  bookingPeriod: IBookingPeriod;
}

interface ISubCategory {
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

interface ICategory {
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
  subCategories: Array<ISubCategories>;
}

export { ICategory, ISubCategory, ISubCategories, IBookingPeriod };
