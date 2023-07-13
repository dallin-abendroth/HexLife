import React from 'react';
import { HexagonStyled } from './Hexagon.styled';

type HexagonProps = {
  toggled: boolean,
  onClick: (arg0: number, arg1: number) => void,
  hexSize: number,
  row: number,
  col: number,
};

const Hexagon: React.FC<HexagonProps> = React.memo(({ row, col, hexSize, toggled, onClick }) => (
  <HexagonStyled 
    onClick={() => onClick(row, col)} 
    toggled={toggled} 
    hexSize={hexSize} 
    />
));

export default Hexagon;