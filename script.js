const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 400);
let gameSpeed = 5;

const backgroundLayer1 = new Image();
backgroundLayer1.src = "images/sky_01.png";
const backgroundLayer2 = new Image();
backgroundLayer2.src = "images/cloud_01.png";
const backgroundLayer3 = new Image();
backgroundLayer3.src = "images/houses_01.png";
const backgroundLayer4 = new Image();
backgroundLayer4.src = "images/houses_02.png";
const backgroundLayer5 = new Image();
backgroundLayer5.src = "images/houses_03.png";
const backgroundLayer6 = new Image();
backgroundLayer6.src = "images/pavement_01.png";
const backgroundLayer7 = new Image();
backgroundLayer7.src = "images/pavement_02.png";
const backgroundLayer8 = new Image();
backgroundLayer8.src = "images/tree_01.png";
const backgroundLayer9 = new Image();
backgroundLayer9.src = "images/road_01.png";

class Layer {
  constructor(image, speedModifier) {
    this.x = 0;
    this.y = 0;
    this.width = 1000;
    this.height = 400;
    this.x2 = this.width;
    this.image = image;
    this.speedModifier = speedModifier;
    this.speed = gameSpeed * this.speedModifier;
  }

  update() {
    this.speed = gameSpeed * this.speedModifier;
    if (this.x <= -this.width) {
      this.x = this.width + this.x2 - this.speed;
    }
    if (this.x2 <= -this.width) {
      this.x2 = this.width + this.x - this.speed;
    }

    this.x = Math.floor(this.x - this.speed);
    this.x2 = Math.floor(this.x2 - this.speed);
  }

  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    ctx.drawImage(this.image, this.x2, this.y, this.width, this.height);
  }
}

const layer1 = new Layer(backgroundLayer1, 0.1);
const layer2 = new Layer(backgroundLayer2, 0.2);
const layer3 = new Layer(backgroundLayer3, 0.3);
const layer4 = new Layer(backgroundLayer4, 0.4);
const layer5 = new Layer(backgroundLayer5, 0.5);
const layer6 = new Layer(backgroundLayer6, 0.6);
const layer7 = new Layer(backgroundLayer7, 0.7);
const layer8 = new Layer(backgroundLayer8, 0.8);
const layer9 = new Layer(backgroundLayer9, 1);

const gameObjects = [
  layer1,
  layer2,
  layer3,
  layer4,
  layer5,
  layer6,
  layer7,
  layer8,
  layer9,
];

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  gameObjects.forEach((objects) => {
    objects.update();
    objects.draw();
  });
  requestAnimationFrame(animate);
}
animate();

// for changing animation speed
const slider = document.getElementById("slider");
slider.value = gameSpeed;
const showGameSpeed = document.getElementById("showGameSpeed");
showGameSpeed.innerHTML = gameSpeed;

slider.addEventListener("change", function (e) {
  gameSpeed = e.target.value;
  showGameSpeed.innerHTML = e.target.value;
});
