//(function () {
//	'use strict';
//
//	angular.module('userApp').factory('NotifyInterceptor', NotifyInterceptor);
//	NotifyInterceptor.$inject = ['$q', '$injector'];


angular.module('targestApp').factory('notifyInterceptor', function($q, $injector, $filter) {

		function isJson(response) {
			return response.headers()['content-type'] === 'application/json;charset=UTF-8';
		}

		function isMessage(response){
			return response.data.success != undefined;
		}

		return {
			response: function (response) {
				if (isJson(response) && isMessage(response)) {
					var data = response.data;
					var message = data.success ? $filter('translate')('MESSAGE.SUCCESS') : $filter('translate')('MESSAGE.ERROR');

					var toastr = $injector.get('toastr');
					if(data.success) {
						toastr.success(message);
					}else{
						toastr.error(message);
					}
				}
				return response
			}
		};
	//}
});