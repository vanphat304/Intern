import InternButtonEdit from '../../../../components/InternButton/InternButtonEdit';
import InternButtonTableDelete from '../../../../components/InternButtonTableDelete';

export const columnsStudentProposal = ({ handleOpenDetail, handleOpenDelete }: any) => [
  {
    title: 'STT',
    dataIndex: 'index',
    key: 'index',
  },
  {
    title : 'MSSV',
    dataIndex : ['student','identifierStudent'],
    key :'MSSV'
  },
  {
    title : 'FirstName',
    dataIndex : ['student','firstName'],
    key :'FirstName'
  },
  {
    title : 'LastName',
    dataIndex : ['student','lastName'],
    key :'LastName'
  },
  {
    title: 'nameCompany',
    dataIndex: 'nameCompany',
    key: 'nameCompany',
    render: (value: string) => {
      return value
        ?.replace(/(<([^>]+)>)/gi, '')
        .toString()
        .substring(0, 12) + "...";;
    },
  },
  {
    title: 'introduceCompany',
    dataIndex: 'introduceCompany',
    key: 'introduceCompany',
    render: (value: string) => {
      return value
        ?.replace(/(<([^>]+)>)/gi, '')
        .toString()
        .substring(0, 12) + "..."; 
    },
  },

  {
    title: 'scale',
    dataIndex: 'scale',
    key: 'scale',

  },
  {
    title: 'addressCompany',
    dataIndex: 'addressCompany',
    key: 'addressCompany',
    render: (value: string) => {
      return value
        ?.replace(/(<([^>]+)>)/gi, '')
        .toString()
        .substring(0, 12) + "...";;
    },
  },
  {
    title: 'legalRepresentative',
    dataIndex: 'legalRepresentative',
    key: 'legalRepresentative',
  },
  {
    title: 'introducePosition',
    dataIndex: 'introducePosition',
    key: 'introducePosition',
    render: (value: string) => {
      return value
        ?.replace(/(<([^>]+)>)/gi, '')
        .toString()
        .substring(0, 12) + "...";;
    },
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
    render: (value: string) => {
      return value
        ?.replace(/(<([^>]+)>)/gi, '')
        .toString()
        .substring(0, 12) + "...";;
    },
  },
  {
    title: 'linkWebsite',
    dataIndex: 'linkWebsite',
    key: 'linkWebsite',
    render : (value : string)=> { return <a href={value} target={'_blank'}>
      {value}
    </a> }
  },
  {
    title: 'specializeCompany',
    dataIndex: 'specializeCompany',
    key: 'specializeCompany',
  },
  // {
  //   title: 'studentName',
  //   dataIndex: ['student', 'studentName'],
  //   key: 'studentName',
  // },
  {
    title: 'week1',
    dataIndex: 'week1',
    key: 'week1',
    render: (value: string) => {
      return value
        ?.replace(/(<([^>]+)>)/gi, '')
        .toString()
        .substring(0, 12) + "...";;
    },
  },
  {
    title: 'week2',
    dataIndex: 'week2',
    key: 'week2',
    render: (value: string) => {
      return value
        ?.replace(/(<([^>]+)>)/gi, '')
        .toString()
        .substring(0, 12) + "...";;
    },
  },
  {
    title: 'week3',
    dataIndex: 'week3',
    key: 'week3',
    render: (value: string) => {
      return value
        ?.replace(/(<([^>]+)>)/gi, '')
        .toString()
        .substring(0, 12) + "...";;
    },
  },
  {
    title: 'week4',
    dataIndex: 'week4',
    key: 'week4',
    render: (value: string) => {
      return value
        ?.replace(/(<([^>]+)>)/gi, '')
        .toString()
        .substring(0, 12) + "...";;
    },
  },
  {
    title: 'week5',
    dataIndex: 'week5',
    key: 'week5',
    render: (value: string) => {
      return value
        ?.replace(/(<([^>]+)>)/gi, '')
        .toString()
        .substring(0, 12) + "...";;
    },
  },
  {
    title: 'week6',
    dataIndex: 'week6',
    key: 'week6',
    render: (value: string) => {
      return value
        ?.replace(/(<([^>]+)>)/gi, '')
        .toString()
        .substring(0, 12) + "...";;
    },
  },
  {
    title: 'week7',
    dataIndex: 'week7',
    key: 'week7',
    render: (value: string) => {
      return value
        ?.replace(/(<([^>]+)>)/gi, '')
        .toString()
        .substring(0, 12) + "...";;
    },
  },
  {
    title: 'week8',
    dataIndex: 'week8',
    key: 'week8',
    render: (value: string) => {
      return value
        ?.replace(/(<([^>]+)>)/gi, '')
        .toString()
        .substring(0, 12) + "...";;
    },
  },
  {
    title: 'status',
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
