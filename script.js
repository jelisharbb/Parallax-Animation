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

let x = 0;
let x2 = 1000;

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.drawImage(backgroundLayer1, x, 0);
  ctx.drawImage(backgroundLayer1, x2, 0);

  if (x < -1000) x = 1000 + x2 - gameSpeed;
  else x -= gameSpeed;
  if (x2 < -1000) x2 = 1000 + x - gameSpeed;
  else x2 -= gameSpeed;

  requestAnimationFrame(animate);
}

animate();
