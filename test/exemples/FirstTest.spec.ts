var assert = require('assert');

describe('String', function() {
    describe('#split', function() {
      it('should return an array', function() {
        assert(Array.isArray('a,b,c'.split(',')))
      });
    });
});
