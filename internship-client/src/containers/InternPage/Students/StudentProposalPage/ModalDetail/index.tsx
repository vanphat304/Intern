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
import {
  CACHE_TIME,
  IS_ADD,
  QUERY_KEY_COMPANY,
  STALE_TIME,
  datesFormat,
} from '../../../../../enums';
import { AxiosError } from 'axios';
import { formatDateTime } from '../../../../../helpers/datetime';
import InternButtonReject from '../../../../../components/InternButton/InternButtonReject';
import InternButtonApprove from '../../../../../components/InternButton/InternButtonApprove';
import InternTextEditor from '../../../../../components/InternTextEditor';
import { STATUES, STATUS } from '../../../../../types/status.type';
import { SCALE_COMPANY, ScaleCompany } from '../../../../../types/scale';
import InternTextArea from '../../../../../components/InternInput/InternTextArea';
import InternLinkForm from '../../../../../components/InternLinkForm';

const schema = yup.object({
  nameCompany: yup.string().required('Trường này bắt buộc nhập'),
  introduceCompany: yup.string().required('Trường này bắt buộc nhập'),
  scale: yup.string().required('Trường này bắt buộc nhập'),
  addressCompany: yup.string().required('Trường này bắt buộc nhậpp'),
  legalRepresentative: yup.string().required('Trường này bắt buộc nhập'),
  introducePosition: yup.string().required('Trường này bắt buộc nhập'),
  addressIntern: yup.string().required('Trường này bắt buộc nhập'),
  linkWebsite: yup.string().required('Trường này bắt buộc nhập'),
  speacialize: yup.string().required('Trường này bắt buộc nhập'),
  referenceName: yup.string().required('Trường này bắt buộc nhập'),
  referenceEmail: yup.string().required().email('email không đúng định dạng'),
  referencePhoneNumber: yup
    .string()
    .required()
    .matches(
      /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/,
      'số điện thoại không đúng định dạng',
    ),
  week1: yup.string().required('Trường này bắt buộc nhập'),
  week2: yup.string().required('Trường này bắt buộc nhập'),
  week3: yup.string().required('Trường này bắt buộc nhập'),
  week4: yup.string().required('Trường này bắt buộc nhập'),
  week5: yup.string().required('Trường này bắt buộc nhập'),
  week6: yup.string().required('Trường này bắt buộc nhập'),
  week7: yup.string().required('Trường này bắt buộc nhập'),
  week8: yup.string().required('Trường này bắt buộc nhập'),
});

