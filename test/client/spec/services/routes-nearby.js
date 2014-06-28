'use strict';

describe('Service: routesNearby', function () {

  // load the service's module
  beforeEach(module('gogobusApp'));

  // instantiate service
  var routesNearby;
  beforeEach(inject(function (_routesNearby_) {
    routesNearby = _routesNearby_;
  }));

  it('should do something', function () {
    expect(!!routesNearby).toBe(true);
  });

});
