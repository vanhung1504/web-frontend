"use strict";

let matrix = 10;
let numPointWin = 5;
let firstPlay = false;
let currPlay = firstPlay;
// Run code after load page
$(function () {
  displayTurn(currPlay);
  createGrid(matrix, matrix);
  handlerCreateGrid();
  handlerReplay();
});

// Cac function chuc nang
function createElement(tagName, attributes, ...child) {
  const tag = document.createElement(tagName);
  Object.assign(tag, attributes);
  tag.append(...child);
  return tag;
}

function handlerCreateGrid() {
  const $btnSave = $(".btn.btn-save");
  $btnSave.on("click", function (e) {
    const result = confirm("Bạn muốn lưu cài đặt và bắt đầu chơi?");

    if (result) {
      const $matrix = $("#matrix");
      if ($matrix.val() === "") $matrix.val("10");
      matrix = Number($matrix.val());

      const $numPoint = $("#num-point");
      if ($numPoint.val() === "") $numPoint.val("5");
      numPointWin = Number($numPoint.val());

      const $firstPlay = $("#first-play");
      firstPlay = Boolean(Number($firstPlay.val()));
      currPlay = firstPlay;

      displayTurn(currPlay);
      createGrid(matrix, matrix);
    }
  });
}

function handlerReplay() {
  const $btnRelay = $(".btn.btn-re-play");
  $btnRelay.on("click", function (e) {
    const result = confirm("Bạn muốn chơi lại?");
    if (result) {
      currPlay = firstPlay;
      displayTurn(firstPlay);
      createGrid(matrix, matrix);
    }
  });
}

function createGrid(row, col) {
  const tbBody = createElement("tbody", { id: "board" });
  for (let i = 1; i <= row; ++i) {
    const tRow = createElement("tr", {});
    for (let j = 1; j <= col; ++j) {
      const td = createElement("td", {
        id: `${i}-${j}`,
      });
      tRow.append(td);
    }
    tbBody.append(tRow);
  }
  const $tableGrid = $("#root .container table");
  $tableGrid.html(tbBody);
  // Add event click
  const $allCell = $("#board td");
  $($allCell).on("click", function () {
    if ($(this).text() === "") {
      handlerClickCell(this);
    }
  });
}

function displayTurn(value) {
  const $turn = $(".turn b");
  if (value) {
    $turn.text("X");
  } else {
    $turn.text("O");
  }
}

