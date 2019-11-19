import rootT from './typeDefs'
import listingT from './listing/typeDefs'
import paymentsT from './payments/typeDefs'
import usersT from './users/typeDefs'
import assetsT from './assets/typeDefs'
import integrationsT from './integrations/typeDefs'
import pricesT from './prices/typeDefs'
import bookingT from './bookings/typeDefs'
import emailsT from './emails/typeDefs'
import searchT from './search/typeDefs'
import messagesT from './messages/typeDefs'
import twilioT from './twilio/typeDefs'
import notificationT from './notification/typeDefs'

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
  messagesT,
  twilioT,
  notificationT
]

import listingR from './listing/resolvers'
import paymentsR from './payments/resolvers'
import usersR from './users/resolvers'
import assetsR from './assets/resolvers'
import integrationsR from './integrations/resolvers'
import pricesR from './prices/resolvers'
import bookingR from './bookings/resolvers'
import emailsR from './emails/resolvers'
import searchR from './search/resolvers'
import messagesR from './messages/resolvers'
import twilioR from './twilio/resolvers'
import notificationR from './notification/resolvers'

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
  messagesR,
  twilioR,
  notificationR
]

export { typeDefs, resolvers }
