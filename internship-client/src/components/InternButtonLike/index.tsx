import React, { useState } from 'react';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import { Service } from '../../services/service';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

type typeButtonLike = {
  init?: boolean;
  studentId?: string;
  jobId?: string;
};

const InternButtonLike = ({ init = false, studentId, jobId }: typeButtonLike) => {
  const navigate = useNavigate();
  const [like, setLike] = useState(init);
  const { isLoading, mutate: likeJob } = useMutation({
    mutationFn: (params: { studentId: string | undefined; jobId: string | undefined }) =>
      Service.likeJob(params),
    onSuccess: (data) => {
      console.log({ data });
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const { isLoading: isLoadingUnlike, mutate: unLikeJob } = useMutation({
    mutationFn: (params: { studentId: string | undefined; jobId: string | undefined }) =>
      Service.unLikeJob(params),
    onSuccess: (data) => {
      console.log({ data });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleLikeJob = () => {
    if (!studentId) {
      toast.warning('Đặng nhập trước khi lưu công việc');
      navigate('/auth/login');
      return;
    }
    likeJob({ studentId, jobId });
    setLike(true);
  };
  const handleUnLikeJob = () => {
    unLikeJob({ studentId, jobId });
    setLike(false);
  };

  return (
    <>
      {!like ? (
        <button disabled={isLoadingUnlike} onClick={handleLikeJob}>
          <HeartOutlined />
        </button>
      ) : (
        <button disabled={isLoading} onClick={handleUnLikeJob}>
          <HeartFilled className="text-blue-600" />
        </button>
      )}
    </>
  );
};

export default InternButtonLike;
