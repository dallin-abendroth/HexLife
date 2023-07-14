import React from 'react';
import HexGrid from './HexGrid';
import { AppContainer, HexGridContainer, Title, InfoButton } from './App.styles';

const App: React.FC = () => {
  return (
    <AppContainer>
      <Title>Conway's Game of Life with Hexagons</Title>
      <InfoButton href="https://github.com/dallin-abendroth/HexagonLife" target="_blank">ⓘ</InfoButton>
      <HexGridContainer>
        <HexGrid rows={60} cols={80} hexSize={10} />
      </HexGridContainer>
    </AppContainer>
  );
}

export default App;
