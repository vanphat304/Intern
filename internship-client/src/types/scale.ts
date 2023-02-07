export const ScaleCompany = {
  SMALL: 'SMALL',
  SMALLMEDIUM: 'SMALLMEDIUM',
  MEDIUM: 'MEDIUM',
  MEDIUMLARGE: 'MEDIUMLARGE',
  LARGE: 'LARGE',
  LARGESUPER: 'LARGESUPER'
};

export type ScaleCompanyType = (typeof ScaleCompany)[keyof typeof ScaleCompany]

export const SCALE_COMPANY = [
  {
    id : 'SMALL',
    name :'1 - 24 Nhân viên',
    value : 'SMALL'
  },
  {
    id : 'SMALLMEDIUM',
    name : '50 - 100 nhân viên',
    value : 'SMALLMEDIUM'
  },
  {
    id : 'MEDIUM',
    name : '100-500 nhân viên',
    value : 'MEDIUM'
  },
  {
    id : 'MEDIUMLARGE',
    name : '500-1000 nhân viên',
    value : 'MEDIUMLARGE'
  },
  {
    id : 'LARGESUPER',
    name : '+1000 nhân viên',
    value : 'LARGESUPER'
  },
  {
    id : 'LARGE',
    name : '+2000 nhân viên',
    value : 'LARGE'
  }
]