(function() {
	"use strict";

	angular
		.module("app")
		.controller("Default", Default);

	Default.$inject = ["$scope", "productsData", "userData"];

	function Default($scope, productsData, userData) {
		$scope.products = productsData.data;
		$scope.incrementPrices = productsData.incrementPrices;

		$scope.user = userData.data;
		$scope.getCity = userData.getCity;

		$scope.dataSource = "controller";
	}

})();