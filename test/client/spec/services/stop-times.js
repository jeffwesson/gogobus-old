'use strict';

describe('Service: stopTimes', function () {

  // load the service's module
  beforeEach(module('gogobusApp'));

  // instantiate service
  var stopTimes;
  beforeEach(inject(function (_stopTimes_) {
    stopTimes = _stopTimes_;
  }));

  it('should do something', function () {
    expect(!!stopTimes).toBe(true);
  });

});
