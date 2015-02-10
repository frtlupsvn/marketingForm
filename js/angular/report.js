
app.controller('Report',function($scope, $http) {

    //Get Objects Params
        //Get data from Parse.com
        $scope.getExpense = function(expenseBy) {
            $scope.loading ='show';
            $scope.totalExpense = 0;
            //------------------------------------------------------------
            $http({method : 'GET',url : parseUrlExpense , headers: apiKeyGet , params: {'order':'-date', 'where':'{"expenseBy" : "'+ expenseBy +'"}' }})
            .success(function(data, status) {

                $scope.employeeDict = employeeDict;
                $scope.categoriesDict = categoriesDict; 
                $scope.jsonEmployee = employeeArray;

                $scope.jsonData = data.results;

                var arrayEntry = {};
                arrayEntry = $scope.jsonData ;

                arrayEntry.forEach(function(entry) {
                      $scope.totalExpense += entry.total ;
                });

                $scope.loading ='hide';
            })
            .error(function(data, status) {
                alert("Error");
            });

        };

        // Call Function get data
        $scope.getExpense("");
    });

