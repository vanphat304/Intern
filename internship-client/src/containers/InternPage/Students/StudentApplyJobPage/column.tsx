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
    title: 'jobDecription',
    dataIndex: ['jobDecription', 'jobTitle'],
    key: 'jobDecription',
  },
  {
    title: 'nameCompany',
    dataIndex: ['jobDecription', 'company', 'nameCompany'],
    key: 'nameCompany',
  },
  {
    title: 'firstName',
    dataIndex: ['student', 'firstName'],
    key: 'firstName',
    // render: (value: string) => {
    //   return value
    //     ?.replace(/(<([^>]+)>)/gi, '')
    //     .toString()
    //     .substring(0, 12);
    // },
  },

  {
    title: 'lastName',
    dataIndex: ['student', 'lastName'],
    key: 'lastName',
  },
  {
    title: 'dateAppply',
    dataIndex: 'dateAppply',
    key: 'dateAppply',
  },
  {
    title: 'fileCV',
    dataIndex: 'fileCV',
    key: 'fileCV',
    render: (value: string) => (
      <Link to={value} target={'_blank'}>
        <span className="text-blue-600">{value}</span>
      </Link>
    ),
  },

  {
    title: 'fileScore',
    dataIndex: 'fileScore',
    key: 'fileScore',
    render: (value: string) => (
      <Link to={value} target={'_blank'}>
        <span className="text-blue-600">{value}</span>
      </Link>
    ),
  },
  {
    title: 'status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'referenceName',
    dataIndex: 'referenceName',
    key: 'referenceName',
  },
  {
    title: 'referenceEmail',
    dataIndex: 'referenceEmail',
    key: 'referenceEmail',
  },
  {
    title: 'referencePhoneNumber',
    dataIndex: 'referencePhoneNumber',
    key: 'referencePhoneNumber',
  },
  {
    title: 'addressIntern',
    dataIndex: 'addressIntern',
    key: 'addressIntern',
  },
  {
    title: 'linkWebsite',
    dataIndex: 'linkWebsite',
    key: 'linkWebsite',
    render: (value: string) => (
      <Link to={value} target={'_blank'}>
        {value}
      </Link>
    ),
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
