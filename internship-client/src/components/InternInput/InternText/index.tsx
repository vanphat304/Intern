import React from 'react';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

type InputText = {
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
  isLink?:boolean;
  handleKeyDown? : (a:any)=>void
};

const InternText = ({
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
  isLink =false,
  handleKeyDown ,
  ...rest
}: InputText) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={`col-span-${colSpan}`}>
      <div className="grid grid-cols-6 items-center">
        <label
          htmlFor={label}
          className={`block ${labelSpan ? 'col-span-1' : 'col-span-2'} text-xl font-normal ${
            direct ? 'text-left col-span-4' : 'text-right'
          }  pr-2 text-gray-900`}
        >
          {label}
        </label>
        <input
         onKeyDown={handleKeyDown}
          type={type}
          maxLength={50}
          className={`${
            errors[name] ? 'border-red-600' : 'focus:ring-gray-600 focus:border-gray-700'
          } outline-none  border border-gray-400 ${
            direct ? 'col-span-6' : `${labelSpan ? 'col-span-5' : 'col-span-4'}`
          }  text-gray-900 text-xs rounded-lg h-11 px-6`}
          placeholder={placeholder}
          {...register(name)}
          {...rest}
        />
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => (
            <p className={`animate-pulse text-red-600 ${labelSpan ? 'col-start-2' : 'col-start-3'}  col-span-6 font-normal text-sm`}>
              {message}
            </p>
          )}
        />
      </div>
    </div>
  );
};

export default InternText;
