# Learning

- Optimisation isn't just about going faster, as this can use more memory.

- CSS index is 1 based, not 0 based

- Consider saving custom meta information, such as indexes, on the dataset of HTML elements to save re-querying - in this case saving indexes on each Tile's dataset as they already tell us the row and column of the tile (due to the iteration)

- Dataset always stores information as a string - so we had to convert row and column indexes back to Numbers before doing mathematical operations

- Option 3 uses a 2d array - an array of arrays of each row of tiles that mirrors the DOM using references to each tile on the DOM

- Option 4 refactors our thinking of the data structure from row/column (x, y) to major/minor diagonals (0-14, 15-29). It's a similar relation - e.g. (4,2) in row/column index is (5,21) in diagonals so need to use a calculation to modify to this so when we use diagonal arrays, we know which array to push to. For major diagonal, the formula is 7 - (row - col). For minor diagonal, the formula is 15 + (row + col). e.g. 7 - (4-2) = 5 and 15 + (4+2) = 21
