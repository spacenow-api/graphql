import { IDataSourceErr } from './exception.interface'

export const toError = (err: IDataSourceErr) => {
  console.debug('New exception unmarshal: ', err);
  return err.extensions.response.body;
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