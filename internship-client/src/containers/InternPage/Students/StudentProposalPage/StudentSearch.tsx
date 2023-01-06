import React from 'react';
import InternSearch from '../../../../components/InternSearchContainer';
import InternSelect from '../../../../components/InternInput/InterSelect';
import { useQuery } from '@tanstack/react-query';
import { Service } from '../../../../services/service';
import { Student } from '../../../../types/students.type';

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
  return (
    <InternSearch placeHolder="Nhập tên công ty để tìm kiếm" onClick={onClick}>
      <InternSelect
        placeholder="Chọn sinh viên cần tìm kiếm"
        direct
        data={students?.map(
          ({ id, firstName, lastName }: Pick<Student, 'id' | 'firstName' | 'lastName'>) => ({
            name: `${lastName} ${firstName}`,
            value: id,
          }),
        )}
        colSpan={4}
        label="Công ty"
        name="studentId"
      />
    </InternSearch>
  );
};

export default StudentSearch;
