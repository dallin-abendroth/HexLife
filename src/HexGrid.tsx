import React, { useState } from 'react';
import Hexagon from './Hexagon';
import styled from '@emotion/styled';

type HexGridProps = {
  rows: number,
  cols: number,
};

const HexRow = styled.div<{ isEven: boolean }>`
  display: flex;
  margin-left: ${props => props.isEven ? "0px" : "15px"};
`;

const HexGrid: React.FC<HexGridProps> = ({ rows, cols }) => {
  const [grid, setGrid] = useState(() => {
    return Array(rows).fill(null).map(() => Array(cols).fill(false));
  });

  const toggleHexagon = (row: number, col: number) => {
    console.log("column "+col+", row "+row)
    setGrid(prevGrid => {
      const newGrid = prevGrid.map(innerArray => [...innerArray]);
      newGrid[row][col] = !newGrid[row][col];
      return newGrid;
    });
  };

  return (
    <div>
      {grid.map((row, i) => (
        <HexRow key={i} isEven={i % 2 === 0}>
          {row.map((toggled, j) => (
            <Hexagon key={j} toggled={toggled} onClick={() => toggleHexagon(i, j)} />
          ))}
        </HexRow>
      ))}
    </div>
  );
};

export default HexGrid;