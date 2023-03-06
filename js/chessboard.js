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
  }
}
