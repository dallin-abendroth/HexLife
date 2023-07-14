import styled from '@emotion/styled';

export const StepButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  color: white;
  background-color: black;
  border: 2px solid white;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:not(:disabled):hover {
    color: black;
    background-color: white;
  }

  &:disabled {
    border-color: #333;
    cursor: not-allowed;

    &::before {
      color: #333;
    }
  }

  &::before {
    content: "⤸";
    font-size: 55px;
    position: relative;
    left: 3px;
    -webkit-transform: rotate(275deg);
  }
`;