const scaleCompanies = Object.keys(ScaleCompany).map((item) => ({
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
  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const { isLoading, mutate: approveStudentProposal } = useMutation({
    mutationFn: (id: string) => Service.approveStudentProposal({ id }),
    onSuccess: (data) => {
      toast.success('Phê duyệt thành công');
      handleSearch();
      handleCloseDetail();
    },
    onError: (error: AxiosError<{ message: string; statusCode: string }>) => {
      toast.error(error?.response?.data?.message);
    },
  });

  const { data: specializes = [] } = useQuery({
    queryFn: () => Service.getCompanySpecialize({}),
    queryKey: [QUERY_KEY_COMPANY, 'specialize', 'proposal'],
    cacheTime: CACHE_TIME,
    staleTime: STALE_TIME,
    refetchOnWindowFocus: false,
  });

  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = methods;

  const handleSubmitForm = () => {
    return handleSubmit(() => {
      approveStudentProposal(id);
      handleCloseDetail();
      
    });
  };

  const { isFetching , data } = useQuery({
    enabled: id !== IS_ADD,
    queryKey: [id],
    refetchOnWindowFocus: false,
    queryFn: () => Service.getStudentProposal({ id }),
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
      ButtonSubmit={<InternButtonApprove isShow={data?.status === STATUS.SUMBMITED} isLoading={isLoading} onClick={handleSubmitForm()} />}
      ButtonCancel={<InternButtonCancel onClick={handleCloseDetail} />}
      ButtonDelete={
        <InternButtonReject
        isShow={data?.status === STATUS.SUMBMITED}
          onClick={() => {
            handleOpenReject(id);
          }}
          
        />
      }
    />
  );

  return (
    <InternModalContainer
      isLoading={isFetching || isLoading}
      closeModal={handleCloseDetail}
      footerModal={footer()}
      headerText={
        id === IS_ADD
          ? 'Thêm mới thông tin công ty sinh viên tự đề xuất'
          : 'Chi tiết thông tin công ty sinh viên tự đề xuất'
      }
    >
      <InternRow>
        <FormProvider {...methods}>
          <form>
            <InternRow>
              <InternText labelSpan={1} name="nameCompany" label="Tên công ty" />
            </InternRow>
            <InternRow>
              <InternTextEditor
                labelSpan={1}
                name="introduceCompany"
                label="giới thiêu thông tin công ty"
              />
            </InternRow>
            <InternRow withAutoCol={12}>
              <InternSelect colSpan={6} data={SCALE_COMPANY} name="scale" label="Quy mô công ty" />
              <InternLinkForm text='linkWebsite' colSpan={6} name="linkWebsite" label="website công ty" />
            </InternRow>
            <InternRow>
              <InternText labelSpan={1} name="addressCompany" label="địa chỉ công ty" />
            </InternRow>
            <InternRow>
              <InternText labelSpan={1} name="addressIntern" label="địa chỉ thực tập" />
            </InternRow>
            <InternRow>
              <InternTextEditor
                labelSpan={1}
                name="legalRepresentative"
                label="Thông tin người đại diện pháp luật"
              />
            </InternRow>
            <InternRow withAutoCol={12}>
              <InternSelect
                colSpan={6}
                name="speacialize"
                label="Lĩnh vực công ty"
                data={specializes}
                keyName='name'
                keyValue='id'
              />
              <InternText
                colSpan={6}
                name="referenceName"
                label="Thông tin người giám sát thực tâp"
              />
            </InternRow>
            <InternRow withAutoCol={12}>
              <InternText
                colSpan={6}
                name="referencePhoneNumber"
                label="Sô diện thoại người giám sát"
              />
              <InternText colSpan={6} name="referenceEmail" label="Email người giám sát" />
            </InternRow>
            <InternRow>
              <InternTextEditor
                labelSpan={1}
                name="introducePosition"
                label="Giới thiệu về vị trí thực tập"
              />
            </InternRow>
            <InternRow>
              <p className="col-span-1 text-red-800 font-semibold underline ">
                Mô tả thông tin thực tập từng tuần
              </p>
            </InternRow>
            <InternRow>
              <InternTextEditor labelSpan={1} name="week1" label="Thông tin tuần 1" />
            </InternRow>
            <InternRow>
              <InternTextEditor labelSpan={1} name="week2" label="Thông tin tuần 2" />
            </InternRow>
            <InternRow>
              <InternTextEditor labelSpan={1} name="week3" label="Thông tin tuần 3" />
            </InternRow>
            <InternRow>
              <InternTextEditor labelSpan={1} name="week4" label="Thông tin tuần 4" />
            </InternRow>
            <InternRow>
              <InternTextEditor labelSpan={1} name="week5" label="Thông tin tuần 5" />
            </InternRow>
            <InternRow>
              <InternTextEditor labelSpan={1} name="week6" label="Thông tin tuần 6" />
            </InternRow>
            <InternRow>
              <InternTextEditor labelSpan={1} name="week7" label="Thông tin tuần 7" />
            </InternRow>
            <InternRow>
              <InternTextEditor labelSpan={1} name="week8" label="Thông tin tuần 8" />
            </InternRow>
            <InternRow withAutoCol={12}>
              <InternSelect disabled data={STATUES} colSpan={6} name="status" label="Trạng thái" />
              {watch('status') === STATUS.REJECTED && (
                <InternTextArea disabled colSpan={6} name="reasonReject" label="Lý do từ chối" />
              )}
            </InternRow>
          </form>
        </FormProvider>
      </InternRow>
    </InternModalContainer>
  );
};

export default memo(ModalDetail);
