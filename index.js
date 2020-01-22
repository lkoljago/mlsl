//const express = require('express');
const colors = require('colors');
const fRasch = require('./fRasch');
const { future, bResults } = require('./addDataResults');
const listDoubleBolls = require('./addArray2');
const fooWin = require('./fooWin');
const ArrayToString = require('./ArrayToString');


var topDoubleBolls
topDoubleBolls = fRasch.rasSumFromTop(listDoubleBolls, 10);

var listDoubleBollsClear = fRasch.rasDelTopDouble(listDoubleBolls, topDoubleBolls);
// var listDoubleBollsClear = listDoubleBolls;
console.log(topDoubleBolls);                                        //Массив до
console.log(fRasch.rasSumFromTop(listDoubleBollsClear, 5));         //проверка массива после очистки


var listTopSolution = fRasch.rasTopSolution(listDoubleBollsClear);
console.log('listTopSolution'.cyan, listTopSolution);
future.length = 3;

var win = fooWin.rasWin(future, listTopSolution);
win = fooWin.rasWinLos(win);
// console.log(listTopSolution[0]);

console.log(win);


// console.log(ArrayToString.foo(future));
// console.log(ArrayToString.foo(win));
