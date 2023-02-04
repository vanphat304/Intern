import * as dayjs from 'dayjs';
import { FORMAT_DATE_TIME } from '../enums';

export const parserDateTime = (dateTime) =>
  dateTime
    ? dayjs(dateTime)
      .startOf('day')
      .toISOString()
    : null;


export const formatDateTime = (dateTime, format = FORMAT_DATE_TIME) =>
  dateTime ? dayjs(dateTime).format(format) : null;

export const isValidDate = (dateTime) =>
  dateTime ? dayjs(dateTime).isValid() : null

export const getDayFromDateTime = (dateTime) => {

console.log('compare',Math.abs( new Date() - new Date(dateTime)))
  return isValidDate(dateTime) ? new Date((new Date(dateTime).getTime() - new Date().getTime())).getDate() : 0
}
export const getCurrentTime = (dateTime = new Date())=> {
  return isValidDate(dateTime) ? formatDateTime(dateTime , 'DD/MM/YYYY - hh:mm:ss') : null
}