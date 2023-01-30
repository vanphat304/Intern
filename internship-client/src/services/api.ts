import axiosInstance from './base';

type dataTypeParams = {
  vars?: {};
  params?: {};
};

// const buildFormData = (formData, data, parentKey) => {
//     if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File)) {
//       Object.keys(data).forEach(key => {
//         buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
//       });
//     } else {
//       const value = data == null ? '' : data;

//       formData.append(parentKey, value);
//     }
//   };

//   const jsonToFormData = data => {
//     const formData = new FormData();

//     buildFormData(formData, data);

//     return formData;
//   };

const parseUrl = (url = '', vars: any) => {
  if (vars) {
    Object.keys(vars).forEach((i) => {
      url = url.replace(`{${i}}`, vars[i]);
    });
  }

  return url;
};

export const API = {
  GET: async (url = '', data: dataTypeParams) => {
    const { vars, params } = data;
    console.log(data);

    const result = await axiosInstance.get(parseUrl(url, vars), {
      params,
    });

    return result.data;
  },

  POST: async (url = '', data: dataTypeParams) => {
    const { vars, params } = data;

    const result = await axiosInstance.post(parseUrl(url, vars), params);

    return result.data;
  },
  PUT: async (url = '', data: dataTypeParams) => {
    const { vars, params } = data;

    const result = await axiosInstance.put(parseUrl(url, vars), params);

    return result.data;
  },
  DELETE: async (url = '', data: dataTypeParams) => {
    const { vars, params } = data;

    const result = await axiosInstance.delete(parseUrl(url, vars), params);

    return result.data;
  },
  POST_ATTACH_FILE: async (url = '', data: dataTypeParams) => {
    const { vars, params } = data;

    console.log({ data });

    // const result = await axiosInstance.post(parseUrl(url, vars), jsonToFormData(params), {
    const result = await axiosInstance.post(parseUrl(url, vars), params, {
      headers: {
        'Content-Type': 'multipart/form-data;',
      },
    });

    return result.data;
  },
  EXPORT_EXCEL: async (url = '', data: dataTypeParams) => {
    const { vars, params } = data;

    const result = await axiosInstance.get(parseUrl(url, vars), {
      params: params,
      responseType: 'arraybuffer',
    });

    return new Blob([result.data], {
      type: result.headers['content-type'],
    });
  },

  attachFile: 'AttachFile',
  uploadFile: 'uploadfile',
  // student
  loginAuth: 'auth/signin',
  registerAuth: 'auth/register',
  student: 'student',
  student_id: 'student/{id}',
  student_update: 'student/update',
  student_params: 'student/params',

  // company
  company: 'company',
  company_id: 'company/{id}',
  company_update: 'company/update',
  company_params: 'company/params',
  company_specialize: 'company/specialize',
  company_district: 'company/district',
  company_province: 'company/province',

  // job description

  jobDescription: 'jobdescription',
  jobDescription_id: 'jobdescription/{id}',
  jobDescription_update: 'jobdescription/update',
  jobDescription_jobCompany: 'jobdescription/job-company',
  jobDescription_filter: 'jobdescription/filter',
  jobDescription_like: 'jobdescription/like',

  // student proposal
  studentProposal: 'student-proposal',
  studentProposal_id: 'student-proposal/{id}',
  studentProposal_update: 'student-proposal/update',
  studentProposal_approve_id: 'student-proposal/approve/{id}',
  studentProposal_reject_id: 'student-proposal/reject/{id}',

  // student apply job
  studentApplyJob: 'student-apply-jobs',
  studentApplyJob_id: 'student-apply-jobs/{id}',
  studentApplyJob_history_apply: 'student-apply-jobs/history-apply/{id}',
  studentApplyJob_check: 'student-apply-jobs/check',
  studentApplyJob_update: 'student-apply-jobs/update',
  studentApplyJob_approve_id: 'student-apply-jobs/approve/{id}',
  studentApplyJob_reject_id: 'student-apply-jobs/reject/{id}',

  //student notification
  notification: 'notification',
  notification_id: 'notification/{id}',
  notification_update: 'notification/update',

  //student work at company
  student_work_company: 'student-work-company',
  student_work_company_id: 'student-work-company/{id}',
  student_work_company_update: 'student-work-company/update',
  student_work_company_report_id: 'student-work-company/report/{id}',

  //student like job
  student_like_job:'student-like-job/like',
  student_un_like_job:'student-like-job/unlike',

};
