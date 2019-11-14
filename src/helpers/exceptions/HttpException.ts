import { ApolloError } from "apollo-server-express";

import { IDataSourceErr } from './exception.interface'

export const catchApolloError = (err: any) => new ApolloError(toError(err));

export const toError = (err: IDataSourceErr): string => {
  console.error('New exception unmarshal: ', err);
  try {
    const errBody = err.extensions.response.body;
    return errBody.message || errBody.error || 'API exception not mapped.';
  } catch (exception) {
    console.error(exception);
    return "Problems to unmarshal Apollo exception.";
  }
}

export default class HttpException extends Error {
  status: number;
  message: string;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.message = message;
  }
}