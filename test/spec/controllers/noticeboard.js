'use strict';

describe('Controller: NoticeboardCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var NoticeboardCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NoticeboardCtrl = $controller('NoticeboardCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NoticeboardCtrl.awesomeThings.length).toBe(3);
  });
});
