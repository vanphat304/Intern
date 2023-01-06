export type actionType<T> = {
  type: string;
  data: T;
};
export interface user {
    userName:string,
    email : string ,
}
export interface currentTile {
  currentTile : string
  
}
