let cursorImg;
let angle;
let slider
let slider2

function preload(){
  cursorImg = loadImage('assets/MacRainbowCursor.png')
}
function setup() {
  createCanvas(400, 400);
  noCursor();
  background(220);
  colorMode(HSB, 360, 150, 100, 1);
  slider = createSlider(100,255,50)
  slider2 = createSlider(6,32,6)
}

function draw() {
  image(cursorImg, mouseX, mouseY, 20,20);
  translate(width / 2, height / 2);
  let sat = slider.value()
  angle = slider2.value()

for (let i = 0; i < angle; i++) {
  rotate(angle);
  strokeWeight(15)
  stroke(mouseX, sat, sat, 0.5);
  line(mouseX, mouseY, pmouseX, pmouseY);

  push();
  scale(1,-1);
  line(mouseX, mouseY, pmouseX, pmouseY);
  pop();
}
}
