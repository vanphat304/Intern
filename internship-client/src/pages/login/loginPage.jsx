import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import InternButtonSubmit from '../../components/InternButton/InternButtonSubmit';
import InternText from '../../components/InternInput/InternText';
import InternRow from '../../components/InternRow';
import { Service } from '../../services/service';
import { toast } from 'react-toastify';
import { useAuthStore } from '../../store';

const LoginPage = () => {
  const methods = useForm();
  const [userLogin] = useAuthStore();
  const { mutate: login } = useMutation({
    mutationFn: (params) => Service.loginAuth(params),
    onSuccess: (data) => {
      localStorage.setItem('tempUser', JSON.stringify(data));
      toast.success('đăng nhập thành công', { data });
      if (userLogin?.role === 'ADMIN') {
        window.location.href = '/students/student';
      } else {
        window.location.href = '/';
      }
    },
    onError: (error) => {
      console.log(error);
      // alert();
      toast.error(error?.response?.data?.message);
    },
  });
  const { getValues, trigger } = methods;
  const handleLogin = () => {
    trigger().then((isValid) => {
      if (isValid) {
        login(getValues());
      }
    });
  };
  return (
    <section className="h-screen">
      <div className="px-6 h-full text-gray-800">
        <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
          <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              alt="img"
              className="w-full"
            />
          </div>
          <div className="xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
            <FormProvider {...methods}>
              <form>
                <InternRow>
                  <InternText
                    rule={{ required: true }}
                    type="email"
                    colSpan={12}
                    name="email"
                    label="email"
                    message="Vui lòng nhập vào trường bắt buộc"
                  />
                </InternRow>

                <InternRow>
                  <InternText
                    rule={{ required: true }}
                    type="password"
                    colSpan={12}
                    name="password"
                    message="Vui lòng nhập vào trường bắt buộc"
                    label="password"
                  />
                </InternRow>
              </form>
            </FormProvider>
            <div className="flex justify-center ml-48">
              <InternButtonSubmit onClick={handleLogin} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
