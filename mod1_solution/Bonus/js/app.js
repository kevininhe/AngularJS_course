(function () {
  'use strict';
  angular.module('LunchCheck', [])
  .controller('LunchCheckControl',  LunchCheckController);

  LunchCheckController.$inject = ["$scope"];
  function LunchCheckController($scope) {
    $scope.input_text = "";
    $scope.result = "";
    //Controls the color of the text displayed
    //in the div
    $scope.styleManager = {};

    $scope.implementErrorStyle = function () {
      $scope.styleManager.color = {"color":"red"};
      $scope.styleManager.border = {"border-color":"red"};
    }
    $scope.implementOKStyle = function () {
      $scope.styleManager.color = {"color":"green"};
      $scope.styleManager.border = {"border-color":"green"};
    }
    $scope.checkIfMuch = function () {
      if($scope.input_text == "") {
        $scope.implementErrorStyle();
        $scope.result = "Please insert text first";
      }else {
        var counter = 0;
        var splittedText = $scope.input_text.split(",");
        //Checks whether splittedText has empty elements
        for (var i = 0; i < splittedText.length; i++) {
          if (splittedText[i] != "") {
            counter++;
          }
        }
        if (counter == 0) {
          $scope.implementErrorStyle();
          $scope.result = "Please insert text first";
        }
        else if(counter > 0 && counter < 4) {
          $scope.implementOKStyle();
          $scope.result = "Enjoy!";
        }
        else {
          $scope.implementOKStyle();
          $scope.result = "Too much!";
        }
      }
    }
  }
})();
