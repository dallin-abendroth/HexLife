import styled from '@emotion/styled';

export const ClearButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  width: 50px;
  height: 50px;
  color: white;
  background-color: black;
  border: 2px solid white;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 24px;

  &:hover {
    color: black;
    background-color: white;
  }

  &::before {
    content: "X";
    font-size: 30px;
    position: relative;
    top: 1px;
  }
`;