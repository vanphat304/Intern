import React from 'react';

type typeButtonFootetModal = {
  ButtonDelete?: React.ReactNode;
  ButtonSubmit?: React.ReactNode;
  ButtonCancel?: React.ReactNode;
};

const InternFooterModalContainer = ({
  ButtonDelete,
  ButtonSubmit,
  ButtonCancel,
}: typeButtonFootetModal) => {
  return (
    <div className=" grid grid-cols-12 align-bottom justify-end p-2 mr-4 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
      <div className="col-span-2">{ButtonDelete}</div>
      <div className="col-span-8">
        <div className="grid grid-cols-10">
          <div className="col-end-13">{ButtonCancel}</div>
        </div>
      </div>
      <div className="col-span-2">
        <div className="grid grid-cols-10">
          <div className="col-start-1">{ButtonSubmit}</div>
        </div>
      </div>
    </div>
  );
};

export default InternFooterModalContainer;
