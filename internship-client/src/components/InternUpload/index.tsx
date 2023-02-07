import { ErrorMessage } from '@hookform/error-message';
import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Service } from '../../services/service';
import axios, { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { path } from '../../services/base';

type typeInternUpload = {
  fileSupport?: string;
  label: string;
  colSpan?: number;
  labelSpan?: number;
  form?: any;
  placeholder?: string;
  type?: string;
  name?: string;
  rule?: {};
  message?: string;
  direct?: boolean;
  namePreview?: string;
};

const InternUpload = ({
  fileSupport = 'SVG, PNG, JPG or GIF (MAX. 800x400px).',
  label,
  colSpan = 1,
  labelSpan,
  form,
  type = 'text',
  placeholder,
  name = '',
  rule,
  message = '',
  direct = false,
  namePreview = 'logo',
  ...rest
}: typeInternUpload) => {
  const {
    setValue,
    clearErrors,
    formState: { errors },
  } = useFormContext();

  const { isLoading, mutate: uploadFile } = useMutation({
    mutationFn: (params: FormData) => Service.uploadFile({ params }),
    onSuccess: (data) => {
    },
    onError: (error) => {
    },
  });

  const handleUploadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    if (!file) return;
    const formData = new FormData();
    formData.append('file', file);
    setValue('logoPreview', URL.createObjectURL(file));
    axios
      .post(`${path}/uploadfile`, formData, {
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem('tempUser') as string)?.access_token
          }`,
        },
      })
      .then((data: AxiosResponse<{ filename: string }>) => {
        toast('upload file success');
        setValue(namePreview, path + '/uploadfile/' + data.data.filename);
        setValue(name, path + '/uploadfile/' + data.data.filename);
        clearErrors(namePreview);
        clearErrors(name);
      })
      .catch((err) => {
      });
  };

  return (
    <div className={`col-span-${colSpan}`}>
      <div className="grid grid-cols-6 items-center">
        <label
          className={`block ${labelSpan ? 'col-span-1' : 'col-span-2'} text-xl font-normal ${
            direct ? 'text-left' : 'text-right'
          }  pr-2 text-gray-900`}
        >
          {label}
        </label>
        <div className="overflow-hidden relative w-64 mt-4 mb-4 ">
          <label
            htmlFor={name}
            className="border cursor-pointer border-blue-500 rounded-md text-blue-500 font-bold py-2 px-4 w-full inline-flex items-center"
          >
            <svg
              fill="blue-500"
              height={18}
              viewBox="0 0 24 24"
              width={18}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" />
            </svg>
            <span className="ml-2">Upload Document</span>
            <input
              className="cursor-pointer absolute hidden py-2 px-4 w-full opacity-0 pin-r pin-t"
              type="file"
              id={name}
              onChange={handleUploadFile}
            />
          </label>
        </div>
        <p
          className="col-span-6 col-start-3 text-sm text-gray-500 dark:text-gray-300"
          id="file_input_help"
        >
          hỗ trợ định dạng : {fileSupport}
        </p>
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => (
            <p
              className={`animate-pulse text-red-600 ${
                labelSpan ? 'col-start-2' : 'col-start-3'
              }  col-span-6 font-normal text-sm`}
            >
              {message}
            </p>
          )}
        />
      </div>
    </div>
  );
};

export default InternUpload;
