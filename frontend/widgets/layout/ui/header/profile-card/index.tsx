import React, {FC} from "react";
import {Avatar, BalanceAction, BalanceValue, BalanceWrapper, ContentWrapper, UserName, Wrapper} from "./styled";

export const ProfileCard:FC = ():JSX.Element => (
    <Wrapper>
        <Avatar />
        <ContentWrapper>
            <UserName>Yura Yuschyk</UserName>
            <BalanceWrapper>
                <BalanceValue>
                    <img src="/balanceIcon.svg" />
                    <span>
                    10000$
                        </span>
                </BalanceValue>

                <BalanceAction>
                    Пополнить
                </BalanceAction>
                <BalanceAction>
                    Вывести
                </BalanceAction>
            </BalanceWrapper>
        </ContentWrapper>
    </Wrapper>
)
