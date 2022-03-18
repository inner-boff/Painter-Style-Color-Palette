  // de stack overflow

  function hexToRgb(h) {
    return [
      ("0x" + h[1] + h[2]) | 0,
      ("0x" + h[3] + h[4]) | 0,
      ("0x" + h[5] + h[6]) | 0,
    ];
  }
  function rgbToHex(r, g, b) {
    return (
      "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
    );
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
    asignColors();
    colorMix();
  }

  function asignColors() {
    var x = document.getElementById("first-color");
    // var defaultValx = x.defaultValue;
    var currentValx = x.value;

    var y = document.getElementById("second-color");
    // var defaultValy = y.defaultValue;
    var currentValy = y.value;

    var colorCellA3 = document.getElementById("cell-a3");
    var colorCellC3 = document.getElementById("cell-c3");

    colorCellA3.style.backgroundColor = currentValx;
    colorCellC3.style.backgroundColor = currentValy;

    //estaria bueno que esta funcion devuelva los dos colores 
    // y poder usarlos como argumentos luego en colorMix()

  }

  function colorMix() {
    var x = document.getElementById("first-color");
    var currentValx = x.value;
    var y = document.getElementById("second-color");
    var currentValy = y.value;
    var resultColorB3 = avgHex(currentValx, currentValy);
    var cellB3 = document.getElementById("cell-b3");
    cellB3.style.backgroundColor = resultColorB3;
  }

  function colorMixWithWhite() {
  }