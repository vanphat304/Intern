import { MajorType } from './major.type';
import { TypeRole } from './role.type';

export type Student = {
  id: string;
  identifierStudent: string | null;
  firstName: string | null;
  lastName: string | null;
  username: string;
  // passwordHashed: string;
  role: TypeRole;
  dateOfBirth: Date | null;
  address: string | null;
  class: string | null;
  majors: MajorType | null;
  email: string | null;
  phoneNumber: string | null;
  anotherContact: string | null;
  avatar: string | undefined;
  createdAt: Date;
  updateAt: Date;
};

export type Students = Student[];
