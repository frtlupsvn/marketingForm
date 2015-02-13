var app = angular.module("marketingApp" , ["ngRoute","googlechart"]);

app.config(function($routeProvider) {
            // body...
            $routeProvider
            .when('/home', {templateUrl:'partials/employee.html'})
            .when('/expense', {templateUrl:'partials/expense.html'})
            .when('/addEmployee', {templateUrl:'partials/addEmployee.html'})
            .when('/addExpense', {templateUrl:'partials/addExpense.html'})
            .when('/report', {templateUrl:'partials/report.html'})
            .otherwise({redirectTo: '/home'})
        });
app.value('googleChartApiConfig', {
    version: '1',
    optionalSettings: {
        packages: ['corechart', 'gauge'],
        language: 'fr'
    }
});

// Parse config
var apiKeyGet =     { 'X-Parse-Application-Id':'7MEb3qAzRJHYOkBGeRFlgyRVhr32jvsP4v7nTCzQ', 'X-Parse-REST-API-Key':'18I0T6NZjaBUifZv3leQ8HFHPnlfmBKBPVVaoaUr'};
var parseUrlExpense= "https://api.parse.com/1/classes/Expense";
var parseUrlCategories= "https://api.parse.com/1/classes/Categories";

var employeeArray ={};
var employeeDict = {}; 

var categoriesArray ={};
var categoriesDict = {};

app.controller('NavCtrl',function($scope, $http){

    // Set default page is always home
    $scope.menu = '/home';

       /*
    Ở đây, tôi dùng 3 request để gọi về danh sách Employee, Expense và Categories
    Sau đó, thiết lập hai bảng Dictionary cho categoriesDict và employeeDict để lưuu vào objectId và name
    Sau đó ở view HTML , với các ID thu được từ bảng Expense, ta sẽ đối chiếu với 2 bảng trên để dò ra kết quả 
    */

            // Get employee list - Dictonary
            $http({method : 'GET',url : "https://api.parse.com/1/classes/Employee", headers: { 'X-Parse-Application-Id':'7MEb3qAzRJHYOkBGeRFlgyRVhr32jvsP4v7nTCzQ', 'X-Parse-REST-API-Key':'18I0T6NZjaBUifZv3leQ8HFHPnlfmBKBPVVaoaUr'}})
            .success(function(data, status) {
                employeeArray = data.results;
                    //------------------------------------------------------------
                    employeeArray.forEach(function(entry) {
                        employeeDict[entry.objectId] = entry.name;
                    });
                })
            .error(function(data, status) {
                alert("Error");
            });

            // Get Categories list
            $http({method : 'GET',url : parseUrlCategories , headers: apiKeyGet })
            .success(function(data, status) {
                categoriesArray = data.results;

                categoriesArray.forEach(function(entry) {
                    categoriesDict[entry.objectId] = entry.name;
                });
            })
            .error(function(data, status) {
                alert("Error");
            });


        });
