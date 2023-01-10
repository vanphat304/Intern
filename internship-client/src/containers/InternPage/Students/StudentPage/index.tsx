import React, { useCallback, useState } from 'react';
import InternTable from '../../../../components/InternTable';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Students } from '../../../../types/students.type';
import { columnsStudent } from './column';
import InternButtonAddNew from '../../../../components/InternButton/InternButtonAddNew';
import ModalDetail from './ModalDetail';
import StudentSearch from './StudentSearch';
import { useQueryString } from '../../../../hook/useQueryString';
import { Service } from '../../../../services/service';
import { CACHE_TIME, IS_ADD, IS_DELETE, QUERY_KEY_STUDENTS, STALE_TIME } from '../../../../enums';
import InternModalDelete from '../../../../components/InterModalContainer/InternModalDelete';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';

type searchItemType = {
  searchItem: string;
};

const StudentPage = () => {
  const [modalDetailId, setModalDetailId] = useState<number | null>(null);
  const [modalDeleteId, setModalDeleteId] = useState<number | null>(null);

  const [queryString, setUrlSearchParams] = useQueryString();

  const { pageNumber, pageSize, searchItem } = queryString;

  const handleOpenDetail = useCallback((id = IS_ADD) => setModalDetailId(id), []);
  const handleCloseDetail = useCallback(() => setModalDetailId(null), []);

  const handleOpenDelete = useCallback((id = IS_DELETE) => setModalDeleteId(id), []);
  const handleCloseDelete = useCallback(() => setModalDeleteId(null), []);

  const { isLoading: isLoadingDelete, mutate: deleteStudent } = useMutation({
    mutationFn: (id: string | number | null) => Service.deleteStudent({ id }),
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
    deleteStudent(modalDeleteId);
  }, [deleteStudent, modalDeleteId]);

  const { data, isLoading, refetch } = useQuery({
    queryKey: [QUERY_KEY_STUDENTS, pageNumber, pageSize, searchItem],
    queryFn: () => Service.getStudents(queryString),
    cacheTime: CACHE_TIME,
    staleTime: STALE_TIME,
    keepPreviousData: true,
  });

  const handleSearch = (searchItem: searchItemType) => {
    setUrlSearchParams({ ...queryString, ...searchItem });
  };

  return (
    <>
      <StudentSearch onClick={handleSearch as (a: searchItemType | void) => void} />
      {/* <InternButtonAddNew col={6} onClick={() => handleOpenDetail(IS_ADD)} /> */}
      <InternTable
        columns={columnsStudent({
          handleOpenDetail: handleOpenDetail,
          handleOpenDelete: handleOpenDelete,
        })}
        dataSource={data as Students}
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

export default StudentPage;
