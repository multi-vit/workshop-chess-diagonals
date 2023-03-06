export default {
  draw,
  highlight,
};

// ****************************

var tiles = [];

function draw(boardEl) {
  for (let i = 0; i < 8; i++) {
    let rowEl = document.createElement("div");
    let rowTiles = [];
    tiles.push(rowTiles);
    for (let j = 0; j < 8; j++) {
      let tileEl = document.createElement("div");
      tileEl.dataset.row = i;
      tileEl.dataset.col = j;
      rowEl.appendChild(tileEl);
      rowTiles.push(tileEl);
    }
    boardEl.appendChild(rowEl);
  }
}

function highlight(tileEl) {
  for (let row of tiles) {
    for (let el of row) {
      el.classList.remove("highlighted");
    }
  }
  if (tileEl) {
    let tileRowIdx = tileEl.dataset.row;
    let tileColIdx = tileEl.dataset.col;
    // Traversing major diagonal, upward and leftward
    for (let i = tileRowIdx, j = tileColIdx; i >= 0 && j >= 0; i--, j--) {
      let el = findTile(i, j);
      el.classList.add("highlighted");
    }
    // Traversing major diagonal, downward and rightward
    for (let i = tileRowIdx, j = tileColIdx; i <= 7 && j <= 7; i++, j++) {
      let el = findTile(i, j);
      el.classList.add("highlighted");
    }
    // Traversing minor diagonal, upward and rightward
    for (let i = tileRowIdx, j = tileColIdx; i >= 0 && j <= 7; i--, j++) {
      let el = findTile(i, j);
      el.classList.add("highlighted");
    }
    // Traversing minor diagonal, downward and leftward
    for (let i = tileRowIdx, j = tileColIdx; i <= 7 && j >= 0; i++, j--) {
      let el = findTile(i, j);
      el.classList.add("highlighted");
    }
  }
}

function findTile(row, col) {
  return tiles[row][col];
}
