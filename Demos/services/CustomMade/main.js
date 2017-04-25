var app = angular.module('myApp', []);

app.service('hexafy', function() {
   /**
   *function to transform an Integer Number From Decimal To Hexa
   *@Param {Number} Input Number - the number to be transformed to Hexa 
   *@return {Number} Hex Representation of the input Number 
   */

    this.myFunc = function (x) {
        return x.toString(16);
    }
});
app.controller('myCtrl', function($scope, hexafy) {
  $scope.hex = hexafy.myFunc(255);
});