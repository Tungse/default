angular.module('testApp', []).controller('ArticlesCtrl', function($scope)
{
	$scope.articles = 
	[
		{ id: 1, name: "Vegetaria", price: 5 },
		{ id: 2, name: "Salami",    price: 5 },
		{ id: 3, name: "Thunfisch", price: 6 }
	];
});