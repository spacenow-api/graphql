import PersonalizationAPI from '../interfaces/personalization.inteface'

import { toError } from './../helpers/exceptions/HttpException'

import { ApolloError } from 'apollo-server-express'

class NotificationAPI extends PersonalizationAPI {
  constructor(apiAddress: string) {
    super()
    this.baseURL = apiAddress
  }

  getNotifications = async (): Promise<any> => {
    return this.get(
      `/notifications`
    ).catch(err => new ApolloError(toError(err)))
  }

}

export default NotificationAPI
