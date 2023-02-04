import React from 'react';
import InternSelect from '../../../components/InternInput/InterSelect';
import InternRow from '../../../components/InternRow';
import { RATING } from '../../../types/rating.type';
import InternTextEditor from '../../../components/InternTextEditor';
import { useForm, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Service } from '../../../services/service';
import { toast } from 'react-toastify';
import { useAuthStore } from '../../../store';
import { CACHE_TIME, QUERY_KEY_CHECK, QUERY_KEY_GET_COMP_REPORT, STALE_TIME } from '../../../enums';
import { useNavigate } from 'react-router-dom';

const RATINGS = Object.keys(RATING).map((item) => ({
  id: item,
  name: item,
  value: item,
}));

const schema = yup.object({
  rating: yup.string().required('Trường này bắt buộc nhập'),
  decription: yup.string().required('Trường này bắt buộc nhập'),
});

const ReportCompany = () => {
  const methods = useForm({
    resolver: yupResolver(schema),
  });
  const { handleSubmit, setValue } = methods;

  const navigate = useNavigate();

  const [{ userLogin }] = useAuthStore();

  const { data: dataStudentWork } = useQuery({
    queryFn: () => Service.getStudentWorkCompany({ id: userLogin.id }),
    queryKey: [QUERY_KEY_GET_COMP_REPORT, userLogin.id],
    cacheTime: CACHE_TIME,
    staleTime: STALE_TIME,
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      Object.keys(data).forEach((key) => {
        setValue(key, data[key]);
      });
    },
  });

  const { isLoading, mutate: reportCompany } = useMutation({
    mutationFn: (params) => Service.updateStudentWorkCompany(params),
    onSuccess: () => {
      toast.success('Đã gửi báo cáo thành công');
      navigate('/');
    },
    onError: () => {
      toast.error('Có lỗi trong quá trình xử lý');
    },
  });

  console.log({ dataStudentWork });

  const handleReportCompany = () => {
    return handleSubmit((data) => {

      if (!dataStudentWork) {
        toast.error('Sinh viên chưa đi thực tập');
        navigate('/history-apply');
        return;
      }

      const { decription, rating } = data;
      const dataSubmit = {
        decription,
        rating,
        studentId: userLogin.id,
        companyId: dataStudentWork?.companyId,
      };
      reportCompany(dataSubmit);
    });
  };

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 bg-white border border-solid border-slate-300 rounded shadow-md p-4">
        <p className="font-bold border-l-4 border-green-500 pl-4 mb-4">
          Đánh giá công ty thực tập{' '}
          <span className="font-semibold text-green-600 text-lg">
            {dataStudentWork?.company?.nameCompany}
          </span>
        </p>
        <FormProvider {...methods}>
          <form>
            <InternRow>
              <InternSelect
                data={RATINGS}
                colSpan={12}
                direct
                name="rating"
                label="Đánh giá công ty"
              />
            </InternRow>
            <InternRow>
              <InternTextEditor
                colSpan={12}
                direct
                name="decription"
                label="Phản ánh tình hình thực tập tại công ty"
              />
            </InternRow>
          </form>
        </FormProvider>

        <div>
          <button
            className={`p-2 rounded-lg text-white uppercase font-semibold mb-2 bg-green-600`}
            onClick={handleReportCompany()}
            disabled={isLoading}
          >
            GỬI THÔNG TIN BÁO CÁO CÔNG TY
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportCompany;
