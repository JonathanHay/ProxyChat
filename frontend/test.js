
function drawCircle() {
  var canvas = document.getElementById("myCanvas");
  var context = canvas.getContext("2d");

  context.clearRect(0, 0, canvas.width, canvas.height);
  
  // the circle
  context.arc(100 + deltaX, 100 + deltaX,50 , 0 , Math.PI * 2, false);
 
  // the outline
  context.lineWidth = 3;
  context.strokeStyle = 'black';
  context.stroke();
 
  // the fill color
  context.fillStyle = 'blue';
  context.fill();
}

var deltaX = 0;
var deltaY = 0;
 
window.addEventListener("keydown", keysPressed, false);
window.addEventListener("keyup", keysReleased, false);

var keys = [];
 
function keysPressed(e) {
  
    // store an entry for every key pressed
    keys[e.keyCode] = true;
 
    // left
    if (keys[65]) {
      deltaX -= 2;
    }
 
    // right
    if (keys[68]) {
      deltaX += 2;
    }
 
    // down
    if (keys[87]) {
      deltaY -= 2;
    }
 
    // up
    if (keys[83]) {
      deltaY += 2;
    }
 
    e.preventDefault();
 
    drawCircle();
}
 
function keysReleased(e) {
    keys[e.keyCode] = false;
}
window.onload = drawCircle;