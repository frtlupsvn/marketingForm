app.controller('Employee',function($scope,$http) {

    $scope.getEmployee = function() {
        $scope.loading ='show';
                // Get employee list - Dictonary
                $http({method : 'GET',url : "https://api.parse.com/1/classes/Employee", params: {'order':'createdAt'}, headers: { 'X-Parse-Application-Id':'7MEb3qAzRJHYOkBGeRFlgyRVhr32jvsP4v7nTCzQ', 'X-Parse-REST-API-Key':'18I0T6NZjaBUifZv3leQ8HFHPnlfmBKBPVVaoaUr'}})
                .success(function(data, status) {

                    $scope.jsonData = data.results;
                    $scope.loading ='hide';
                })
                .error(function(data, status) {
                    alert("Error");
                });
        };

        // Call Function get data
        $scope.getEmployee();
    });