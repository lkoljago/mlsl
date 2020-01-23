module.exports = {
  clone2: function (cloneArray) {
    var resArray1 = [];
    // console.log('cloneArray.length from cloneArray'.red, cloneArray.length);
    
    for ( var ii = 0; ii < cloneArray.length; ii++ ) {
        var buf = [];
        buf = cloneArray[ii];
        // console.log('temp data'.red, ii, buf);
        
        resArray1.push(buf);
      
    }
    // console.log('resArray'.red, resArray1);
    
    return resArray1;
  }

}