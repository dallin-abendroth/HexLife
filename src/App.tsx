import React from 'react';
import HexGrid from './HexGrid';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <HexGrid rows={10} cols={10} />
    </div>
  );
}

export default App;
