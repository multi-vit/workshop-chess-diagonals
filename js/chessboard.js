export default {
  draw,
  highlight,
};

// ****************************

var tiles;

function draw(boardEl) {
  for (let i = 0; i < 8; i++) {
    let rowEl = document.createElement("div");
    for (let j = 0; j < 8; j++) {
      let tileEl = document.createElement("div");
      rowEl.appendChild(tileEl);
    }
    boardEl.appendChild(rowEl);
  }
  tiles = boardEl.querySelectorAll("div > div");
}

function highlight(tileEl) {
  for (let el of tiles) {
    el.classList.remove("highlighted");
  }
  if (tileEl) {
    let rowEl = tileEl.parentNode;
    let boardEl = rowEl.parentNode;
    let tileRowIdx = [...boardEl.childNodes].findIndex((el) => el == rowEl);
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
