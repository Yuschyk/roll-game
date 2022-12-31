import React, { FC } from 'react';

import { useForm, Controller } from 'react-hook-form';

import { authService } from '../../model';
import { AuthButton } from '../auth-button';
import { AuthInput } from '../auth-input';
import { FormSubtitle, FormTitle, InnerFormWrapper, OuterFormWrapper } from './styled';


type FormData = {
    email: string;
    password: string;
};
export const LoginForm:FC = ():JSX.Element => {
  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit = ({ email, password }:any) => {
    authService.login(email, password);
  };

  return (
    <OuterFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <FormTitle>
        Войти в аккаунт
      </FormTitle>
      <FormSubtitle>
        Пожалуйста, войдите в свой аккаунт
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
          name="password"
          control={control}
          render={({ field }) => (
            <AuthInput
              {...field}
              type="password"
              label="Password"
            />
          )}
        />
        <AuthButton>
          Войти в аккаунт
        </AuthButton>
      </InnerFormWrapper>
    </OuterFormWrapper>
  );
};
