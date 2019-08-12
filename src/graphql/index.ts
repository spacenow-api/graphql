import rootT from './typeDefs';
import listingT from './listing/typeDefs';
import paymentsT from './payments/typeDefs'
import integrationsT from './integrations/typeDefs'

const typeDefs = [rootT, listingT, paymentsT, integrationsT]

import listingR from './listing/resolvers';
import paymentsR from './payments/resolvers'
import integrationsR from './integrations/resolvers'

const resolvers = [listingR, paymentsR, integrationsR]

export { typeDefs, resolvers }