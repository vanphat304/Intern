import { EyeInvisibleFilled, LockFilled, MailOutlined } from '@ant-design/icons';
import React from 'react';
import './Login.css';
import { useForm } from 'react-hook-form';
import { useAuthStore } from '../../../store';
import { useMutation } from '@tanstack/react-query';
import { Service } from '../../../services/service';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorMessage } from '@hookform/error-message';
import { Link } from 'react-router-dom';

function Login() {
  const schema = yup.object({
    email: yup.string().required('Trường này bắt buộc nhập'),
    password: yup.string('Trường này bắt buộc nhập'),
  });

  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const [{ userLogin }] = useAuthStore();
  const { mutate: login } = useMutation({
    mutationFn: (params) => Service.loginAuth(params),
    onSuccess: (data) => {
      localStorage.setItem('tempUser', JSON.stringify(data));
      if (userLogin?.role === 'ADMIN') {
        window.location.href = '/students/student';
      } else {
        window.location.href = '/';
      }
    },
    onError: (error) => {
      console.log(error);
      console.log(error?.response?.data?.message?.toString());
      toast.error(error?.response?.data?.message?.toString());
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const handleLogin = () => {
    return handleSubmit((data) => {
      login(data);
    });
  };

  return (
    <div className="Login">
      <form>
        <div className="Login_form-group">
          <label>Email</label>
          <div className="Login_form-input">
            <div className="Login_form-icon">
              <MailOutlined />
            </div>
            <input
              type="email"
              {...register('email')}
              name="email"
              placeholder="Nhập email của bạn"
            />
          </div>
          <ErrorMessage
            errors={errors}
            name={'email'}
            render={({ message }) => (
              <p className={`animate-pulse text-red-600 col-span-6 font-normal text-sm`}>
                {message}
              </p>
            )}
          />
        </div>
        <div className="Login_form-group">
          <label>Mật khẩu</label>
          <div className="Login_form-input">
            <div className="Login_form-icon">
              <LockFilled />
            </div>
            <input type="password" {...register('password')} placeholder={'Nhập mật khảu của bạn'} name="password" />
            <div className="Login_form-icon">
              <EyeInvisibleFilled />
            </div>
          </div>
          <ErrorMessage
            errors={errors}
            name={'password'}
            render={({ message }) => (
              <p className={`animate-pulse capitalize text-red-600 col-span-6 font-normal text-sm`}>
                {message}
              </p>
            )}
          />
        </div>
      </form>
      <div className="Login_form-group">
        <button onClick={handleLogin()}>Đăng nhập</button>
      </div>
      <p className="forgot_pass ">Quên mật khẩu</p>
      <Link to={'/auth/register'}>
        <p className="forgot_pass pr-3">Đăng ký</p>
      </Link>
    </div>
  );
}
export default Login;
