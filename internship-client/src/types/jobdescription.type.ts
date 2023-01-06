import { MajorType } from './major.type';
import { TypeRole } from './role.type';

export type JobDescription = {
  jobId: string;
  jobTitle: string;
  decriptionJob: string;
  salary: number | null;
  numberRecur: number | null;
  companyId: string;
  createdAt: Date;
  updateAt: Date;
  timeStartApply: Date | null;
  timeEndAppply: Date | null;
  timeToIntverview: Date | null;
  addressToInterview: string | null;
};

export type JobDescriptions = JobDescription[];
