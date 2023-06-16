/**
 * Removes all whitespace characters from the given string.
 * @param {string} text - The string to remove whitespace from.
 * @returns {string} - The string without any whitespace characters.
 */
export const RemoveSpace = (text: string): string => text.replace(/\s/g, '');
