import React from 'react';

type InternRowType = {
  gap?: number;
  withAutoCol?: number;
  children: React.ReactNode;
};

const InternRow = ({ gap = 4, withAutoCol = 1, children , ...rest }: InternRowType): React.ReactElement => {
  return <div className={`grid mb-2 grid-cols-${withAutoCol} gap-4`}>{children}</div>;
};

export default InternRow;
