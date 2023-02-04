import React from 'react';
import InternButtonSearch from '../InternButton/InternButtonSearch';
import InternText from '../InternInput/InternText';
import InternRow from '../InternRow';
import { useForm, FormProvider } from 'react-hook-form';

type searchItemType = {
  searchItem: string;
};

type typeInternSearch = {
  onClick: (a: searchItemType) => void;
  placeHolder?: string;
  children?: React.ReactNode;
  hidden?: boolean;
};

const InternSearch = ({
  onClick,
  hidden = false,
  placeHolder = 'Nhập từ khóa tìm kiếm',
  children,
}: typeInternSearch) => {
  const methods = useForm({ criteriaMode: 'all' });
  const { getValues } = methods;

  const handleSearch = () => {
    onClick(getValues() as searchItemType);
  };
  const handleEnter = (event: any) => {
    if (event.key === 'Enter') {
      onClick(getValues() as searchItemType);
    }
  };

  return (
    <InternRow>
      <FormProvider {...methods}>
        <InternRow gap={6} withAutoCol={12}>
          {!hidden && (
            <InternText
              handleKeyDown={handleEnter}
              name="searchItem"
              colSpan={4}
              label="Tìm kiếm"
              placeholder={placeHolder}
              type="search"
              direct
            />
          )}
          {children}
          <InternButtonSearch col={2} onClick={handleSearch} />
        </InternRow>
      </FormProvider>
    </InternRow>
  );
};

export default InternSearch;
