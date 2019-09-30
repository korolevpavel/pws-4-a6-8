let pbValue = 0;

function changeProgressBar(count) {
 
  if (pbValue == 100) {
    pbValue = 0;
  }

  pbValue += count;

  if (pbValue > 100) {
    pbValue = 100;
  }
 
  $("#progress-bar").width(`${pbValue}%`);
  $("#progress-bar").text(`${pbValue}%`);
 
}

function init() {

  changeProgressBar(pbValue)
 
  $("#btn-1").click(function () {
    changeProgressBar(1);
  });

  $("#btn-3").click(function () {
    changeProgressBar(3);
  });

  $("#btn-7").click(function () {
    changeProgressBar(7);
  });

}

$(document).ready(init);
