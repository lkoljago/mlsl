const { results, bResults, chanse } = require('./addDataResults');
const ArrayToString = require('./ArrayToString');
const cloneArray = require('./cloneArray');


let nochanse = [];
for ( let i = 1; i < 37; i++) {
  let tmp = bResults[i];
  tmp = tmp.slice(-10);
  
  if ( tmp.indexOf(1) == -1 ) {
    // console.log('true');
    // console.log(tmp, i);
    let ii = chanse.indexOf(i);
    // console.log('false cdfghdg', i, ii);
    
    
    nochanse.push(chanse.splice(ii, 1));
    
  } 
}
// console.log('chanse from addArray2'.cyan, chanse.join(' '));
console.log('nochanse from addArray2'.cyan, nochanse.join(' '));


var test2 = [[-1],[-1]];
let n1 = 2;
let lenRes = bResults[bResults.length-1].length;
// console.log(bResults[3][1], lenRes);

while ( n1 < 37 ) {
  let n1x = chanse.indexOf(n1)
    let testApr = [-1];
    for ( let n2 = 1; n2 < n1; n2++ ){
      let n2x = chanse.indexOf(n2)
      
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
        if ( (n1x == -1) && (n2x == -1) ) {value = 0};         //проверка на соответвие к невыпадавшим шарам
        testApr.push(value);
      
    }
    n1++;
    test2.push(testApr);
  
}

// console.log('test2[1][1] from addArray2'.cyan, test2[1][1]);
// console.log('test2 from addArray2'.cyan, ArrayToString.foo(test2, 3, 'test2 from addArray2'));
module.exports = test2;