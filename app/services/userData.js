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
			data,
			getCity
		};

		function getCity(name) {
			console.log(name);
			return name == "Vitaliy" ? "Kiev" : "Unknown";
		}
	}

})();
