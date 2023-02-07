import InternButtonEdit from '../../../../components/InternButton/InternButtonEdit';
import InternButtonTableDelete from '../../../../components/InternButtonTableDelete';

export const columnsCompanies = ({ handleOpenDetail, handleOpenDelete }: any) => [
  {
    title: 'STT',
    dataIndex: 'index',
    key: 'index',
  },
  {
    title: 'Tên công ty',
    dataIndex: 'nameCompany',
    key: 'nameCompany',
  },
  {
    title: 'Logo',
    dataIndex: 'logo',
    key: 'logo',
  },

  {
    title: 'Quy mô',
    dataIndex: 'scale',
    key: 'scale',
  },
  {
    title: 'Địa chỉ',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Giới thiệu',
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
