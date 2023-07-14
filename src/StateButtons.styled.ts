import styled from '@emotion/styled';

export const SaveStateButton = styled.button`
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
`;

export const ForgetStateButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 50%;
  color: white;
  background-color: black;
  border: 2px solid white;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    color: black;
    background-color: white;
  }
`;