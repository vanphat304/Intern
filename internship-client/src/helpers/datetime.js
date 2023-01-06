import * as dayjs from 'dayjs';
import { FORMAT_DATE_TIME } from '../enums';

export const parserDateTime = (dateTime  )  =>
  dateTime
    ? dayjs(dateTime)
      .startOf('day')
      .toISOString()
    : null;


export const formatDateTime = (dateTime  , format = FORMAT_DATE_TIME) =>
  dateTime ? dayjs(dateTime).format(format) : null;

export const isValidDate =( dateTime) =>
  dateTime ? dayjs(dateTime).isValid() : null
