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
import { RATING, RATINGS } from '../../../../../types/rating.type';



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
      toast.error(error?.response?.data?.message);
    },
  });

  const {
    setValue,
    watch,
    formState: { errors },
  } = methods;

  
  const { isFetching, data } = useQuery({
    queryKey: ['DETEETETE',id],
    refetchOnWindowFocus: false,
    queryFn: () => Service.getStudentWorkCompany({ id }),
    onSuccess(data) {
      
      setValue('logoPreview', data['company']['logo']);
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

  const footer = () => (
    <InternFooterModalContainer
      ButtonCancel={<InternButtonCancel onClick={handleCloseDetail} />}
      // ButtonDelete={
      //   <InternButtonDelete
      //     onClick={() => {
      //       handleOpenReject(id);
      //     }}
      //   />
      // }
    />
  );

  return (
    <InternModalContainer
      isLoading={isFetching || isLoading}
      closeModal={handleCloseDetail}
      footerModal={footer()}
      headerText={'Chi tiết thông tin sinh đang làm việc tại công ty'}
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
            <InternRow>
              <InternText labelSpan={1} name="nameCompany" label="Tên công ty" />
            </InternRow>
            <InternRow withAutoCol={12}>
              {/* <InternUpload colSpan={6} name="logo" label="Logo công ty" /> */}
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
                  </>
                )}
              </div>
            </InternRow>
            <InternRow>
              <InternSelect disabled data={RATINGS} labelSpan={1} name="rating" label="Đánh giá" />
            </InternRow>
            <InternRow>
              <InternTextEditor
                disabled
                labelSpan={1}
                name="decription"
                label="Mô tả thông tin công ty"
              />
            </InternRow>
          </form>
        </FormProvider>
      </InternRow>
    </InternModalContainer>
  );
};

export default memo(ModalDetail);
