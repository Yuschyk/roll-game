import styled from '@emotion/styled';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


export const STable = styled(Table)`
  max-width: 100%;
  width: 100%;
  color: #C8C8C8;
`;

export const STableHead = styled(TableHead)`
  background-color: #212121;
  text-transform: uppercase;
  
  th {
    font-size: 14px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

export const STableRow = styled(TableRow)`
  border: 0;
  
  &:nth-child(2n){
    background-color: #212121;
  }
`;

export const STableCell = styled(TableCell)`
  color: #C8C8C8;
  border: 0;
`;
