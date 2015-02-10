app.controller('addExpense',function($scope, $http) {

//Get Objects Params
var apiKeyGet =     { 'X-Parse-Application-Id':'7MEb3qAzRJHYOkBGeRFlgyRVhr32jvsP4v7nTCzQ', 'X-Parse-REST-API-Key':'18I0T6NZjaBUifZv3leQ8HFHPnlfmBKBPVVaoaUr'};
var parseUrlEmployee =      "https://api.parse.com/1/classes/Employee";
var parseUrlCategories =    "https://api.parse.com/1/classes/Categories";


 $scope.statusArray = ["Advance","Payment"];

    //Get list Employee from Parse.com
    $scope.getEmployee = function() {
        $http({method : 'GET',url : parseUrlEmployee , headers: apiKeyGet })
        .success(function(data, status) {
            $scope.jsonEmployee = data.results;
        })
        .error(function(data, status) {
            alert("Error");
        });
    };
    // Call Function get data
    $scope.getEmployee();

    //Get list Categories from Parse.com
    $scope.getCategories = function() {
        $http({method : 'GET',url : parseUrlCategories , headers: apiKeyGet })
        .success(function(data, status) {
            $scope.jsonCategories = data.results;
        })
        .error(function(data, status) {
            alert("Error");
        });
    };


    // Call Function get data
    $scope.getCategories();

    // Save New Expense to Parse.com
    $scope.addExpense = function(){

        var formExpense =   $scope.form;
        formExpense.date = Date.parse($scope.date);

        Parse.initialize("7MEb3qAzRJHYOkBGeRFlgyRVhr32jvsP4v7nTCzQ", "VEi9jbdu6la8IEaBcBIU9kfmOcDUSMVNeQxmTxIn");

        var EmployeeByObject = Parse.Object.extend("Employee");
        var TempEmployeeObj = new EmployeeByObject();

        var query = new Parse.Query(EmployeeByObject);
        query.get(formExpense.expenseBy, {
          success: function(data) {
            TempEmployeeObj = data ;
          },
          error: function(object, error) {
            // The object was not retrieved successfully.
            // error is a Parse.Error with an error code and message.
          }
        }); 

        var AcceptByObject = Parse.Object.extend("Employee");


        var ExpenseObject = Parse.Object.extend("Expense");
        var TempExpenseObject = new ExpenseObject();

        TempExpenseObject.save({total:formExpense.total , description: formExpense.description, status: formExpense.status, date:formExpense.date}, {
          success: function(object) {
            alert("success");

            TempExpenseObject.set("expenseBy",TempEmployeeObj);
            TempExpenseObject.save();
 
            //TempExpenseObject.save({expenseBy:ExpenseByObject ,acceptBy:AcceptByObject}); 
        },
        error: function(model, error) {
            alert("Error");
        }
    });

    };

});