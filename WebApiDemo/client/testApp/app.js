(function() {
    var testApp = angular.module('testApp', []);

    testApp.controller('AlertsController',
        ['$scope', function($scope) {
            $scope.alerts = [
                { text: "This is bad!", type: "danger", reason: "none" },
                { text: "This is questionable!", type: "warning", reason: "empty" },
                { text: "This is probably informative!", type: "info", reason: "goodstuff" }
            ];

            $scope.closeAlert = function(index) {
                $scope.alerts.splice(index, 1);
            };
        }]);

    testApp.directive('alert', function() {
        return {
            restrict: 'EA',
            templateUrl: '/client/testApp/templates/test.html',
            transclude: true,
            replace: true,
            scope: {
                reason: '=',
                type: '@',
                close: '&'
            },
            link: function(scope, element, attributes, ctrl) {

            }
        };
    });
})();