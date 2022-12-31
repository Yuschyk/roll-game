import React, {FC} from "react";
import {
    Avatar,
    BalanceAction,
    BalanceValue,
    BalanceWrapper,
    ContentWrapper, LevelProgressLine, LevelUnit, LevelValue,
    LevelWrapper,
    UserName,
    Wrapper
} from "./styled";

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
            <LevelWrapper>
                <LevelValue>
                    <span>
                        1
                    </span>
                    <LevelUnit>
                        ур.
                    </LevelUnit>
                </LevelValue>
                <LevelProgressLine
                    value="54"
                    max="100"
                />
                <LevelValue>
                    <span>
                        2
                    </span>
                    <LevelUnit>
                        ур.
                    </LevelUnit>
                </LevelValue>
            </LevelWrapper>
        </ContentWrapper>
    </Wrapper>
)
