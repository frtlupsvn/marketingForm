
app.controller('Report',function($scope, $http) {

    //Get Objects Params
    $scope.chartObject = {};

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

                DrawChart(arrayEntry);
                $scope.loading ='hide';
            })
            .error(function(data, status) {
                alert("Please fill all fields");
            });
        };

DrawChart = function(data){
                        // Draw Chart
                        console.log(data);

                        var arrayCategorie = [];

                        data.forEach(function(entry){
                            $scope.temp ={c: [
                            {v: categoriesDict[entry.category]},
                            {v: entry.total},
                            ]};
                            arrayCategorie.push($scope.temp);
                        });

                        $scope.chartObject.data = {"cols": [
                        {id: "t", label: "Topping", type: "string"},
                        {id: "s", label: "Slices", type: "number"}
                        ], "rows": arrayCategorie};

    // $routeParams.chartType == BarChart or PieChart or ColumnChart...
    $scope.chartObject.type = "PieChart";
    $scope.chartObject.options = {
        'title': 'PieChart By Categories'
    }
};

        // Call Function get data
        $scope.getExpense("",fromDate,toDate);
    });

