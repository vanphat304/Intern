import React, { useState } from 'react';
import './ListRecruitCPN.css';
import { useQuery } from '@tanstack/react-query';
import { Service } from '../../../services/service';
import { CACHE_TIME, QUERY_KEY_JOB_DES, STALE_TIME, datesFormat } from '../../../enums';
import { formatDateTime, getDayFromDateTime } from '../../../helpers/datetime';
import { Link } from 'react-router-dom';
import InternButtonLike from '../../../components/InternButtonLike';
import { useAuthStore } from '../../../store';
function ListRecruitCPN({ id }) {
  const [{ userLogin }] = useAuthStore();

  const { isLoading, data: listJobCompany = [] } = useQuery({
    queryFn: () => Service.getJobDescriptionByCompany({ companyId: id }),
    queryKey: [QUERY_KEY_JOB_DES, id],
    cacheTime: CACHE_TIME,
    staleTime: STALE_TIME,
    refetchOnWindowFocus: false,
    onSuccess: () => {
      window.scrollTo(0, 0);
    },
  });

  return (
    <div className="ListRecruitCPN">
      <div className="ListRecruitCPN_listJob">
        <p className="des_company-title">Tuyển dụng</p>

        {listJobCompany.map((item) => {
          const { StudentLikeJob } = item;

          let isLike = StudentLikeJob.map((item) => item?.studentId).includes(userLogin?.id);
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
                  <p className="ListRecruitCPN_listJob-nameJob">{item?.jobTitle}</p>
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
                  <InternButtonLike init={isLike} jobId={item?.jobId} studentId={userLogin?.id} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default ListRecruitCPN;
