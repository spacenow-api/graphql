import rootT from './typeDefs';
import listingT from './listing/typeDefs';
import paymentsT from './payments/typeDefs';
import usersT from './users/typeDefs';
import assetsT from './assets/typeDefs';

const typeDefs = [rootT, listingT, paymentsT, usersT, assetsT];

import listingR from './listing/resolvers';
import paymentsR from './payments/resolvers';
import usersR from './users/resolvers';
import assetsR from './assets/resolvers';

const resolvers = [listingR, paymentsR, usersR, assetsR];

export { typeDefs, resolvers };
