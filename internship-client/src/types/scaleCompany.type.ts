export const ScaleCompany = {
  SMALL: 'SMALL',
  SMALLMEDIUM: 'SMALLMEDIUM',
  MEDIUM: 'MEDIUM',
  MEDIUMLARGE: 'MEDIUMLARGE',
  LARGE: 'LARGE',
  LARGESUPER: 'LARGESUPER'
};

export type ScaleCompanyType = (typeof ScaleCompany)[keyof typeof ScaleCompany]