import React from 'react';
import HexGrid from './HexGrid';
import styled from '@emotion/styled';

const AppContainer = styled.div`
  background-color: black;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const App: React.FC = () => {
  return (
    <AppContainer>
      <HexGrid rows={60} cols={80} hexSize={10} />
    </AppContainer>
  );
}

export default App;
