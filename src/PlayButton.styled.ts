import styled from '@emotion/styled';

export const PlayButton = styled.button`
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

  &:hover {
    color: black;
    background-color: white;
  }

  &::before {
    content: "";
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 15px solid white;
    position: relative;
    right: -2px;
    &:hover {
        color: black;
        background-color: white;
    }
  }
`;