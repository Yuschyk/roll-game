import React, { FC } from 'react';

import { Controller, useForm } from 'react-hook-form';

import { authService } from '../../model';
import { AuthButton } from '../auth-button';
import { AuthInput } from '../auth-input';
import { FormSubtitle, FormTitle, InnerFormWrapper, OuterFormWrapper } from './styled';


type FormData = {
    email: string;
    username: string;
    password: string;
    confirmPassword: string;
};
export const RegisterForm:FC = ():JSX.Element => {
  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
    },
  });
  const onSubmit = ({ email, username, password }:any) => {
    authService.register(email, username, password);
  };

  return (
    <OuterFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <FormTitle>
        Регистрация
      </FormTitle>
      <FormSubtitle>
        Для входа в чат, вам нужно зарегистрироваться
      </FormSubtitle>
      <InnerFormWrapper>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <AuthInput
              {...field}
              label="Email"
            />
          )}
        />
        <Controller
          name="username"
          control={control}
          render={({ field }) => (
            <AuthInput
              {...field}
              label="Username"
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <AuthInput
              {...field}
              label="Password"
              type="password"
            />
          )}
        />
        <Controller
          name="confirmPassword"
          control={control}
          render={({ field }) => (
            <AuthInput
              {...field}
              label="Confirm password"
              type="password"
            />
          )}
        />
        <AuthButton>
          Зарегистрироваться
        </AuthButton>
      </InnerFormWrapper>
    </OuterFormWrapper>
  );
};
