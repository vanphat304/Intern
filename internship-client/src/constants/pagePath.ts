import CompanyPage from '../containers/InternPage/Companies/CompanyPage';
import JobDescriptionPage from '../containers/InternPage/Companies/JobDescriptionPage';
import ResultApplyJobPage from '../containers/InternPage/Results/ResultApplyJobPage';
import StudentApplyForJobPage from '../containers/InternPage/Students/StudentApplyJobPage';
import StudentPage from '../containers/InternPage/Students/StudentPage';
import StudentProposalPage from '../containers/InternPage/Students/StudentProposalPage';
import StudentWorAtCompany from '../containers/InternPage/Students/StudentWorkCompanyPage';

export const COMPONENTS_PRIVATE_ADMIN_ROUTER = {
  Students: {
    Student: {
      code: 'student',
      path: '/students/student',
      Component: StudentPage,
      title: 'Quản lý thông tin sinh viên',
    },
    StudentProposal: {
      code: 'StudentProposal',
      path: '/students/student-proposal',
      Component: StudentProposalPage,
      title: 'Quản lý sinh viên tự đề xuất công ty',
    },
    StudentApplyJob: {
      code: 'StudentApplyJob',
      path: '/students/apply-job',
      Component: StudentApplyForJobPage,
      title: 'Quản lý sinh viên ứng tuyển thực tập',
    },
    StudentWorkCompany: {
      code: 'StudentWorkCompany',
      path: '/students/student-work-company',
      Component: StudentWorAtCompany,
      title: 'Quản lý sinh viên đang làm việc tại công ty',
    },
  },
  Companies: {
    Company: {
      code: 'Company',
      path: '/Companies/Company',
      Component: CompanyPage,
      title: 'Quản lý thông tin công ty',
    },
    JobDecripton: {
      code: 'JobDecripton',
      path: '/Companies/jobDecripton',
      Component: JobDescriptionPage,
      title: 'Quản lý thông tin mô tả công việc',
    },
  },
  Results: {
    ResultApplyJob: {
      code: 'ResultApplyJob',
      path: '/ResultApplyJobs/result',
      Component: ResultApplyJobPage,
      title: 'Quản lý thông tin kết quả phỏng vấn',
    },
  },
};

type objectKeyType = keyof typeof COMPONENTS_PRIVATE_ADMIN_ROUTER;

export const COMPONENTS_PRIVATE_ADMIN_FLATTED_MAP = Object.keys(COMPONENTS_PRIVATE_ADMIN_ROUTER)
  .map((i) =>
    Object.keys(COMPONENTS_PRIVATE_ADMIN_ROUTER[i as objectKeyType]).map((j) => {
      let objectKeyNestedType = COMPONENTS_PRIVATE_ADMIN_ROUTER[i as objectKeyType];
      type objectNestedKeyType = keyof typeof objectKeyNestedType;
      return COMPONENTS_PRIVATE_ADMIN_ROUTER[i as objectKeyType][j as objectNestedKeyType];
    }),
  )
  .flat();

export const COMPONENTS_LEFT_MENU = [
  {
    code: 'students',
    title: 'Sinh Viên',
    path: '/students',
    subMenu: Object.keys(COMPONENTS_PRIVATE_ADMIN_ROUTER['Students']).map((i) => {
      let objectKeyNestedType = COMPONENTS_PRIVATE_ADMIN_ROUTER['Students'];
      type objectNestedKeyType = keyof typeof objectKeyNestedType;
      return COMPONENTS_PRIVATE_ADMIN_ROUTER['Students'][i as objectNestedKeyType];
    }),
  },
  {
    code: 'companies',
    title: 'Công Ty',
    path: '/Companies',
    subMenu: Object.keys(COMPONENTS_PRIVATE_ADMIN_ROUTER['Companies']).map((i) => {
      let objectKeyNestedType = COMPONENTS_PRIVATE_ADMIN_ROUTER['Companies'];
      type objectNestedKeyType = keyof typeof objectKeyNestedType;
      return COMPONENTS_PRIVATE_ADMIN_ROUTER['Companies'][i as objectNestedKeyType];
    }),
  },
  {
    code: 'results',
    title: 'Kết quả',
    path: '/ResultApplyJobs',
    subMenu: Object.keys(COMPONENTS_PRIVATE_ADMIN_ROUTER['Results']).map((i) => {
      let objectKeyNestedType = COMPONENTS_PRIVATE_ADMIN_ROUTER['Results'];
      type objectNestedKeyType = keyof typeof objectKeyNestedType;
      return COMPONENTS_PRIVATE_ADMIN_ROUTER['Results'][i as objectNestedKeyType];
    }),
  },
];
