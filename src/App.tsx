import React from 'react';
import HexGrid from './HexGrid';
import styled from '@emotion/styled';

const AppContainer = styled.div`
  background-color: black;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <HexGrid rows={20} cols={20} />
    </AppContainer>
  );
}

export default App;
