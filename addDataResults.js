const fs = require('fs');
const CONFIG = require('./config/config.json');
const ArrayToString = require('./ArrayToString');

const filePath = CONFIG.fileRes;

var results = [];
var lines = fs.readFileSync(filePath, 'utf8').split('\n');
// console.log(lines);

for(var i in lines) {
  results[i] = lines[i].split(',');
  
}
let lenRes = results.length;
// console.log(results);

console.log('length'.blue, lenRes);

var bTmpResults = new Array();
var bResults = new Array();
bResults[0] = [0];
for (var boll = 1; boll < 37; boll++) {
  var bTmpResults = new Array();
  for (var period = 0; period < lenRes; period++) {
    //console.log('new'.blue, i);
    var prim = [];
    
    
    for(var j = 1; j < 7; j++){
      prim[j] = Number(results[period][j]);
    }
    var include = prim.lastIndexOf(boll);
    // console.log(include);
    if (include>0) {
      bTmpResults.push(1);
    } else {
      bTmpResults.push(0);
    }
    
  }
  bResults.push(bTmpResults);
}
// console.log(bResults);

var future = [];
function addFuture(arrayRes) {
  
 
  
  let tmpFuture = [[-1]];
  
  for ( let i = 1; i < 37; i++ ) {
    lenRes = arrayRes[i].length - 1;
    tmpFuture.push([arrayRes[i][lenRes]]);
    arrayRes[i].splice(lenRes, 1);
  }
  future.unshift(tmpFuture);
  // console.log('tmpFuture'.cyan, tmpFuture);
  
}
for ( let i = 0; i < CONFIG.tstFuture; i++ ) {
  addFuture(bResults);
}

;

console.log('new length'.cyan, bResults[36].length);
let chanse = [];
for ( let i = 1; i < 37; i++) {chanse.push(i)};
// console.log(ArrayToString.foo1(chanse))

module.exports = {
    results,
    bResults,
    future,
    chanse
}