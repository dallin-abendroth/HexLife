import styled from '@emotion/styled';

type HexagonStyledProps = {
  toggled: boolean,
};

export const HexagonStyled = styled.div<HexagonStyledProps>`
  width: 30px;
  height: 34.64px;
  background-color: ${props => (props.toggled ? 'green' : 'gray')};
  margin: 17.32px 0;
  position: relative;
  cursor: pointer;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);

  &:nth-child(odd) {
    margin-left: 15px;
  }
`;
