export default {
  draw,
  highlight,
};

// ****************************

var origBoardEl;

function draw(boardEl) {
  origBoardEl = boardEl;
  for (let i = 0; i < 8; i++) {
    let rowEl = document.createElement("div");
    for (let j = 0; j < 8; j++) {
      let tileEl = document.createElement("div");
      rowEl.appendChild(tileEl);
    }
    boardEl.appendChild(rowEl);
  }
}

function highlight(tileEl) {
  var tiles = origBoardEl.querySelectorAll("div > div");
  for (let el of tiles) {
    el.classList.remove("highlighted");
  }
  if (tileEl) {
    let rowEl = tileEl.parentNode;
    let tileRowIdx = [...origBoardEl.childNodes].findIndex((el) => el == rowEl);
    let tileColIdx = [...rowEl.childNodes].findIndex((el) => el == tileEl);
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
  return document.querySelector(
    `#board > div:nth-child(${row + 1}) > div:nth-child(${col + 1})`
  );
}
