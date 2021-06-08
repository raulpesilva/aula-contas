import { BillsList } from '../../components';
import * as S from './styles';

export const Home = () => {
  return (
    <S.Container>
      <S.Header>
        <S.TotalWallet>
          <strong>R$</strong> 100.000,00
        </S.TotalWallet>
      </S.Header>
      <BillsList />
    </S.Container>
  );
};
