var canvas = document.getElementById('canvas1');
var ctx = canvas.getContext('2d');
var CANVAS_WIDTH = (canvas.width = 800);
var CANVAS_HEIGHT = (canvas.height = 700);
var gameSpeed = 15;
var backgroundLayer1 = new Image();
var backgroundLayer2 = new Image();
var backgroundLayer3 = new Image();
var backgroundLayer4 = new Image();
var backgroundLayer5 = new Image();
backgroundLayer1.src = './assets/images/layer-1.png';
backgroundLayer2.src = './assets/images/layer-2.png';
backgroundLayer3.src = './assets/images/layer-3.png';
backgroundLayer4.src = './assets/images/layer-4.png';
backgroundLayer5.src = './assets/images/layer-5.png';
var x = 0;
var x2 = 2400;
function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(backgroundLayer4, x, 0);
    ctx.drawImage(backgroundLayer4, x2, 0);
    if (x < -2400)
        x = 2400 + x2 - gameSpeed;
    else
        x -= gameSpeed;
    if (x2 < -2400)
        x2 = 2400 + x - gameSpeed;
    else
        x2 -= gameSpeed;
    requestAnimationFrame(animate);
}
animate();
