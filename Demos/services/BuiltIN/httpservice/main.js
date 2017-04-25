var app = angular.module("myApp",[]);

app.controller("myCtrl",function($scope,$http){


$http.get("http://news.alruabye.net/MobileWebService1.asmx//GetNewsNow?UserID=1&StratFrom=1&EndTo=50&SubNesourceID=0&NewsID=0&q=@&Type=0﻿").then(function(myData){

$scope.news = myData.data.newData;
	});


});