import styled from 'styled-components';

export const List = styled.div`
  flex: 1;
  max-height: calc(100% - 150px);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  transform: translateY(-20px);
`;
