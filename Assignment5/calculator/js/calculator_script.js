"use strict";

/*
	Assignment 5 - Calculator 
	Calculator 
	Author: Laercio M Silva Jr W0433181
	Date: 05/02/2020
   
	Filename: calculator_script.js
	Location\Filename: ..\calculator\js\calculator_script.js
*/

var numbers = /^[0-9.]+$/;
var firstValue = null;
var secondValue = null;
var mathOperator = null;
var lengthFisrtValue = null;

var operators = {
    '+': function(a, b) { return a + b },
    '-': function(a, b) { return a - b },
    '/': function(a, b) { return a / b },
    '*': function(a, b) { return a * b }
};

var display = document.getElementById('display');



function displaysNumber(value) {

    if (value.match(numbers)) {
        display.value += value;
    }

    else {
        if (firstValue == null && value != "=" && display.value != '') {
            firstValue = parseFloat(display.value);
            display.value += value;
            mathOperator = value;
            lengthFisrtValue = display.value.length;
        }

        else if (firstValue != null && secondValue == null) {
            secondValue = parseFloat(display.value.substr(lengthFisrtValue));

            let result = operators[mathOperator](firstValue, secondValue);

            display.value = result;

            firstValue = null;
            secondValue = null;
            mathOperator = null;
            lengthFisrtValue = null;
        }
    } 

}


function cleanDisplay() {

    display.value = '';
    firstValue = null;
    secondValue = null;
    mathOperator = null;
    lengthFisrtValue = null;

}


function deleteNumber() {

    let displayValue = display.value;

    display.value = displayValue.substr(0, displayValue.length-1);

    if (displayValue.length <= lengthFisrtValue) {
        firstValue = null;
        secondValue = null;
        mathOperator = null;
        lengthFisrtValue = null;
    }

}