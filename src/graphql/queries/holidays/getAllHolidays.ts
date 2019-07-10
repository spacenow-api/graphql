import {
  GraphQLList as List,
  GraphQLString as StringType,
  GraphQLInt as IntType,
  GraphQLNonNull as NonNull
} from 'graphql';

import moment from 'moment';
import axios from 'axios';

import { HolidaysType } from './../../types/holidays';
import { IHolidayResponse } from './../../../interfaces/holidays.interface';

const API_URL: string = 'https://data.gov.au/data/api/3/action/datastore_search?resource_id=bda4d4f2-7fde-4bfc-8a23-a6eefc8cef80'

const getAllHolidays = {
  type: new List(HolidaysType),

  args: {
    countryShortName: { type: StringType },
    year: { type: IntType },
    state: { type: new NonNull(StringType) }
  },

  async resolve(_: any, args: any, { dataSources }: any) {
    const response = await axios.get(API_URL);
    const data: IHolidayResponse = response.data;
    const holidays = data.result.records
      .filter(o => !o.Jurisdiction.indexOf(args.state.toLowerCase()))
      .map(o => ({
        date: moment(o['Date'], 'YYYYMMDD').format('YYYY-MM-DD'),
        description: o['Holiday Name'],
      }));
    if (holidays) {
      return holidays
    }
    return {
      status: 'failed to get Holidays',
    };
  },
};

export default getAllHolidays;
