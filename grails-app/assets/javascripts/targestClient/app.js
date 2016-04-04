

var module = angular.module('targestApp', [ 'ui.router', 'ngSanitize', 'ngCookies', 'ngAnimate', 'angularSpinners', 'pascalprecht.translate', 'angularModalService', 'angularScreenfull', 'oitozero.ngSweetAlert', 'ui.select', 'daterangepicker', 'ui.sortable', 'toastr', 'summernote']);

module.value('redirectToUrlAfterLogin', {url: '/'});

module.run(function($rootScope, $location, GlobalHolder, $http, AuthenticationFactory, $document, $state, $translate) {
    var routeChangeStart = $rootScope.$on('$locationChangeSuccess', function(evt) {
        evt.preventDefault();
        if (AuthenticationFactory.isAuthenticated()) {
            if (!GlobalHolder.initialized()) {
                var params = {
                    host: $location.protocol() + '://' + $location.host()
                };
                GlobalHolder.init(params);
            } else {
                if($location.$$path === '/'){
                    $state.go('/dashboard');
                }
            }
        } else if($location.$$path.indexOf('public') < 0){
            AuthenticationFactory.saveAttemptUrl();
            $state.go('login');
        }
    });
    $rootScope.$on('$destroy', routeChangeStart);

    $translate.use('ptBR');
});
