/**
 * Created with IntelliJ IDEA.
 *
 * @author: jefferson.souza
 * @dateCreated: 03/07/15
 */
'use strict';

angular
    .module('usageControlApp')
    .config(CalculatorConfig);

CalculatorConfig.$inject = ['$routeProvider'];

function CalculatorConfig($routeProvider){

    $routeProvider
        .when('/calc', {
            templateUrl: 'views/calculator/main.html',
            controller: 'CalculatorController'
        })
        .when('/about', {
            templateUrl: 'views/about/about.html'
        })
        .otherwise({
            redirectTo: '/calc'
        });

}