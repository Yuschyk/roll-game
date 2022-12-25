import styled from "@emotion/styled";


export const Wrapper = styled.div`
  max-width: 100%;
  width: 100%;
  display: flex;
  align-items: stretch;
  background-color: #252628;
  border: 1px solid rgba(255, 255, 255, 0.03);
  border-radius: 5px;
  height: 46px;
`;

export const ChatInput = styled.input`
  max-width: 100%;
  width: 100%;
  text-indent: 16px;
  background-color: transparent;
  border: 0;
  outline: none;
  
  &::placeholder {
    color: #575757;
  }
`;

export const ActionsWrapper = styled.div`
  padding: 0 16px;
  display: flex;
  align-items: center;
  gap: 15px;
`;
