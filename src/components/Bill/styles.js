import styled from 'styled-components';

export const Bill = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  width: 100%;
`;

export const BoxIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-image: linear-gradient(114deg, #53a9ff 0%, #328de8 100%);
`;

export const WrapperInfo = styled.div`
  margin-left: 10px;
  flex: 1;
`;

export const Title = styled.h3`
  font-size: 16px;
  color: #707070;
  font-weight: 600;
  text-transform: capitalize;
`;

export const Category = styled.p`
  font-size: 12px;
  color: #707070;
  text-transform: capitalize;
`;

export const WrapperValue = styled.div``;
export const Value = styled.p`
  text-align: right;
  color: #707070;
  font-size: 14px;
  font-weight: 600;
`;
export const Status = styled.p`
  color: #707070;
  font-size: 12px;
  text-align: right;
`;
