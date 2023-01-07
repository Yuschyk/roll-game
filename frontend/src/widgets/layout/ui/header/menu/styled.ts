import styled from '@emotion/styled';
import Link from 'next/link';


export const MenuWrapper = styled.div`
  display: flex;
  gap: 48px;
`;

export const MenuItem = styled(Link)`
  color: #575757;
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  transition: 0.2s;
  
  &:hover{
    color: #C8C8C8;
  }
`;
