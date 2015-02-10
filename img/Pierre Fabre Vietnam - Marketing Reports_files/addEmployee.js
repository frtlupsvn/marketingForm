app.controller('addEmployee',function($scope, $http) {

 var apiKeyPost =   { 'X-Parse-Application-Id':'7MEb3qAzRJHYOkBGeRFlgyRVhr32jvsP4v7nTCzQ', 'X-Parse-REST-API-Key':'18I0T6NZjaBUifZv3leQ8HFHPnlfmBKBPVVaoaUr', 'Content-Type': 'application/json'};
 var parseUrlEmployee = "https://api.parse.com/1/classes/Employee";

    $scope.groupArray = ["Trade/PFDC","Trade/PFM","Medical"];

    $scope.saveEmployee = function() {

        //Preparing Json for Push to Parse.com
        var jsonString = angular.toJson($scope.employee);
        
        //Push data to Parse.com
        $http({method : 'POST',url : parseUrlEmployee, data: jsonString , headers: apiKeyPost})
        .success(function (data, status) {
            alert("success");
        })
        .error(function (data, status) {
            alert("fail");
        });
    };

});