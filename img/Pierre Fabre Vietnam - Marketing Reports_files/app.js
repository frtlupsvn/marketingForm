var app = angular.module("marketingApp" , ['ngRoute']);

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

app.controller('NavCtrl',function($scope){
        	$scope.menu = '/home';

            // Get employee list 

            // Get Categories list

        });
