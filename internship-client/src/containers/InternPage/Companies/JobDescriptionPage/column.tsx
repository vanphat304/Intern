import InternButtonEdit from '../../../../components/InternButton/InternButtonEdit';
import InternButtonTableDelete from '../../../../components/InternButtonTableDelete';

export const columnsJobDescriptions = ({ handleOpenDetail, handleOpenDelete }: any) => [
  {
    title: 'STT',
    dataIndex: 'index',
    key: 'index',
  },
  {
    title: 'Tên công việc',
    dataIndex: 'jobTitle',
    key: 'jobTitle',
    render: (value: string) => {
      return value.toString().substring(0, 12);
    },
  },

  {
    title: 'Mô tả công việc',
    dataIndex: 'decriptionJob',
    key: 'decriptionJob',
    render: (value: string) => {
      return <span dangerouslySetInnerHTML={{ __html: value.toString().substring(0, 12) }}></span>;
    },
  },

  {
    title: 'múc lương (.VND)',
    dataIndex: 'salary',
    key: 'salary',
  },
  {
    title: 'Số lương tuyển',
    dataIndex: 'numberRecur',
    key: 'numberRecur',
  },
  {
    title: 'Tên Công ty',
    dataIndex: ['company', 'nameCompany'],
    key: 'nameCompany',
  },
  {
    title: 'Thời giân nộp hồ sơ',
    dataIndex: 'timeStartApply',
    key: 'timeStartApply',
  },
  {
    title: 'Thời gian kết thúc nhận',
    dataIndex: 'timeEndAppply',
    key: 'timeEndAppply',
  },
  {
    title: 'Thời gian phỏng vấn',
    dataIndex: 'timeToIntverview',
    key: 'timeToIntverview',
  },
  {
    title: 'Địa chỉ phỏng vấn',
    dataIndex: 'addressToInterview',
    key: 'addressToInterview',
    render: (value: string) => {
      return value.toString().substring(0, 12);
    },
  },
  {
    title: 'action',
    key: 'action',
    fixed: 'right',
    render: (jobId: string) => {
      return (
        <div className="flex justify-around">
          <InternButtonEdit onClick={() => handleOpenDetail(jobId)} />
          <InternButtonTableDelete onClick={() => handleOpenDelete(jobId)} />
        </div>
      );
    },
  },
];
