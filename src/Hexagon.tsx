import React from 'react';
import { HexagonStyled } from './Hexagon.styled';

type HexagonProps = {
  toggled: boolean,
  onClick: () => void,
  hexSize: number,
};

const Hexagon: React.FC<HexagonProps> = ({ toggled, onClick, hexSize }) => (
  <HexagonStyled toggled={toggled} onClick={onClick} hexSize={hexSize} />
);

export default Hexagon;