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

function toHslaString(values) {
  return `hsla(${values.hue},${values.saturation}%,${values.lightness}%,${values.alpha})`
}

function colorPalette(saturation, lightness, alpha) {
  var scheme = [];
  var points = generateHslaPoints();

  for (let i = 0; i < points.length; i++) {
    let hue = points[i];
    let fullColor = toHslaString({hue: hue, saturation: saturation, lightness: lightness, alpha: alpha})
    let shadowColor = toHslaString({hue: hue, saturation: saturation, lightness: lightness - 15, alpha: alpha})
    let individualValues = { hue: hue, saturation: saturation, lightness: lightness, alpha: alpha } ;
    scheme.push({ color: fullColor, shadow: shadowColor , values: individualValues});
  }
  return scheme;
}