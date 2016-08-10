var uniqueRandomArray = require ('unique-random-array');
var loadingMessages = require ('./loading-messages.json');
module.exports = {
  all: loadingMessages,
  random: uniqueRandomArray(loadingMessages)
}
