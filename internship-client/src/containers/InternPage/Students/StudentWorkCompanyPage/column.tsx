import { Link } from 'react-router-dom';
import InternButtonEdit from '../../../../components/InternButton/InternButtonEdit';
import InternButtonTableDelete from '../../../../components/InternButtonTableDelete';

export const columnsStudentWork = ({ handleOpenDetail, handleOpenDelete }: any) => [
  {
    title: 'STT',
    dataIndex: 'index',
    key: 'index',
  },
  {
    title: 'identifierStudent',
    dataIndex: ['student', 'identifierStudent'],
    key: 'identifierStudent',
  },
  {
    title: 'firstName',
    dataIndex: ['student', 'firstName'],
    key: 'firstName',
  },
  {
    title: 'lastName',
    dataIndex: ['student', 'lastName'],
    key: 'lastName',
  },
  {
    title: 'nameCompany',
    dataIndex: ['company', 'nameCompany'],
    key: 'nameCompany',
  },
  {
    title: 'logo',
    dataIndex: ['company', 'logo'],
    key: 'logo',
    render: (source: string) => <img src={source} alt="img" className="w-20 h-auto" />,
  },

  {
    title: 'rating',
    dataIndex: 'rating',
    key: 'rating',
  },
  {
    title: 'decription',
    dataIndex: 'decription',
    key: 'decription',
  },

  {
    title: 'action',
    key: 'action',
    fixed: 'right',
    render: (id: string) => {
      return (
        <div className="flex justify-around">
          <InternButtonEdit onClick={() => handleOpenDetail(id)} />
          {/* <InternButtonTableDelete onClick={() => handleOpenDelete(id)} /> */}
        </div>
      );
    },
  },
];
