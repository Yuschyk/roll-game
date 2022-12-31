import styled from '@emotion/styled';

import { ContentWrapper } from '../../../../shared/styled';


export const Wrapper = styled.div`
  max-width: 100%;
  width: 100%;
  padding: 20px 0 22px 0;
  background: rgba(35, 35, 35, 0.71);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderRow = styled(ContentWrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 33px;
`;
