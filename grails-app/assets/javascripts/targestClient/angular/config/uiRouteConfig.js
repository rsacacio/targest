(function () {
    'use strict';

    angular.module('targestApp').config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
    function config($stateProvider, $urlRouterProvider, $locationProvider) {

        $stateProvider
            .state(
                'login',
                {
                    url: '/login',
                    views: {
                        'master': {
                            templateUrl: 'assets/targestClient/partials/public/login/login.html',
                            controller : 'LoginController as LoginCtrl'
                        }
                    }
                })
            .state(
                'forget',
                {
                    url: '/public/forget',
                    views: {
                        'master': {
                            templateUrl: 'assets/targestClient/partials/public/forget/forget.html',
                            controller : 'ForgetController as ForgetCtrl'
                        }
                    }
                }
            )
            .state(
                'choose',
                {
                    url: '/choose',
                    views: {
                        'master': {
                            templateUrl: 'assets/targestClient/partials/private/choose/choose.html',
                            controller : 'ChooseController as ChooseCtrl'
                        }
                    }
                })
            .state(
                'private',
                {
                    views: {
                        'master': {
                            templateUrl: 'assets/targestClient/partials/private/home/home.html',
                            controller : 'HomeController as HomeCtrl'
                        }
                    }
                })
            .state(
                'company',
                {
                    url: '/:id/company',
                    views: {
                        'master': {
                            templateUrl: 'assets/targestClient/partials/private/company/company.html',
                            controller : 'CompanyController as CompanyCtrl'
                        }
                    }
                })
            .state(
                'company.dashboard',
                {
                    url: '/dashboard',
                    views: {
                        'viewCompany': {
                            templateUrl: 'assets/targestClient/partials/private/company/dashboard/dashboardCompany.html',
                            controller : 'DashboardCompanyController as DashboardCompanyCtrl'
                        }
                    }
                })
            .state(
                'company.stores',
                {
                    url: '/stores',
                    views: {
                        'viewCompany': {
                            templateUrl: 'assets/targestClient/partials/private/company/stores/stores.html',
                            controller : 'StoresController as StoresCtrl'
                        }
                    }
                })
            .state(
                'company.stores.list',
                {
                    url: '/list',
                    views: {
                        'viewStores': {
                            templateUrl: 'assets/targestClient/partials/private/company/stores/storesList.html',
                            controller : 'StoresListController as StoresListCtrl'
                        }
                    }
                })
            .state(
                'company.stores.add',
                {
                    url: '/add',
                    views: {
                        'viewStores': {
                            templateUrl: 'assets/targestClient/partials/private/company/stores/storesAdd.html',
                            controller : 'StoresAddController as StoresAddCtrl'
                        }
                    }
                })
            .state(
                'company.stores.edit',
                {
                    url: '/edit/:storeId',
                    views: {
                        'viewStores': {
                            templateUrl: 'assets/targestClient/partials/private/company/stores/storesEdit.html',
                            controller : 'StoresEditController as StoresEditCtrl'
                        }
                    }
                })
            .state(
                'company.stores.view',
                {
                    url: '/:storeId',
                    views: {
                        'viewStores': {
                            templateUrl: 'assets/targestClient/partials/private/company/stores/storesView.html',
                            controller : 'StoresViewController as StoresViewCtrl'
                        }
                    }
                })
            .state(
                'company.ticketType',
                {
                    url: '/ticketType',
                    views: {
                        'viewCompany': {
                            templateUrl: 'assets/targestClient/partials/private/company/ticketType/ticketType.html',
                            controller : 'TicketTypeController as TicketTypeCtrl'
                        }
                    }
                })
            .state(
                'company.ticketType.list',
                {
                    url: '/list',
                    views: {
                        'viewTicketType': {
                            templateUrl: 'assets/targestClient/partials/private/company/ticketType/ticketTypeList.html',
                            controller : 'TicketTypeListController as TicketTypeListCtrl'
                        }
                    }
                })
            .state(
                'company.ticketType.add',
                {
                    url: '/add',
                    views: {
                        'viewTicketType': {
                            templateUrl: 'assets/targestClient/partials/private/company/ticketType/ticketTypeAdd.html',
                            controller : 'TicketTypeAddController as TicketTypeAddCtrl'
                        }
                    }
                })
            .state(
                'company.ticketType.edit',
                {
                    url: '/edit/:ticketTypeId',
                    views: {
                        'viewTicketType': {
                            templateUrl: 'assets/targestClient/partials/private/company/ticketType/ticketTypeEdit.html',
                            controller : 'TicketTypeEditController as TicketTypeEditCtrl'
                        }
                    }
                })
            .state(
                'company.ticketType.view',
                {
                    url: '/:ticketTypeId',
                    views: {
                        'viewTicketType': {
                            templateUrl: 'assets/targestClient/partials/private/company/ticketType/ticketTypeView.html',
                            controller : 'TicketTypeViewController as TicketTypeViewCtrl'
                        }
                    }
                })
            .state(
                'company.categories',
                {
                    url: '/categories',
                    views: {
                        'viewCompany': {
                            templateUrl: 'assets/targestClient/partials/private/company/categories/categories.html',
                            controller : 'CategoriesController as CategoriesCtrl'
                        }
                    }
                })
            .state(
                'company.categories.list',
                {
                    url: '/list',
                    views: {
                        'viewCategories': {
                            templateUrl: 'assets/targestClient/partials/private/company/categories/categoriesList.html',
                            controller : 'CategoriesListController as CategoriesListCtrl'
                        }
                    }
                })
            .state(
                'company.categories.add',
                {
                    url: '/add',
                    views: {
                        'viewCategories': {
                            templateUrl: 'assets/targestClient/partials/private/company/categories/categoriesAdd.html',
                            controller : 'CategoriesAddController as CategoriesAddCtrl'
                        }
                    }
                })
            .state(
                'company.categories.edit',
                {
                    url: '/edit/:categoryId',
                    views: {
                        'viewCategories': {
                            templateUrl: 'assets/targestClient/partials/private/company/categories/categoriesEdit.html',
                            controller : 'CategoriesEditController as CategoriesEditCtrl'
                        }
                    }
                })
            .state(
                'company.categories.view',
                {
                    url: '/:categoryId',
                    views: {
                        'viewCategories': {
                            templateUrl: 'assets/targestClient/partials/private/company/categories/categoriesView.html',
                            controller : 'CategoriesViewController as CategoriesViewCtrl'
                        }
                    }
                })
            .state(
                'company.config',
                {
                    url: '/config',
                    views: {
                        'viewCompany': {
                            templateUrl: 'assets/targestClient/partials/private/config/config.html',
                            controller : 'ConfigController as ConfigCtrl'
                        }
                    }
                })
            .state(
                'company.config.profile',
                {
                    url: '/profile',
                    views: {
                        'viewConfig': {
                            templateUrl: 'assets/targestClient/partials/private/config/profile/profileEdit.html',
                            controller : 'ProfileEditController as ProfileEditCtrl'
                        }
                    }
                })
            .state(
                'store',
                {
                    url: '/:id/store',
                    views: {
                        'master': {
                            templateUrl: 'assets/targestClient/partials/private/store/store.html',
                            controller : 'CompanyController as CompanyCtrl'
                        }
                    }
                })
            .state(
                'store.dashboard',
                {
                    url: '/dashboard',
                    views: {
                        'viewStore': {
                            templateUrl: 'assets/targestClient/partials/private/store/dashboard/dashboardStore.html',
                            controller : 'DashboardStoreController as DashboardStoreCtrl'
                        }
                    }
                })
            .state(
                'store.campaigns',
                {
                    url: '/campaigns',
                    views: {
                        'viewStore': {
                            templateUrl: 'assets/targestClient/partials/private/store/campaign/campaign.html',
                            controller : 'CampaignController as CampaignCtrl'
                        }
                    }
                })
            .state(
                'store.campaigns.list',
                {
                    url: '/list',
                    views: {
                        'viewCampaigns': {
                            templateUrl: 'assets/targestClient/partials/private/store/campaign/campaignList.html',
                            controller : 'CategoriesListController as CategoriesListCtrl'
                        }
                    }
                })
            .state(
                'store.campaigns.add',
                {
                    url: '/add',
                    views: {
                        'viewCampaigns': {
                            templateUrl: 'assets/targestClient/partials/private/store/campaign/campaignAdd.html',
                            controller : 'CategoriesAddController as CategoriesAddCtrl'
                        }
                    }
                })
            .state(
                'store.campaigns.edit',
                {
                    url: '/edit/:campaignId',
                    views: {
                        'viewCampaigns': {
                            templateUrl: 'assets/targestClient/partials/private/store/campaign/campaignEdit.html',
                            controller : 'CategoriesEditController as CategoriesEditCtrl'
                        }
                    }
                })

        ;

        $urlRouterProvider.otherwise('/choose');
    }

})();
