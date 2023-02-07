import { DeleteFilled } from '@ant-design/icons';
import React from 'react';
import '../ListRecruitCPN/ListRecruitCPN.css';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Service } from '../../../services/service';
import { CACHE_TIME, QUERY_KEY_JOB_DES, STALE_TIME, datesFormat } from '../../../enums';
import { formatDateTime, getDayFromDateTime } from '../../../helpers/datetime';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../../../store';
function JobSave() {
  const [{ userLogin }] = useAuthStore();

  const { isLoading, data: listJobLiked = [] , refetch } = useQuery({
    queryFn: () => Service.getJobDescriptionByStudentLike({ studentId: userLogin?.id }),
    queryKey: [QUERY_KEY_JOB_DES],
    cacheTime: CACHE_TIME,
    staleTime: STALE_TIME,
    refetchOnWindowFocus: false,
    onSuccess: () => {
      window.scrollTo(0, 0);
    },
  });

  const { isLoading: isLoadingUnlike, mutate: unLikeJob } = useMutation({
    mutationFn: (params) => Service.unLikeJob(params),
    onSuccess: (data) => {
      refetch()
    },
    onError: (error) => {
    },
  });

  return (
    <div className="ListRecruitCPN">
      <div className="ListRecruitCPN_listJob">
        <p className="des_company-title">Danh sách công việc đã lưu</p>

        {listJobLiked.map((item) => {
          return (
            <div className="ListRecruitCPN_listJob-item">
              <div className="ListRecruitCPN_listJob-item-avatar">
                <img
                  src={item?.company?.logo}
                  className="w-100"
                  alt={item?.company?.nameCompany}
                  title={item?.jobTitle}
                />
              </div>
              <div className="ListRecruitCPN_listJob-item-title">
                <Link to={`/job-description/${item?.jobId}`}>
                  <p className="ListRecruitCPN_listJob-nameJob hover:underline">{item?.jobTitle}</p>
                </Link>
                <p className="ListRecruitCPN_listJob-CPN">{item?.company?.nameCompany}</p>
                <div className="ListRecruitCPN_listJob-grouplable">
                  <label className="listJob-grouplable-salary">{item?.salary}</label>
                  <label className="listJob-grouplable-place">
                    {item?.company?.Province?.name}
                  </label>
                  <label className="listJob-grouplable-timePost">
                    {formatDateTime(item?.createdAt)}
                  </label>
                </div>
              </div>
              <div className="listJob-grouplable-timeRemening">
                <p>
                  Còn <span>{getDayFromDateTime(item?.timeEndAppply)}</span> ngày để ứng tuyển
                </p>
                <div className="listJob-grouplable-timeRemening-btn button_saveJob">
                  <button
                    onClick={() => unLikeJob({ studentId: userLogin?.id, jobId: item?.jobId })}
                  >
                    <DeleteFilled className={'text-red-600'} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default JobSave;
