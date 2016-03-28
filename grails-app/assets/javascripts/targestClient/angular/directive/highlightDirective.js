(function () {
    'use strict';

    angular.module('targestApp').directive('highlight', highlight);

    highlight.$inject = [];
    function highlight() {
        var component = function (scope, element, attrs) {

            if (!attrs.highlightClass) {
                attrs.highlightClass = 'highlight';
            }

            var replacer = function (match, item) {
                return '<span class="' + attrs.highlightClass + '">' + match + '</span>';
            };

            var tokenize = function (keywords) {
                keywords = keywords.replace(new RegExp(',$', 'g'), '').split(',');
                var i, l = keywords.length;
                for (i = 0; i < l; i++) {
                    keywords[i] = keywords[i].replace(new RegExp('^ | $', 'g'), '');
                }
                return keywords;
            };

            scope.$watch('keywords', function () {
                if (!scope.keywords || scope.keywords === '' || (!angular.isNumber(scope.keywords) && !angular.isString(scope.keywords))) {
                    element.html(scope.highlight);
                    return false;
                }

                var tokenized = tokenize(scope.keywords);
                var regex = new RegExp(tokenized.join('|'), 'gmi');

                var html = scope.highlight.replace(regex, replacer);

                element.html(html);
            });
        };
        return {
            link: component,
            replace: false,
            scope: {
                highlight: '=',
                keywords: '='
            }
        };

    }
}());