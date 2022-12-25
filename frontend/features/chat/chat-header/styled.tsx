import styled from "@emotion/styled";


export const Wrapper = styled.div`
  background: #2F2F2F;
  border-radius: 5px;
  padding: 16px  19px 16px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const ChatTitle = styled.span`
  font-weight: 500;
  font-size: 16px;
  color: #FFFFFF;
`;

export const OnlineWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const OnlineCount = styled.span`
  font-weight: 500;
  font-size: 13px;
  color: #CED7E2;
`;

export const OnlineIndicator = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: #79FFA7;
  box-shadow: 0 0 16px #79FFA7;
  flex-shrink: 0;
`;
