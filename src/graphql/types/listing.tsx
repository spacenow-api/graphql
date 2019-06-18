import {
  GraphQLObjectType as ObjectType,
  GraphQLInt as IntType,
  GraphQLString as StringType,
  GraphQLFloat as FloatType
} from 'graphql';

export default new ObjectType({
  name: 'Listing',
  description: "Represents Listing",
  fields: {
    listingId: { type: IntType },
    quantity: { type: IntType },
    currency: { type: StringType },
    totalPrice: { type: FloatType },
    bookingType: { type: StringType },
    basePrice: { type: FloatType },
    createdAt: { type: IntType },
    period: { type: IntType },
    sourceId: { type: StringType },
    bookingState: { type: StringType },
    chargeId: { type: StringType },
    hostServiceFee: { type: FloatType },
    confirmationCode: { type: IntType },
    bookingId: { type: StringType },
    guestServiceFee: { type: FloatType },
    hostId: { type: StringType },
    paymentState: { type: StringType },
    updatedAt: { type: IntType },
    priceType: { type: StringType },
    guestId: { type: StringType },
  },
});