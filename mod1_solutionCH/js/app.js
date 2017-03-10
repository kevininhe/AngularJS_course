(function () {
  'use strict';
  angular.module('LunchCheck', [])
  .controller('LunchCheckControl',  LunchCheckController);


  LunchCheckController.$inject = ["$scope"];
  function LunchCheckController($scope) {
    $scope.input_text = "";
    $scope.result = "";

    $scope.checkIfMuch = function () {
      if($scope.input_text == "") {
        $scope.result = "Please insert text first";
      }else {
        var splittedText = $scope.input_text.split(",");
        if(splittedText.length == 0) {
          $scope.result = "Please enter data first!";
        }
        else if(splittedText.length > 0 && splittedText.length < 4) {
          $scope.result = "Enjoy!";
        }
        else {
          $scope.result = "Too much!";
        }
      }
    }
  }
})();
