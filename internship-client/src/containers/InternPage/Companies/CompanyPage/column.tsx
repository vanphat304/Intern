import InternButtonEdit from '../../../../components/InternButton/InternButtonEdit';
import InternButtonTableDelete from '../../../../components/InternButtonTableDelete';

export const columnsCompanies = ({ handleOpenDetail, handleOpenDelete }: any) => [
  {
    title: 'STT',
    dataIndex: 'index',
    key: 'index',
  },
  {
    title: 'nameCompany',
    dataIndex: 'nameCompany',
    key: 'nameCompany',
  },
  {
    title: 'logo',
    dataIndex: 'logo',
    key: 'logo',
  },

  {
    title: 'scale',
    dataIndex: 'scale',
    key: 'scale',
  },
  {
    title: 'address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'introduce',
    dataIndex: 'introduce',
    key: 'introduce',
    render: (value: string) => {
      return value?.replace(/(<([^>]+)>)/gi, '').toString().substring(0,12);
    },
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
