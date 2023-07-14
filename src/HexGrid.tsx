import React, { useState, useRef, useEffect } from 'react';
import Hexagon from './Hexagon';
import { ClearButton } from './ClearButton.styled';
import styled from '@emotion/styled';
import { ButtonContainer } from './ButtonContainer.styled';
import { StepButton } from './StepButton.styled';
import { PlayButton } from './PlayButton.styled';
import SavedStateButton from './SavedStateButton';
import { calculateNextGridState } from './utils';

type HexGridProps = {
  rows: number,
  cols: number,
  hexSize: number,
};

const HexRow = styled.div<{ isEven: boolean, hexSize: number }>`
  display: flex;
  margin-left: ${props => props.isEven ? "0px" : `${props.hexSize / 2}px`};
`;

const HexGrid: React.FC<HexGridProps> = ({ rows, cols, hexSize }) => {
  const [grid, setGrid] = useState(() => {
    return Array(rows).fill(null).map(() => Array(cols).fill(false));
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const [savedStates, setSavedStates] = useState<(boolean[][] | null)[]>([null, null, null]);


  const isGridEmpty = !grid.flat().includes(true);

  // Store the interval id in a ref so we can clear it later
  const intervalIdRef = useRef<number | undefined>();

  // Clear the interval when the component is unmounted
  useEffect(() => {
    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, []);

  const togglePlaying = () => {
    isPlaying ? pause() : play();
  }

  const play = () => {
    setIsPlaying(true);
    moveForward();
    intervalIdRef.current = window.setInterval(() => moveForward(), 100); // Adjust interval as needed
  };

  const pause = () => {
    setIsPlaying(false);
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
    }
  };

  const clearGrid = () => {
    setGrid(Array(rows).fill(null).map(() => Array(cols).fill(false)));
  };

  const moveForward = () => {
    setGrid(currentGrid => {
      if (!currentGrid.flat().includes(true)) {
        pause();
        return currentGrid;
      }
      return calculateNextGridState(currentGrid);
    })
  };

  const toggleHexagon = (rowIndex: number, colIndex: number) => {
    setGrid(oldGrid => {
      const newGrid = [...oldGrid];
      newGrid[rowIndex] = [...oldGrid[rowIndex]]; // Copy the row
      newGrid[rowIndex][colIndex] = !newGrid[rowIndex][colIndex];
  
      return newGrid;
    });
  };

  const saveState = (index: number) => {
    let newSavedStates = [...savedStates];
    newSavedStates[index] = grid;
    setSavedStates(newSavedStates);
  };

  const resetToState = (index: number) => {
    let newState = savedStates[index];
    if (newState !== null) {
      setGrid([...newState]);
    }
  };

  const forgetState = (index: number) => {
    let newSavedStates = [...savedStates];
    newSavedStates[index] = null;
    setSavedStates(newSavedStates);
  };

  return (
    <div>
      <ButtonContainer>
        <ClearButton onClick={clearGrid} disabled={isPlaying || isGridEmpty} />
        <StepButton onClick={moveForward} disabled={isPlaying || isGridEmpty} />
        <PlayButton onClick={togglePlaying} disabled={isGridEmpty} isPlaying={isPlaying} />
        {Array(3).fill(0).map((_, index) => (
          <SavedStateButton
            key={index}
            savedState={savedStates[index]}
            onUse={() => resetToState(index)}
            onSave={() => saveState(index)}
            onForget={() => forgetState(index)}
          />
        ))}
      </ButtonContainer>
      {grid.map((row, i) => (
        <HexRow key={i} isEven={i % 2 === 0} hexSize={hexSize}>
          {row.map((toggled, j) => (
            <Hexagon 
              key={j} 
              row={i} 
              col={j} 
              toggled={toggled} 
              hexSize={hexSize} 
              onClick={toggleHexagon} 
              />
          ))}
        </HexRow>
      ))}
    </div>
  );
};

export default HexGrid;