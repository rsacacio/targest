(function() {
	'use strict';

	angular.module('targestApp').config(config);

	config.$inject = [ '$translateProvider' ];
	function config($translateProvider) {
		$translateProvider.useStaticFilesLoader({
			prefix : 'assets/targestClient/angular/i18n/',
			suffix : '.json'
		});
		$translateProvider.preferredLanguage('ptBR');
		$translateProvider.useSanitizeValueStrategy('sanitizeParameters');
	}
})();