(function() {
  'use strict';

  var chai = require('chai');
  var expect = chai.expect;

  var myApp = require('../app/findMinMax.js');

  describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(findMinMax([1, 2, 3, 4])).to.equal([1, 4]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(findMinMax([6, 4])).to.equal([4, 6]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).to.equal([2, 78]);
      });

       it('should return [-56, 89] for [-1, 0, 6, -56, 7, 78, 89, 68, 2]', function () {
        expect(myApp.findMinMax([-1, 0, 6, -56, 7, 78, 89, 68, 2])).to.deep.equal([-56, 89]);
      });

    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(findMinMax([4, 4, 4, 4])).to.equal([4]);
      });

       it('should return [97] for [97, 97, 97]', function () {
        expect(myApp.findMinMax([97, 97, 97])).to.deep.equal([97]);
      });

       it('should return [0] for [0, 0, 0, 0, 0]', function () {
        expect(myApp.findMinMax([0, 0, 0, 0, 0])).to.deep.equal([0]);
      });

    });

   describe('Return `invalid argument` when the number is the argument passed is not integer array', function () {

      it('should return `invalid argument` for [`4`, 19, 10, 8]', function () {
        expect(myApp.findMinMax(['4', 19, 10, 8])).to.deep.equal('invalid argument');
      });

      it('should return `invalid argument` for `andela`', function () {
        expect(myApp.findMinMax('andela')).to.deep.equal('invalid argument');
      });

       it('should return `invalid argument` for 108', function () {
        expect(myApp.findMinMax(108)).to.deep.equal('invalid argument');
      });
    });
  });

})();