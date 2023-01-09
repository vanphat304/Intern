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
  status,
  jobId,
  jobTitle,
  nameCompany,
  dateAppply,
  fileCV,
  fileScore,
  logo,
  companyId,
}) => {
  const [modalConfirm, setModalConfirm] = useState(null);

  const [{ id }] = useAuthStore();
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
      handleCloseModalConfirm();
    },
    onError: () => {
      toast.error('Có lỗi trong quá trình xử lý thông tin');
    },
  });

  const handleConfirm = () => {
    const dataSubmit = {
      studentId: id,
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
        <div className="flex items-center flex-col mr-6">
          <p className="text-slate-300 font-normal flex items-center">Trạng thái</p>
          <div className="flex">
            <span
              onClick={status === STATUS.APPROPVED && handleOpenModalConfirm}
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
