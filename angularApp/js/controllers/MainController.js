app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'Top Sellers in Books'; 
  $scope.promo = 'Top Buyers in Books';
  $scope.product = {
    name: 'The Book of Trees',
    price: 19,
    pubdate: new Date('2014', '03', '08')
  }
}]);
/*In MainController.js we created a new controller named MainController. A controller manages the app's data. 
Here we use the property title to store a string, and attach it to $scope.*/