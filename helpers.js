// Capitalize word
const capitalizeWord = (word) => {
  const firstLetter = word.charAt(0).toUpperCase();
  const restWord = word.slice(1).toLowerCase();
  return firstLetter + restWord;
};

module.exports = { capitalizeWord };
