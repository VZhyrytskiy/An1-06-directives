(function() {
	"use strict";

	angular
		.module("app")
		.factory("userData", userData);

	function userData() {

		var data = { 
			name: "Vitaliy", 
			city: "Kyiv" 
		};

		return {
			data: data,
			getCity: getCity
		};

		function getCity(name) {
			return name == "Vitaliy" ? "Kiev" : "Unknown";
		}
	}

})();