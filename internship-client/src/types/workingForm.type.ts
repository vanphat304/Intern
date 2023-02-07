export const WOKINGFORM = {
  PART_TIME: 'PART_TIME',
  FULL_TIME: 'FULL_TIME'
};

export type WOKINGFORM_TYPE = (typeof WOKINGFORM)[keyof typeof WOKINGFORM]

export const WORKING_FORMS = [
  {
    id : 'PART_TIME',
    name : 'Bán thời gian',
    value : 'PART_TIME'
  },
  {
    id : 'FULL_TIME',
    name : 'Toàn thời gian',
    value : 'FULL_TIME'
  },
  
] 