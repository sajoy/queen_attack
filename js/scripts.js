var queenAttack = function(queenPosition, victimPosition) {
  var queenX = queenPosition[0]
  var queenY = queenPosition[1]

  var victimX = victimPosition[0]
  var victimY = victimPosition[1]

  if (queenX === victimX || queenY === victimY || Math.abs(queenX - victimX) === Math.abs(queenY - victimY)) {
    return true
  } else {
    return false
  };


};
