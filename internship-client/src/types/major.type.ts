export const Major = {
  INFORMATION_SYSTEM: 'INFORMATION_SYSTEM',
  SOFTWARE_TECHNOLOGY: 'SOFTWARE_TECHNOLOGY',
  NETWORK_SCURITY: 'NETWORK_SCURITY',
  DATA_ANALYS: 'DATA_ANALYS',
};

export type MajorType = typeof Major[keyof typeof Major];

export const MAJOR = [
  {
    id : 'INFORMATION_SYSTEM',
    name : 'Hệ thống thông tin',
    value : 'INFORMATION_SYSTEM'
  },
  {
    id : 'SOFTWARE_TECHNOLOGY',
    name : 'Công nghệ phần mềm',
    value : 'INFORMATION_SYSTEM'
  },
  {
    id : 'NETWORK_SCURITY',
    name : 'An toàn , bảo mật thông tin',
    value : 'INFORMATION_SYSTEM'
  },
  {
    id : 'DATA_ANALYS',
    name : 'Khoa học phân tích dữ liệu',
    value : 'INFORMATION_SYSTEM'
  },

]
