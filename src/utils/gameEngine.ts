function findConnectedSameNumbers(
  board: (number | null)[][],
  startRow: number,
  startCol: number
): [number, number][] {
  const target = board[startRow][startCol];
  if (target === null) return [];

  const visited = new Set<string>();
  const directions = [
    [0, 1],  // right
    [1, 0],  // down
    [0, -1], // left
    [-1, 0], // up
  ];

  const stack: [number, number][] = [[startRow, startCol]];
  const connected: [number, number][] = [];

  while (stack.length) {
    const [row, col] = stack.pop()!;
    const key = `${row},${col}`;

    if (
      row < 0 || col < 0 ||
      row >= board.length || col >= board[0].length ||
      visited.has(key) ||
      board[row][col] !== target
    ) continue;

    visited.add(key);
    connected.push([row, col]);

    for (const [dy, dx] of directions) {
      stack.push([row + dy, col + dx]);
    }
  }

  return connected;
}

export function mergeConnectedDice(
  board: (number | null)[][],
  row: number,
  col: number
): { board: (number | null)[][]; scoreGained: number } {
  const currentNumber = board[row][col];
  if (currentNumber === null) return { board, scoreGained: 0 };

  const connected = findConnectedSameNumbers(board, row, col);

  if (connected.length < 3) {
    return { board, scoreGained: 0 };
  }

  // 점수 계산
  const scoreGained = currentNumber * connected.length;

  // 병합
  for (const [r, c] of connected) {
    if (r === row && c === col) continue;
    board[r][c] = null;
  }
  board[row][col] = currentNumber + 1;

  // 재귀 병합
  const next = mergeConnectedDice(board, row, col);
  return {
    board: next.board,
    scoreGained: scoreGained + next.scoreGained,
  };
}
