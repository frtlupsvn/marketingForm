
app.controller('Expense',function($scope, $http) {

//Get Objects Params
var apiKeyGet =     { 'X-Parse-Application-Id':'7MEb3qAzRJHYOkBGeRFlgyRVhr32jvsP4v7nTCzQ', 'X-Parse-REST-API-Key':'18I0T6NZjaBUifZv3leQ8HFHPnlfmBKBPVVaoaUr'};
var parseUrlExpense= "https://api.parse.com/1/classes/Expense";
var parseUrlCategories= "https://api.parse.com/1/classes/Categories";
var employeeArray ={}
var categoriesArray ={}

    //Get data from Parse.com
    $scope.getExpense = function() {
/*
Ở đây, tôi dùng 3 request để gọi về danh sách Employee, Expense và Categories
Sau đó, thiết lập hai bảng Dictionary cho categoriesDict và employeeDict để lưuu vào objectId và name
Sau đó ở view HTML , với các ID thu được từ bảng Expense, ta sẽ đối chiếu với 2 bảng trên để dò ra kết quả 
*/

        $http({method : 'GET',url : "https://api.parse.com/1/classes/Employee", headers: { 'X-Parse-Application-Id':'7MEb3qAzRJHYOkBGeRFlgyRVhr32jvsP4v7nTCzQ', 'X-Parse-REST-API-Key':'18I0T6NZjaBUifZv3leQ8HFHPnlfmBKBPVVaoaUr'}})
        .success(function(data, status) {
                // alert("success");
                employeeArray = data.results;

                //------------------------------------------------------------
                $http({method : 'GET',url : parseUrlCategories , headers: apiKeyGet })
                .success(function(data, status) {

                    categoriesArray = data.results;

                    var categoriesDict = {};
                        $scope.categoriesDict = categoriesDict; 

                    categoriesArray.forEach(function(entry) {
                        $scope.categoriesDict[entry.objectId] = entry.name;
                    });

                        //------------------------------------------------------------
                        $http({method : 'GET',url : parseUrlExpense , headers: apiKeyGet })
                        .success(function(data, status) {
                            $scope.jsonData = data.results;

                        //------------------------------------------------------------
                        var employeeDict = {};
                        $scope.employeeDict = employeeDict; 

                        employeeArray.forEach(function(entry) {
                            $scope.employeeDict[entry.objectId] = entry.name;
                        });


                    })
                        .error(function(data, status) {
                            alert("Error");


                        })
                        .error(function(data, status) {
                            alert("Error");
                        });


                    });

})
.error(function(data, status) {
    alert("Error");
});

};

    // Call Function get data
    $scope.getExpense();
});

