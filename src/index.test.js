var expect = require ('chai').expect;
var waggish = require ('./index.js');

describe('loading-messages',function(){

  describe('all',function(){
    it('should be array of strings',function(){
      expect(waggish.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array){

        return array.every(function(item){
          return typeof item === 'string';
        })

      }

    });
  });

  describe('random',function(){
    it('should return a random item from waggish.all',function(){

      var randomItem = waggish.random();
      expect(waggish.all).to.include(randomItem);

    });

    it('should return an array of random items if passed a number', function() {
      var randomItems = waggish.random(4);
      expect(randomItems).to.have.length(4);
      randomItems.forEach(function(item) {
        expect(waggish.all).to.include(item);
      });
    });
    
  });


});
