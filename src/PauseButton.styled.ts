import styled from '@emotion/styled';

export const PauseButton = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 50px;
  height: 50px;
  color: white;
  background-color: black;
  border: 2px solid white;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 0;

  &:disabled {
    border-color: #333;
    cursor: not-allowed;

    &::before,
    &::after {
        content: "";
        background-color: #333;
        width: 5px;
        height: 20px;
        display: inline-block;
    }
  }

  &::before,
  &::after {
      content: "";
      background-color: white;
      width: 5px;
      height: 20px;
      display: inline-block;
  }

  &:not(:disabled):hover {
    color: black;
    background-color: white;
  }
`;