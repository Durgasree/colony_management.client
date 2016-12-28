'use strict';

describe('Service: notices', function () {

  // load the service's module
  beforeEach(module('clientApp'));

  // instantiate service
  var notices;
  beforeEach(inject(function (_notices_) {
    notices = _notices_;
  }));

  it('should do something', function () {
    expect(!!notices).toBe(true);
  });

});
