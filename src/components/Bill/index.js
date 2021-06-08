import React from 'react';
import * as S from './styles';

export const Bill = ({ title, category, value, status }) => {
  return (
    <S.Bill>
      <S.BoxIcon />
      <S.WrapperInfo>
        <S.Title>{title}</S.Title>
        <S.Category>{category}</S.Category>
      </S.WrapperInfo>
      <S.WrapperValue>
        <S.Value>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)}</S.Value>
        <S.Status>{status}</S.Status>
      </S.WrapperValue>
    </S.Bill>
  );
};
