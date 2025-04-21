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
): (number | null)[][] {
  const currentNumber = board[row][col];
  if (currentNumber === null) return board;

  const connected = findConnectedSameNumbers(board, row, col);

  if (connected.length < 3) {
    return board;
  }

  // 병합: 중앙만 +1, 나머지는 제거
  for (const [r, c] of connected) {
    if (r === row && c === col) continue;
    board[r][c] = null;
  }
  board[row][col] = currentNumber + 1;

  // 재귀 병합: 업그레이드된 숫자로 다시 병합 시도
  return mergeConnectedDice(board, row, col);
}
