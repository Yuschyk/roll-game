import styled from '@emotion/styled';
import Link from 'next/link';

import { TStyledLink } from '../model';


export const Wrapper = styled.div`
  max-width: 100%;
  width: 100%;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 12px;
  background-color: #262525;
  border-radius: 5px;
`;

export const StyledLink = styled(Link)<TStyledLink>`
  text-transform: uppercase;
  font-weight: 500;
  font-size: 14px;
  color: ${({ isActive }) => (isActive ? '#C4364E' : '#575757')};
`;
