'use strict';

describe('Service: routesByAgency', function () {

  // load the service's module
  beforeEach(module('gogobusApp'));

  // instantiate service
  var routesByAgency;
  beforeEach(inject(function (_routesByAgency_) {
    routesByAgency = _routesByAgency_;
  }));

  it('should do something', function () {
    expect(!!routesByAgency).toBe(true);
  });

});
