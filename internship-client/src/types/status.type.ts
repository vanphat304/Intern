export const STATUS = {
  PENDING: 'PENDING',
  APPROPVED: 'APPROPVED',
  REJECTED: 'REJECTED',
  SUMBMITED: 'SUMBMITED'
};

export type STATUS_TYPE = (typeof STATUS)[keyof typeof STATUS]