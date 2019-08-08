import rootT from './typeDefs';
import listingT from './listing/typeDefs';
import paymentsT from './payments/typeDefs'

const typeDefs = [rootT, listingT, paymentsT]

import listingR from './listing/resolvers';
import paymentsR from './payments/resolvers'

const resolvers = [listingR, paymentsR]

export { typeDefs, resolvers }