type Grid = boolean[][];

export const calculateNextGridState = (currentGrid: Grid): Grid => {
  const nextGrid: Grid = currentGrid.map(arr => [...arr]); // deep copy the grid

  const rows = currentGrid.length;
  const cols = currentGrid[0].length;

  const getNeighborCount = (row: number, col: number): number => {
    let count = 0;
    for(let dx = -1; dx <= 1; dx++) {
      for(let dy = -1; dy <= 1; dy++) {
        // Check all neighbors and count
        if(dx === 0 && dy === 0)
          continue; // Skip for the cell itself
        const x = row + dx;
        const y = col + dy;
        if(x >= 0 && x < rows && y >= 0 && y < cols && currentGrid[x][y])
          count += 1;
      }
    }
    return count;
  };

  for(let i = 0; i < rows; i++) {
    for(let j = 0; j < cols; j++) {
      const neighbors = getNeighborCount(i, j);
      if(currentGrid[i][j] && (neighbors <= 1 || neighbors >= 4)) {
        nextGrid[i][j] = false;
      } else if(!currentGrid[i][j] && neighbors === 3) {
        nextGrid[i][j] = true;
      }
    }
  }

  return nextGrid;
};