angular.module('targestApp').factory('TargestHttp', function($http, GlobalHolder, $stateParams) {
	var methods = {};
	
	methods.get = function(url, data) {
		return $http.get(url, addRequiredParams(data));
	}

	methods.getWithoutSpinner = function(url, data) {
		var dt = addRequiredParams(data);
		hideSpinner(dt)
		return $http.get(url, dt);
	}
	
	methods.post = function(url, data) {
		return $http.post(url, addRequiredParams(data));
	}

	methods.delete = function(url, data){
		return $http.delete(url, addRequiredParams(data));
	}

	methods.postCommand = function(url, data) {
		data.idCripto = $stateParams.id;
		return $http.post(url, data);
	}
	
	function addRequiredParams(data) {
		if (data == undefined) data = {}
		var newParams = angular.extend({
			idCripto: $stateParams.id,
		}, data.params);
		data.params = newParams;
		return data;
	}

	function hideSpinner(data) {
		if (data == undefined) {
			data = {}
		}

		data.hideSpinner = true;
	}
	
	return methods;
});