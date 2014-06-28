'use strict';

describe('Service: stopsNearby', function () {

  // load the service's module
  beforeEach(module('gogobusApp'));

  // instantiate service
  var stopsNearby;
  beforeEach(inject(function (_stopsNearby_) {
    stopsNearby = _stopsNearby_;
  }));

  it('should do something', function () {
    expect(!!stopsNearby).toBe(true);
  });

});
