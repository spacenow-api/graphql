import rootT from "./typeDefs";
import listingT from "./listing/typeDefs";
import paymentsT from "./payments/typeDefs";
import usersT from "./users/typeDefs";
import integrationsT from "./integrations/typeDefs";
import pricesT from "./prices/typeDefs";
import bookingT from "./bookings/typeDefs";
import emailsT from "./emails/typeDefs";
import searchT from "./search/typeDefs";
import messagesT from "./messages/typeDefs";
import twilioT from "./twilio/typeDefs";
import notificationT from "./notification/typeDefs";
import categoryT from "./category/typeDefs";
import v2ListingT from "./v2-listing/typeDefs";

const typeDefs = [
  rootT,
  listingT,
  paymentsT,
  usersT,
  integrationsT,
  pricesT,
  bookingT,
  emailsT,
  searchT,
  messagesT,
  twilioT,
  notificationT,
  categoryT,
  v2ListingT
];

import listingR from "./listing/resolvers";
import paymentsR from "./payments/resolvers";
import usersR from "./users/resolvers";
import integrationsR from "./integrations/resolvers";
import pricesR from "./prices/resolvers";
import bookingR from "./bookings/resolvers";
import emailsR from "./emails/resolvers";
import searchR from "./search/resolvers";
import messagesR from "./messages/resolvers";
import twilioR from "./twilio/resolvers";
import notificationR from "./notification/resolvers";
import categoryR from "./category/resolvers";
import v2ListingR from "./v2-listing/resolvers";

const resolvers: any = [
  listingR,
  paymentsR,
  usersR,
  integrationsR,
  pricesR,
  bookingR,
  emailsR,
  searchR,
  messagesR,
  twilioR,
  notificationR,
  categoryR,
  v2ListingR
];

export { typeDefs, resolvers };
