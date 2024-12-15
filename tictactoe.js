document.addEventListener("DOMContentLoaded", () => {
  const gameBoard = document.getElementById("game-board");
  const status = document.getElementById("status");
  const resetButton = document.getElementById("reset");

  let currentPlayer = "X";
  let board = Array(9).fill(null);
  let gameOver = false;

  // Makes the celsl
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.index = i;
    gameBoard.appendChild(cell);

    cell.addEventListener("click", () => {
      if (!gameOver && !board[i]) {
        board[i] = currentPlayer;
        cell.textContent = currentPlayer;
        cell.classList.add("taken");

        if (checkWinner(currentPlayer)) {
          status.textContent = `Player ${currentPlayer} wins!`;
          gameOver = true;
        } else if (board.every((cell) => cell)) {
          status.textContent = "It's a tie!";
          gameOver = true;
        } else {
          currentPlayer = currentPlayer === "X" ? "O" : "X";
          status.textContent = `Player ${currentPlayer}'s turn`;
        }
      }
    });
  }

  // Resets game
  resetButton.addEventListener("click", () => {
    board = Array(9).fill(null);
    gameOver = false;
    currentPlayer = "X";
    status.textContent = `Player X's turn`;
    Array.from(gameBoard.children).forEach((cell) => {
      cell.textContent = "";
      cell.classList.remove("taken");
    });
  });

  // Check for possible winner
  function checkWinner(player) {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    return winningCombos.some((combo) =>
      combo.every((index) => board[index] === player)
    );
  }
});
