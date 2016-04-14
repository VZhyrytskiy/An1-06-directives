(function() {
	"use strict";

	angular
		.module("app")
		.factory("productsData", productsData);

	function productsData() {
		var data = [
			{"name": "Apples", "category": "Fruit", "price": 1.20, "expiry": 10},
			{"name": "Bananas", "category": "Fruit", "price": 2.42, "expiry": 7},
			{"name": "Pears", "category": "Fruit", "price": 2.02, "expiry": 6}
		];

		return {
			data: data,
			incrementPrices: incrementPrices
		};

		function incrementPrices() {
			angular.forEach(data, function(product) {
				product.price++;
				console.log(product.price);
			});
		
		}
	}

})();