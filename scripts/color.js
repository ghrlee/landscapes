// ================================== //
// color //
// ================================== //

function randomColorValues() {
  var randH = Math.random();
  var randS = Math.random() * 0.1 + 0.5;
  var randL = Math.random() * 0.1 + 0.4; 
  return { h: randH, s: randS, l: randL };
}

function getHue(color) {
  return color.h % 1.0;
}

function primaryColor(color) {
  return "hsl(" + getHue(color) * 360 + ", " + (color.s % 1.0) * 100 + "%, " + (color.l % 1.0) * 100 + "%)";
}

function secondaryColor(color) {
  return "hsl(" + (getHue(color) * 360 + 210)+ ", " + (color.s % 1.0) * 100 + "%, " + (color.l % 1.0) * 100 + "%)";
}

function hillColor() {
  // console.log(randomColor)
  var baseColor = randomColorValues();
  console.log(baseColor);
  return  {
    h: baseColor.h + Math.random() * 0.2 - 0.2, 
    s: baseColor.s + Math.random() * 0.2 - 0.20,
    l: baseColor.l + Math.random() * 0.1 + 0.2
  }
}

function skyColor() {
  
}

function hillShadow(color) {
  shadowColor = {
    h: color.h,
    s: color.s,
    l: color.l - .3
  }

  ctx.shadowOffsetX = 10;
  ctx.shadowColor = primaryColor(shadowColor);
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


function generateHslaColors (saturation, lightness, alpha) {
  let colors = []

  let startingPosition = Math.floor(Math.random() * 360);
  let positionsArray = [complementaryPositions, analagousPositions, splitPositions, triadicPositions];
  let positions = positionsArray[Math.floor(Math.random() * positionsArray.length)](startingPosition);

  for (let i = 0; i < positions.length; i++) {
    let hue = positions[i];
    colors.push(`hsla(${hue},${saturation}%,${lightness}%,${alpha})`)
  }
  return colors
}

function colorScheme() {
  var primaryColorValues = randomColorValues();
  var colorScheme = { 
    primary: {
      color: {},
      shadow: {}
    }
  }

  return colorScheme;
}

// choose harmony
// complementary (0 to 180)
// analagous (-20, + 20)
// triadic (+90 -90)

// getting hue for sky color based on complimentary/tertiary color for hillColor

// var colorScheme = {
//   mainColor: { 
//     values: thing,
//     string: "string",
//     darkerMain: values
//   },
//   secondaryColor: {
//     values: thing,
//     string: "string",
//     shadowValue: value,
//   },
//   tertiarty
// }