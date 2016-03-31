(function () {
    'use strict';

    angular.module('targestApp').directive('targestDatePicker', targestDatePicker);

    targestDatePicker.$inject = ['LocaleDateFactory'];
    function targestDatePicker(LocaleDateFactory) {
        var component = function (scope, element, attrs) {
            var buildDateRange = function(localeCalendar)
            {
                var range = {};
                range[localeCalendar.range.hoje] = [moment(), moment()];
                range[localeCalendar.range.ultimos7dias] = [moment().subtract(6, 'days'), moment()];
                range[localeCalendar.range.ultimos30dias] = [moment().subtract(29, 'days'), moment()],
                range[localeCalendar.range.esteMes] = [moment().startOf('month'), moment().endOf('month')],
                range[localeCalendar.range.ultimoMes] = [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
                return range;
            }

            var buildDateLocale = function(localeCalendar)
            {
                return {
                    format: localeCalendar.format,
                    daysOfWeek: localeCalendar.daysOfWeek,
                    monthNames: localeCalendar.monthNames,
                    applyLabel: localeCalendar.applyLabel,
                    cancelLabel: localeCalendar.cancelLabel,
                    fromLabel: localeCalendar.fromLabel,
                    toLabel: localeCalendar.toLabel,
                    customRangeLabel: localeCalendar.customRangeLabel
                };
            }

            var localeCalendar = LocaleDateFactory.load();
            scope.opts = {
                // ranges: buildDateRange(localeCalendar),
                locale: buildDateLocale(localeCalendar),
                startDate: moment().subtract(1, 'days'),
                format: localeCalendar.formatRange,
                autoApply: true
            };

            if(scope.min){
                scope.opts.minDate = scope.min;
            }

            if(scope.single)
            {
                scope.opts.singleDatePicker = true;
            }
            else
            {
                scope.opts.endDate = moment().add(7, 'days');
                scope.opts.locale.format = localeCalendar.formatRange;
            }

            console.log(scope.name);
        };
        return {
            link: component,
            replace: false,
            templateUrl: 'assets/targestClient/partials/directive/form/dateRangeDirective.html',
            scope: {
                min: '=',
                single: '=',
                ngModel: '=',
                name: '@',
                required: '='
            }
        };

    }
}());