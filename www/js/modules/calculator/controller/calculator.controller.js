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