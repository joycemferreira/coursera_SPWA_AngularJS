(function () {
'use strict';

angular.module('LunchCheckApp', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.list = "";
  $scope.totalValue = "";
  $scope.messageHere = "Press Button!";

  $scope.displayNumeric = function () {
    var totalNameValue = "Meu test";
    $scope.totalValue = totalNameValue;
  };

  $scope.sayMessage = function () {
    return $scope.list;
  };

  $scope.updateMessage = function () {
    var message = "";
    var str = ($scope.list).split(',');
    var filtered_values = str.filter(function (e) {return e != null && e.trim() != '';});
    var n_array = filtered_values.length;
    if ($scope.list.trim() == ""){
      message = "Please enter data first";
    }
    else if (n_array <= 3) {
      message = "Enjoy!";
    }
    else {
      message = "Too much!"
    }
    $scope.messageHere = message;
  };
}

})();
