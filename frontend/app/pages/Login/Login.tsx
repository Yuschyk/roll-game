import React, {FC} from 'react';
import {FormTitle, FormSubtitle, InnerFormWrapper, OuterFormWrapper, PageWrapper} from "./styled";
import {AuthButton, AuthInput} from "../../components";

export const Login:FC = ():JSX.Element => (
    <PageWrapper>
        <OuterFormWrapper>
                <FormTitle>
                        Войти в аккаунт
                </FormTitle>
                <FormSubtitle>
                        Пожалуйста, войдите в свой аккаунт
                </FormSubtitle>
                <InnerFormWrapper>
                        <AuthInput
                            name="email"
                        label="Email"
                        />
                        <AuthInput
                            name="password"
                            label="Password"
                            type="password"
                        />
                        <AuthButton />
                </InnerFormWrapper>
        </OuterFormWrapper>
        </PageWrapper>
)
