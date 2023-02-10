var board = [  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

var turn = "X";

var cells = document.querySelectorAll("td");
for (var i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", cellClicked);
}

function cellClicked() {
  var x = this.parentNode.rowIndex;
  var y = this.cellIndex;
  if (board[x][y] == "") {
    board[x][y] = turn;
    this.innerHTML = turn;
    this.classList.add(turn);
    if (checkWin(turn)) {
      alert(turn + " wins!");
    } else if (checkDraw()) {
      alert("Draw!");
    } else {
      turn = turn == "X" ? "O" : "X";
    }
  }
}

function checkWin(player) {
  for (var i = 0; i < 3; i++) {
    if (
      board[i][0] == player &&
      board[i][1] == player &&
      board[i][2] == player
    ) {
      return true;
    }
    if (
      board[0][i] == player &&
      board[1][i] == player &&
      board[2][i] == player
    ) {
      return true;
    }
  }
  if (board[0][0] == player && board[1][1] == player && board[2][2] == player) {
    return true;
  }
  if (board[0][2] == player && board[1][1] == player && board[2][0] == player) {
    return true;
  }
  return false;
}

function checkDraw() {
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (board[i][j] == "") {
        return false;
      }
    }
  }
  return true;
}
