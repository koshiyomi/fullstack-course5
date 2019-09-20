(function () {
  'use strict';

  angular.module('Assignment1App', [])
  .controller('LunchCheckerController', LunchCheckerController);

  function LunchCheckerController ($scope, $filter) {
    $scope.isTooMuch = "Please enter data first";

    $scope.checkLunch = function () {
      if ($scope.lunchList.split(",").length > 3){
        $scope.isTooMuch = "Enjoy!";
      }else{
        $scope.isTooMuch = "Too much!";
      }
    };
  }
})();
