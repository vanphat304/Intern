import InternButtonEdit from '../../../../components/InternButton/InternButtonEdit';
import InternButtonTableDelete from '../../../../components/InternButtonTableDelete';

export const columnsStudent = ({ handleOpenDetail, handleOpenDelete }: any) => [
  {
    title: 'STT',
    dataIndex: 'index',
    key: 'index',
  },
  {
    title: 'Mã số sinh viên',
    dataIndex: 'identifierStudent',
    key: 'identifierStudent',
  },
  {
    title: 'Tên',
    dataIndex: 'firstName',
    key: 'firstName',
  },

  {
    title: 'Họ , Tên lót',
    dataIndex: 'lastName',
    key: 'lastName',
  },
  {
    title: 'Ngày sinh',
    dataIndex: 'dateOfBirth',
    key: 'dateOfBirth',
  },
  {
    title: 'Địa chỉ',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Lớp',
    dataIndex: 'class',
    key: 'class',
  },
  {
    title: 'Chuyên ngành',
    dataIndex: 'majors',
    key: 'majors',
  },
  {
    title: 'email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Số điện thoại',
    dataIndex: 'phoneNumber',
    key: 'phoneNumber',
  },
  {
    title: 'Thông tin liên lạc khác',
    dataIndex: 'anotherContact',
    key: 'anotherContact',
  },

  {
    title: 'action',
    key: 'action',
    fixed: 'right',
    render: (id: string) => {
      return (
        <div className="flex justify-around">
          <InternButtonEdit onClick={() => handleOpenDetail(id)} />
          <InternButtonTableDelete onClick={() => handleOpenDelete(id)} />
        </div>
      );
    },
  },
];