function handlerClickCell(cell) {
  // Khoi tao cac gia tri
  let currValue;
  if (currPlay) {
    currValue = "X";
  } else {
    currValue = "O";
  }
  let maxRow = matrix;
  let maxCol = matrix;
  let numPoint = numPointWin;
  let result = false;

  // Style
  $(cell).text(currValue);
  $(cell).addClass(currValue);
  $(cell).css("transform", "rotateY(0deg)");

  // Lay gia tri row va column
  const currCoordinates = $(cell).attr("id").split("-");
  const currRow = Number(currCoordinates[0]);
  const currCol = Number(currCoordinates[1]);
  let tempArr = [];

  // Check chieu ngang va chieu doc
  let startRow = currRow - numPoint + 1;
  if (startRow <= 0) startRow = 1;

  let endRow = currRow + numPoint - 1;
  if (endRow >= maxRow) endRow = maxRow;

  let startCol = currCol - numPoint + 1;
  if (startCol <= 0) startCol = 1;

  let endCol = currCol + numPoint - 1;
  if (endCol >= maxCol) endCol = maxCol;

  let index;
  // Check chieu ngang
  tempArr.length = 0;
  for (let i = startCol; i <= endCol; ++i) {
    tempArr.push($(`#${currRow}-${i}`).text());
  }
  if (isAllItemArrIsChar(tempArr, currValue, numPoint)) {
    result = true;

    index = currCol;
    while ($(`#${currRow}-${index}`).text() == currValue) {
      $(`#${currRow}-${index}`).addClass(currValue + "-Win");
      --index;
    }

    index = currCol + 1;
    while ($(`#${currRow}-${index}`).text() == currValue) {
      $(`#${currRow}-${index}`).addClass(currValue + "-Win");
      ++index;
    }
  }

  // Check chieu doc
  tempArr.length = 0;
  for (let i = startRow; i <= endRow; ++i) {
    tempArr.push($(`#${i}-${currCol}`).text());
  }
  if (isAllItemArrIsChar(tempArr, currValue, numPoint)) {
    result = true;

    index = currRow;
    while ($(`#${index}-${currCol}`).text() == currValue) {
      $(`#${index}-${currCol}`).addClass(currValue + "-Win");
      --index;
    }

    index = currRow + 1;
    while ($(`#${index}-${currCol}`).text() == currValue) {
      $(`#${index}-${currCol}`).addClass(currValue + "-Win");
      ++index;
    }
  }

  let indexRow;
  let indexCol;
  // Check chieu cheo tren-trai => duoi-phai
  let count;

  startRow = currRow;
  startCol = currCol;
  count = 1;
  while (startRow > 1 && startCol > 1) {
    ++count;
    --startRow;
    --startCol;
    if (count > numPoint - 1) break;
  }

  endRow = currRow;
  endCol = currCol;
  count = 1;
  while (endRow < maxRow && endCol < maxCol) {
    ++count;
    ++endRow;
    ++endCol;
    if (count > numPoint - 1) break;
  }

  tempArr.length = 0;
  for (let i = startRow; i <= endRow; ++i) {
    tempArr.push($(`#${i}-${startCol + i - startRow}`).text());
  }
  if (isAllItemArrIsChar(tempArr, currValue, numPoint)) {
    result = true;

    indexRow = currRow;
    indexCol = currCol;
    while ($(`#${indexRow}-${indexCol}`).text() == currValue) {
      $(`#${indexRow}-${indexCol}`).addClass(currValue + "-Win");
      --indexRow;
      --indexCol;
    }

    indexRow = currRow + 1;
    indexCol = currCol + 1;
    while ($(`#${indexRow}-${indexCol}`).text() == currValue) {
      $(`#${indexRow}-${indexCol}`).addClass(currValue + "-Win");
      ++indexRow;
      ++indexCol;
    }
  }

  // Check chieu cheo duoi-trai => tren-phai
  startRow = currRow;
  startCol = currCol;
  count = 1;
  while (startRow < maxRow && startCol > 1) {
    ++count;
    ++startRow;
    --startCol;
    if (count > numPoint - 1) break;
  }

  endRow = currRow;
  endCol = currCol;
  count = 1;
  while (endRow > 1 && endCol < maxCol) {
    ++count;
    --endRow;
    ++endCol;
    if (count > numPoint - 1) break;
  }

  tempArr.length = 0;
  for (let i = startRow; i >= endRow; --i) {
    tempArr.push($(`#${i}-${startCol - i + startRow}`).text());
  }
  if (isAllItemArrIsChar(tempArr, currValue, numPoint)) {
    result = true;

    indexRow = currRow;
    indexCol = currCol;
    while ($(`#${indexRow}-${indexCol}`).text() == currValue) {
      $(`#${indexRow}-${indexCol}`).addClass(currValue + "-Win");
      ++indexRow;
      --indexCol;
    }

    indexRow = currRow - 1;
    indexCol = currCol + 1;
    while ($(`#${indexRow}-${indexCol}`).text() == currValue) {
      $(`#${indexRow}-${indexCol}`).addClass(currValue + "-Win");
      --indexRow;
      ++indexCol;
    }
  }
  // Change turn
  currPlay = !currPlay;
  displayTurn(currPlay);
  // Check ket qua
  if (result) {
    const $allCell = $("#board td");
    $($allCell).off();
    setTimeout(function () {
      alert(`${currPlay ? "O" : "X"} đã thắng!`);
    }, 500);
  } else {
    const allCellArr = Array.from($("#board td"));
    let checkEmpty = allCellArr.filter((cell) => {
      return $(cell).text() === "";
    }).length;

    if (checkEmpty === 0) {
      setTimeout(function () {
        alert(`X và O hòa nhau!`);
      }, 250);
    }
  }
}

function isAllItemArrIsChar(arr, char, numPoint) {
  let tempArr;
  for (let i = 0; i <= arr.length - numPoint; ++i) {
    tempArr = arr.slice(i, i + numPoint);
    let isSame = true;
    for (let j = 0; j < tempArr.length; ++j) {
      if (tempArr[j] != char) {
        isSame = false;
        break;
      }
    }
    if (isSame) return true;
  }
  return false;
}
