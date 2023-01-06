import { MajorType } from './major.type';
import { TypeRole } from './role.type';

export type Company = {
  id: string;
  nameCompany: string | null;
  logo: string | null;
  scale: string | null;
  address: string;
  // passwordHashed: string;
  introduce: TypeRole;

  createdAt: Date;
  updateAt: Date;
};

export type Companies = Company[];
