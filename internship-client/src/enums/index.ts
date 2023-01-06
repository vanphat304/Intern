export const CACHE_TIME = 1000 * 5;
export const STALE_TIME = 4000 * 5;
export const API_KEY = 'tl0e0gqrytq5426qalr3hefrsabq29cr2cxhngvq19j8anko';
export const FORMAT_DATE_TIME = 'YYYY-MM-DD';
export const datesFormat = ['dateOfBirth','timeStartApply','timeEndAppply','timeToIntverview','dateAppply'];
export const IS_ADD = 1;
export const IS_DELETE = 2;
export const QUERY_KEY_STUDENTS = 'STUDENTS';
export const QUERY_KEY_COMPANY = 'COMPANIES';
export const QUERY_KEY_JOB_DES = 'JOB_DESCRIPTION';
export const QUERY_KEY_STUDENTS_PROPS = 'QUERY_KEY_STUDENTS_PROPS';

export const initialConfigEditor = {
  plugins: 'code',
  selector: 'textarea' as unknown as undefined,
  toolbar: [
    'fontsizeselect forecolor backcolor | bold italic underline | numbered-list bullet-list | alignleft aligncenter alignright alignjustify | code',
  ],
  images_file_types: 'jpeg,jpg,png',
  branding: false,
  elementpath: false,
};
