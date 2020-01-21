module.exports = {
  foo: function (array) {
    // console.log(array[0]);
    
    let len = array.length;
    let resString =[];
    let str = array[0].join(' ');
    resString.push(str);
    for ( let i = 1; i < len; i++) {
      resString.push(array[i].join(' '));
    }
    
    return resString;
  }
}