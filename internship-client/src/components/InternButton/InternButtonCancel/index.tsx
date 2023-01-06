import React from 'react';
import InternRow from '../../InternRow';

type typeButton = {
  onClick?: () => void;
  col?: number;
  isShow?: boolean;
  isLoading?: boolean;
};

const InternButtonCancel = ({
  onClick,
  col = 1,
  isLoading = false,
  isShow = false,
  ...rest
}: typeButton) => {
  return (
    <InternRow withAutoCol={col} {...rest}>
      <button
        onClick={onClick}
        type="button"
        className={`text-blue-600 bg-white  border border-blue-600 font-bold uppercase py-2 w-32 rounded-3xl  hover:border-gray-800${
          isLoading ? 'cursor-not-allowed' : ''
        } `}
      >
        {isLoading ? (
          <>
            <svg
              className="w-5 h-5 mr-3 -ml-1 text-red-500 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Loading...{' '}
          </>
        ) : (
          ' CANCEL'
        )}
      </button>
    </InternRow>
  );
};

export default InternButtonCancel;
