
app.controller('Report',function($scope, $http) {

    //Get Objects Params

    var fromDate = 0;
    var toDate = Date();
        //Get data from Parse.com
        $scope.getExpense = function(expenseBy,dateFrom,dateTo) {
            $scope.loading ='show';

            fromDate = Date.parse(dateFrom);
            toDate = Date.parse(dateTo);

            $scope.totalExpense = 0;
            //------------------------------------------------------------
            $http({method : 'GET',url : parseUrlExpense , headers: apiKeyGet , params: {'order':'-date', 'where':'{"expenseBy" : "'+ expenseBy +'" , "date":{"$gte":'+fromDate+',"$lte":'+toDate+' }}' }})
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
        $scope.getExpense("",fromDate,toDate);
    });

