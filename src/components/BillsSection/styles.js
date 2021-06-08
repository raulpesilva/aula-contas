import styled from 'styled-components';

export const BillsSection = styled.div`
  width: 345px;
  min-height: fit-content;
  background-color: #ffffff;
  border: 1px solid #53a9ff69;
  border-radius: 9px;
  padding: 15px;
  box-sizing: border-box;
  &:not(:first-child) {
    margin-top: 20px;
  }
  &:last-child {
    margin-bottom: 30px;
  }
`;

export const Date = styled.div`
  text-align: center;
  color: #707070;
  font-weight: 600;
  font-size: 14px;
`;
