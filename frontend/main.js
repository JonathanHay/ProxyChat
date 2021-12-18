function drawTriangle() {
  var canvas = document.getElementById("myCanvas");
  var context = canvas.getContext("2d");

  context.clearRect(0, 0, canvas.width, canvas.height);
  
  // the triangle
  context.beginPath();
  context.moveTo(200 + deltaX, 100 + deltaY);
  context.lineTo(170 + deltaX, 150 + deltaY);
  context.lineTo(230 + deltaX, 150 + deltaY);
  context.closePath();
 
  // the outline
  context.lineWidth = 1;
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
 
    drawTriangle();
}
 
function keysReleased(e) {
    keys[e.keyCode] = false;
}
window.onload = drawTriangle;