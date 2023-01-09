import { useMutation, useQuery } from '@tanstack/react-query';
import React, { memo, useMemo } from 'react';
import { FormProvider, set, useForm } from 'react-hook-form';
import InternModalContainer from '../../../../../components/InterModalContainer';
import InternButtonCancel from '../../../../../components/InternButton/InternButtonCancel';
import InternButtonDelete from '../../../../../components/InternButton/InternButtonDelete';
import InternButtonSubmit from '../../../../../components/InternButton/InternButtonSubmit';
import InternFooterModalContainer from '../../../../../components/InternFooterModalContainer';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InternText from '../../../../../components/InternInput/InternText';
import InternRow from '../../../../../components/InternRow';
import { Service } from '../../../../../services/service';
import InternSelect from '../../../../../components/InternInput/InterSelect';
import InternDatePicker from '../../../../../components/InternInput/InternDatepicker';
import { Major } from '../../../../../types/major.type';
import { Role } from '../../../../../types/role.type';
import { toast } from 'react-toastify';
import { Student } from '../../../../../types/students.type';
import { CACHE_TIME, IS_ADD, STALE_TIME, datesFormat } from '../../../../../enums';
import { AxiosError } from 'axios';
import { formatDateTime } from '../../../../../helpers/datetime';
import InternButtonReject from '../../../../../components/InternButton/InternButtonReject';
import InternButtonApprove from '../../../../../components/InternButton/InternButtonApprove';
import InternTextEditor from '../../../../../components/InternTextEditor';
import { STATUS } from '../../../../../types/status.type';
import { ScaleCompany } from '../../../../../types/scale';
import InternTextArea from '../../../../../components/InternInput/InternTextArea';
import { getNestedValue } from '../../../../../helpers/object';
import InternUpload from '../../../../../components/InternUpload';
import InternLinkForm from '../../../../../components/InternLinkForm';

const scaleCompanies = Object.keys(ScaleCompany).map((item) => ({
  id: item,
  name: item,
  value: item,
}));

const statuses = Object.keys(STATUS).map((item) => ({
  id: item,
  name: item,
  value: item,
}));

const ModalDetail = ({
  handleCloseDetail,
  id,
  handleSearch,
  handleOpenDelete,
  handleOpenReject,
}: any) => {
  const methods = useForm();

  const { isLoading, mutate: approveStudentApplyJob } = useMutation({
    mutationFn: (id: string) => Service.approveStudentApplyJob({ id }),
    onSuccess: (data) => {
      toast.success('Phê duyệt thành công');
      handleSearch();
      handleCloseDetail();
    },
    onError: (error: AxiosError<{ message: string; statusCode: string }>) => {
      console.log(error);
      toast.error(error?.response?.data?.message);
    },
  });

  const {
    setValue,
    watch,
    formState: { errors },
  } = methods;

  const { isFetching , data  }  = useQuery({
    enabled: id !== IS_ADD,
    queryKey: [id],
    refetchOnWindowFocus: false,
    queryFn: () => Service.getStudentApplyJob({ id }),
    onSuccess(data) {

      Object.keys(data).forEach((item) => {
        if (datesFormat.includes(item)) {
          setValue(item, formatDateTime(data[item]));
        } else if (
          data[item] &&
          typeof data[item] === 'object' &&
          Object.keys(data[item]).length !== 0
        ) {
          Object.keys(data[item]).forEach((nested) => {
            if (
              data[item][nested] &&
              typeof data[item][nested] === 'object' &&
              Object.keys(data[item][nested]).length !== 0
            ) {
              Object.keys(data[item][nested]).forEach((inNested) =>
                setValue(inNested, data[item][nested][inNested]),
              );
            }
            setValue(nested, data[item][nested]);
          });
        } else {
          setValue(item, data[item]);
        }
      });
    },
  });

  const {status} = data || {}
  const footer = () => (
    <InternFooterModalContainer
      ButtonSubmit={
        <InternButtonApprove
          isLoading={isLoading}
          isShow={status === STATUS.SUMBMITED || status === STATUS.PENDING}
          onClick={() => {
            approveStudentApplyJob(id);
          }}
        />
      }
      ButtonCancel={<InternButtonCancel onClick={handleCloseDetail} />}
      ButtonDelete={
        <InternButtonReject
          onClick={() => {
            handleOpenReject(id);
          }}
          isShow={status === STATUS.SUMBMITED || status === STATUS.PENDING}
        />
      }
    />
  );

  return (
    <InternModalContainer
      isLoading={isFetching || isLoading}
      closeModal={handleCloseDetail}
      footerModal={footer()}
      headerText={'Chi tiết thông tin ứng tuyển thực tập sinh viên'}
    >
      <InternRow>
        <FormProvider {...methods}>
          <form>
            <InternRow>
              <InternText labelSpan={1} name="identifierStudent" label="mã sinh viên" />
            </InternRow>
            <InternRow withAutoCol={12}>
              <InternText colSpan={6} name="lastName" label="Tên" />
              <InternText colSpan={6} name="firstName" label="Họ lót" />
            </InternRow>
            <InternRow withAutoCol={12}>
              <InternText colSpan={6} name="nameCompany" label="Tên công ty ứng tuyển" />
              <InternText colSpan={6} name="jobTitle" label="Vị trí ứng tuyển" />
            </InternRow>
            <InternRow withAutoCol={12}>
              <InternLinkForm colSpan={6} name="fileCV" label="File CV" text="Xem file cv" />
              <InternLinkForm
                colSpan={6}
                name="fileScore"
                label="File điểm"
                text="Xem file bảng điểm"
              />
            </InternRow>
            <InternRow withAutoCol={12}>
              <InternDatePicker colSpan={6} name="dateAppply" label="Ngày ứng tuyển" />
              <InternSelect disabled data={statuses} colSpan={6} name="status" label="Trạng thái" />
            </InternRow>
          </form>
        </FormProvider>
      </InternRow>
    </InternModalContainer>
  );
};

export default memo(ModalDetail);
