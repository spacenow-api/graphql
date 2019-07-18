interface Response {
  url: string;
  status: number;
  statusText: string;
  body: string;
}

interface Extensions {
  response: Response;
}

interface IDataSourceErr {
  extensions: Extensions;
}

export { IDataSourceErr }