// // idea for night sky https://codepen.io/Tamuna/pen/hvekG

// function drawing() {
// 	var c = document.getElementById('sky');
// 	var ctx = c.getContext('2d');
// 	var xMax = c.width = window.screen.availWidth;
// 	var yMax = c.height = window.screen.availHeight;

// 	var hmTimes = Math.round(xMax + yMax);	
	
// 	for(var i=0; i<=hmTimes; i++) {
// 	  var randomX = Math.floor((Math.random()*xMax)+1);
// 	  var randomY = Math.floor((Math.random()*yMax)+1);
// 	  var randomSize = Math.floor((Math.random()*2)+1);
// 	  var randomOpacityOne = Math.floor((Math.random()*9)+1);
// 	  var randomOpacityTwo = Math.floor((Math.random()*9)+1);
// 	  var randomHue = Math.floor((Math.random()*360)+1);
//     if(randomSize>1) {
//       ctx.shadowBlur = Math.floor((Math.random()*15)+5);
//       ctx.shadowColor = "white";
// 	  }
//     ctx.fillStyle = "hsla("+randomHue+", 30%, 80%, ."+randomOpacityOne+randomOpacityTwo+")";
// 	  ctx.fillRect(randomX, randomY, randomSize, randomSize);
//   }
// }

  // function drawSky() {
  //   ctx.fillStyle = 'blue';
  //   ctx.fillRect(0,0,canvas.width, canvas.height);
  // }

  //   function makeClouds(threshold, offset, variance) {
//     ctx.globalAlpha = 0.4;
//     ctx.beginPath();
//     for(var i=0; i<CANVAS_WIDTH; i++) {
//         for(var j=0; j<CANVAS_HEIGHT; j++) {
//             var noiseValue = simplex.noise2D(i*0.001+offset, 
//                                              j*0.01+offset);
//             if(noiseValue>params.threshold
//                          +Math.random()*params.variance) {
//                 drawPixel({x:i, y:j}, colors.cloudColor);
//             }
//         }
//     }
//     ctx.globalAlpha = 1.0;
// }

// function drawBrightStar(x,y,size) {
// 	applyBuffer();
// 	ctx.fillStyle = "rgba(255,255,255,0.03)";	
// 	ctx.beginPath();
// 	ctx.arc(x,y,size,0,2*Math.PI);
// 	ctx.fill();
	
// 	ctx.fillStyle = "rgba(255,255,255,0.1)";	
// 	ctx.beginPath();	
// 	ctx.arc(x,y,size * 0.4,0,2*Math.PI);
// 	ctx.fill();
	
// 	ctx.fillStyle = "rgba(255,255,255,1.0)";
// 	// setupBuffer();
		
// 	setPixelRGB(x,y, 255,255,255,1);
// 	setPixelRGB(x-1,y+1, 255,255,255,0.8);
// 	setPixelRGB(x+1,y+1, 255,255,255,0.8);
// 	setPixelRGB(x+1,y-1, 255,255,255,0.8);
// 	setPixelRGB(x-1,y-1, 255,255,255,0.8);
	
// 	p = 0;
// 	for (var i = -1; i <= 1; i += 0.05) {
// 		new_p = Math.floor(size * 0.6 * i);
// 		if (new_p == p)
// 			continue;
// 		p = new_p;
// 		setPixelRGB(x, y + p, 255,255,255,1.001 - Math.abs(i));
// 		setPixelRGB(x + p, y, 255,255,255,1.001 - Math.abs(i));
// 	}
// }

function drawing() {
	var xMax = CANVAS_WIDTH;
	var yMax = CANVAS_HEIGHT;
	var hmTimes = Math.round(xMax + yMax);	
	
	for(var i=0; i<=hmTimes; i++) {
	  var randomX = Math.floor((Math.random()*xMax)+1);
	  var randomY = Math.floor((Math.random()*yMax)+1);
	  var randomSize = Math.floor((Math.random()*2)+1);
	  var randomOpacityOne = Math.floor((Math.random()*9)+1);
	  var randomOpacityTwo = Math.floor((Math.random()*9)+1);
	  var randomHue = Math.floor((Math.random()*360)+1);
    if(randomSize>1) {
      ctx.shadowBlur = Math.floor((Math.random()*15)+5);
      ctx.shadowColor = "white";
	  }
    ctx.fillStyle = "hsla("+randomHue+", 30%, 80%, ."+randomOpacityOne+randomOpacityTwo+")";
    ctx.fillRect(randomX, randomY, randomSize, randomSize);
    ctx.shadowBlur = 0;
	}
  
}


function drawSky(skyColor) {
  console.log(skyColor)
  hue = skyColor.color
  // shadow = skyColor.shad
  var my_gradient = ctx.createLinearGradient(0, 0, 0, 1400);
  my_gradient.addColorStop(0, "black");
  my_gradient.addColorStop(1, hue);
  ctx.fillStyle = my_gradient;
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}



// flip the gradient to go from color at top to dark at bottom, make color more obvious
// add mountain
// add stars
// make stars twinkle
// make moon with phases