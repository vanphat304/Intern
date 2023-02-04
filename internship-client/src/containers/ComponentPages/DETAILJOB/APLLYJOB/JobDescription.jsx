import React, { useState } from 'react';
import {
  ClockCircleOutlined,
  AlipayOutlined,
  CopyOutlined,
  UsergroupAddOutlined,
  MoneyCollectOutlined,
  CalendarFilled,
  TrophyFilled,
} from '@ant-design/icons';
import InternRow from '../../../../components/InternRow';
import { toast } from 'react-toastify';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ModalApplyJob from '../ModalApplyJob';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Service } from '../../../../services/service';
import {
  CACHE_TIME,
  QUERY_KEY_CHECK,
  QUERY_KEY_JOB_DES_DETAIL,
  QUERY_KEY_STUDENTS_PROPS,
  QUERY_KEY_STUDENT_PROPS_ID,
  QUERY_KEY_STUDENT_WORK_ID,
  STALE_TIME,
  datesFormat,
} from '../../../../enums';
import { formatDateTime, getDayFromDateTime } from '../../../../helpers/datetime';
import { useAuthStore } from '../../../../store';

function JobDescription() {
  const [modalApply, setModalApply] = useState(null);
  const { id } = useParams();
  const [{ userLogin }] = useAuthStore();
  const navigate = useNavigate();

  const { data: isProposal } = useQuery({
    enabled: !!userLogin,
    queryFn: () => Service.getStudentProposal({ id: userLogin?.id }),
    queryKey: [QUERY_KEY_STUDENT_PROPS_ID, userLogin?.id],
    refetchOnWindowFocus: false,
    cacheTime: CACHE_TIME,
    staleTime: STALE_TIME,
  });
  const { data: isWorked } = useQuery({
    enabled: !!userLogin,
    queryFn: () => Service.getStudentWorkCompany({ id: userLogin?.id }),
    queryKey: [QUERY_KEY_STUDENT_WORK_ID, userLogin?.id],
    refetchOnWindowFocus: false,
    cacheTime: CACHE_TIME,
    staleTime: STALE_TIME,
  });

  const handleOpenApplyJob = () => {
    if (!userLogin) {
      toast.warning('Bạn vui lòng đăng nhập để ứng tuyển ');
      navigate('/auth/login');
    } else if (!!isProposal) {
      toast.warning('Sinh viên đã đề xuất công ty ngoài, vui lòng không ứng tuyển thêm !');
    } else if (!!isWorked) {
      toast.warning('Sinh viên đã xác nhận thực tập tại công , vui lòng không ứng tuyển thêm !');
    } else {
      setModalApply(1);
    }
  };
  const handleCloseApplyJob = () => {
    setModalApply(null);
    refetchIsApplied();
  };

  const { data: isApplied = false, refetch: refetchIsApplied } = useQuery({
    queryFn: () => Service.checkIsJobApply({ studentId: userLogin.id, jobId: id }),
    refetchOnWindowFocus: false,
    queryKey: [QUERY_KEY_CHECK, id],
    cacheTime: CACHE_TIME,
    staleTime: STALE_TIME,
  });

  const { data: JobDescription = { company: {} } } = useQuery({
    queryFn: () => Service.getJobDescription({ id }),
    queryKey: [QUERY_KEY_JOB_DES_DETAIL, id],
    staleTime: STALE_TIME,
    cacheTime: CACHE_TIME,
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      window.scrollTo(0, 0);
    },
  });

  const {
    company: { nameCompany, logo },
    timeEndAppply,
    decriptionJob,
    jobTitle,
    numberRecur,
    salary,
    addressToInterview,
    workingForm,
  } = JobDescription;

  console.log({ JobDescription });

  return (
    <>
      <div className="Applyjob">
        <div className="flex items-center p-5 bg-white rounded-md">
          <div className="mr-14 w-28 h-28 flex justify-center overflow-hidden border-solid border-gray-300 border rounded-full">
            <img className="w-3/4 object-contain max-h-full" src={logo} alt={nameCompany} />
          </div>
          <div className="flex-1">
            <h1 className="text-xl font-semibold text-blue-600">{jobTitle}</h1>{' '}
            <h1 className="text-xl font-semibold my-2">{nameCompany}</h1>
            <span className="text-xs flex items-center">
              <ClockCircleOutlined />\ Hạn nộp hồ sơ: {formatDateTime(timeEndAppply, 'DD/MM/YYYY')}
              {!getDayFromDateTime(timeEndAppply) && (
                <span className="text-red-600"> ( hết hạn ứng tuyển !)</span>
              )}
            </span>
          </div>
          <div className="w-52">
            <div className="flex flex-col ">
              <button
                onClick={!isApplied && handleOpenApplyJob}
                disabled={!getDayFromDateTime(timeEndAppply)}
                className={`p-2 rounded-lg text-white uppercase font-semibold mb-2 ${
                  isApplied
                    ? 'bg-slate-700 cursor-not-allowed'
                    : !getDayFromDateTime(timeEndAppply)
                    ? ' border border-red-600 cursor-not-allowed'
                    : 'bg-blue-600'
                }`}
              >
                {isApplied ? (
                  `ĐÃ ỨNG TUYỂN`
                ) : !getDayFromDateTime(timeEndAppply) ? (
                  <span className="text-red-600"> HẾT HẠN ỨNG TUYỂN</span>
                ) : (
                  <span>ỨNG TUYỂN NGAY</span>
                )}
                {!!isProposal | !!isWorked && getDayFromDateTime(timeEndAppply) && (
                  <p className="text-xs font-thin normal-case">không dành cho bạn =.=</p>
                )}
              </button>
              <button className="p-2 text-blue-500 border-solid border border-blue-500 rounded-lg">
                Lưu tin
              </button>
            </div>
          </div>
        </div>

        <InternRow withAutoCol={12}>
          <div className="col-span-8">
            <div className="mt-4 bg-white rounded-md p-6">
              <div className="font-bold border-l-4 border-blue-500 pl-4">
                Chi tiết tin tuyển dụng
              </div>
              <div className="flex justify-items-start mt-3">
                <div className="w-2/4">
                  <div className="flex items-center">
                    <MoneyCollectOutlined className="border text-blue-800 bg-blue-300 w-8 h-8 rounded-full flex items-center justify-center" />
                    <p className=" text-sm pl-4 text-slate-500 flex flex-col">
                      <span className="text-base font-semibold text-black">Mức lương</span>
                      {new Intl.NumberFormat().format(salary) + ' VND'}
                    </p>
                  </div>
                  <div className="flex items-center mt-1">
                    <CalendarFilled className="border text-blue-800 bg-blue-300 w-8 h-8 rounded-full flex items-center justify-center" />
                    <p className=" text-sm pl-4 text-slate-500 flex flex-col">
                      <span className="text-base font-semibold text-black">Hình thức làm việc</span>
                      {workingForm}
                    </p>
                  </div>{' '}
                </div>
                <div className="w-2/4">
                  <div className="flex items-center">
                    <UsergroupAddOutlined className="border text-blue-800 bg-blue-300 w-8 h-8 rounded-full flex items-center justify-center" />
                    <p className=" text-sm pl-4 text-slate-500 flex flex-col">
                      <span className="text-base font-semibold text-black">Số lượng tuyển</span>
                      {numberRecur + ' Người'}
                    </p>
                  </div>
                  <div className="flex items-center mt-1">
                    <TrophyFilled className="border text-blue-800 bg-blue-300 w-8 h-8 rounded-full flex items-center justify-center" />
                    <p className=" text-sm pl-4 text-slate-500 flex flex-col">
                      <span className="text-base font-semibold text-black">Cấp bậc</span>
                      Thực tập
                    </p>
                  </div>{' '}
                </div>
              </div>
            </div>

            <div className="mt-2 bg-white rounded-md p-6">
              <div className="font-bold border-l-4 border-blue-500 pl-4">Địa điểm làm việc</div>
              <span>{addressToInterview}</span>
            </div>

            <div className="mt-2 bg-white rounded-md p-6">
              <div className="font-bold border-l-4 border-blue-500 pl-4">Mô tả công việc</div>
              <p dangerouslySetInnerHTML={{ __html: decriptionJob }}></p>
            </div>
          </div>
          <div className="col-span-4">
            <div className="share_CPN">
              <p className="title_adressCPN">Chia sẻ công ty tới bạn bè</p>
              <p className="title_map">Sao chép đường dẫn</p>
              <div className="box-copy">
                <input
                  type="text"
                  defaultValue={window.location.href}
                  className="url-copy"
                  readOnly
                />
                <div className="btn-copy">
                  <CopyToClipboard
                    text={window.location.href}
                    onCopy={() => toast.success(`copy success`)}
                  >
                    <button className="btn-copy-url">
                      <CopyOutlined />
                    </button>
                  </CopyToClipboard>
                </div>
              </div>
            </div>
          </div>
        </InternRow>
      </div>

      {modalApply && (
        <ModalApplyJob title={jobTitle} id={id} handleCloseDetail={handleCloseApplyJob} />
      )}
    </>
  );
}
export default JobDescription;
