import React from 'react';
import { HexagonStyled } from './Hexagon.styled';

type HexagonProps = {
  row: number,
  col: number,
  hexSize: number,
  toggled: boolean,
  onClick: (row: number, col: number) => void,
};

const Hexagon: React.FC<HexagonProps> = React.memo(
  ({ row, col, hexSize, toggled, onClick }) => (
    <HexagonStyled
      onClick={() => {
        onClick(row, col);
      }}
      toggled={toggled}
      hexSize={hexSize}
    />
  ), 
  // Add a comparison function to prevent unnecessary re-renders
  (prevProps, nextProps) => (
    prevProps.row === nextProps.row && 
    prevProps.col === nextProps.col && 
    prevProps.hexSize === nextProps.hexSize && 
    prevProps.toggled === nextProps.toggled
  )
);

export default Hexagon;