import { ErrorMessage } from '@hookform/error-message';
import React from 'react';
import { useFormContext } from 'react-hook-form';


type InputPicker = {
  label: string;
  colSpan?: number;
  form?: any;
  placeholder?: string;
  type?: string;
  name?: string;
  rule?: {};
  message?: string;
  direct?: boolean;
};

const InternDatePicker = ({
  label,
  colSpan = 1,
  form,
  placeholder,
  name = '',
  rule,
  message = '',
  direct = false,
  ...rest
}: InputPicker) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={`col-span-${colSpan}`}>
      <div className="grid grid-cols-6 items-center">
        <label
          htmlFor={label}
          className={`block col-span-2 text-xl font-normal ${
            direct ? 'text-left' : 'text-right'
          }  pr-2 text-gray-900`}
        >
          {label}
        </label>

        <input
          type="date"
          className={`${
            errors[name] ? 'border-red-600' : 'focus:ring-gray-600 focus:border-gray-700'
          } outline-none  border border-gray-400 ${
            direct ? 'col-span-6' : 'col-span-4'
          }  text-gray-900 text-xl rounded-lg block w-full p-2`}
          placeholder={placeholder}
          {...register(name)}
          {...rest}
        />

        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => (
            <p className="animate-pulse text-red-600 col-start-3 col-span-6 font-normal text-xl">
              {message}
            </p>
          )}
        />
      </div>
    </div>
  );
};

export default InternDatePicker;
