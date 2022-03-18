// de stack overflow

function hexToRgb(h) {
  return [
    ("0x" + h[1] + h[2]) | 0,
    ("0x" + h[3] + h[4]) | 0,
    ("0x" + h[5] + h[6]) | 0,
  ];
}
function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function avgHex(h1, h2) {
  a = hexToRgb(h1);
  b = hexToRgb(h2);
  return rgbToHex(
    ~~((a[0] + b[0]) / 2),
    ~~((a[1] + b[1]) / 2),
    ~~((a[2] + b[2]) / 2)
  );
}

// fin stack overflow

function generatePalette() {
  //asignColors();
  colorMix();
  colorMixWithWhite();
  colorMixWithGray();
  colorMixWithBlack();
}

//var x = document.getElementById("first-color");
// var defaultValx = x.defaultValue;
//var currentValx = x.value;

//var y = document.getElementById("second-color");
// var defaultValy = y.defaultValue;
//var currentValy = y.value;

// this are the fixed colors for column A
var white = "#ffffff"; // cell A1
var gray = "#7f7f7f"; // cell A2
var black = "#000000"; // cell A3

var cellB1 = document.getElementById("cell-b1");
var cellB2 = document.getElementById("cell-b2");
var cellB3 = document.getElementById("cell-b3");

var cellC1 = document.getElementById("cell-c1");
var cellC2 = document.getElementById("cell-c2");
var cellC3 = document.getElementById("cell-c3");

var cellD1 = document.getElementById("cell-d1");
var cellD2 = document.getElementById("cell-d2");
var cellD3 = document.getElementById("cell-d3");

var cellE1 = document.getElementById("cell-e1");
var cellE2 = document.getElementById("cell-e2");
var cellE3 = document.getElementById("cell-e3");

function asignColors() {
  //
  // var currentValx = x.value;
  // var currentValy = y.value;
  // cellE1.style.backgroundColor = currentValx;
  // cellE3.style.backgroundColor = currentValy;

  cellE1.style.backgroundColor = firstColor();
  cellE3.style.backgroundColor = secondColor();
}

function firstColor() {
  var x = document.getElementById("first-color");
  var currentValx = x.value;
  return currentValx;
}

function secondColor() {
  var y = document.getElementById("second-color");
  var currentValy = y.value;
  return currentValy;
}

// console.log(firstColor());
// console.log(secondColor());

function colorMix() {
  // column E
  var resultColorE2 = avgHex(firstColor(), secondColor());
  cellE2.style.backgroundColor = resultColorE2;
  return resultColorE2;
}

function colorMixWithWhite() {
  // column D
  var resultColorD1 = avgHex(firstColor(), white);
  var resultColorD2 = avgHex(colorMix(), white);
  var resultColorD3 = avgHex(secondColor(), white);

  cellD1.style.backgroundColor = resultColorD1;
  cellD2.style.backgroundColor = resultColorD2;
  cellD3.style.backgroundColor = resultColorD3;
}

function colorMixWithGray() {
  // column C
  var resultColorC1 = avgHex(firstColor(), gray);
  var resultColorC2 = avgHex(colorMix(), gray);
  var resultColorC3 = avgHex(secondColor, gray);

  cellC1.style.backgroundColor = resultColorC1;
  cellC2.style.backgroundColor = resultColorC2;
  cellC3.style.backgroundColor = resultColorC3;
}

function colorMixWithBlack() {
  // column B
  var resultColorB1 = avgHex(firstColor(), black);
  var resultColorB2 = avgHex(colorMix(), black);
  var resultColorB3 = avgHex(secondColor(), black);

  cellB1.style.backgroundColor = resultColorB1;
  cellB2.style.backgroundColor = resultColorB2;
  cellB3.style.backgroundColor = resultColorB3;
}
