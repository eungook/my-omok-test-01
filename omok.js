/**
 * 세로로 오목이 완성됐는지 확인
 * @param {*} board 오목판, 10x10
 * @param {*} last 마지막에 둔 곳, [y, x]
 * @param {*} color 색깔: B, W
 * @returns {Boolean} 완성 여부
 */
function isOmokVertical(board, last, color) {
  const [y, x] = last;
  let count = 1; // last에서부터 시작
  console.log({ last });

  // up
  const up = [y - 1, x];
  console.log({ up });
  while (isSameColor(board, up, color)) {
    count++;
    up[0]--;
    console.log({ up });
  }

  // down
  const down = [y + 1, x];
  console.log({ down });
  while (isSameColor(board, down, color)) {
    count++;
    down[0]++;
    console.log({ down });
  }

  const isOmok = count >= 5;
  console.log({ count });
  return isOmok;
}

/**
 * 같은 색깔인지 확인
 * @param {*} board 오목판, 10x10
 * @param {*} yx 위치, [y, x]
 * @param {*} color 색깔: B, W
 * @returns {Boolean} 같은지 여부
 */
function isSameColor(board, yx, color) {
  const isValid = isValidYX(yx);
  if (isValid == false) return false; // early return

  const [y, x] = yx;
  if (board[y][x] == color) {
    return true;
    //
  } else {
    return false;
  }
}

/**
 * 유효한 위치의 좌표인지 확인
 * @param {*} yx
 * @returns {Boolean} 유효한지 여부
 */
function isValidYX(yx) {
  const [y, x] = yx;
  if ((0 <= y && y <= 9) == false) return false; // early return
  if ((0 <= x && x <= 9) == false) return false; // early return
  return true;
}

export { isOmokVertical, isSameColor, isValidYX };
