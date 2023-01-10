import { API } from './api';

export const Service = {
  //uploadfile
  uploadFile: (params: {}) => API.POST_ATTACH_FILE(API.uploadFile, { params }),

  loginAuth: (params: {}) => API.POST(API.loginAuth, { params }),
  registerAuth: (params: {}) => API.POST(API.registerAuth, { params }),
  //student
  getStudents: (params: {}) => API.GET(API.student, { params }),
  getStudent: (vars: {}) => API.GET(API.student_id, { vars }),
  getStudentParams: (params?: {}) => API.GET(API.student_params, { params }),
  updateStudent: (params: {}) => API.PUT(API.student_update, { params }),
  deleteStudent: (vars: {}) => API.DELETE(API.student_id, { vars }),

  //company
  getCompanies: (params: {}) => API.GET(API.company, { params }),
  getCompanySpecialize: (params: {}) => API.GET(API.company_specialize, { params }),
  getCompanyDistrict: (params: {}) => API.GET(API.company_district, { params }),
  getCompanyProvince: (params: {}) => API.GET(API.company_province, { params }),
  getCompanyParams: (params?: {}) => API.GET(API.company_params, { params }),
  getCompany: (vars: {}) => API.GET(API.company_id, { vars }),
  updateCompany: (params: {}) => API.PUT(API.company_update, { params }),
  addCompany: (params: {}) => API.POST(API.company, { params }),
  deleteCompany: (vars: {}) => API.DELETE(API.company_id, { vars }),

  // job description
  getJobDescriptions: (params: {}) => API.GET(API.jobDescription, { params }),
  getJobDescription: (vars: {}) => API.GET(API.jobDescription_id, { vars }),
  getJobDescriptionCompany: (params: {}) => API.GET(API.jobDescription_jobCompany, { params }),
  getJobDescriptionByCompany: (params: {}) => API.GET(API.jobDescription_filter, { params }),
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
  getHistoryApplies: (vars: {}) => API.GET(API.studentApplyJob_history_apply, { vars }),
  checkIsJobApply: (params: {}) => API.GET(API.studentApplyJob_check, { params }),

  // student notification

  getNotificationByStudentId: (vars: {}) => API.GET(API.notification_id, { vars }),
  updateNotification: (params: {}) => API.PUT(API.notification_update, { params }),

  // student work company

  getStudentsWorkCompany: (params: {}) => API.GET(API.student_work_company, { params }),
  getStudentWorkCompany: (vars: {}) => API.GET(API.student_work_company_id, { vars }),
  updateStudentWorkCompany: (params: {}) => API.PUT(API.student_work_company_update, { params }),
  addStudentWorkCompany: (params: {}) => API.POST(API.student_work_company, { params }),
  deleteStudentWorkCompany: (vars: {}) => API.DELETE(API.student_work_company_id, { vars }),
  reportCompany: (params: {}, vars: {}) =>
    API.POST(API.student_work_company_report_id, { params, vars }),
};
