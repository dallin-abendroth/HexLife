// src/App.styles.ts

import styled from '@emotion/styled';

export const Title = styled.h1`
  font-family: 'Helvetica';
  font-size: 36px;
  color: white;
  text-align: center;
  margin-top: 30px;
`;

export const AppContainer = styled.div`
  background-color: black;
  flex-direction: column;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HexGridContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;