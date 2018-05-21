describe('myApp', function(){

  beforeEach(module('myApp'));

  it('Did you add $scope.promo to the controller?', inject(function($controller) {
    var scope = {},
          ctrl = $controller('MainController', {$scope:scope});

    expect(scope.title).toBeDefined();
    expect(scope.promo).toBeDefined();
  }));

});
