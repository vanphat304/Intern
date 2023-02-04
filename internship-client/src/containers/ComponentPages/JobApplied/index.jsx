import React, { useState } from 'react';
import { ClockCircleFilled, EyeFilled } from '@ant-design/icons';
import { formatDateTime } from '../../../helpers/datetime';
import { Link } from 'react-router-dom';
import { STATUS } from '../../../types/status.type';
import InternModalConfirm from '../../../components/InterModalContainer/InternModalConfirm';
import { useMutation } from '@tanstack/react-query';
import { Service } from '../../../services/service';
import { toast } from 'react-toastify';
import { useAuthStore } from '../../../store';
const JobApplied = ({
  refetch,
  status,
  jobId,
  idJobApply,
  jobTitle,
  nameCompany,
  dateAppply,
  fileCV,
  fileScore,
  logo,
  companyId,
}) => {
  const [modalConfirm, setModalConfirm] = useState(null);

  const [
    {
      userLogin: { id },
    },
  ] = useAuthStore();
  const handleCloseModalConfirm = () => {
    setModalConfirm(null);
  };

  const handleOpenModalConfirm = () => {
    setModalConfirm(jobId);
  };

  const { mutate: confirmInternPlace } = useMutation({
    mutationFn: (params) => Service.addStudentWorkCompany(params),
    onSuccess: () => {
      toast('Xác nhận nới thực tập thành công');
      refetch();
      handleCloseModalConfirm();
    },
    onError: () => {
      toast.error('Có lỗi trong quá trình xử lý thông tin');
    },
  });

  const handleConfirm = () => {
    const dataSubmit = {
      studentId: id,
      idJobApply,
      companyId,
      decription: '',
    };
    confirmInternPlace(dataSubmit);
  };
  return (
    <>
      <div className="flex item-center border border-solid border-slate-200 my-5 rounded-md hover : shadow-slate-600 p-4">
        <div className="w-12 h-12 mr-3 border border-solid border-slate-400 rounded-md">
          <img className="w-full h-full" src={logo} alt="img" />
        </div>
        <div className="flex-1 pr-4">
          <p className="text-slate-700 text-base capitalize hover:underline">
            <Link to={`/job-description/${jobId}`}>{jobTitle}</Link>
          </p>
          <p className="text-slate-500 text-lg uppercase">{nameCompany}</p>
        </div>

        {status === STATUS.APPROPVED && (
          <div className="flex items-center flex-col mr-6">
            <p className="text-slate-300 font-normal flex items-center">Xác nhận nơi thực tập</p>
            <div className="flex">
              <span onClick={status === STATUS.APPROPVED && handleOpenModalConfirm}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-10 h-10 text-green-600 animate-bounce cursor-pointer"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </div>
          </div>
        )}

        <div className="flex items-center flex-col mr-6">
          <p className="text-slate-300 font-normal flex items-center">Trạng thái</p>
          <div className="flex">
            <span
              className={`${
                status === STATUS.SUMBMITED
                  ? 'bg-yellow-200 text-yellow-800'
                  : ` ${
                      status === STATUS.APPROPVED
                        ? 'bg-blue-200 text-blue-800'
                        : 'bg-red-200 text-red-800'
                    } `
              } rounded-3xl p-1 cursor-pointer flex items-center ml-2`}
            >
              {status}
            </span>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-slate-300 font-normal flex items-center">
            <ClockCircleFilled className="mr-4" />
            {formatDateTime(dateAppply, 'DD/MM/YYYY HH:mm')}
          </p>
          <div className="flex">
            <span className="text-green-800 bg-green-300 rounded-3xl p-1 flex items-center">
              <EyeFilled />
              <a target={'_blank'} rel="noreferrer" href={fileScore}>
                file điểm
              </a>
            </span>
            <span className="text-green-800 bg-green-300 rounded-3xl p-1 flex items-center ml-2">
              <EyeFilled />
              <a target={'_blank'} rel="noreferrer" href={fileCV}>
                file CV
              </a>
            </span>
          </div>
        </div>
      </div>

      {modalConfirm && (
        <InternModalConfirm closeModal={handleCloseModalConfirm} onClick={handleConfirm} />
      )}
    </>
  );
};

export default JobApplied;
