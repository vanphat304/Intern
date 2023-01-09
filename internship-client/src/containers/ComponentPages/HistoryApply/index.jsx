import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Service } from '../../../services/service';
import { useAuthStore } from '../../../store';
import { CACHE_TIME, QUERY_KEY_HISTORY, QUERY_KEY_JOB_DES, STALE_TIME } from '../../../enums';
import JobApplied from '../JobApplied';

export const HistoryApply = () => {
  const [
    {
      userLogin: { id },
    },
  ] = useAuthStore();

  const { data: historyApplies = [] } = useQuery({
    queryFn: () => Service.getHistoryApplies({ id }),
    queryKey: [QUERY_KEY_HISTORY, id],
    cacheTime: CACHE_TIME,
    staleTime: STALE_TIME,
    refetchOnWindowFocus: false,
    onSuccess: () => {
      window.scrollTo(0, 0);
    },
  });

  console.log({ historyApplies });

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 bg-white border border-solid border-slate-300 rounded shadow-md p-4">
        <p className="font-normal text-lg ">Công việc đã ứng tuyển</p>

        {historyApplies.map((item) => {
          const {
            dateAppply,
            fileCV,
            fileScore,
            jobId,
            status,
            jobDecription: {
              jobTitle,
              companyId,
              company: { nameCompany, logo },
            },
          } = item;
          return (
            <JobApplied
              status={status}
              logo={logo}
              key={item.id}
              jobId={jobId}
              dateAppply={dateAppply}
              fileCV={fileCV}
              fileScore={fileScore}
              jobTitle={jobTitle}
              nameCompany={nameCompany}
              companyId={companyId}
            />
          );
        })}
      </div>
    </div>
  );
};
