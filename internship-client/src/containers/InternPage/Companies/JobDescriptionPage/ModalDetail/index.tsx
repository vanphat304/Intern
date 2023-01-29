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
import { formatDateTime, isValidDate, parserDateTime } from '../../../../../helpers/datetime';
import { AxiosError } from 'axios';
import { ScaleCompany } from '../../../../../types/scale';
import InternTextArea from '../../../../../components/InternInput/InternTextArea';
import InternUpload from '../../../../../components/InternUpload';
import { Company } from '../../../../../types/companies.type';
import InternButtonTableDelete from '../../../../../components/InternButtonTableDelete';
import InternTextEditor from '../../../../../components/InternTextEditor';
import { JobDescription } from '../../../../../types/jobdescription.type';
import { WOKINGFORM } from '../../../../../types/workingForm.type';

const schema = yup.object({
  jobTitle: yup.string().required('trường này bắt buộc nhập'),
  decriptionJob: yup.string().required('trường này bắt buộc nhập').max(2000, 'Tối đã 2000 ký tự'),
  salary: yup.string().required('trường này bắt buộc nhập').max(14, 'Nhập tối đã 14 chữ số'),
  workingForm: yup.string().required('Trường này bắt buộc nhập'),
  numberRecur: yup.string().required('trường này bắt buộc nhập').max(14, 'Nhập tối đã 14 chữ số'),
  companyId: yup.string().required('trường này bắt buộc nhập'),
  timeStartApply: yup.date().typeError('trường bắt buộc nhập'),
  timeEndAppply: yup
    .date()
    .typeError('trường bắt buộc nhập')
    .when('timeStartApply', (timeStartApply, schema) => {
      return isValidDate(timeStartApply)
        ? schema.min(timeStartApply, 'Ngày kết thúc nộp phải lớn hơn ngày bắt đầu nộp')
        : schema.required('trường này bắt buộc nhập');
    }),
  timeToIntverview: yup
    .date()
    .typeError('trường bắt buộc nhập')
    .when('timeEndAppply', (timeEndAppply, schema) => {
      return isValidDate(timeEndAppply)
        ? schema.min(timeEndAppply, 'Ngày phỏng vấn phải lớn hơn ngày kết thúc nộp cv')
        : schema;
    }),
  addressToInterview: yup.string().required('trường này bắt buộc nhập'),
});

const workingForms = Object.keys(WOKINGFORM).map((item) => ({
  id: item,
  name: item,
  value: item,
}));

const ModalDetail = ({ handleCloseDetail, id, handleSearch, handleOpenDelete }: any) => {
  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const { isLoading: isLoadingUpdate, mutate: updateJobDescription } = useMutation({
    mutationFn: (params: JobDescription) => Service.updateJobDescription(params),
    onSuccess: (data) => {
      console.log({ data });
      toast.success('update success');
      handleSearch();
      handleCloseDetail();
    },
    onError(error: AxiosError<{ message: string; statusCode: string }>) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    },
  });

  const { isLoading: isLoadingAdd, mutate: adđJobDescription } = useMutation({
    mutationFn: (params: JobDescription) => Service.addJobDescription(params),
    onSuccess: (data) => {
      toast.success('add new company success');
      handleSearch();
      handleCloseDetail();
    },
    onError(error: AxiosError<{ message: string; statusCode: string }>) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    },
  });

  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = methods;

  const handleSubmitForm = () => {
    return handleSubmit((data) => {
      const { numberRecur, salary, ...rest } = data;
      if (id !== IS_ADD) {
        updateJobDescription({
          numberRecur: +numberRecur,
          salary: +salary,
          ...rest,
        } as JobDescription);
      } else {
        adđJobDescription({
          numberRecur: +numberRecur,
          salary: +salary,
          ...rest,
        } as JobDescription);
      }
    });
  };

  const { isFetching } = useQuery({
    enabled: id !== IS_ADD,
    queryKey: [id],
    refetchOnWindowFocus: false,
    queryFn: () => Service.getJobDescription({ id }),
    onSuccess(data) {
      Object.keys(data).forEach((item) => {
        if (datesFormat.includes(item)) {
          setValue(item, formatDateTime(data[item]));
        } else {
          setValue(item, data[item]);
        }
      });
    },
  });

  const { data: companies = [] } = useQuery({
    queryKey: ['keyParams'],
    queryFn: () => Service.getCompanyParams(),
    refetchOnWindowFocus: false,
  });

  console.log({ companies });

  const footer = () => (
    <InternFooterModalContainer
      ButtonSubmit={
        <InternButtonSubmit
          isLoading={isLoadingAdd || isLoadingUpdate}
          onClick={handleSubmitForm()}
        />
      }
      ButtonCancel={<InternButtonCancel onClick={handleCloseDetail} />}
      ButtonDelete={
        <InternButtonDelete
          onClick={() => {
            handleOpenDelete(id);
          }}
          isShow={id !== IS_ADD}
        />
      }
    />
  );

  return (
    <InternModalContainer
      isLoading={isFetching}
      closeModal={handleCloseDetail}
      footerModal={footer()}
      headerText={
        id === 1 ? 'Thêm mới thông tin mô tả công việc' : 'Chi tiết thông tin mô tả công việc'
      }
    >
      <InternRow>
        <FormProvider {...methods}>
          <form>
            <InternRow>
              <InternText labelSpan={1} name="jobTitle" label="Tên thông tin công việc" />
            </InternRow>
            <InternRow withAutoCol={12}>
              <InternText colSpan={6} name="salary" type="number" label="Mức lương " />
              <InternText colSpan={6} name="numberRecur" type="number" label="Số lượng tuyển" />
            </InternRow>
            <InternRow>
              <InternSelect
                data={workingForms}
                labelSpan={1}
                name="workingForm"
                label="Hình thức làm việc"
              />
            </InternRow>
            <InternRow>
              <InternTextEditor labelSpan={1} name="decriptionJob" label="Mô tả công việc" />
            </InternRow>
            <InternRow withAutoCol={12}>
              <InternDatePicker colSpan={6} name="timeStartApply" label="Thời gian nhận cv" />
              <InternDatePicker colSpan={6} name="timeEndAppply" label="Hạn kết thúc nhận cv" />
            </InternRow>
            <InternRow withAutoCol={12}>
              <InternSelect
                keyName="nameCompany"
                keyValue="id"
                colSpan={6}
                data={companies}
                name="companyId"
                label="Chọn công ty"
              />
              <InternDatePicker colSpan={6} name="timeToIntverview" label="Thời gian phỏng vấn" />
            </InternRow>
            <InternRow>
              <InternTextArea
                labelSpan={1}
                name="addressToInterview"
                label="Địa chỉ tham gia phỏng vấn"
              />
            </InternRow>
          </form>
        </FormProvider>
      </InternRow>
    </InternModalContainer>
  );
};

export default memo(ModalDetail);
