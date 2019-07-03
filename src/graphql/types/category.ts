import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLInt as IntType,
  GraphQLList as List,
  GraphQLBoolean as BooleanType,
  GraphQLNonNull as NonNull
} from 'graphql';

const Category: ObjectType = new ObjectType({
  name: 'Category',
  description: 'Represents Category',
  fields: {
    id: { type: new NonNull(StringType) },
    name: { type: new NonNull(StringType) },
    slug: { type: new NonNull(StringType) },
    parentId: { type: StringType },
    order: { type: new NonNull(IntType) },
    isActive: { type: new NonNull(BooleanType) },
    children: {
      get type() {
        return new List(Category);
      }
    }
  }
});

const BookingPeriodLegacyType = new ObjectType({
  name: 'BookingPeriodLegacyType',
  fields: {
    id: { type: IntType },
    listSettingsParentId: { type: IntType },
    monthly: { type: IntType },
    weekly: { type: IntType },
    daily: { type: IntType },
    hourly: { type: IntType }
  }
});

const SubCategoryLegacyType = new ObjectType({
  name: 'SubCategoryLegacyType',
  fields: {
    id: { type: IntType },
    listSettingsParentId: { type: IntType },
    listSettingsChildId: { type: IntType },
    typeId: { type: IntType },
    itemName: { type: StringType },
    otherItemName: { type: StringType },
    description: { type: StringType },
    maximum: { type: IntType },
    minimum: { type: IntType },
    startValue: { type: IntType },
    endValue: { type: IntType },
    step: { type: StringType },
    isEnable: { type: StringType },
    photo: { type: StringType },
    photoType: { type: StringType },
    isSpecification: { type: IntType },
    specData: { type: StringType },
    bookingPeriod: { type: BookingPeriodLegacyType }
  }
});

const CategoryLegacyType: ObjectType = new ObjectType({
  name: 'CategoryLegacyType',
  description: 'Represents a legacy object for all Spacenow 2019 categories',
  fields: {
    id: { type: IntType },
    typeId: { type: IntType },
    itemName: { type: StringType },
    otherItemName: { type: StringType },
    description: { type: StringType },
    maximum: { type: IntType },
    minimum: { type: IntType },
    startValue: { type: IntType },
    endValue: { type: IntType },
    step: { type: StringType },
    isEnable: { type: StringType },
    photo: { type: StringType },
    photoType: { type: StringType },
    isSpecification: { type: IntType },
    specData: { type: StringType },
    subCategories: { type: new List(SubCategoryLegacyType) }
  }
});

export {
  Category,
  CategoryLegacyType,
  SubCategoryLegacyType,
  BookingPeriodLegacyType
};
