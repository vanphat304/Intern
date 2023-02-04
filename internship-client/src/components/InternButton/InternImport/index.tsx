import React from 'react';
import InternRow from '../../InternRow';

type typeButton = {
  onClick?: (data: any) => void;
  col?: number;
  isShow?: boolean;
  isLoading?: boolean;
};

const InternButtonImport = ({
  onClick,
  col = 1,
  isLoading = false,
  isShow = false,
  ...rest
}: typeButton) => {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      type="button"
      className={`text-blue-600 bg-white  border border-blue-600 font-bold ml-3 uppercase mb-0 py-2 w-32 rounded-3xl  hover:border-blue-800${
        isLoading ? ' flex flex-row-reverse opacity-50 cursor-not-allowed' : ''
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
        'IMPORT'
      )}
    </button>
  );
};

export default InternButtonImport;
