import styled from '@emotion/styled';

export const RewindButton = styled.button`
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

  &:disabled {
    border-color: #333;
    cursor: not-allowed;

    &::after {
      color: #333;
    }
  }

  &::after {
    content: '↺';
    font-size: 30px;
    position: relative;
    top: 3px;
    -webkit-transform: rotate(180deg);
  }

  &:not(:disabled):hover {
    color: black;
    background-color: white;
  }
`;