import styled from "@emotion/styled";
import {TIsOpenAccordion} from "./types";


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
`;

export const AccordionBody = styled.div<TIsOpenAccordion>`
    padding: 16px 20px;
`;
