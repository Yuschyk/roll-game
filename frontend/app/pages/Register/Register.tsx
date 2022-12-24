import React, {FC} from "react";
import {FormSubtitle, FormTitle, InnerFormWrapper, OuterFormWrapper, PageWrapper} from "./styled";
import {AuthButton, AuthInput} from "../../components";

export const Register:FC = ():JSX.Element => (
    <PageWrapper>
        <OuterFormWrapper>
            <FormTitle>
                Регистрация
            </FormTitle>
            <FormSubtitle>
                Для входа в чат, вам нужно зарегистрироваться
            </FormSubtitle>
            <InnerFormWrapper>
                <AuthInput
                    name="email"
                    label="Email"
                />
                <AuthInput
                    name="username"
                    label="Usersname"
                    type="text"
                />
                <AuthInput
                    name="password"
                    label="Password"
                    type="password"
                />
                <AuthInput
                    name="password"
                    label="Confirm password"
                    type="password"
                />
                <AuthButton />
            </InnerFormWrapper>
        </OuterFormWrapper>
    </PageWrapper>
)
