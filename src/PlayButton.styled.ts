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
    content: "⏵";
    font-size: 40px;
    position: relative;
    top: 3px;
    left: 1px;
  }
`;