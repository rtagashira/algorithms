// There is a bug in one line of the code. Find it, fix it, and submit.
// N candles are placed in a row, some of them are initially lit. For each candle from the 1st to the Nth the following algorithm is applied: if the observed candle is lit then states of this candle and all candles before it are changed to the opposite. Which candles will remain lit after applying the algorithm to all candles in the order they are placed in the line?

let switchLights = (a) =>{

  var b = [];
  var change = false;
  for (var i = a.length - 1; i >= 0; i--) {
    if (a[i] === 1) {
      change = !change;
    }
    b[i] = change ? 1 - a[i] : a[i];
  }

  return b;
}

console.log(switchLights([1, 1, 1, 1, 1]))//[0, 1, 0, 1, 0]
console.log(switchLights([0,0]))//[0, 0]