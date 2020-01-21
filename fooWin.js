const ArrayToString = require('./ArrayToString');

module.exports = {
  rasWin: function (fData, rData) {
    let win = [];
    
    let lenF = fData.length;
    let lenR = rData.length;
    
    // console.log(ArrayToString.foo(rData));
    console.log('глубина проверки: ', lenF);
    for ( let period = 0; period < lenF; period++) {
      win[period] = [period];
      // win[period] = [0];
      for (let ticket = 0; ticket < lenR; ticket++) {
        let winTicket = [];
        let value = 0;
        for ( let numBoll = 1; numBoll < 7; numBoll++) {
          
          let boll = rData[ticket][numBoll];
          if (fData[period][boll] == 1) {
            
            value++;
            winTicket.push(boll);
            // console.log('WIN', winTicket, boll, ticket, period);
          }
        }
        winTicket.unshift(value);
        win[period].push(winTicket);
      }
    }
    
    return win;
  },

  rasWinLos: function(rData) {
    let lenR = rData.length;
    for ( let i = 0; i < lenR; i++) {
      for ( let j = 1; j < rData[i].length; j++) {
        if (rData[i][j][0] < 2) { rData[i][j] = ['los'] }; 
        if (rData[i][j][0] == 2) { rData[i][j] = [' 2 '] };
        if (rData[i][j][0] == 3) { rData[i][j] = [' 3 '] };
        if (rData[i][j][0] == 4) { rData[i][j] = [' 4 '] };
          
        
      }
    }
    return rData;
  }
}