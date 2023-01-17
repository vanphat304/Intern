import React from 'react';
import { useFormContext, useController } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { Select } from 'antd';
import './style.css';
type option = {
  id: string;
  name: string;
  value: string;
};

type InputText = {
  label: string;
  colSpan?: number;
  labelSpan?: number;
  form?: any;
  placeholder?: string;
  name?: string;
  rule?: {};
  message?: string;
  keyName?: string;
  keyValue?: string;
  direct?: boolean;
  data: Array<option>;
  disabled?: boolean;
};

const InternSelect = ({
  label,
  labelSpan,
  colSpan = 1,
  form,
  placeholder = 'Chọn nội dung select',
  name = '',
  rule,
  message = '',
  direct = false,
  disabled = false,
  keyName,
  keyValue,
  data = [],
  ...rest
}: InputText) => {
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext();

  const {
    field: { value, onChange },
  } = useController({ control, name });

  return (
    <div className={`col-span-${colSpan}`}>
      <div className="grid grid-cols-6 items-center">
        <label
          htmlFor={label}
          className={`block ${labelSpan ? 'col-span-1' : 'col-span-2'} text-xl font-normal ${
            direct ? 'text-left' : 'text-right'
          }  pr-2 text-gray-900`}
        >
          {label}
        </label>
        <Select
          disabled={disabled}
          className={`${
            errors[name] ? 'border-red-600' : 'focus:ring-gray-600 focus:border-gray-700'
          } outline-none  border border-gray-400 ${
            direct ? 'col-span-6' : `${labelSpan ? 'col-span-5' : 'col-span-4'}`
          }  text-gray-900 text-xl flex items-center justify-center h-11 rounded-lg bg-white p-2.5`}
          placeholder={placeholder}
          allowClear
          showSearch
          filterOption={(value, option: any) =>
            option.props.children?.toString()?.toLowerCase()?.indexOf(value.toLowerCase()) >= 0
          }
          value={value}
          onChange={onChange}
        >
          <option value={''}>{placeholder}</option>
          {data.map((item: any) => (
            <option
              key={item?.value || item[keyValue as any]}
              value={item?.value || item[keyValue as any]}
            >
              {item?.name || item[keyName as any]}
            </option>
          ))}
        </Select>
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

export default InternSelect;
