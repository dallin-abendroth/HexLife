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

  &:before, &:after {
    content: "";
    position: absolute;
    width: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
  }

  &:before {
    bottom: 100%;
    border-bottom: 8.66px solid ${props => (props.toggled ? 'green' : 'gray')};
  }

  &:after {
    top: 100%;
    width: 0;
    border-top: 8.66px solid ${props => (props.toggled ? 'green' : 'gray')};
  }

  &:nth-child(odd) {
    margin-left: 15px;
  }
`;
