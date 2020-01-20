//const express = require('express');
const colors = require('colors');

// const { results } = require('./addDataResults');
const test2 = require('./addArray2');

let results2 = test2;
console.log('test'.cyan, results2[2][1]);

let nn = [];
for ( let n = 0; n < 10; n++) {
  let nnMax = 0;
  for ( let n1 = 1; n1 < 37; n1++ ) {
    for ( let n2 = 1; n2 < 37; n2++ ) {
      let x = results2[n1][n2];
      // console.log(results2[n1][n2]);
      
      if ( x > nnMax ) {
        nnMax = x;
        m1 = n1;
        m2 = n2;
        results2[m1][m2] = 0;
      }
    }
  }
  nn.push([m1, m2, nnMax])
}
console.log(nn);