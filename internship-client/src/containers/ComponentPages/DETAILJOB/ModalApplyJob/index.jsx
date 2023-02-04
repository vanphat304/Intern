import { useMutation, useQuery } from '@tanstack/react-query';
import React, { memo, useMemo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import InternFooterModalContainer from '../../../../components/InternFooterModalContainer';
import InternButtonApprove from '../../../../components/InternButton/InternButtonApprove';
import InternButtonCancel from '../../../../components/InternButton/InternButtonCancel';
import InternButtonReject from '../../../../components/InternButton/InternButtonReject';
import InternModalContainer from '../../../../components/InterModalContainer';
import InternRow from '../../../../components/InternRow';
import InternUpload from '../../../../components/InternUpload';
import InternLinkForm from '../../../../components/InternLinkForm';
import InternButtonSubmit from '../../../../components/InternButton/InternButtonSubmit';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InternButtonTableDelete from '../../../../components/InternButtonTableDelete';
import { Service } from '../../../../services/service';
import { toast } from 'react-toastify';
import { useAuthStore } from '../../../../store';

const ModalDetail = ({ title, id, handleCloseDetail }) => {
  const schema = yup.object().shape({
    fileScore: yup.mixed().required('Trường này bắt buộc nhập'),

    fileCV: yup.mixed().required('Trường này bắt buộc nhập'),
  });
  // const schema = yup.object().shape({
  //   fileScore: yup
  //     .mixed()
  //     .required('Trường này bắt buộc nhập')
  //     .test('fileSize', 'kích thước file quá lớn', (value) => {
  //       return value && value[0].size <= 5000000;
  //     })
  //     .test('type', 'hỗ trợ định dạng .docx, .doc, .pdf', (value) => {
  //       return (
  //         value &&
  //         (value[0].type === 'application/msword') |
  //           (value[0].type ===
  //             'application/vnd.openxmlformats-officedocument.wordprocessingml.document') |
  //           (value[0].type === 'application/pdf')
  //       );
  //     }),
  //   fileCV: yup
  //     .mixed()
  //     .required('Trường này bắt buộc nhập')
  //     .test('fileSize', 'kích thước file quá lớn', (value) => {
  //       return value && value[0].size <= 5000000;
  //     })
  //     .test('type', 'hỗ trợ định dạng .docx, .doc, .pdf', (value) => {
  //       return (
  //         value &&
  //         (value[0].type === 'application/msword') |
  //           (value[0].type ===
  //             'application/vnd.openxmlformats-officedocument.wordprocessingml.document') |
  //           (value[0].type === 'application/pdf')
  //       );
  //     }),
  // });
  const [{ userLogin }] = useAuthStore();
  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const { watch, handleSubmit, setValue, reset } = methods;

  const { mutate: applyJob } = useMutation({
    mutationFn: (params) => Service.addStudentApplyJob(params),
    onSuccess: () => {
      toast.success('bạn đã ứng tuyển vào trị trí này thành công');
      reset();
      handleCloseDetail();
    },
    onError: (error) => {
      console.log({ error });
      toast.error('Có lỗi trong quá trình xử lý');
    },
  });

  const handleApplyJob = () => {
    return handleSubmit((data) => {
      const { fileCV, fileScore } = data;
      const dataSubmit = {
        fileCV,
        fileScore,
        studentId: userLogin?.id,
        jobId: id,
      };
      applyJob(dataSubmit);
    });
  };

  const footer = () => (
    <InternFooterModalContainer
      ButtonSubmit={<InternButtonSubmit onClick={handleApplyJob()} />}
      ButtonCancel={<InternButtonCancel onClick={handleCloseDetail} />}
    />
  );

  return (
    <InternModalContainer
      closeModal={handleCloseDetail}
      footerModal={footer()}
      headerText={'Ứng tuyển cho vị trí ' + title}
    >
      <InternRow>
        <FormProvider {...methods}>
          <form>
            <InternRow withAutoCol={1}>
              <InternUpload
                fileSupport=".docx, .doc, .pdf"
                namePreview="fileCVpreview"
                direct
                label="Chọn file CV"
                name="fileCV"
              />
            </InternRow>
            {watch('fileCVpreview') && (
              <InternRow withAutoCol={12}>
                <InternLinkForm
                  place="text-right"
                  text="file CV"
                  colSpan={8}
                  name="fileCVpreview"
                />
                <span>
                  <InternButtonTableDelete
                    onClick={() => {
                      setValue('fileCV', undefined);
                      setValue('fileCVpreview', undefined);
                    }}
                  />
                </span>
              </InternRow>
            )}

            <InternRow withAutoCol={1}>
              <InternUpload
                fileSupport=".docx, .doc, .pdf"
                namePreview="fileSCpreview"
                direct
                label="Chọn file điểm"
                name="fileScore"
              />
            </InternRow>
            {watch('fileSCpreview') && (
              <InternRow withAutoCol={12}>
                <InternLinkForm
                  place="text-right"
                  text="file score"
                  colSpan={8}
                  name="fileSCpreview"
                />

                <span>
                  <InternButtonTableDelete
                    onClick={() => {
                      setValue('fileScore', '');
                      setValue('fileSCpreview', '');
                    }}
                  />
                </span>
              </InternRow>
            )}
          </form>
        </FormProvider>
      </InternRow>
    </InternModalContainer>
  );
};

export default memo(ModalDetail);
