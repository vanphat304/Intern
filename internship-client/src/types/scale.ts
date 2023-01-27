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
    name :'1 - 10 Nhân viên',
    value : 'SMALL'
  },
  {
    id : 'SMALLMEDIUM',
    name : '10 - 50 nhân viên',
    value : 'SMALLMEDIUM'
  }
]