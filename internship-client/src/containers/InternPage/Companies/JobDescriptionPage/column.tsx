import InternButtonEdit from '../../../../components/InternButton/InternButtonEdit';
import InternButtonTableDelete from '../../../../components/InternButtonTableDelete';

export const columnsJobDescriptions = ({ handleOpenDetail, handleOpenDelete }: any) => [
  {
    title: 'STT',
    dataIndex: 'index',
    key: 'index',
  },
  {
    title: 'jobTitle',
    dataIndex: 'jobTitle',
    key: 'jobTitle',
  },
  {
    title: 'decriptionJob',
    dataIndex: 'decriptionJob',
    key: 'decriptionJob',
    render: (value: string) => {
      return value
        ?.replace(/(<([^>]+)>)/gi, '')
        .toString()
        .substring(0, 12);
    },
  },

  {
    title: 'salary',
    dataIndex: 'salary',
    key: 'salary',
  },
  {
    title: 'numberRecur',
    dataIndex: 'numberRecur',
    key: 'numberRecur',
  },
  {
    title: 'nameCompany',
    dataIndex: ['company', 'nameCompany'],
    key: 'nameCompany',
  },
  {
    title: 'timeStartApply',
    dataIndex: 'timeStartApply',
    key: 'timeStartApply',
  },
  {
    title: 'timeEndAppply',
    dataIndex: 'timeEndAppply',
    key: 'timeEndAppply',
  },
  {
    title: 'timeToIntverview',
    dataIndex: 'timeToIntverview',
    key: 'timeToIntverview',
  },
  {
    title: 'addressToInterview',
    dataIndex: 'addressToInterview',
    key: 'addressToInterview',
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