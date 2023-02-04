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

  const { data: historyApplies = [] , refetch } = useQuery({
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
        <p className="font-normal text-lg border-l-4 ml-1 px-2 border-green-600">Công việc đã ứng tuyển</p>

        {historyApplies.map((item) => {
          const {
            dateAppply,
            fileCV,
            fileScore,
            jobId,
            status,
            id : idJobApply,
            jobDecription: {
              jobTitle,
              companyId,
              company: { nameCompany, logo },
            },
          } = item;
          return (
            <JobApplied
              refetch={refetch}
              status={status}
              idJobApply={idJobApply}
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
