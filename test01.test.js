/**
 * 오목 됐는지 검증 로직 짜보기
 */
import {
  isOmokVertical,
  isOmokHorizontal,
  isOmokSlash,
  isOmokBackslash,
  isSameColor,
  isValidYX,
} from './omok';

describe('test01.test.js', () => {
  it('verticalTest01()', () => {
    const isOmok = verticalTest01();
    expect(isOmok).toBe(true);
  });

  it('horizontalTest01()', () => {
    const isOmok = horizontalTest01();
    expect(isOmok).toBe(true);
  });

  it('slashTest01()', () => {
    const isOmok = slashTest01();
    expect(isOmok).toBe(true);
  });

  it('backslashTest01()', () => {
    const isOmok = backslashTest01();
    expect(isOmok).toBe(true);
  });
});

/**
 * 오목판, 10x10
 */
const board = [
  // 0 . 1 .. 2 .. 3 .. 4 .. 5 .. 6 .. 7 .. 8 .. 9 ..
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'], // 0
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'], // 1
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'], // 2
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'], // 3
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'], // 4
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'], // 5
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'], // 6
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'], // 7
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'], // 8
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'], // 9
];

/**
 * 마지막에 둔 곳, [y, x]
 */
const last = [0, 0]; // y, x

/**
 * 색깔: B, W
 */
const color = '';

function verticalTest01() {
  /**
   * 오목판, 10x10
   */
  const board = [
    // 0 . 1 .. 2 .. 3 .. 4 .. 5 .. 6 .. 7 .. 8 .. 9 ..
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'], // 0
    ['.', '.', '.', '.', 'W', '.', '.', '.', '.', '.'], // 1
    ['.', '.', '.', '.', 'W', '.', '.', '.', '.', '.'], // 2
    ['.', '.', '.', '.', 'W', '.', '.', '.', '.', '.'], // 3
    ['.', '.', '.', '.', 'W', '.', '.', '.', '.', '.'], // 4
    ['.', '.', '.', '.', 'W', '.', '.', '.', '.', '.'], // 5
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'], // 6
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'], // 7
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'], // 8
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'], // 9
  ];

  /**
   * 마지막에 둔 곳, [y, x]
   */
  const last = [5, 4]; // y, x
  /**
   * 색깔: B, W
   */
  const color = 'W';

  const isOmok = isOmokVertical(board, last, color);
  console.log({ isOmok });
  return isOmok;
}

function horizontalTest01() {
  /**
   * 오목판, 10x10
   */
  const board = [
    // 0 . 1 .. 2 .. 3 .. 4 .. 5 .. 6 .. 7 .. 8 .. 9 ..
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'], // 0
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'], // 1
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'], // 2
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'], // 3
    ['W', 'W', 'W', 'W', 'W', '.', '.', '.', '.', '.'], // 4
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'], // 5
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'], // 6
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'], // 7
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'], // 8
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'], // 9
  ];

  /**
   * 마지막에 둔 곳, [y, x]
   */
  const last = [4, 0]; // y, x

  /**
   * 색깔: B, W
   */
  const color = 'W';

  const isOmok = isOmokHorizontal(board, last, color);
  console.log({ isOmok });
  return isOmok;
}

function slashTest01() {
  /**
   * 오목판, 10x10
   */
  const board = [
    // 0 . 1 .. 2 .. 3 .. 4 .. 5 .. 6 .. 7 .. 8 .. 9 ..
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'], // 0
    ['.', '.', '.', '.', '.', 'W', '.', '.', '.', '.'], // 1
    ['.', '.', '.', '.', 'W', '.', '.', '.', '.', '.'], // 2
    ['.', '.', '.', 'W', '.', '.', '.', '.', '.', '.'], // 3
    ['.', '.', 'W', '.', '.', '.', '.', '.', '.', '.'], // 4
    ['.', 'W', '.', '.', '.', '.', '.', '.', '.', '.'], // 5
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'], // 6
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'], // 7
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'], // 8
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'], // 9
  ];

  /**
   * 마지막에 둔 곳, [y, x]
   */
  const last = [2, 4]; // y, x

  /**
   * 색깔: B, W
   */
  const color = 'W';

  const isOmok = isOmokSlash(board, last, color);
  console.log({ isOmok });
  return isOmok;
}

function backslashTest01() {
  /**
   * 오목판, 10x10
   */
  const board = [
    // 0 . 1 .. 2 .. 3 .. 4 .. 5 .. 6 .. 7 .. 8 .. 9 ..
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'], // 0
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'], // 1
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'], // 2
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'], // 3
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'], // 4
    ['.', '.', '.', '.', 'W', '.', '.', '.', '.', '.'], // 5
    ['.', '.', '.', '.', '.', 'W', '.', '.', '.', '.'], // 6
    ['.', '.', '.', '.', '.', '.', 'W', '.', '.', '.'], // 7
    ['.', '.', '.', '.', '.', '.', '.', 'W', '.', '.'], // 8
    ['.', '.', '.', '.', '.', '.', '.', '.', 'W', '.'], // 9
  ];

  /**
   * 마지막에 둔 곳, [y, x]
   */
  const last = [8, 7]; // y, x

  /**
   * 색깔: B, W
   */
  const color = 'W';

  const isOmok = isOmokBackslash(board, last, color);
  console.log({ isOmok });
  return isOmok;
}
