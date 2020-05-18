// ================================== //
// color //
// ================================== //

// function randomColorValues() {
//   var randH = Math.random();
//   var randS = Math.random() * 0.1 + 0.5;
//   var randL = Math.random() * 0.1 + 0.4; 
//   return { h: randH, s: randS, l: randL };
// }

// function getHue(color) {
//   return color.h % 1.0;
// }

// function primaryColor(color) {
//   return "hsl(" + getHue(color) * 360 + ", " + (color.s % 1.0) * 100 + "%, " + (color.l % 1.0) * 100 + "%)";
// }

// function secondaryColor(color) {
//   return "hsl(" + (getHue(color) * 360 + 210)+ ", " + (color.s % 1.0) * 100 + "%, " + (color.l % 1.0) * 100 + "%)";
// }

// function hillColor() {
//   // console.log(randomColor)
//   var baseColor = randomColorValues();
//   console.log(baseColor);
//   return  {
//     h: baseColor.h + Math.random() * 0.2 - 0.2, 
//     s: baseColor.s + Math.random() * 0.2 - 0.20,
//     l: baseColor.l + Math.random() * 0.1 + 0.2
//   }
// }

// function skyColor() {
  
// }

function hillShadow(color) {
  // shadowColor = {
  //   h: color.h,
  //   s: color.s,
  //   l: color.l - .3
  // }

  ctx.shadowOffsetX = 10;
  ctx.shadowColor = color;
  ctx.shadowBlur = 30;
}


function complementaryPositions(startingPosition) {
  var complementaryPosition = (startingPosition + 180) % 360;
  return [startingPosition, complementaryPosition]
}

function analagousPositions(startingPosition) {
  var complementaryPosition = (startingPosition + 30) % 360;
  var thirdPosition = (startingPosition - 30) % 360;
  return [startingPosition, complementaryPosition, thirdPosition]
}

function splitPositions(startingPosition) {
  var complementaryPosition = (startingPosition + 120) % 360;
  var thirdPosition = (startingPosition - 120) % 360;
  return [startingPosition, complementaryPosition, thirdPosition]
}

function triadicPositions(startingPosition) {
  var complementaryPosition = (startingPosition + 90) % 360;
  var thirdPosition = (startingPosition - 90) % 360;
  return [startingPosition, complementaryPosition, thirdPosition]
}


function generateHslaPoints () {

  let startingPosition = Math.floor(Math.random() * 360);
  let positionsArray = [complementaryPositions, analagousPositions, splitPositions, triadicPositions];
  let positions = positionsArray[Math.floor(Math.random() * positionsArray.length)](startingPosition);

  return positions
}

function colorPalette(saturation, lightness, alpha) {
  var scheme = [];
  var values = generateHslaPoints();

  for (let i = 0; i < values.length; i++) {
    let hue = values[i];
    let fullColor = `hsla(${hue},${saturation}%,${lightness}%,${alpha})`
    let shadowColor = `hsla(${hue},${saturation}%,${lightness - 15}%,${alpha})`
    scheme.push({ color: fullColor, shadow: shadowColor })
  }
  return scheme;
}