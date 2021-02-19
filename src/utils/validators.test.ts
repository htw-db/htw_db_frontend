import { onlyLettersAndNumbers } from './validators';

describe('onlyLettersAndNumbers', () => {
  test('only numbers should return true', () => {
    const actual = onlyLettersAndNumbers('1234567890');
    expect(actual).toBeTruthy();
  });
  test('only letters should return true', () => {
    const actual = onlyLettersAndNumbers('abcyxz');
    expect(actual).toBeTruthy();
  });
  test('only letters and numbers should return true', () => {
    const actual = onlyLettersAndNumbers('1234567890abcyxz');
    expect(actual).toBeTruthy();
  });
  test('illegal character should return false', () => {
    const actual = onlyLettersAndNumbers('!abc');
    expect(actual).toBeFalsy();
  });
  test('empty space should return false', () => {
    const actual = onlyLettersAndNumbers(' abc');
    expect(actual).toBeFalsy();
  });
});
