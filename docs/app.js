var canvas = document.getElementById('canvas1');
var ctx = canvas.getContext('2d');
var CANVAS_WIDTH = (canvas.width = 800);
var CANVAS_HEIGHT = (canvas.height = 700);
var gameSpeed = 10;
var gameFrame = 0;
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
var Layer = /** @class */ (function () {
    function Layer(image, speedModifier) {
        this.x = 0;
        this.y = 0;
        this.width = 2400;
        this.height = 700;
        this.image = image;
        this.speedModifier = speedModifier;
        this.speed = gameSpeed * this.speedModifier;
    }
    Layer.prototype.update = function () {
        this.speed = gameSpeed * this.speedModifier;
        this.x = (gameFrame * this.speed) % this.width;
    };
    Layer.prototype.draw = function () {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
    };
    return Layer;
}());
var layer1 = new Layer(backgroundLayer1, 0.2);
var layer2 = new Layer(backgroundLayer2, 0.4);
var layer3 = new Layer(backgroundLayer3, 0.6);
var layer4 = new Layer(backgroundLayer4, 0.8);
var layer5 = new Layer(backgroundLayer5, 1);
var gameObjects = [layer1, layer2, layer3, layer4, layer5];
function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    gameObjects.forEach(function (object) {
        object.update();
        object.draw();
    });
    gameFrame--;
    requestAnimationFrame(animate);
}
animate();
