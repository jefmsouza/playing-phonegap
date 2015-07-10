/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        navigator.geolocation.getCurrentPosition(this.onSuccess, this.onError);
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
    onErr: function(error)
    {
        alert('code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n');
    },
    onSuccess: function(position) {
        var element = document.getElementById('geolocation');
        element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
            'Longitude: '          + position.coords.longitude             + '<br />' +
            'Altitude: '           + position.coords.altitude              + '<br />' +
            'Accuracy: '           + position.coords.accuracy              + '<br />' +
            'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
            'Heading: '            + position.coords.heading               + '<br />' +
            'Speed: '              + position.coords.speed                 + '<br />' +
            'Timestamp: '          + position.timestamp                    + '<br />';
    }
};
/**
 * Created with IntelliJ IDEA.
 *
 * @author: jefferson.souza
 * @dateCreated: 03/07/15
 */
'use strict';

angular.module('usageControlApp', ['ui.router', 'ngSanitize', 'ngResource', 'ngRoute']);
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
/**
 * Created with IntelliJ IDEA.
 *
 * @author: jefferson.souza
 * @dateCreated: 03/07/15
 */
'use strict';

angular
    .module("usageControlApp")
    .controller('CalculatorController', CalculatorController);

CalculatorController.$inject = [];

function CalculatorController(){
    var vm = this;

    vm.km = '';
    vm.litrosGastos = '';
    vm.combustivel = 'ETANOL';
    vm.rendimento = 0;
    vm.listaCombustiveis = ['ETANOL', 'GASOLINA', 'DIESEL', 'GNV', 'OUTRO'];

    vm.calcularRendimento = calculaRendimento;

    function calculaRendimento(){
        if (vm.km > 0 && vm.litrosGastos > 0) {
            vm.rendimento = vm.km / vm.litrosGastos;
        }
    }
}