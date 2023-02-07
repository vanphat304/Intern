import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useFormContext, useController } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { API_KEY, initialConfigEditor } from '../../enums';
import { Link } from 'react-router-dom';

type InputText = {
  label: string;
  colSpan?: number;
  labelSpan?: number;
  placeholder?: string;
  name?: string;
  direct?: boolean;
  text?: string;
  place?: string;
};

const InternLinkForm = ({
  label,
  colSpan = 1,
  labelSpan,
  placeholder,
  place,
  name = '',
  direct = false,
  text = '',
}: InputText) => {
  const { control } = useFormContext();

  const {
    field: { value },
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

        <a
          href={value}
          rel="noreferrer"
          target={'_blank'}
          className={`${
            direct ? 'col-span-6' : `${labelSpan ? 'col-span-5' : 'col-span-4'}`
          } text-red-800 font-semibold underline ${place}`}
        >
          {text}
        </a>
      </div>
    </div>
  );
};

export default InternLinkForm;
