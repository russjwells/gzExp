    app.directive('autoScrollTo', ['$location', '$anchorScroll', '$timeout', function ($location, $anchorScroll, $timeout) {
        return {
            restrict: 'A',
            scope: false,
            link: function (scope, elem, attr) {
                //code to scroll on the basis of provided id
                $timeout(function () {
                        $location.hash(attr.autoScrollTo);
                        $anchorScroll();
                });
            }
        }
    }]);