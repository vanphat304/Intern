import React from 'react';
import InternSpinner from '../../InternSpiner';
import InternFooterModalContainer from '../../InternFooterModalContainer';
import InternButtonSubmit from '../../InternButton/InternButtonSubmit';
import InternButtonCancel from '../../InternButton/InternButtonCancel';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorMessage } from '@hookform/error-message';
import { toast } from 'react-toastify';
import { path } from '../../../services/base';
import axios, { AxiosResponse } from 'axios';
const FILE_SIZE = 160000000000 * 1024;
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png'];

type internModalType = {
  headerText?: string;
  id?: string | number;
  children?: React.ReactNode;
  isLoading?: boolean;
  footerModal?: React.ReactNode;
  closeModal?: () => void;
  onClick?: (data?: any) => void;
};

const schema = yup.object().shape({
  file: yup
    .mixed()
    .required('file bắt buộc nhập')
    .test('fileSize', 'kích thước file quá lớn', (value) => {
      return value && value[0].size <= 2000000;
    })
    .test('type', 'chỉ hỗ trợ import file excel', (value) => {
      return (
        value &&
        value[0].type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      );
    }),
});

const InternModalImport = ({
  headerText = 'IMPORT',
  children,
  footerModal,
  id,
  isLoading = false,
  onClick,
  closeModal,
  ...rest
}: internModalType) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSubmitForm = () => {
    return handleSubmit((dto: any) => {
      console.log({ dto });
      const file = dto.file[0];

      if (!file) return;
      const formData = new FormData();
      formData.append('file', file);

      onClick && onClick(formData);
    });
  };

  console.log({ errors });

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden h-screen scrollbar-none overflow-y-auto bg-slate-600/60 flex justify-center items-center"
      {...rest}
    >
      <div className="w-2/3 mx-auto md:h-auto relative">
        {isLoading && <InternSpinner />}
        <div className=" bg-white rounded-lg shadow ">
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-bold text-gray-900 ">{headerText}</h3>
            <button
              onClick={closeModal}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-6 space-y-6">
            <p>chọn file để import</p>
            <input type="file" {...register('file')} />
            <ErrorMessage
              errors={errors}
              name={'file'}
              render={({ message }) => (
                <p className={`animate-pulse text-red-600 mt-0 col-span-6 font-normal text-sm`}>
                  {message}
                </p>
              )}
            />
          </div>
          <InternFooterModalContainer
            ButtonCancel={<InternButtonCancel onClick={closeModal} />}
            ButtonSubmit={<InternButtonSubmit isLoading={isLoading} onClick={handleSubmitForm()} />}
          />
        </div>
      </div>
    </div>
  );
};

export default InternModalImport;
