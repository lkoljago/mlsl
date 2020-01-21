const { results, bResults } = require('./addDataResults');


let test2 = [[-1],[-1]];
let n1 = 2;
let lenRes = bResults[bResults.length-1].length;
// console.log(bResults[3][1], lenRes);

while ( n1 < 37 ) {
  let testApr = [-1];
  for ( let n2 = 1; n2 < n1; n2++ ){
    let period = lenRes;
    let value = 0;
    let bValue = true;
    
    
    
    while ( (period > 1) && (bValue) ) {
      if ( ((bResults[n1][period]) * (bResults[n2][period])) == 1 ) {
        bValue = false;
      } else {
        value++;
      }
      period--;
    }
    testApr.push(value);
  }
  n1++;
  test2.push(testApr);
}

// console.log(test2[1][1]);
// console.log(test2);
module.exports = test2;