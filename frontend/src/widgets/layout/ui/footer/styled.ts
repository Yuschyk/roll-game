import styled from '@emotion/styled';

import { ContentWrapper } from '../../../../shared/styled';


export const Wrapper = styled.div`
  max-width: 100%;
  width: 100%;
  padding: 19px 0 17px 0;
  background: rgba(35, 35, 35, 0.71);
`;

export const FooterInfo = styled(ContentWrapper)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const InnerWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FooterLogotype = styled.img`
  display: block;
  width: 140px;
  height: 28px;
`;

export const FooterCopyright = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: #5F5F5F;
`;
