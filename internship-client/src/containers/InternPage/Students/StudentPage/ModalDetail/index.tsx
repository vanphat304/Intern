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
import { MAJOR, Major } from '../../../../../types/major.type';
import { Role } from '../../../../../types/role.type';
import { toast } from 'react-toastify';
import { Student } from '../../../../../types/students.type';
import { CACHE_TIME, IS_ADD, STALE_TIME, datesFormat } from '../../../../../enums';
import { AxiosError } from 'axios';
import { formatDateTime } from '../../../../../helpers/datetime';

const schema = yup.object({
  identifierStudent: yup.string().required().max(10, 'mã sinh viên không vượt quá 10 '),
  firstName: yup.string().required('trường này bắt buộc nhập'),
  lastName: yup.string().required('trường này bắt buộc nhập'),
  dateOfBirth: yup.date(),
  address: yup.string(),
  class: yup.string().required('trường này bắt buộc nhập'),
  majors: yup.string(),
  email: yup.string().required().email('email không đúng định dạng'),
  phoneNumber: yup
    .string()
    .required()
    .matches(
      /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/,
      'số điện thoại không đúng định dạng',
    ),
  anotherContact: yup.string(),
});


const roles = Object.keys(Role).map((item) => ({
  id: item,
  name: item,
  value: item,
}));

const ModalDetail = ({ handleCloseDetail, id, handleSearch, handleOpenDelete }: any) => {
  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const { isLoading, mutate: updateStudent } = useMutation({
    mutationFn: (params: Student) => Service.updateStudent(params),
    onSuccess: (data) => {
      toast.success('update success');
      handleSearch();
      handleCloseDetail();
    },
    onError(error: AxiosError<{ message: string; statusCode: string }>) {
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
      updateStudent(data as Student);
      // updateStudent(data);
    });
  };

  const { isFetching } = useQuery({
    enabled: id !== IS_ADD,
    queryKey: [id],
    refetchOnWindowFocus: false,
    queryFn: () => Service.getStudent({ id }),
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

  const footer = () => (
    <InternFooterModalContainer
      ButtonSubmit={<InternButtonSubmit isLoading={isLoading} onClick={handleSubmitForm()} />}
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
      isLoading={isFetching || isLoading}
      closeModal={handleCloseDetail}
      footerModal={footer()}
      headerText={id === IS_ADD ? 'Thêm mới thông tin sinh viên' : 'Chi tiết thông tin sinh viên'}
    >
      <InternRow>
        <FormProvider {...methods}>
          <form>
            <InternRow>
              <InternText labelSpan={1} name="identifierStudent" label="Mã số sinh viên" />
            </InternRow>
            <InternRow withAutoCol={12}>
              <InternText colSpan={6} name="firstName" label="Tên" />
              <InternText colSpan={6} name="lastName" label="Họ tên lót" />
            </InternRow>

            <InternRow withAutoCol={12}>
              <InternSelect colSpan={6} data={MAJOR} name="majors" label="Chuyên ngành" />
              <InternText colSpan={6} name="class" label="Tên lớp" />
            </InternRow>
            <InternRow withAutoCol={12}>
              <InternDatePicker colSpan={6} name="dateOfBirth" label="Ngày sinh" />
              <InternText colSpan={6} name="address" label="Địa chỉ" />
            </InternRow>
            <InternRow withAutoCol={12}>
              <InternText colSpan={6} name="email" label="Email" />
              <InternText colSpan={6} name="phoneNumber" label="Số điện thoại" />
            </InternRow>
            <InternRow>
              <InternText labelSpan={1} name="anotherContact" label="Thông tin liên lạc khác" />
            </InternRow>
          </form>
        </FormProvider>
      </InternRow>
    </InternModalContainer>
  );
};

export default memo(ModalDetail);
