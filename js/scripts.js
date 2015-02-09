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

$(function() {
  $("form#queen-attack").submit(function(event) {
    var queenX = parseInt($("input#queenX").val());
    var queenY = parseInt($("input#queenY").val());
    var victimX = parseInt($("input#victimX").val());
    var victimY = parseInt($("input#victimY").val());

    var queenPosition = [queenX, queenY];
    var victimPosition = [victimX, victimY];

    $("#not").empty();

    if (!queenAttack(queenPosition, victimPosition)) {
      $("#not").text("not")

    }


    $("#results").show();
    event.preventDefault();


  });



});
