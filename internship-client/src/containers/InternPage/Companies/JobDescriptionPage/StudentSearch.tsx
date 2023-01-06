import React from 'react';
import InternSearch from '../../../../components/InternSearchContainer';
import InternSelect from '../../../../components/InternInput/InterSelect';
import { useQuery } from '@tanstack/react-query';
import { Service } from '../../../../services/service';

type searchItemType = {
  searchItem: string;
};

type typeInternSearch = {
  onClick: (a: searchItemType) => void;
};

const StudentSearch = ({ onClick }: typeInternSearch) => {
  const { data: companies = [] } = useQuery({
    queryKey: ['keyParams'],
    queryFn: () => Service.getCompanyParams(),
  });
  return (
    <InternSearch placeHolder="Nhập tên công việc hoặc tên công ty để tìm kiếm" onClick={onClick}>
      <InternSelect
        placeholder="Chọn công ty cần tìm kiếm"
        direct
        keyName="nameCompany"
        keyValue="id"
        data={companies}
        colSpan={4}
        label="Công ty"
        name="companyId"
      />
    </InternSearch>
  );
};

export default StudentSearch;
