
app.controller('Expense',function($scope, $http) {

    //Get Objects Params
        //Get data from Parse.com
        $scope.getExpense = function() {

            $scope.loading ='show';
            //------------------------------------------------------------
            $http({method : 'GET',url : parseUrlExpense , headers: apiKeyGet , params: {'order':'-date'}})
            .success(function(data, status) {

                $scope.employeeDict = employeeDict;
                $scope.categoriesDict = categoriesDict; 

                $scope.jsonData = data.results;

                $scope.loading ='hide';
            })
            .error(function(data, status) {
                alert("Error");
            });

        };

        // Call Function get data
        $scope.getExpense();
    });

