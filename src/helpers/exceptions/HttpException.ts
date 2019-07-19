import { IDataSourceErr } from './exception.interface'

export const toError = (err: IDataSourceErr): string => {
  console.debug('New exception unmarshal: ', err);
  const errBody = err.extensions.response.body;
  return errBody.message || 'API exception not mapped.';
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