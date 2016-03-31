angular.module('targestApp').factory('LocaleDateFactory', function($filter){

	var load = function(){
		var localeCalendar = {
			range: { 
				hoje: $filter('translate')('CALENDAR.RANGE.TODAY'),
				ultimos7dias: $filter('translate')('CALENDAR.RANGE.LAST_7_DAYS'),
				ultimos30dias: $filter('translate')('CALENDAR.RANGE.LAST_30_DAYS'),
				esteMes: $filter('translate')('CALENDAR.RANGE.THIS_MONTH'),
				ultimoMes: $filter('translate')('CALENDAR.RANGE.LAST_MONTH')
			},
			daysOfWeek: [
				$filter('translate')('CALENDAR.DAYS_OF_WEEK.A_SUNDAY'),
				$filter('translate')('CALENDAR.DAYS_OF_WEEK.A_MONDAY'),
				$filter('translate')('CALENDAR.DAYS_OF_WEEK.A_TUESDAY'),
				$filter('translate')('CALENDAR.DAYS_OF_WEEK.A_WEDNESDAY'),
				$filter('translate')('CALENDAR.DAYS_OF_WEEK.A_THURSDAY'),
				$filter('translate')('CALENDAR.DAYS_OF_WEEK.A_FRIDAY'),
				$filter('translate')('CALENDAR.DAYS_OF_WEEK.A_SATURDAY')
			],
			monthNames : [
				$filter('translate')('CALENDAR.MONTHS.JANUARY'), 
				$filter('translate')('CALENDAR.MONTHS.FEBRUARY'),
				$filter('translate')('CALENDAR.MONTHS.MARCH'),
				$filter('translate')('CALENDAR.MONTHS.APRIL'),
				$filter('translate')('CALENDAR.MONTHS.MAY'),
				$filter('translate')('CALENDAR.MONTHS.JUNE'),
				$filter('translate')('CALENDAR.MONTHS.JULY'),
				$filter('translate')('CALENDAR.MONTHS.AUGUST'),
				$filter('translate')('CALENDAR.MONTHS.SEPTEMBER'),
				$filter('translate')('CALENDAR.MONTHS.OCTOBER'),
				$filter('translate')('CALENDAR.MONTHS.NOVEMBER'),
				$filter('translate')('CALENDAR.MONTHS.DECEMBER')
			],
			applyLabel: $filter('translate')('CALENDAR.APPLY'),
			cancelLabel: $filter('translate')('CALENDAR.CLOSE'),
			fromLabel: $filter('translate')('CALENDAR.FROM'),
			toLabel: $filter('translate')('CALENDAR.UNTIL'),
			customRangeLabel: $filter('translate')('CALENDAR.PERSONALITY_SEARCH'),
			mensagemDataSelecionadaInvalida: $filter('translate')('CALENDAR.PERIOD_SELECTED_INVALID'),
			mensagemDataDigitadaInvalida: $filter('translate')('CALENDAR.PERIOD_TYPED_INVALID'),
			formatRange: $filter('translate')('CALENDAR.FORMAT_RANGE'),
			format: $filter('translate')('CALENDAR.FORMAT')
		};

		return localeCalendar;
	};

	return {
		load: load
	};
});