import { ApolloError } from 'apollo-server-express'

import PersonalizationAPI from '../interfaces/personalization.inteface'
import { toError } from './../helpers/exceptions/HttpException'

class MessagesAPI extends PersonalizationAPI {

  constructor(apiAddress: string) {
    super()
    this.baseURL = apiAddress
  }

  getMessagesByUser = async (args: any): Promise<any> => {
    return this.get(
      `/messages/${args.id}?type=${args.type}&pageIndex=${args.pageIndex}&pageSize=${args.pageSize}`
    ).catch(err => new ApolloError(toError(err)))
  }

  getMessage = async (id: string): Promise<any> => {
    return this.get(`/message/${id}`).catch(err => new ApolloError(toError(err)))
  }

  postMessage = async (message: any): Promise<any> => {
    return this.post(`/message`, message).catch(err => new ApolloError(toError(err)))
  }

  postMessageToHost = async (message: any): Promise<any> => {
    return this.post(`/message`, {
      "listingId": message.listingId,
      "hostId": message.hostId,
      "guestId": message.guestId,
      "content": message.content,
      "contactHost": {
        "bookingPeriod": message.bookingPeriod,
        "period": message.period,
        "reservations": message.reservations,
        "checkInTime": message.checkInTime,
        "checkOutTime": message.checkOutTime,
        "hasFlexibleTime": message.hasFlexibleTime,
        "peopleQuantity": message.peopleQuantity,
        "reason": message.reason
      }
    }).catch(err => new ApolloError(toError(err)))
  }

  readMessage = async (args: any): Promise<any> => {
    return this.put(`/read-message/${args.id}?userId=${args.userId}`).catch(err => new ApolloError(toError(err)))
  }

  countUnreadMessages = async (args: any): Promise<any> => {
    return this.get(`/unread-messages/${args.id}?type=${args.type}`).catch(err => new ApolloError(toError(err)))
  }

  postMessageItem = async (messageItem: any): Promise<any> => {
    return this.post(`/message-item`, messageItem).catch(err => new ApolloError(toError(err)))
  }

  getMessageItems = async (args: any): Promise<any> => {
    return this.get(
      `/message-items/${args.id}?type=${args.type}&pageIndex=${args.pageIndex}&pageSize=${args.pageSize}`
    ).catch(err => new ApolloError(toError(err)))
  }

  readMessageItems = async (id: string): Promise<any> => {
    return this.put(`/read-message-items/${id}`).catch(err => new ApolloError(toError(err)))
  }

  countUnreadMessageItems = async (id: string, userId: string): Promise<any> => {
    return this.get(`/unread-message-items/${id}?userId=${userId}`).catch(err => new ApolloError(toError(err)))
  }
}

export default MessagesAPI
