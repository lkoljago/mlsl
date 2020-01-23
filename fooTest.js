module.exports = {
  vwrTest: function (arr) {
    // whatever
    console.log('summary'.cyan);
    for ( var i = 0 ; i < arr.length; i++ ) {arr[i][1] = JSON.stringify(arr[i][1])};
    console.log('from fooTest'.cyan, arr);
  },
  bar: function () {
    // whatever
  }
};