import React from 'react';
import InternSearch from '../../../../components/InternSearchContainer';
import InternSelect from '../../../../components/InternInput/InterSelect';
import { useQuery } from '@tanstack/react-query';
import { Service } from '../../../../services/service';
import { Student } from '../../../../types/students.type';
import { Company } from '../../../../types/companies.type';

type searchItemType = {
  searchItem: string;
};

type typeInternSearch = {
  onClick: (a: searchItemType) => void;
};

const StudentSearch = ({ onClick }: typeInternSearch) => {
  const { data: students = [] } = useQuery({
    queryKey: ['keyParamsStudents'],
    queryFn: () => Service.getStudentParams(),
  });
  const { data: companies = [] } = useQuery({
    queryKey: ['keyParamsCompanies'],
    queryFn: () => Service.getCompanyParams(),
  });
  return (
    <InternSearch hidden placeHolder="Nhập tên sinh viên hoặc mã số để tìm kiếm" onClick={onClick}>
      <InternSelect
        placeholder="Chọn sinh viên cần tìm kiếm"
        direct
        data={students?.map(
          ({
            id,
            firstName,
            lastName,
            identifierStudent,
          }: Pick<Student, 'id' | 'firstName' | 'lastName' | 'identifierStudent'>) => ({
            name: identifierStudent,
            value: id,
          }),
        )}
        colSpan={4}
        label="Mã số sinh viên"
        name="studentId"
      />
      <InternSelect
        placeholder="Chọn Công ty cần tìm kiếm"
        direct
        data={companies?.map(({ id, nameCompany }: Pick<Company, 'id' | 'nameCompany'>) => ({
          name: nameCompany,
          value: id,
        }))}
        colSpan={4}
        label="Công ty"
        name="companyId"
      />
    
    </InternSearch>
  );
};

export default StudentSearch;
