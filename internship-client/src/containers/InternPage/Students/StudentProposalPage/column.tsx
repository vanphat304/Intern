import InternButtonEdit from '../../../../components/InternButton/InternButtonEdit';
import InternButtonTableDelete from '../../../../components/InternButtonTableDelete';

export const columnsStudentProposal = ({ handleOpenDetail, handleOpenDelete }: any) => [
  {
    title: 'STT',
    dataIndex: 'index',
    key: 'index',
  },
  {
    title : 'Mã số sinh viên',
    dataIndex : ['student','identifierStudent'],
    key :'MSSV'
  },
  {
    title : 'Tên',
    dataIndex : ['student','firstName'],
    key :'FirstName'
  },
  {
    title : 'Họ , tên lót',
    dataIndex : ['student','lastName'],
    key :'LastName'
  },
  {
    title: 'Tên công ty',
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
    title: 'Giới thiệu công ty',
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
    title: 'Quy mô công ty',
    dataIndex: 'scale',
    key: 'scale',

  },
  {
    title: 'Địa chỉ công ty',
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
    title: 'Thông tin người đại diện',
    dataIndex: 'legalRepresentative',
    key: 'legalRepresentative',
  },
  {
    title: 'giới thiệu vị trí thực tập',
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
    title: 'Người giám sát',
    dataIndex: 'referenceName',
    key: 'referenceName',
  },
  {
    title: 'Email ngươi giám sát',
    dataIndex: 'referenceEmail',
    key: 'referenceEmail',
  },
  {
    title: 'SĐT người giám sát',
    dataIndex: 'referencePhoneNumber',
    key: 'referencePhoneNumber',
  },
  {
    title: 'Địa chỉ thực tập',
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
    title: 'Địa chỉ Website công ty',
    dataIndex: 'linkWebsite',
    key: 'linkWebsite',
    render : (value : string)=> { return <a href={value} target={'_blank'}>
      {value}
    </a> }
  },
  {
    title: 'Lĩnh vực công ty',
    dataIndex: 'specializeCompany',
    key: 'specializeCompany',
  },
  // {
  //   title: 'studentName',
  //   dataIndex: ['student', 'studentName'],
  //   key: 'studentName',
  // },
  {
    title: 'Thông tin mô tả tuần 1',
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
    title: 'Thông tin mô tả tuần 2',
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
    title: 'Thông tin mô tả tuần 3',
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
    title: 'Thông tin mô tả tuần 4',
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
    title: 'Thông tin mô tả tuần 5',
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
    title: 'Thông tin mô tả tuần 6',
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
    title: 'Thông tin mô tả tuần 7',
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
    title: 'Thông tin mô tả tuần 8',
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
    title: 'Trạng thái',
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
