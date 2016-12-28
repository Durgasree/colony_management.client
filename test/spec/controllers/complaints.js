'use strict';

describe('Controller: ComplaintsCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var ComplaintsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ComplaintsCtrl = $controller('ComplaintsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ComplaintsCtrl.awesomeThings.length).toBe(3);
  });
});
