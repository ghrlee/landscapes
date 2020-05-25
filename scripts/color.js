// ================================== //
// color //
// ================================== //

function hillShadow(color) {
  ctx.shadowOffsetX = 10;
  ctx.shadowColor = color;
  ctx.shadowBlur = 30;
}

function complementaryPositions(startingPosition) {
  var complementaryPosition = (startingPosition + 180) % 360;
  return [startingPosition, complementaryPosition, startingPosition]
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
  let positionNames = [complementaryPositions, analagousPositions, splitPositions, triadicPositions];
  let positions = positionNames[Math.floor(Math.random() * positionNames.length)](startingPosition);

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