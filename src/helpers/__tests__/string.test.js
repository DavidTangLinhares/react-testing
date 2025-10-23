import { capitalize } from '../string';

test('capitalize should handle null', () => {
  expect(capitalize(null)).toBe(null);
});

test('capitalize should handle empty string', () => {
  expect(capitalize('')).toBe(null);
});

test('capitalize should handle one letter string', () => {
  expect(capitalize('a')).toBe('A');
});

test('capitalize should work for "boris"', () => {
  expect(capitalize('boris')).toBe('Boris');
});

test('capitalize should work for "Boris"', () => {
  expect(capitalize('Boris')).toBe('Boris');
});

test('capitalize should work for "BORIS"', () => {
  expect(capitalize('BORIS')).toBe('BORIS');
});

test('capitalize should work for "bOrIs"', () => {
  expect(capitalize('bOrIs')).toBe('BOrIs');
});
