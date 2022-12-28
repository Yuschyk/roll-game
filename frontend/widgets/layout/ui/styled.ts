import styled from '@emotion/styled';

import { ContentWrapper } from '../../../shared/styled';


export const Wrapper = styled.div`
  max-width: 100%;
  width: 100%;
  min-height: 100vh;
  background-color: #1E1E1E;
  display: flex;
  flex-direction: column;
`;

export const Content = styled(ContentWrapper)`
  padding-top: 22px;
  padding-bottom: 46px;
  flex: 1;
  display: flex;
  align-items: flex-start;
  gap: 20px;
`;

export const ChildrenWrapper = styled.div`
  max-width: 100%;
  width: 100%;
`;
