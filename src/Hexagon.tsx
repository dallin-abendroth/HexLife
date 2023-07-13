import React from 'react';
import { HexagonStyled } from './Hexagon.styled';

type HexagonProps = {
  toggled: boolean,
  onClick: () => void,
};

const Hexagon: React.FC<HexagonProps> = ({ toggled, onClick }) => (
  <HexagonStyled toggled={toggled} onClick={onClick} />
);

export default Hexagon;