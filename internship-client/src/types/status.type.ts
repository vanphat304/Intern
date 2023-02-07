export const STATUS = {
  NOT_WORKED: 'NOT_WORKED',
  APPROPVED: 'APPROPVED',
  REJECTED: 'REJECTED',
  SUMBMITED: 'SUMBMITED',
  WORKED: 'WORKED'
};

export type STATUS_TYPE = (typeof STATUS)[keyof typeof STATUS]

export const STATUES = [
  {
    id : 'NOT_WORKED',
    name : 'Không làm việc',
    value : 'NOT_WORKED'
  },
  {
    id : 'APPROPVED',
    name : 'Đã được chấp nhận',
    value : 'APPROPVED'
  },
  {
    id : 'REJECTED',
    name : 'Đã bị từ chối',
    value : 'REJECTED'
  },
  {
    id : 'SUMBMITED',
    name : 'Đã đề xuất',
    value : 'SUMBMITED'
  },
  {
    id : 'WORKED',
    name : 'Đang làm việc',
    value : 'WORKED'
  },
]