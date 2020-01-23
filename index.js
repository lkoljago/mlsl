//const express = require('express');
const colors = require('colors');
const fRasch = require('./fRasch');
const { future, bResults } = require('./addDataResults');
const listDoubleBolls = require('./addArray2');
const fooWin = require('./fooWin');
const ArrayToString = require('./ArrayToString');


var topDoubleBolls;

topDoubleBolls = fRasch.rasSumFromTop(listDoubleBolls, 5, 1);   //bug HERE!!!
// console.log('topDoubleBolls from index'.cyan, topDoubleBolls);

// console.log('listDoubleBolls from index'.cyan, ArrayToString.foo(listDoubleBolls, 10, 3));
var listDoubleBollsClear = fRasch.rasDelTopDouble(listDoubleBolls, topDoubleBolls);
// var listDoubleBollsClear = listDoubleBolls;
console.log('topDoubleBolls from index'.cyan, topDoubleBolls);                                          //Массив до
// console.log('listDoubleBollsClear from index'.cyan, fRasch.rasSumFromTop(listDoubleBollsClear, 2));         //проверка массива после очистки
// console.log('listDoubleBollsClear.length from index'.cyan, listDoubleBollsClear.length);


var listTopSolution = fRasch.rasTopSolution(listDoubleBollsClear);
console.log('listTopSolution from index'.cyan, ArrayToString.foo(listTopSolution, 3, 4));
future.length = 6;

var win = fooWin.rasWin(future, listTopSolution);
win = fooWin.rasWinLos(win);


console.log('WIN'.zebra, win);


// console.log(ArrayToString.foo(future));
// console.log(ArrayToString.foo(win));
