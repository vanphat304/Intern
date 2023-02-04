import React, { useCallback, useState } from 'react';
import InternTable from '../../../../components/InternTable';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Students } from '../../../../types/students.type';
import { columnsCompanies } from './column';
import InternButtonAddNew from '../../../../components/InternButton/InternButtonAddNew';
import ModalDetail from './ModalDetail';
import StudentSearch from './StudentSearch';
import { useQueryString } from '../../../../hook/useQueryString';
import { Service } from '../../../../services/service';
import {
  CACHE_TIME,
  IS_ADD,
  IS_DELETE,
  QUERY_KEY_COMPANY,
  QUERY_KEY_STUDENTS,
  STALE_TIME,
} from '../../../../enums';
import InternModalDelete from '../../../../components/InterModalContainer/InternModalDelete';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import { Companies } from '../../../../types/companies.type';

type searchItemType = {
  searchItem: string;
};

const CompanyPage = () => {
  const [modalDetailId, setModalDetailId] = useState<number | null>(null);
  const [modalDeleteId, setModalDeleteId] = useState<number | null>(null);

  const [queryString, setUrlSearchParams] = useQueryString();

  const { pageNumber, pageSize, searchItem } = queryString;

  const handleOpenDetail = useCallback((id = IS_ADD) => setModalDetailId(id), []);
  const handleCloseDetail = useCallback(() => setModalDetailId(null), []);

  const handleOpenDelete = useCallback((id = IS_DELETE) => setModalDeleteId(id), []);
  const handleCloseDelete = useCallback(() => setModalDeleteId(null), []);

  const { isLoading: isLoadingDelete, mutate: deleteCompany } = useMutation({
    mutationFn: (id: string | number | null) => Service.deleteCompany({ id }),
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
    deleteCompany(modalDeleteId);
  }, [deleteCompany, modalDeleteId]);

  const { data, isLoading, refetch } = useQuery({
    queryKey: [QUERY_KEY_COMPANY, pageNumber, pageSize, searchItem],
    queryFn: () => Service.getCompanies(queryString),
    cacheTime: CACHE_TIME,
    staleTime: STALE_TIME,
    keepPreviousData: true,
  });
  const { data: counts } = useQuery({
    queryKey: [QUERY_KEY_COMPANY + 'count'],
    queryFn: () => Service.getCompaniesCount(queryString),
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
      <InternButtonAddNew col={6} onClick={() => handleOpenDetail(IS_ADD)} />
      <InternTable
        counts={counts}
        columns={columnsCompanies({
          handleOpenDetail: handleOpenDetail,
          handleOpenDelete: handleOpenDelete,
        })}
        dataSource={data as Companies}
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

export default CompanyPage;
