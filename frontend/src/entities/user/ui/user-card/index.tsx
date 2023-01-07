import React, { FC } from 'react';

import { GearIcon } from '../../../../shared/icons/gear-icon';
import {
  CurrentExperiencePoint,
  CurrentLevel, CurrentProgressWrapper, LevelIcon, ProgressLine,
  UserAvatar,
  UserBalanceLabel,
  UserBalanceWrapper,
  UserInfo,
  UserInfoContent, UserLabelValue,
  UserName,
  UserNameWrapper, UserProgress,
  Wrapper,
} from './styled';


export const UserCard:FC = ():JSX.Element => (
  <Wrapper>
    <UserInfo>
      <UserAvatar />
      <UserInfoContent>
        <UserNameWrapper>
          <UserName>
            UserName
          </UserName>
          <GearIcon />
        </UserNameWrapper>
        <UserBalanceWrapper>
          <UserBalanceLabel>
            Balance:
          </UserBalanceLabel>
          <UserLabelValue>
            5000$
          </UserLabelValue>
        </UserBalanceWrapper>
      </UserInfoContent>
    </UserInfo>

    <UserProgress>
      <CurrentProgressWrapper>
        <LevelIcon src="/gem-icon.png" />
        <CurrentLevel>
          17 LVL
        </CurrentLevel>
        <CurrentExperiencePoint>
          300 / 1000 XP
        </CurrentExperiencePoint>
      </CurrentProgressWrapper>
      <ProgressLine
        value="54"
        max="100"
      />
    </UserProgress>
  </Wrapper>
);
