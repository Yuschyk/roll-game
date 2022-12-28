import styled from '@emotion/styled';
import AutoHeight from 'react-auto-height';

import { TIsOpenAccordion } from './types';


export const Wrapper = styled.div`
  max-width: 100%;
  width: 100%;
  margin-bottom: 15px;  
`;

export const AccordionHeader = styled.div<TIsOpenAccordion>`
  padding: 16px 20px;
  background: #212121;
  border-radius: 6px 6px 6px 6px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
`;

export const AccordionLabel = styled.span`
  font-weight: 500;
  font-size: 16px;
  color: #FFFFFF;
`;

export const AccordionBody = styled(AutoHeight)<TIsOpenAccordion>`
  background-color: #1C1C1C;
  display: grid;
  grid-template-rows: 0fr;
  transition: 1s;
  overflow: hidden;
  padding: 16px 20px;
  color: #C8C8C8;
  font-weight: 400;
  font-size: 16px;
`;

