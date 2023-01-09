import React from 'react';
import * as yup from 'yup';

import { ContactsFilled, EyeInvisibleFilled, LockFilled, MailOutlined } from '@ant-design/icons';
import './Register.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuthStore } from '../../../store';
import { useMutation } from '@tanstack/react-query';
import { Service } from '../../../services/service';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { ErrorMessage } from '@hookform/error-message';

function Register() {
  const navigate = useNavigate();
  const schema = yup.object({
    username: yup.string().required('Trường này bắt buộc nhập'),
    firstName: yup.string().required('Trường này bắt buộc nhập'),
    lastName: yup.string().required('Trường này bắt buộc nhập'),
    identifierStudent: yup.string().required('Trường này bắt buộc nhập'),
    email: yup.string().required('Trường này bắt buộc nhập').email('email không đúng định dạng'),
    password: yup.string().required('Trường này bắt buộc nhập'),
    passwordConfirm: yup.string().oneOf([yup.ref('password'), null], 'Passwords không có khớp'),
  });

  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const { mutate: registerAuth } = useMutation({
    mutationFn: (params) => Service.registerAuth(params),
    onSuccess: (data) => {
      toast('Đăng ký thành công');
      navigate('/auth/login');
    },
    onError: (error) => {
      console.log(error);
      toast.error(error?.response?.data?.message);
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  console.log({ errors });

  const handleRegister = (data) => {
    return handleSubmit((data) => {
      const { passwordConfirm, ...rest } = data;
      registerAuth(rest);
    });
  };

  return (
    <div className="Register">
      <form action="POST">

      <div className="Login_form-group">
          <label>Tên</label>
          <div className="Register_form-input Login_form-input">
            <div className="Login_form-icon">
              <LockFilled />
            </div>

            <input type="text" name="firstName" {...register('firstName')} />
          </div>
          <ErrorMessage
            errors={errors}
            name={'firstName'}
            render={({ message }) => (
              <p className={`animate-pulse capitalize text-red-600 col-span-6 font-normal text-sm`}>
                {message}
              </p>
            )}
          />
        </div>
        <div className="Login_form-group">
          <label>Họ lót</label>
          <div className="Register_form-input Login_form-input">
            <div className="Login_form-icon">
              <LockFilled />
            </div>

            <input type="text" name="lastName" {...register('lastName')} />
          </div>
          <ErrorMessage
            errors={errors}
            name={'lastName'}
            render={({ message }) => (
              <p className={`animate-pulse capitalize text-red-600 col-span-6 font-normal text-sm`}>
                {message}
              </p>
            )}
          />
        </div>
        <div className="Login_form-group">
          <label>Mã số sinh viên</label>
          <div className="Register_form-input Login_form-input">
            <div className="Login_form-icon">
              <LockFilled />
            </div>

            <input type="text" name="identifierStudent" {...register('identifierStudent')} />
          </div>
          <ErrorMessage
            errors={errors}
            name={'identifierStudent'}
            render={({ message }) => (
              <p className={`animate-pulse capitalize text-red-600 col-span-6 font-normal text-sm`}>
                {message}
              </p>
            )}
          />
        </div>

        <div className="Login_form-group">
          <label>Email</label>
          <div className="Register_form-input Login_form-input">
            <div className="Login_form-icon">
              <MailOutlined />
            </div>
            <input
              type="email"
              name="email"
              {...register('email')}
              placeholder="Nhập email của bạn"
            />
          </div>
          <ErrorMessage
            errors={errors}
            name={'email'}
            render={({ message }) => (
              <p className={`animate-pulse capitalize text-red-600 col-span-6 font-normal text-sm`}>
                {message}
              </p>
            )}
          />
        </div>

        <div className="Login_form-group">
          <label>User Name</label>
          <div className="Register_form-input Login_form-input">
            <div className="Login_form-icon">
              <LockFilled />
            </div>

            <input type="text" name="username" {...register('username')} />
          </div>
          <ErrorMessage
            errors={errors}
            name={'username'}
            render={({ message }) => (
              <p className={`animate-pulse capitalize text-red-600 col-span-6 font-normal text-sm`}>
                {message}
              </p>
            )}
          />
        </div>

        <div className="Login_form-group">
          <label>Mật khẩu</label>
          <div className="Register_form-input Login_form-input">
            <div className="Login_form-icon">
              <LockFilled />
            </div>

            <input type="password" name="password" {...register('password')} />
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
        <div className="Login_form-group">
          <label>Xác Nhận Mật khẩu</label>
          <div className="Register_form-input Login_form-input">
            <div className="Login_form-icon">
              <LockFilled />
            </div>

            <input type="password" name="passwordConfirm" {...register('passwordConfirm')} />
            <div className="Login_form-icon">
              <EyeInvisibleFilled />
            </div>
          </div>
          <ErrorMessage
            errors={errors}
            name={'passwordConfirm'}
            render={({ message }) => (
              <p className={`animate-pulse capitalize text-red-600 col-span-6 font-normal text-sm`}>
                {message}
              </p>
            )}
          />
        </div>
      </form>
      <div className="Login_form-group">
        <button onClick={handleRegister()}>Đăng ký</button>
      </div>
    </div>
  );
}
export default Register;