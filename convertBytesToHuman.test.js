/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

import convertBytesToHuman from './convertBytesToHuman';

// для удобства определяю базовые единицы измерения в байтах
const kb = 1024;
const mb = kb * 1024;
const gb = mb * 1024;
const tb = gb * 1024;
const pb = tb * 1024;

test('Правильно конвертирует байты в килобайты', () => {
  expect(convertBytesToHuman(kb)).toBe('1 KB');
  expect(convertBytesToHuman(kb * 10)).toBe('10 KB');
});

test('Правильно конвертирует байты в мегабайты', () => {
  expect(convertBytesToHuman(mb)).toBe('1 MB');
  expect(convertBytesToHuman(mb * 117.42)).toBe('117.42 MB');
});

test('Правильно конвертирует байты в гигабайты', () => {
  expect(convertBytesToHuman(gb)).toBe('1 GB');
  expect(convertBytesToHuman(gb * 990)).toBe('990 GB');
});

test('Правильно конвертирует байты в терабайты', () => {
  expect(convertBytesToHuman(tb)).toBe('1 TB');
  expect(convertBytesToHuman(tb * 45.5)).toBe('45.5 TB');
});

test('Правильно конвертирует байты в петабайты', () => {
  expect(convertBytesToHuman(pb)).toBe('1 PB');
  expect(convertBytesToHuman(pb * 45.5)).toBe('45.5 PB');
});

test('Правильно конвертирует очень большие числа', () => {
  expect(convertBytesToHuman(pb * 999.9)).toBe('999.9 PB');
  expect(convertBytesToHuman(pb * 1888.08)).toBe('1888.08 PB');
});

test('Правильно конвертирует байты, близкие к границе перевода', () => {
  expect(convertBytesToHuman(0)).toBe('0 B');
  expect(convertBytesToHuman(kb - 1)).toBe('1 KB');
  expect(convertBytesToHuman(mb - 1)).toBe('1 MB');
  expect(convertBytesToHuman(gb - 1)).toBe('1 GB');
});

test('Правильно определяет невозможные кейсы', () => {
  expect(convertBytesToHuman(-1)).toBeFalsy();
  expect(convertBytesToHuman(-10000000000)).toBeFalsy();
  expect(convertBytesToHuman(NaN)).toBeFalsy();
  expect(convertBytesToHuman(Infinity)).toBeFalsy();
  expect(convertBytesToHuman(-Infinity)).toBeFalsy();
});

test('Правильно определяет неверный ввод', () => {
  expect(convertBytesToHuman('some string')).toBeFalsy();
  expect(convertBytesToHuman('12')).toBeFalsy();
  expect(convertBytesToHuman(null)).toBeFalsy();
  expect(convertBytesToHuman(undefined)).toBeFalsy();
});
