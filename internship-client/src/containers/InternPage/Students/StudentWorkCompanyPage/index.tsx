import React, { useCallback, useState } from 'react';
import InternTable from '../../../../components/InternTable';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Students } from '../../../../types/students.type';
import { columnsStudentWork } from './column';
import InternButtonAddNew from '../../../../components/InternButton/InternButtonAddNew';
import ModalDetail from './ModalDetail';
import StudentSearch from './StudentSearch';
import { useQueryString } from '../../../../hook/useQueryString';
import { Service } from '../../../../services/service';
import {
  CACHE_TIME,
  IS_ADD,
  IS_DELETE,
  QUERY_KEY_STUDENTS_WORK,
  STALE_TIME,
} from '../../../../enums';
import InternModalDelete from '../../../../components/InterModalContainer/InternModalDelete';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';

import { StudentWorkCompanies } from '../../../../types/studentWorkCompany.type';

type searchItemType = {
  searchItem: string;
};

const StudentWorkCompanyPage = () => {
  const [modalDetailId, setModalDetailId] = useState<number | null>(null);
  const [modalDeleteId, setModalDeleteId] = useState<number | null>(null);

  const [queryString, setUrlSearchParams] = useQueryString();

  const { pageNumber, pageSize, searchItem } = queryString;

  const handleOpenDetail = useCallback((id = IS_ADD) => setModalDetailId(id), []);
  const handleCloseDetail = useCallback(() => setModalDetailId(null), []);

  const handleOpenDelete = useCallback((id = IS_DELETE) => setModalDeleteId(id), []);
  const handleCloseDelete = useCallback(() => setModalDeleteId(null), []);

  const { isLoading: isLoadingDelete, mutate: deleteStudentWorkCompany } = useMutation({
    mutationFn: (id: string | number | null) => Service.deleteStudentWorkCompany({ id }),
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

  const handleDelete = useCallback(() => {
    deleteStudentWorkCompany(modalDeleteId);
  }, [deleteStudentWorkCompany, modalDeleteId]);

  const { data =[], isLoading, refetch } = useQuery({
    queryKey: [QUERY_KEY_STUDENTS_WORK, pageNumber, pageSize, searchItem],
    queryFn: () => Service.getStudentsWorkCompany (queryString),
    cacheTime: CACHE_TIME,
    staleTime: STALE_TIME,
    keepPreviousData: true,
  });

  console.log({ data });

  const handleSearch = (searchItem: searchItemType) => {
    setUrlSearchParams({ ...queryString, ...searchItem });
  };

  return (
    <>
      <StudentSearch onClick={handleSearch as (a: searchItemType | void) => void} />
      <InternButtonAddNew col={6} onClick={() => handleOpenDetail(IS_ADD)} />
      <InternTable
        columns={columnsStudentWork({
          handleOpenDetail: handleOpenDetail,
        })}
        dataSource={data as StudentWorkCompanies}
        isLoading={isLoading}
      />

      {modalDetailId && (
        <ModalDetail
          handleSearch={refetch}
          id={modalDetailId}
          handleCloseDetail={handleCloseDetail}
          handleOpenDelete={handleOpenDelete}
        />
      )}
      {modalDeleteId && (
        <InternModalDelete
          isLoading={isLoadingDelete}
          onClick={handleDelete}
          closeModal={handleCloseDelete}
        />
      )}
    </>
  );
};

export default StudentWorkCompanyPage;
