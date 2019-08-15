import rootT from './typeDefs';
import listingT from './listing/typeDefs';
import paymentsT from './payments/typeDefs'
import usersT from './users/typeDefs';
import assetsT from './assets/typeDefs';
import integrationsT from './integrations/typeDefs'

const typeDefs = [rootT, listingT, paymentsT, usersT, assetsT, integrationsT]

import listingR from './listing/resolvers';
import paymentsR from './payments/resolvers'
import usersR from './users/resolvers';
import assetsR from './assets/resolvers';
import integrationsR from './integrations/resolvers'

const resolvers = [listingR, paymentsR, usersR, assetsR, integrationsR]


export { typeDefs, resolvers };
