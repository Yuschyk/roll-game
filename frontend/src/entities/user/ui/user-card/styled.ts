import styled from '@emotion/styled';


export const Wrapper = styled.div`
  max-width: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const UserInfoContent = styled.div`

`;

export const UserNameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap:  5px;
  margin-bottom: 10px;
`;

export const UserName = styled.div`
  font-weight: 500;
  font-size: 18px;
  color: #FFFFFF;
`;

export const UserAvatar = styled.img`
  width: 104px;
  height: 104px;
  border-radius: 50%;
  background-color: red;
`;

export const UserBalanceWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const UserBalanceLabel = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #FFFFFF;
`;

export const UserLabelValue = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #79FFA7;
`;

export const UserProgress = styled.div`

`;


export const CurrentProgressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
`;

export const LevelIcon = styled.img`
  width: 60px;
  height: 60px;
`;

export const CurrentLevel = styled.div`
  font-size: 24px;
  color: #FFFFFF;
  text-transform: uppercase;
`;

export const CurrentExperiencePoint = styled.div`
  font-size: 11px;
  color: #656565;
  text-transform: uppercase;
`;

export const ProgressLine = styled.progress`
  width: 290px;
  height: 11px;
  border-radius: 74px;

  &[value]::-webkit-progress-bar{
    border-radius: 74px;
    background-color: #2C2C2C;
  }

  &[value]::-webkit-progress-value{
    border-radius: 74px;
    background-color: #C4364E;
    box-shadow: 0px 0px 26.125px rgba(196, 54, 78, 0.34);
  }
`;
