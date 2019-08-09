import rootT from "./typeDefs";
import listingT from "./listing/typeDefs";
import paymentsT from "./payments/typeDefs";
import usersT from "./users/typeDefs";

const typeDefs = [rootT, listingT, paymentsT, usersT];

import listingR from "./listing/resolvers";
import paymentsR from "./payments/resolvers";
import usersR from "./users/resolvers";

const resolvers = [listingR, paymentsR, usersR];

export { typeDefs, resolvers };
