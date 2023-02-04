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
  QUERY_KEY_STUDENTS,
  QUERY_KEY_STUDENTS_PROPS,
  STALE_TIME,
} from '../../../../enums';
import InternModalDelete from '../../../../components/InterModalContainer/InternModalDelete';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import { StudentProposals } from '../../../../types/studentProposal.type';
import InternModalReject from '../../../../components/InterModalContainer/InternModalReject';
import { filterObjectFalsy } from '../../../../helpers/object';

type searchItemType = {
  searchItem: string;
};

const StudentProposalPage = () => {
  const [modalDetailId, setModalDetailId] = useState<number | null>(null);
  const [modalDeleteId, setModalDeleteId] = useState<number | null>(null);
  const [modalRejectId, setModalRejectId] = useState<number | null>(null);

  const [queryString, setUrlSearchParams, { identifierStudent }] =
    useQueryString('identifierStudent');

  console.log({ identifierStudent });

  const { pageNumber, pageSize, searchItem } = queryString;

  const handleOpenDetail = useCallback((id = IS_ADD) => setModalDetailId(id), []);
  const handleCloseDetail = useCallback(() => setModalDetailId(null), []);

  const handleOpenDelete = useCallback((id = IS_DELETE) => setModalDeleteId(id), []);
  const handleCloseDelete = useCallback(() => setModalDeleteId(null), []);

  const handleOpenReject = useCallback((id = IS_DELETE) => setModalRejectId(id), []);
  const handleCloseReject = useCallback(() => setModalRejectId(null), []);

  const { isLoading: isLoadingDelete, mutate: deleteStudentProposal } = useMutation({
    mutationFn: (id: string | number | null) => Service.deleteStudentProposal({ id }),
    onSuccess: (data) => {
      refetch();
      handleCloseDelete();
      handleCloseDetail();
      toast.success('delete success');
    },
    onError(error: AxiosError<{ message: string; statusCode: string }>) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    },
  });

  const { isLoading: isLoadingReject, mutate: rejectStudentProposal } = useMutation({
    mutationFn: ({ id, reason }: { id: string | null | number; reason: string }) => {
      return Service.rejectStudentProposal({ id }, { reasonReject: reason });
    },
    onSuccess: () => {
      toast.success('Từ chối thành công');
      refetch();
      handleCloseReject();
      handleCloseDetail();
    },
  });

  const handleDelete = useCallback(() => {
    deleteStudentProposal(modalDeleteId);
  }, [deleteStudentProposal, modalDeleteId]);

  const handleReject = useCallback(
    (reason: string) => {
      rejectStudentProposal({ id: modalRejectId, reason });
    },
    [modalRejectId, rejectStudentProposal],
  );

  const { data, isLoading, refetch } = useQuery({
    queryKey: [QUERY_KEY_STUDENTS_PROPS, pageNumber, pageSize, searchItem, identifierStudent],
    queryFn: () => Service.getStudentProposals({ ...queryString, identifierStudent }),
    cacheTime: CACHE_TIME,
    staleTime: STALE_TIME,
    keepPreviousData: true,
  });

  const { data: counts } = useQuery({
    queryKey: [QUERY_KEY_STUDENTS_PROPS + 'counts'],
    queryFn: () => Service.getStudentProposalsCount({ ...queryString, identifierStudent }),
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
      <InternButtonAddNew col={6} onClick={() => handleOpenDetail(IS_ADD)} />
      <InternTable
        counts={counts}
        columns={columnsStudentProposal({
          handleOpenDetail: handleOpenDetail,
          // handleOpenDelete: handleOpenDelete,
        })}
        dataSource={data as StudentProposals}
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

export default StudentProposalPage;
