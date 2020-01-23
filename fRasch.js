const colors = require('colors');
const CONFIG = require('./config/config.json');
const ArrayToString = require('./ArrayToString');
const cloneArray = require('./cloneArray');

module.exports = {
  rasSumFromTop: function (test2, num = CONFIG.delTopDouble) {   // ТУТ ОШИБКА!!!!!!!!!!!!!!
    let test22 = cloneArray.clone2(test2);
    let nn = [];
    // console.log('test2 from fRasch.rasTopSolution'.cyan, test2);
    // console.log('test22 from fRasch.rasSumTopSolution'.cyan, test22);
    for ( let n = 0; n < num; n++) {
      let nnMax = 0;
      for ( let n1 = 1; n1 < 37; n1++ ) {
        for ( let n2 = 1; n2 < 37; n2++ ) {
          let x = test22[n1][n2];
          // console.log(test22[n1][n2]);
          
          if ( x > nnMax ) {
            nnMax = x;
            m1 = n1;
            m2 = n2;
            test22[m1][m2] = 0;
            // console.log(m1, m2);
            
          }
        }
      }
      nn.push([m1, m2, nnMax])
    }
    // console.log('nn from fRasch.rasSumTopSolution'.cyan, nn);
    return nn;
  },

  rasTopSolution: function (test2) {
    let topK = [];
    // console.log('test2 from fRasch.rasTopSolution'.cyan, test2);
    
    console.log('Length of Array: '.cyan + test2.length + ' X ' + test2[test2.length-1].length);
    let n1, n2, n3, n4, n5, n6;
    for ( n1 = 2; n1 < 31; n1++) {
      for ( n2 = n1 + 1; n2 < 32; n2++) {
        for ( n3 = n2 + 1; n3 < 33; n3++) {
          for ( n4 = n3 + 1; n4 < 34; n4++) {
            for ( n5 = n4 + 1; n5 < 35; n5++) {
              for ( n6 = n5 + 1; n6 < 36; n6++) {
                
                let tmpMaxK = rasMaxK(test2, n1, n2, n3, n4, n5, n6);
                let addK = [tmpMaxK, n1, n2, n3, n4, n5, n6];
                topK = addTopMaxK(topK, addK);
              }
            }
          }
        }
      }
    }
    
    
    return topK;
    
  },

  rasDelTopDouble: function (rDelData, dDelData) {
    // console.log('rDelData from fRasch.rasDelTop Double'.cyan, ArrayToString.foo(rDelData));
    
    // console.log('dDelData from fRasch.rasDelTop Double'.cyan, dDelData);
    
    for ( let i = 0; i < dDelData.length; i++) {
      let b1 = dDelData[i][0];
      let b2 = dDelData[i][1];
      // console.log(b1, b2);
      rDelData[b1][b2] = 0;
      
    }
    return rDelData;
  }
   
};

function rasMaxK(test2, n1, n2, n3, n4, n5, n6) {
  let tmp2;
  
  try {
    tmp2 = test2[n2][n1];
    tmp2 = tmp2 + test2[n3][n1] + test2[n3][n2];
    tmp2 = tmp2 + test2[n4][n1] + test2[n4][n2] + test2[n4][n3];
    tmp2 = tmp2 + test2[n5][n1] + test2[n5][n2] + test2[n5][n3] + test2[n5][n4];
    tmp2 = tmp2 + test2[n6][n1] + test2[n6][n2] + test2[n6][n3] + test2[n6][n4] + test2[n6][n5];
  } catch(err) {
    console.log('description err'.red, n1, n2, n3, n4, n5, n6);
                
    console.log('err'.red, err);
    
  };
  
  return tmp2;
};

function addTopMaxK(topK, addK) {
  let answer = topK;
  answer.push(addK);
  let lenAnswer = answer.length;
  if (lenAnswer > 2) {
    for ( let i = 0; i < lenAnswer - 1; i++) {
      x1 = answer[i+1][0];
      x0 = answer[i][0];
      if ( x1 > x0 ) {
        let tmp = answer[i+1];
        answer.splice(i, 1);
        answer.push(addK);
      }
    }
  }
  if (lenAnswer > 4) {
    answer.pop();
  }
  return answer;
}
