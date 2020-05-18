const isAbove = require('./isAbove');

describe('isAbove', () => {
  test('7 is above 3', () => {
    expect(isAbove(7, 3)).toBeTruthy();
  });

  test('7 is nor above 7', () => {
    expect(isAbove(7, 7)).toBeFalsy();
  });

  test('7 is not above 10', () => {
    expect(isAbove(7, 10)).toBeFalsy();
  });
});
