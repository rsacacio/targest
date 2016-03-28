(function () {
    'use strict';

    angular.module('targestApp').controller('CategoriesListController', CategoriesListController);

    CategoriesListController.$inject = ['CategoriesListService', '$filter', 'SweetAlert'];

    function CategoriesListController(CategoriesListService, $filter, SweetAlert) {
        var self = this;
        self.remove = remove;

        self.search = '';

        function load(){
            CategoriesListService.load().success(function (data) {
                console.log(data);
                self.categories = data.categories;
            });
        }
        load();

        function remove(category){
            SweetAlert.swal({
                title: $filter('translate')('MESSAGE.ARE_YOU_SURE_ITEM', {itemName: category.name}),
                text: $filter('translate')('MESSAGE.DELETION_IS_NOT_RECOVER'),
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: $filter('translate')('MESSAGE.YES_I_SURE'),
                cancelButtonText: $filter('translate')('MESSAGE.NO_THANKS'),
                closeOnConfirm: false,
                closeOnCancel: true},
            function(){
                SweetAlert.swal($filter('translate')('MESSAGE.DELETED'), $filter('translate')('MESSAGE.DELETED_WITH_SUCCESS'), "success");
            });
        }

    }

})();
