import React from 'react';
import InternSpinner from '../../InternSpiner';
import InternFooterModalContainer from '../../InternFooterModalContainer';
import InternButtonSubmit from '../../InternButton/InternButtonSubmit';
import InternButtonCancel from '../../InternButton/InternButtonCancel';

type internModalType = {
  headerText?: string;
  id?: string | number;
  children?: React.ReactNode;
  isLoading?: boolean;
  footerModal?: React.ReactNode;
  closeModal?: () => void;
  onClick?: (data: any) => void;
};

const InternModalDelete = ({
  headerText = 'XÓA',
  children,
  footerModal,
  id,
  isLoading = false,
  onClick,
  closeModal,
  ...rest
}: internModalType) => {
  console.log('delete');

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden h-screen scrollbar-none overflow-y-auto bg-slate-600/60 flex justify-center items-center"
      {...rest}
    >
      <div className="w-2/4 mx-auto md:h-auto relative">
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
          <div className="p-6 space-y-6">{'bạn có muốn xóa dữ liệu ?'}</div>
          <InternFooterModalContainer
            ButtonCancel={<InternButtonCancel onClick={closeModal} />}
            ButtonSubmit={<InternButtonSubmit isLoading={isLoading} onClick={onClick} />}
          />
        </div>
      </div>
    </div>
  );
};

export default InternModalDelete;
