"use strict"

const removeCharactersFromLineFirst = (string, ...arrRemovingLetters) => {
  let result = string.toLowerCase();
  arrRemovingLetters.forEach((item) => {
    result = result.replace(new RegExp(item, 'g'), '');
  });
  return result;
}
console.log(removeCharactersFromLineFirst('hello world', 'l', 'd'))

const removeCharactersFromLineSecond = (string, ...arrRemovingLetters) => {
  let result = ''
  for (let i = 0; i < string.length; i++) {
    if (!arrRemovingLetters.includes(string[i])) {
      result += string[i].toLowerCase();
    }
  }
    return result
}
console.log(removeCharactersFromLineSecond('hello world', 'l', 'd'))