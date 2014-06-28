'use strict';

describe('Service: stopsByRoute', function () {

  // load the service's module
  beforeEach(module('gogobusApp'));

  // instantiate service
  var stopsByRoute;
  beforeEach(inject(function (_stopsByRoute_) {
    stopsByRoute = _stopsByRoute_;
  }));

  it('should do something', function () {
    expect(!!stopsByRoute).toBe(true);
  });

});
