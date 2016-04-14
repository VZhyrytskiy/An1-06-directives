(function() {
	"use strict";

	angular
		.module("app")
		.controller("Greeting", Greeting);

	Greeting.$inject = ["$scope"];

	function Greeting($scope) {
		$scope.sayHello = function() {
			alert("Hello");
		}
	}

})();