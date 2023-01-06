import { ScaleCompanyType } from "./scaleCompany.type"
import { STATUS_TYPE } from "./status.type"


export type StudentApplyJob = {
  id: string
  jobId: string
  studentId: string
  dateAppply: Date
  fileCV: string
  fileScore: string
  status: STATUS_TYPE | null
  reasonReject: string | null
}

  export type StudentApplyJobs = StudentApplyJob[];
