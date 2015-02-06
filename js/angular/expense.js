
app.controller('Expense',function($scope, $http) {

//Get Objects Params
var apiKeyGet =     { 'X-Parse-Application-Id':'7MEb3qAzRJHYOkBGeRFlgyRVhr32jvsP4v7nTCzQ', 'X-Parse-REST-API-Key':'18I0T6NZjaBUifZv3leQ8HFHPnlfmBKBPVVaoaUr'};
var parseUrlEmployee = "https://api.parse.com/1/classes/Employee";

 //Creating Objects Params
 var apiKeyPost =   { 'X-Parse-Application-Id':'7MEb3qAzRJHYOkBGeRFlgyRVhr32jvsP4v7nTCzQ', 'X-Parse-REST-API-Key':'18I0T6NZjaBUifZv3leQ8HFHPnlfmBKBPVVaoaUr', 'Content-Type': 'application/json'};
 var parseUrlExpense = "https://api.parse.com/1/classes/Expense";


    //Get data from Parse.com
    $scope.getItems = function() {
        $http({method : 'GET',url : parseUrlEmployee , headers: apiKeyGet })
        .success(function(data, status) {
            $scope.jsonData = data.results;
            // console.log($scope.jsonData);
        })
        .error(function(data, status) {
            alert("Error");
        });
    };

    // Call Function get data
    $scope.getItems();

    $scope.addExpense = function(){
        var formExpense =   $scope.form;
        formExpense.date = Date.parse($scope.date);

        //Preparing Json for Push to Parse.com
        var jsonString = angular.toJson(formExpense);
        
        //Push data to Parse.com
        $http({method : 'POST',url : parseUrlExpense, data: jsonString , headers: apiKeyPost})
        .success(function (data, status) {
            alert("success");
        })
        .error(function (data, status) {
            alert("fail");
        });
    };

});

