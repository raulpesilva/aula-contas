import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  position: relative;
`;

export const Header = styled.div`
  height: 170px;
  width: 100%;
  background-image: linear-gradient(114deg, #53a9ff, #328de8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TotalWallet = styled.h3`
  font-size: 22px;
  color: #ffffff;
  & > strong {
    font-weight: 600;
  }
`;
