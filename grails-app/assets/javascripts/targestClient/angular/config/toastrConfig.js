(function() {
	'use strict';

	angular.module('targestApp').config(config);

	config.$inject = [ 'toastrConfig' ];
	function config(toastrConfig) {
		angular.extend(toastrConfig, {
			autoDismiss: false,
			progressBar: true,
			containerId: 'toast-container',
			maxOpened: 0,
			newestOnTop: true,
			positionClass: 'toast-top-right',
			preventDuplicates: false,
			preventOpenDuplicates: false,
			target: 'body'
		});
	}
})();