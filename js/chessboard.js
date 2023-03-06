export default {
  draw,
  highlight,
};

// ****************************

var diagonals = [];
var highlighted = [];
var tileDiagonals = new Map();

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
      // Store reference from tile to its two diagonals
      tileDiagonals.set(tileEl, [majorDiag, minorDiag]);
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
    // Retrieve diagonal tuple from tileDiagonals map using the tileElement key
    highlighted = tileDiagonals.get(tileEl);
    // Iterate through diagonals to highlight relevant tiles
    for (let diagonal of highlighted) {
      for (let el of diagonal) {
        el.classList.add("highlighted");
      }
    }
  }
}
