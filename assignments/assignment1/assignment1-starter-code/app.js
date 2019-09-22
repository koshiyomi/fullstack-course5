(function () {
  'use strict';

  angular.module('Assignment1App', [])
  .controller('LunchCheckerController', LunchCheckerController);

  LunchCheckerController.$inject = ['$scope'];

  function LunchCheckerController ($scope) {
    $scope.isTooMuch = "Please enter data first";

    $scope.checkLunch = function () {
      if ($scope.lunchList.length === 0){
        $scope.isTooMuch = "Please enter data first";
      }else {
        if ($scope.lunchList.split(",").length <= 3) {
          $scope.isTooMuch = "Enjoy!";
        } else {
          $scope.isTooMuch = "Too much!";
        }
      }
    };
  }
})();
