import rootT from "./typeDefs";
import listingT from "./listing/typeDefs";
import paymentsT from "./payments/typeDefs";
import usersT from "./users/typeDefs";
import assetsT from "./assets/typeDefs";
import integrationsT from "./integrations/typeDefs";
import pricesT from "./prices/typeDefs";
import bookingT from "./bookings/typeDefs";
import emailsT from "./emails/typeDefs";
import searchT from "./search/typeDefs";
import categoriesT from "./categories/typeDefs";
import eavT from "./eav/typeDefs";

const typeDefs = [
  rootT,
  listingT,
  paymentsT,
  usersT,
  assetsT,
  integrationsT,
  pricesT,
  bookingT,
  emailsT,
  searchT,
  categoriesT,
  eavT
];

import listingR from "./listing/resolvers";
import paymentsR from "./payments/resolvers";
import usersR from "./users/resolvers";
import assetsR from "./assets/resolvers";
import integrationsR from "./integrations/resolvers";
import pricesR from "./prices/resolvers";
import bookingR from "./bookings/resolvers";
import emailsR from "./emails/resolvers";
import searchR from "./search/resolvers";
import categoriesR from "./categories/resolvers";
import eavR from "./eav/resolvers";

const resolvers: any = [
  listingR,
  paymentsR,
  usersR,
  assetsR,
  integrationsR,
  pricesR,
  bookingR,
  emailsR,
  searchR,
  categoriesR,
  eavR
];

export { typeDefs, resolvers };
