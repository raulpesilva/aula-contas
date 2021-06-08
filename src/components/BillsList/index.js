import React from 'react';
import { BILLS_LIST } from '../../mocks';
import { BillsSection } from '../BillsSection';
import * as S from './styles';

export const BillsList = () => {
  return (
    <S.List>
      {BILLS_LIST.map((item) => (
        <BillsSection key={item.id} date={item.date} bills={item.bills} />
      ))}
    </S.List>
  );
};
