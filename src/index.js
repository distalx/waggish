var uniqueRandomArray = require ('unique-random-array');
var loadingMessages = require ('./loading-messages.json');
var getRandomItem = uniqueRandomArray(loadingMessages);

module.exports = {
  all: loadingMessages,
  random: random
}

function random(number) {
  if (number === undefined) {
    return getRandomItem();
  } else {
    return new Array(number).map(function() {
      return getRandomItem();
    });
  }
}
