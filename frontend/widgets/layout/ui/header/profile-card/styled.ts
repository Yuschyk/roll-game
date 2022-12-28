import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
`;

export const Avatar = styled.div`
  width: 69px;
  height: 69px;
  border-radius: 50%;
  background-color: red;
`;

export const ContentWrapper = styled.div`
  
`;

export const UserName = styled.div`
  color: #FFFFFF;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 7px;
`;

export const BalanceWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 11px;
`;

export const BalanceValue = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #79FFA7;
`;

export const BalanceAction = styled.button`
  font-weight: 400;
  font-size: 14px;
  color: rgba(87, 87, 87, 1);
  padding: 0;
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;

export const LevelWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const LevelValue = styled.div`
  font-size: 14px;
  color: #FFFFFF;
`;

export const LevelUnit = styled.span`
  font-size: 14px;
  color: #95999F;
`

export const LevelProgressLine = styled.progress`
  max-width: 210px;
  width: 100%;
  height: 8px;
  border-radius: 54px;

  &[value]::-webkit-progress-bar{
    border-radius: 54px;
    background-color: #2C2C2C;
  }

  &[value]::-webkit-progress-value{
    border-radius: 54px;
    background-color: #C4364E;
    box-shadow: 0 0 19px rgba(196, 54, 78, 0.34);
  }
`;


