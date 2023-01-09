import { RATINGType } from "./rating.type"
import { ScaleCompanyType } from "./scaleCompany.type"
import { STATUS_TYPE } from "./status.type"


export type StudentWorkCompany = {
  studentId: string
  companyId: string
  rating: RATINGType
  decription: string
}

  export type StudentWorkCompanies = StudentWorkCompany[];
