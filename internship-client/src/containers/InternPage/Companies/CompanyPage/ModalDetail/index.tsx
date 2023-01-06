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
import { CACHE_TIME, IS_ADD, STALE_TIME } from '../../../../../enums';
import { formatDateTime, isValidDate, parserDateTime } from '../../../../../helpers/datetime';
import { AxiosError } from 'axios';
import { ScaleCompany } from '../../../../../types/scale';
import InternTextArea from '../../../../../components/InternInput/InternTextArea';
import InternUpload from '../../../../../components/InternUpload';
import { Company } from '../../../../../types/companies.type';
import InternButtonTableDelete from '../../../../../components/InternButtonTableDelete';
import InternTextEditor from '../../../../../components/InternTextEditor';

const schema = yup.object({
  nameCompany: yup.string().required('trường này bắt buộc nhập'),
  logo: yup.string().required('trường này bắt buộc nhập'),
  scale: yup.string().required('trường này bắt buộc nhập'),
  address: yup.string().required('trường này bắt buộc nhập'),
  introduce: yup.string().required('trường này bắt buộc nhập'),
});

const scalesCompany = Object.keys(ScaleCompany).map((item) => ({
  id: item,
  name: item,
  value: item,
}));

const ModalDetail = ({ handleCloseDetail, id, handleSearch, handleOpenDelete }: any) => {
  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const { isLoading: isLoadingUpdate, mutate: updateCompany } = useMutation({
    mutationFn: (params: Company) => Service.updateCompany(params),
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

  const { isLoading: isLoadingAdd, mutate: addCompany } = useMutation({
    mutationFn: (params: Company) => Service.addCompany(params),
    onSuccess: (data) => {
      console.log({ data });
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
    watch,
    setValue,
    formState: { errors },
  } = methods;

  const handleSubmitForm = () => {
    return handleSubmit((dto) => {
      const { logoPreview, ...data } = dto;
      if (id !== IS_ADD) {
        updateCompany(data as Company);
      } else {
        addCompany(data as Company);
      }
    });
  };

  const { isFetching } = useQuery({
    enabled: id !== IS_ADD,
    queryKey: [id],
    refetchOnWindowFocus: false,
    queryFn: () => Service.getCompany({ id }),
    onSuccess(data) {
      setValue('logoPreview', data['logo']);
      Object.keys(data).forEach((item) => {
        if (item === 'dateOfBirth') {
          setValue(item, formatDateTime(data[item]));
        } else {
          setValue(item, data[item]);
        }
      });
    },
  });

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
      headerText={id === 1 ? 'Thêm mới thông tin công ty' : 'Chi tiết thông tin công ty'}
    >
      <InternRow>
        <FormProvider {...methods}>
          <form>
            <InternRow>
              <InternText labelSpan={1} name="nameCompany" label="Tên công ty" />
            </InternRow>
            <InternRow withAutoCol={12}>
              <InternUpload colSpan={6} name="logo" label="Logo công ty" />
              <div className="col-span-6 flex justify-center items-center">
                {watch('logoPreview') && (
                  <>
                    <img
                      className="col-span-6"
                      src={watch('logoPreview')}
                      alt="logo"
                      width={'200'}
                      height={'100'}
                    />

                    <InternButtonTableDelete
                      onClick={() => {
                        setValue('logo', '');
                        setValue('logoPreview', null);
                      }}
                    />
                  </>
                )}
              </div>
            </InternRow>
            <InternRow>
              <InternSelect
                labelSpan={1}
                data={scalesCompany}
                colSpan={6}
                name="scale"
                label="Quy mô công ty"
              />
            </InternRow>
            <InternRow>
              <InternText labelSpan={1} name="address" label="Địa chỉ công ty" />
            </InternRow>
            <InternRow>
              <InternTextEditor labelSpan={1} name="introduce" label="Giới thiệu" />
            </InternRow>
          </form>
        </FormProvider>
      </InternRow>
    </InternModalContainer>
  );
};

export default memo(ModalDetail);
