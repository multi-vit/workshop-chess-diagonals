export default {
  draw,
  highlight,
};

// ****************************

var diagonals = [];
var highlighted = [];

function draw(boardEl) {
  // Set up all major and minor diagonals
  for (let i = 0; i < 30; i++) {
    diagonals.push([]);
  }

  for (let i = 0; i < 8; i++) {
    let rowEl = document.createElement("div");
    for (let j = 0; j < 8; j++) {
      let tileEl = document.createElement("div");

      // Discover which two diagonals the tile belongs to
      let majorDiag = diagonals[7 - (i - j)];
      let minorDiag = diagonals[15 + (i + j)];
      // Save reference to tile into its two diagonals
      majorDiag.push(tileEl);
      minorDiag.push(tileEl);

      tileEl.dataset.row = i;
      tileEl.dataset.col = j;
      rowEl.appendChild(tileEl);
    }
    boardEl.appendChild(rowEl);
  }
}

function highlight(tileEl) {
  for (let diagonal of highlighted) {
    for (let el of diagonal) {
      el.classList.remove("highlighted");
    }
  }
  highlighted = [];

  if (tileEl) {
    let tileRowIdx = Number(tileEl.dataset.row);
    let tileColIdx = Number(tileEl.dataset.col);

    let majorDiag = diagonals[7 - (tileRowIdx - tileColIdx)];
    let minorDiag = diagonals[15 + (tileRowIdx + tileColIdx)];

    highlighted = [majorDiag, minorDiag];

    for (let diagonal of highlighted) {
      for (let el of diagonal) {
        el.classList.add("highlighted");
      }
    }
  }
}
