import { Link } from 'react-router-dom';
import InternButtonEdit from '../../../../components/InternButton/InternButtonEdit';
import InternButtonTableDelete from '../../../../components/InternButtonTableDelete';

export const columnsStudentProposal = ({ handleOpenDetail, handleOpenDelete }: any) => [
  {
    title: 'STT',
    dataIndex: 'index',
    key: 'index',
  },
  {
    title: 'Tên công việc',
    dataIndex: ['jobDecription', 'jobTitle'],
    key: 'jobDecription',
  },
  {
    title: 'Mã số sinh viên',
    dataIndex: ['student', 'identifierStudent'],
    key: 'mssv',
  },
  {
    title: 'Tên công ty',
    dataIndex: ['jobDecription', 'company', 'nameCompany'],
    key: 'nameCompany',
  },
  {
    title: 'Tên',
    dataIndex: ['student', 'firstName'],
    key: 'firstName',
  },

  {
    title: 'Họ , tên lót',
    dataIndex: ['student', 'lastName'],
    key: 'lastName',
  },
  {
    title: 'Ngầy ứng tuyển',
    dataIndex: 'dateAppply',
    key: 'dateAppply',
  },
  {
    title: 'fileCV',
    dataIndex: 'fileCV',
    key: 'fileCV',
    render: (value: string) => (
      <a href={value} rel="noreferrer" target={'_blank'}>
        <span className="text-blue-600">{value}</span>
      </a>
    ),
  },

  {
    title: 'filr điểm',
    dataIndex: 'fileScore',
    key: 'fileScore',
    render: (value: string) => (
      <a href={value} rel="noreferrer" target={'_blank'}>
        <span className="text-blue-600">{value}</span>
      </a>
    ),
  },
  {
    title: 'trạng thái',
    dataIndex: 'status',
    key: 'status',
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
