import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
  test('should return className with only first parameter passed', () => {
    const expected = 'class';
    expect(classNames('class')).toBe(expected);
  });

  test('should return className with additional parameters passed', () => {
    const expected = 'class class2 class3';
    expect(classNames('class', {}, ['class2', 'class3'])).toBe(expected);
  });

  test('should return className with mods passed', () => {
    const expected = 'class hovered';
    expect(classNames('class', { hovered: true, active: false }, [])).toBe(expected);
  });

  test('should return className with one of mods is undefined', () => {
    const expected = 'class hovered';
    expect(classNames('class', { hovered: true, active: undefined }, [])).toBe(expected);
  });
});
