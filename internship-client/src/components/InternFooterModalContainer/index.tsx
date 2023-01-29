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
    <div className="flex justify-between px-4">
      <div>{ButtonDelete}</div>

    <div className='flex'>
      <div className="col-end-13">{ButtonCancel}</div>

      <div className="col-start-1 ml-5">{ButtonSubmit}</div>

    </div>
    </div>
  );
};

export default InternFooterModalContainer;
