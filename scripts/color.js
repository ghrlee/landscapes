function randomColor() {
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
  var baseColor = randomColor();
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

// getting hue for sky color based on complimentary/tertiary color for hillColor
