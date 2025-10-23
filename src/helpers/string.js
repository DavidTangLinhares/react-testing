export function capitalize(word) {
  if (typeof word !== 'string' || word.length === 0 || word === null) {
    return null;
  }

  return word.charAt(0).toUpperCase() + word.slice(1);
}
