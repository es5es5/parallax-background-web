const canvas = document.getElementById('canvas1') as HTMLCanvasElement
const ctx = canvas.getContext('2d')!
const CANVAS_WIDTH = (canvas.width = 800)
const CANVAS_HEIGHT = (canvas.height = 700)
let gameSpeed = 10
let gameFrame = 0

const backgroundLayer1 = new Image() as HTMLImageElement
const backgroundLayer2 = new Image() as HTMLImageElement
const backgroundLayer3 = new Image() as HTMLImageElement
const backgroundLayer4 = new Image() as HTMLImageElement
const backgroundLayer5 = new Image() as HTMLImageElement
backgroundLayer1.src = './assets/images/layer-1.png'
backgroundLayer2.src = './assets/images/layer-2.png'
backgroundLayer3.src = './assets/images/layer-3.png'
backgroundLayer4.src = './assets/images/layer-4.png'
backgroundLayer5.src = './assets/images/layer-5.png'

class Layer {
  x: number
  y: number
  width: number
  height: number
  x2: number
  image: HTMLImageElement
  speedModifier: number
  speed: number

  constructor(image, speedModifier) {
    this.x = 0
    this.y = 0
    this.width = 2400
    this.height = 700
    this.image = image
    this.speedModifier = speedModifier
    this.speed = gameSpeed * this.speedModifier
  }

  update() {
    this.speed = gameSpeed * this.speedModifier
    this.x = (gameFrame * this.speed) % this.width
  }

  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    ctx.drawImage(
      this.image,
      this.x + this.width,
      this.y,
      this.width,
      this.height,
    )
  }
}

const layer1 = new Layer(backgroundLayer1, 0.2)
const layer2 = new Layer(backgroundLayer2, 0.4)
const layer3 = new Layer(backgroundLayer3, 0.6)
const layer4 = new Layer(backgroundLayer4, 0.8)
const layer5 = new Layer(backgroundLayer5, 1)

const gameObjects = [layer1, layer2, layer3, layer4, layer5]

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  gameObjects.forEach((object) => {
    object.update()
    object.draw()
  })
  gameFrame--
  requestAnimationFrame(animate)
}

animate()
