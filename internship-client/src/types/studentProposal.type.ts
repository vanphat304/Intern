import { ScaleCompanyType } from "./scaleCompany.type"
import { STATUS_TYPE } from "./status.type"


export type StudentProposal = {
    id: string
    nameCompany: string | null
    introduceCompany: string | null
    scale: ScaleCompanyType
    addressCompany: string | null
    legalRepresentative: string | null
    introducePosition: string | null
    referenceName: string | null
    referenceEmail: string | null
    referencePhoneNumber: string | null
    addressIntern: string | null
    linkWebsite: string | null
    specializeCompany: string | null
    createdAt: Date
    updateAt: Date
    studentId: string
    week1: string | null
    week2: string | null
    week3: string | null
    week4: string | null
    week5: string | null
    week6: string | null
    week7: string | null
    week8: string | null
    status: STATUS_TYPE
    reasonReject: string | null
  }

  export type StudentProposals = StudentProposal[];
