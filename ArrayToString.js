const cloneArray = require('./cloneArray');
const colore = require('colors');
module.exports = {
  foo: function (array, numeric) {
    console.log(`foo # ${numeric} colled`.gray);
    let cArray = cloneArray.clone2(array);
    let lenArray = cArray.length;
    // console.log('wert'.red, array);
    var resString = [];
    var str = '';
    str = cArray[0].join(' ');
    // console.log('str from ArrToStr'.cyan, str);
    
    resString.push(str);
    // console.log('cArray[4] from ArrToStr'.cyan, cArray[4]);
    
    // console.log('resString from ArrayToStrings'.cyan, resString);
    for ( var i = 1; i < lenArray; i++ ) {
      // console.log('resString from ArrayToStrings'.cyan, resString);
      // console.log(`array[ ${ i } ] from ArrayToStrings`.cyan, cArray[i]);
      
      resString.push(cArray[i].join(' '));
    }
    
    return resString;
  },

  foo1: function (arrayF) {
    console.log('foo1 colled'.gray);
    
    arrayF = cloneArray.clone2(arrayF);
    var str = arrayF.join(' ');
    return str;
  }
}