// Capitalize first letter
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

// Capitalize word
const capitalizeWord = (word) => {
  const firstLetter = word.charAt(0).toUpperCase();
  const restWord = word.slice(1).toLowerCase();
  return firstLetter + restWord;
};



module.exports = { capitalizeWord, capitalizeFirstLetter };
