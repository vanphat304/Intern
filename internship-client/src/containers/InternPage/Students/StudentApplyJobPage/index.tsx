import React, { useCallback, useState } from 'react';
import InternTable from '../../../../components/InternTable';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Students } from '../../../../types/students.type';
import { columnsStudentProposal } from './column';
import InternButtonAddNew from '../../../../components/InternButton/InternButtonAddNew';
import ModalDetail from './ModalDetail';
import StudentSearch from './StudentSearch';
import { useQueryString } from '../../../../hook/useQueryString';
import { Service } from '../../../../services/service';
import {
  CACHE_TIME,
  IS_ADD,
  IS_DELETE,
  IS_IMPORT,
  QUERY_KEY_STUDENTS,
  QUERY_KEY_STUDENTS_APPLY_JOB,
  QUERY_KEY_STUDENTS_PROPS,
  STALE_TIME,
} from '../../../../enums';
import InternModalDelete from '../../../../components/InterModalContainer/InternModalDelete';
import { toast } from 'react-toastify';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { StudentProposals } from '../../../../types/studentProposal.type';
import InternModalReject from '../../../../components/InterModalContainer/InternModalReject';
import { StudentApplyJob, StudentApplyJobs } from '../../../../types/studentApplyJob.type';
import { filterObjectFalsy } from '../../../../helpers/object';
import InternButtonExport from '../../../../components/InternButton/InternExport';
import InternButtonImport from '../../../../components/InternButton/InternImport';
import InternModalImport from '../../../../components/InterModalContainer/InternModalImport';
import { path } from '../../../../services/base';
import {saveAs} from 'file-saver'
import { getCurrentTime } from '../../../../helpers/datetime';
type searchItemType = {
  searchItem: string;
};

const StudentApplyJobPage = () => {
  const [modalDetailId, setModalDetailId] = useState<number | null>(null);
  const [modalDeleteId, setModalDeleteId] = useState<number | null>(null);
  const [modalRejectId, setModalRejectId] = useState<number | null>(null);
  const [modalImport, setModalImport] = useState<number | null>(null);

  const [queryString, setUrlSearchParams, , restParams] = useQueryString();

  const { pageNumber, pageSize } = queryString;

  const handleOpenDetail = useCallback((id = IS_ADD) => setModalDetailId(id), []);
  const handleCloseDetail = useCallback(() => setModalDetailId(null), []);

  const handleOpenDelete = useCallback((id = IS_DELETE) => setModalDeleteId(id), []);
  const handleCloseDelete = useCallback(() => setModalDeleteId(null), []);
  const handleOpenModalImport = useCallback((id = IS_IMPORT) => setModalImport(id), []);
  const handleCloseModalImport = useCallback(() => setModalImport(null), []);

  const handleOpenReject = useCallback((id = IS_DELETE) => setModalRejectId(id), []);
  const handleCloseReject = useCallback(() => setModalRejectId(null), []);

  const { isLoading: isLoadingDelete, mutate: deleteStudentApplyJob } = useMutation({
    mutationFn: (id: string | number | null) => Service.deleteStudentApplyJob({ id }),
    onSuccess: (data) => {
      refetch();
      handleCloseDelete();
      handleCloseDetail();
      toast.success('delete success');
    },
    onError(error: AxiosError<{ message: string; statusCode: string }>) {
      
      toast.error(error?.response?.data?.message);
    },
  });

  const fileName= `danh sách sinh viên ứng tuyển thực tập export ngày ${getCurrentTime()}`

  const importData = async (formData: FormData) => {
    const data = await axios.post(`${path}/student-apply-jobs/import`, formData , {
      headers:{
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('tempUser') as string)?.access_token}`,
      }
    });
    return data;
  };

  const { isLoading: isLoadingImport, mutate: importStudentApplyJob } = useMutation({
    mutationFn: (file: FormData) => importData(file),
    onSuccess: (data) => {
      refetch();
      handleCloseModalImport();
      toast.success('import file thành công');
    },
    onError(error: AxiosError<{ message: string; statusCode: string }>) {
      
      toast.error(error?.response?.data?.message);
    },
  });

  const { isLoading: isLoadingExport, mutate: exportStudentApplyJob } = useMutation({
    mutationFn: (params: {}) => Service.exportStudentApplyJob(params),
    onSuccess: (data) => {
      saveAs(data,`${fileName}.xlsx`)
      refetch();
      handleCloseModalImport();
      toast.success('export file thành công');
    },
    onError(error: AxiosError<{ message: string; statusCode: string }>) {
      
      toast.error(error.message);
    },
  });

  const { isLoading: isLoadingReject, mutate: rejectStudentApplyJob } = useMutation({
    mutationFn: ({ id, reason }: { id: string | null | number; reason: string }) => {
      return Service.rejectStudentApplyJob({ id }, { reasonReject: reason });
    },
    onSuccess: () => {
      toast.success('Từ chối thành công');
      refetch();
      handleCloseReject();
      handleCloseDetail();
    },
  });

  const handleDelete = useCallback(() => {
    deleteStudentApplyJob(modalDeleteId);
  }, [deleteStudentApplyJob, modalDeleteId]);

  const handleReject = useCallback(
    (reason: string) => {
      rejectStudentApplyJob({ id: modalRejectId, reason });
    },
    [modalRejectId, rejectStudentApplyJob],
  );

  const { data, isLoading, refetch } = useQuery({
    queryKey: [QUERY_KEY_STUDENTS_APPLY_JOB, pageNumber, pageSize, { ...restParams }],
    queryFn: () => Service.getStudentApplyJobs({ ...queryString, ...restParams }),
    cacheTime: CACHE_TIME,
    staleTime: STALE_TIME,
    keepPreviousData: true,
  });

  const handleSearch = (searchItem: searchItemType) => {
    

    setUrlSearchParams({ ...queryString, ...filterObjectFalsy(searchItem) });
  };

  return (
    <>
      <StudentSearch onClick={handleSearch as (a: searchItemType | void) => void} />
      <InternButtonAddNew hidden={true} col={2} onClick={() => handleOpenDetail(IS_ADD)}>
        <InternButtonImport onClick={handleOpenModalImport} />
        <InternButtonExport
          onClick={() => exportStudentApplyJob({ ...queryString, ...restParams })}
        />
      </InternButtonAddNew>
      <InternTable
        columns={columnsStudentProposal({
          handleOpenDetail: handleOpenDetail,
        })}
        dataSource={data as StudentApplyJobs}
        isLoading={isLoading}
      />

      {modalDetailId && (
        <ModalDetail
          handleSearch={refetch}
          id={modalDetailId}
          handleCloseDetail={handleCloseDetail}
          handleOpenDelete={handleOpenDelete}
          handleOpenReject={handleOpenReject}
        />
      )}
      {modalDeleteId && (
        <InternModalDelete
          isLoading={isLoadingDelete}
          onClick={handleDelete}
          closeModal={handleCloseDelete}
        />
      )}
      {modalImport && (
        <InternModalImport
          isLoading={isLoadingImport}
          onClick={importStudentApplyJob}
          closeModal={handleCloseModalImport}
        />
      )}
      {modalRejectId && (
        <InternModalReject
          isLoading={isLoadingReject}
          onClick={handleReject}
          closeModal={handleCloseReject}
        />
      )}
    </>
  );
};

export default StudentApplyJobPage;
