var angular = require('angular');
var test = require('./modules/test.js');

console.log(test.sayHelloInEnglish());
console.log(test.sayHelloInSpanish());

angular.module('testApp', []).controller('ArticlesCtrl', function($scope)
{
	$scope.articles = 
	[
		{ id: 1, name: "Test Vegetaria", price: 5 },
		{ id: 2, name: "Test Salami",    price: 5 },
		{ id: 3, name: "Test Thunfisch", price: 6 }
	];
});