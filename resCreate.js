//const express = require('express');
const colors = require('colors');
const csv = require('csv-parser');

var dataResults = require('./addDataResults');
var test = require('./config/dataTest');
var fooTest = require('./fooTest');

var bResults = dataResults.bResults;
var lenTest = test.length;
console.log('lenTest = '.blue, lenTest);
for ( var iTest = 0; iTest < lenTest; iTest++ ) {
  var forTest = test[iTest][0];
  var tmpArrayTest = test[iTest][1];
  // console.log('старт выборки № '.blue, iTest);
  var valueTest = 0;
  for ( var boll = 1; boll < 37; boll++ ) {
    
    for ( var period = 0; period < dataResults.lenRes - forTest + 1 ; period++ ) {
      var bResultsVibor = [];
      for ( var i = 0; i < forTest; i++ ) {
        bResultsVibor.push(dataResults.bResults[boll][period + i]);
      }
      var t = (JSON.stringify(tmpArrayTest) == JSON.stringify(bResultsVibor));
      t ? valueTest = valueTest + 1 : t = false;
      
      
      //console.log( boll, tmpArrayTest, bResultsVibor, t , valueTest[0], valueTest[1]);
    }
    
  }
  test[iTest].push(valueTest);
}

fooTest.vwrTest(test);

module.exports = {
  test,
 
}