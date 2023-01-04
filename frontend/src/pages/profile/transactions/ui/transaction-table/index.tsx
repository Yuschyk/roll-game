import React, { FC } from 'react';

import TableBody from '@mui/material/TableBody';

import { STable, STableHead, STableRow, STableCell } from './styled';


function createData(
  sum: number,
  type: string,
  date: string,
) {
  return { sum, type, date };
}

const rows = [
  createData(+2, 'Roullete Bet (round #2992921 Dice tontane test)', '2021-06-05-05 19 PM GMT'),
  createData(-6, 'Roullete Bet (round #2992921 Dice tontane test)', '2021-06-05-05 19 PM GMT'),
  createData(-8, 'Roullete Bet (round #2992921 Dice tontane test)', '2021-06-05-05 19 PM GMT'),
  createData(10, 'Roullete Bet (round #2992921 Dice tontane test)', '2021-06-05-05 19 PM GMT'),
  createData(25, 'Roullete Bet (round #2992921 Dice tontane test)', '2021-06-05-05 19 PM GMT'),
];

export const TransactionTable:FC = ():JSX.Element => (
  <STable>
    <STableHead>
      <STableRow>
        <STableCell>Сумма</STableCell>
        <STableCell>ТИП</STableCell>
        <STableCell>ДАТА</STableCell>
      </STableRow>
    </STableHead>
    <TableBody>
      {rows.map((row) => (
        <STableRow
          key={row.sum}
        >
          <STableCell component="th" scope="row">
            {row.sum}
          </STableCell>
          <STableCell>{row.type}</STableCell>
          <STableCell>{row.date}</STableCell>
        </STableRow>
      ))}
    </TableBody>
  </STable>
);
