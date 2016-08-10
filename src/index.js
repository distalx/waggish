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
    var randomItems = [];
    for (var i = 0; i < number; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
}
