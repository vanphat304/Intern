export const Role = {
    USER: 'USER',
    ADMIN: 'ADMIN',
    SUPER_ADMIN: 'SUPER_ADMIN'
  };
  
  export type TypeRole = (typeof Role)[keyof typeof Role]