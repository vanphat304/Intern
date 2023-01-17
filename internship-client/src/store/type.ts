export type actionType<T> = {
  type: string;
  data: T;
};
export interface user {
  userName: string;
  email: string;
}
export interface currentTile {
  currentTile: string;
}
export interface searchJob {
  addressProvinceId: String;
  addressDistrictId: String;
  searchItem: String;
  specializeCompanyId: String;
}
