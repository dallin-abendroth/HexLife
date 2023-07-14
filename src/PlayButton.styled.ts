import styled from '@emotion/styled';

type PlayButtonStyledProps = {
  isPlaying: boolean,
};

export const PlayButton = styled.button<PlayButtonStyledProps>`
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
    content: "${props => (props.isPlaying ? '⏸' : '⏵')}";
    font-size: 40px;
    position: relative;
    top: 3px;
  }
`;