
app.controller('Expense',function($scope, $http) {

    var formExpense = {
        expenseBy: "",
        aprrovedBy: "",
        date: "",
        total: 0,
        notes: ""
    };

    $scope.getItems = function() {
        $http({method : 'GET',url : "https://api.parse.com/1/classes/Employee", headers: { 'X-Parse-Application-Id':'7MEb3qAzRJHYOkBGeRFlgyRVhr32jvsP4v7nTCzQ', 'X-Parse-REST-API-Key':'18I0T6NZjaBUifZv3leQ8HFHPnlfmBKBPVVaoaUr'}})
        .success(function(data, status) {
            // alert("success");
            $scope.jsonData = data.results;
        })
        .error(function(data, status) {
            alert("Error");
        });
    };

    $scope.getItems();

    $scope.addExpense = function(){
        formExpense = $scope.form;

        alert(formExpense.total);
        alert(formExpense.notes);
        alert(formExpense.aprrovedBy);
    };

});
