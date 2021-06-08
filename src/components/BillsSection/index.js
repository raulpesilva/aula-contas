import React from 'react';
import { Bill } from '../Bill';
import * as S from './styles';

export const BillsSection = ({ bills, date }) => {
  return (
    <S.BillsSection>
      <S.Date>
        {date.getDate()}/{date.getMonth()}
      </S.Date>
      {bills.map((bill) => (
        <Bill key={bill.id} title={bill.title} category={bill.category} status={bill.status} value={bill.value} />
      ))}
    </S.BillsSection>
  );
};
