(function () {
    'use strict';

    angular.module('Assignment1App', [])
        .controller('LunchCheckerController', LunchCheckerController);

    LunchCheckerController.$inject = ['$scope'];

    function LunchCheckerController($scope) {
        $scope.lunchList = "";
        $scope.isTooMuch = "Please enter data first";
        $scope.tooMuchIndicator = { "border-style" : "solid",
                                    "border-color" : "red",
                                    "color" : "red"};

        $scope.checkLunch = function () {
            if ($scope.lunchList.length === 0) {
                $scope.isTooMuch = "Please enter data first";
                $scope.tooMuchIndicator = { "border-style" : "solid",
                                            "border-color" : "red",
                                            "color" : "red"};
            } else {
                let arrayLunchList = $scope.lunchList.split(",");
                for (let i = 0; i < arrayLunchList.length; i ++){
                    if (arrayLunchList[i].length === 0 ||
                        arrayLunchList[i].split(" ").length === 0){
                        arrayLunchList.splice(i);
                    }
                }

                if (arrayLunchList.length <= 3) {
                    $scope.isTooMuch = "Enjoy!";
                } else {
                    $scope.isTooMuch = "Too much!";
                }
                $scope.tooMuchIndicator = { "border-style" : "solid",
                                            "border-color" : "green",
                                            "color" : "green"};
            }
        };
    }
})();
