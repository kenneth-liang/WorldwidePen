let img = new Image();
img.src =
  "/Users/kenneth/Desktop/Projects/WorldwidePen/main-back.png"
img.onload = function () {
  init();
};

let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");


const width = 900
const height = 300

function drawFrame(frameX, frameY, canvasX, canvasY) {
  ctx.drawImage(img,
                frameX, 
                frameY * height, 
                width, 
                height,
                canvasX, 
                canvasY, 
                width, 
                height);
}

const cycleLoop = [0, 1];
let currentLoopIndex = 0;
let frameCount = 0;

function step() {
  frameCount++;
  if (frameCount < 30) {
    window.requestAnimationFrame(step);
    return;
  }
  frameCount = 0;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawFrame(0, cycleLoop[currentLoopIndex], 0, 0);
  currentLoopIndex++;
  if (currentLoopIndex >= cycleLoop.length) {
    currentLoopIndex = 0;
  }
  window.requestAnimationFrame(step);
}

function init() {
  window.requestAnimationFrame(step);
}