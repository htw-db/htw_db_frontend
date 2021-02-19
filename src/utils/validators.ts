/**
 * Checks if text contains only letters and numbers
 * @param text
 * @returns true if success
 */
export const onlyLettersAndNumbers = (text: string): boolean =>
  text.match('^[A-Za-z0-9]+$') !== null;
