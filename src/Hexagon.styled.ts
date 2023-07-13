import styled from '@emotion/styled';

type HexagonStyledProps = {
  toggled: boolean,
};

const hexagonWidth = 15;  // in px
const borderSize = 1; // in px
const hexagonHeight = hexagonWidth / (Math.sqrt(3) / 2); // for equilateral hexagon, width = height * (sqrt(3)/2)
const verticalMargin = -(hexagonHeight-hexagonWidth);

export const HexagonStyled = styled.div<HexagonStyledProps>`
  width: ${hexagonWidth}px;
  height: ${hexagonHeight}px;
  background-color: black;
  margin: ${verticalMargin}px 0px;
  position: relative;
  cursor: pointer;
  display: flex;
  box-shadow: 1px 0px 0px 1px black;
  
  &::before {
    content: "";
    position: absolute;
    top: ${borderSize}px;
    left: ${borderSize}px;
    width: ${hexagonWidth - 2 * borderSize}px;
    height: ${hexagonHeight - 2 * borderSize}px;
    background-color: ${props => (props.toggled ? 'green' : 'gray')};
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  }

  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
`;