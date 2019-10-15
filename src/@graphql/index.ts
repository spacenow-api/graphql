import rootT from "./typeDefs";
import spacesT from "./spaces/typeDefs";
import paymentsT from "./payments/typeDefs";
import usersT from "./users/typeDefs";
import assetsT from "./assets/typeDefs";
import integrationsT from "./integrations/typeDefs";
import pricesT from "./prices/typeDefs";
import bookingT from "./bookings/typeDefs";
import emailsT from "./emails/typeDefs";
import searchT from "./search/typeDefs";
import categoriesT from "./categories/typeDefs";
import attributesT from "./attributes/typeDefs";
import listingsT from "./listings/typeDefs";

const typeDefs = [
  rootT,
  spacesT,
  paymentsT,
  usersT,
  assetsT,
  integrationsT,
  pricesT,
  bookingT,
  emailsT,
  searchT,
  categoriesT,
  attributesT,
  listingsT
];

import spacesR from "./spaces/resolvers";
import paymentsR from "./payments/resolvers";
import usersR from "./users/resolvers";
import assetsR from "./assets/resolvers";
import integrationsR from "./integrations/resolvers";
import pricesR from "./prices/resolvers";
import bookingR from "./bookings/resolvers";
import emailsR from "./emails/resolvers";
import searchR from "./search/resolvers";
import categoriesR from "./categories/resolvers";
import attributesR from "./attributes/resolvers";
import listingsR from "./listings/resolvers";

const resolvers: any = [
  spacesR,
  paymentsR,
  usersR,
  assetsR,
  integrationsR,
  pricesR,
  bookingR,
  emailsR,
  searchR,
  categoriesR,
  attributesR,
  listingsR
];

export { typeDefs, resolvers };
