var screen = 0;
let cursorImg;
let angle;
let slider;
let slider2;
let font;

//Assets
function preload(){
  font = loadFont('assets/MS_PAIN.ttf')
  cursorImg = loadImage('assets/MacRainbowCursor.png');
  menuImg = loadImage('assets/pixelart.jpg');
}

function setup() {
  createCanvas(500, 500);
  textFont(font);
  noCursor();
  background(200);
  colorMode(HSB, 360, 250, 100, 1);
  slider = createSlider(100,255,50)
  slider2 = createSlider(6,32,6)
}

//SwitchStatements
function draw() {
  if (screen == 0) {
    menuScreen();
  } else if (screen == 1) {
    introScreen();
  } else if (screen == 2) {
    colorScreen();
  } else if (screen == 3) {
    clearScreen();
  }
}

// Menu Screen Content
function menuScreen() {
  background(menuImg);
  textAlign (CENTER);

  push();
  textSize (40);
  fill(0,0,255)
  stroke ('gray')
  strokeWeight(6);
  text ('Buffer Color Wheel', height/2, width/2.5);
  pop();

  push();
  fill(255,255,255)
  stroke ('gray')
  strokeWeight(1);
  textSize (25);
  text ('Click to Start', height/2, width/1.85);
  pop();
}

//Instruction Screen
function introScreen() {
  background (255)
  push();
  fill ('black')
  strokeWeight(1.5);
  textSize (15);
  text ('1. Click and Drag Mouse to Start', height/2.33, width/2.65);
  text ('2. Adjust Sliders for Color & Design Range', height/1.99, width/2.35);
  text ('3. Press "C" to Clear Canvas', height/2.62, width/2.1);
  text ('4. Press "S" to Save Canvas', height/2.63, width/1.9);
  pop();
}

//
function colorScreen() {
  image(cursorImg, mouseX, mouseY, 15,15);
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

function mousePressed() {
  if(screen == 0) {
    startGuide();
  } else if (screen == 1) {
    startHue();
  }
}

function keyPressed() {
  if (key === 'c'){
    background ('white')
  }else if (key === 's'){
    saveCanvas();
  }
}

function startGuide(){
  screen = 1;
}

function startHue(){
  screen = 2
}
