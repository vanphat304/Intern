import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useFormContext, useController } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { API_KEY, initialConfigEditor } from '../../enums';

type InputText = {
  label: string;
  colSpan?: number;
  labelSpan?: number;
  form?: any;
  placeholder?: string;
  rows?: number;
  name?: string;
  rule?: {};
  message?: string;
  direct?: boolean;
  disabled?: boolean;
};

const InternTextEditor = ({
  label,
  colSpan = 1,
  labelSpan,
  form,
  rows = 3,
  placeholder,
  name = '',
  rule,
  message = '',
  direct = false,
  disabled = false,
  ...rest
}: InputText) => {
  const {
    control,
    formState: { errors },
    getValues,
  } = useFormContext();

  const {
    field: { onChange, value },
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

        <div
          className={`${
            errors[name] ? 'border-red-600' : 'focus:ring-gray-600 focus:border-gray-700'
          } outline-none  border border-gray-400 ${
            direct ? 'col-span-6' : `${labelSpan ? 'col-span-5' : 'col-span-4'}`
          }  text-gray-900 text-xl rounded-lg p-2`}
        >
          <Editor
            disabled={disabled}
            apiKey={API_KEY}
            value={value}
            init={{ ...initialConfigEditor }}
            onEditorChange={onChange}
          />
        </div>
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => (
            <p
              className={`animate-pulse text-red-600 ${
                labelSpan ? 'col-start-2' : 'col-start-3'
              }  col-span-6 font-normal text-xl`}
            >
              {message}
            </p>
          )}
        />
      </div>
    </div>
  );
};

export default InternTextEditor;
