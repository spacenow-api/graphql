import PersonalizationAPI from '../interfaces/personalization.inteface'

import { toError } from './../helpers/exceptions/HttpException'

import { ApolloError } from 'apollo-server-express'

class NotificationAPI extends PersonalizationAPI {
  constructor(apiAddress: string) {
    super()
    this.baseURL = apiAddress
  }

  sendSMSMessage = async (data: any): Promise<any> => {
    return this.post(
      `/send-sms-message`,
      JSON.stringify(data)
    ).catch(err => new ApolloError(toError(err)))
  }

  getNotifications = async (): Promise<any> => {
    return this.get(
      `/notifications`
    ).catch(err => new ApolloError(toError(err)))
  }

  getNotificationsByType = async (type: any): Promise<any> => {
    return this.get(
      `/notifications-by-type?type=${type}`
    ).catch(err => new ApolloError(toError(err)))
  }

  getNotification = async (id: any): Promise<any> => {
    return this.get(
      `/notification/${id}`
    ).catch(err => new ApolloError(toError(err)))
  }

  putNotification = async (id: any, data: any): Promise<any> => {
    return this.put(
      `/notification/${id}`,
      JSON.stringify(data)
    ).catch(err => new ApolloError(toError(err)))
  }

  postNotification = async (data: any): Promise<any> => {
    return this.post(
      `/notification`,
      JSON.stringify(data)
    ).catch(err => new ApolloError(toError(err)))
  }

}

export default NotificationAPI
