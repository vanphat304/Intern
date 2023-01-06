import { API } from './api';

export const Service = {
  //uploadfile
  uploadFile: (params: {}) => API.POST_ATTACH_FILE(API.uploadFile, { params }),

  loginAuth: (params: {}) => API.POST(API.loginAuth, { params }),
  //student
  getStudents: (params: {}) => API.GET(API.student, { params }),
  getStudent: (vars: {}) => API.GET(API.student_id, { vars }),
  getStudentParams: (params?: {}) => API.GET(API.student_params, { params }),
  updateStudent: (params: {}) => API.PUT(API.student_update, { params }),
  deleteStudent: (vars: {}) => API.DELETE(API.student_id, { vars }),


  //company
  getCompanies: (params: {}) => API.GET(API.company, { params }),
  getCompanyParams: (params?: {}) => API.GET(API.company_params, { params }),
  getCompany: (vars: {}) => API.GET(API.company_id, { vars }),
  updateCompany: (params: {}) => API.PUT(API.company_update, { params }),
  addCompany: (params: {}) => API.POST(API.company, { params }),
  deleteCompany: (vars: {}) => API.DELETE(API.company_id, { vars }),

  // job description
  getJobDescriptions: (params: {}) => API.GET(API.jobDescription, { params }),
  getJobDescription: (vars: {}) => API.GET(API.jobDescription_id, { vars }),
  updateJobDescription: (params: {}) => API.PUT(API.jobDescription_update, { params }),
  addJobDescription: (params: {}) => API.POST(API.jobDescription, { params }),
  deleteJobDescription: (vars: {}) => API.DELETE(API.jobDescription_id, { vars }),

  //student-proposal

  getStudentProposals: (params: {}) => API.GET(API.studentProposal, { params }),
  getStudentProposal: (vars: {}) => API.GET(API.studentProposal_id, { vars }),
  updateStudentProposal: (params: {}) => API.PUT(API.studentProposal_update, { params }),
  addStudentProposal: (params: {}) => API.POST(API.studentProposal, { params }),
  deleteStudentProposal: (vars: {}) => API.DELETE(API.studentProposal_id, { vars }),
  rejectStudentProposal: (vars: {}, params: {}) =>
    API.PUT(API.studentProposal_reject_id, { vars, params }),
  approveStudentProposal: (vars: {}) => API.PUT(API.studentProposal_approve_id, { vars }),

  // student apply job
  
  getStudentApplyJobs: (params: {}) => API.GET(API.studentApplyJob, { params }),
  getStudentApplyJob: (vars: {}) => API.GET(API.studentApplyJob_id, { vars }),
  updateStudentApplyJob: (params: {}) => API.PUT(API.studentApplyJob_update, { params }),
  addStudentApplyJob: (params: {}) => API.POST(API.studentApplyJob, { params }),
  deleteStudentApplyJob: (vars: {}) => API.DELETE(API.studentApplyJob_id, { vars }),
  rejectStudentApplyJob: (vars: {}, params: {}) =>
    API.PUT(API.studentApplyJob_reject_id, { vars, params }),
  approveStudentApplyJob: (vars: {}) => API.PUT(API.studentApplyJob_approve_id, { vars }),
};
