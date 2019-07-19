interface IBody {
  message: string;
}

interface IResponse {
  url: string;
  status: number;
  statusText: string;
  body: IBody;
}

interface IExtensions {
  response: IResponse;
}

interface IDataSourceErr {
  extensions: IExtensions;
}

export { IDataSourceErr }