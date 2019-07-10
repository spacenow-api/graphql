interface IRecords {
  _id: number;
  Date: string;
  'Holiday Name': string;
  Jurisdiction: string;
}

interface IResult {
  records: Array<IRecords>;
}

export interface IHolidayResponse {
  help: string;
  success: boolean;
  result: IResult;
}
