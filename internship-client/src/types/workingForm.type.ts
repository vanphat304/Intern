export const WOKINGFORM = {
  PART_TIME: 'PART_TIME',
  FULL_TIME: 'FULL_TIME'
};

export type WOKINGFORM_TYPE = (typeof WOKINGFORM)[keyof typeof WOKINGFORM]