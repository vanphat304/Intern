import InternButtonEdit from '../../../../components/InternButton/InternButtonEdit';
import InternButtonTableDelete from '../../../../components/InternButtonTableDelete';

export const columnsStudent = ({ handleOpenDetail, handleOpenDelete }: any) => [
  {
    title: 'STT',
    dataIndex: 'index',
    key: 'index',
  },
  {
    title: 'identifierStudent',
    dataIndex: 'identifierStudent',
    key: 'identifierStudent',
  },
  {
    title: 'firstName',
    dataIndex: 'firstName',
    key: 'firstName',
  },

  {
    title: 'lastName',
    dataIndex: 'lastName',
    key: 'lastName',
  },
  {
    title: 'dateOfBirth',
    dataIndex: 'dateOfBirth',
    key: 'dateOfBirth',
  },
  {
    title: 'address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'class',
    dataIndex: 'class',
    key: 'class',
  },
  {
    title: 'majors',
    dataIndex: 'majors',
    key: 'majors',
  },
  {
    title: 'email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'phoneNumber',
    dataIndex: 'phoneNumber',
    key: 'phoneNumber',
  },
  {
    title: 'anotherContact',
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
