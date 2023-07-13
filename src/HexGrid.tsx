import React, { useState } from 'react';
import Hexagon from './Hexagon';

type HexGridProps = {
  rows: number,
  cols: number,
};

const HexGrid: React.FC<HexGridProps> = ({ rows, cols }) => {
  const [grid, setGrid] = useState(() => {
    return Array(rows).fill(null).map(() => Array(cols).fill(false));
  });

  const toggleHexagon = (row: number, col: number) => {
    setGrid(prevGrid => {
      const newGrid = [...prevGrid];
      newGrid[row][col] = !newGrid[row][col];
      return newGrid;
    });
  };

  return (
    <div>
      {grid.map((row, i) => (
        <div key={i}>
          {row.map((toggled, j) => (
            <Hexagon key={j} toggled={toggled} onClick={() => toggleHexagon(i, j)} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default HexGrid;