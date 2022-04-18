let img;
let gui;
let b;
let s = 'moonlight';

function setup() {
  createCanvas(400, 400);
  gui = createGui();
  b = createButton("Button", 125, 100);
  t = createToggle("Toggle", 125, 50);
}

function draw() {
  background(255,193,204);
  drawGui();

  if(b.isPressed) {
    print(b.label + " is " + b.val);

  }
  
   if (b.isHeld) {
    fill(50);
    textSize(50);
    text(s, 190, 200, 50, 200);
    textAlign(CENTER, CENTER);
  }
  
  if (t.val){
   beginShape(TRIANGLE_FAN);
vertex(57.5, 50);
vertex(57.5, 15);
vertex(92, 50);
vertex(57.5, 85);
vertex(22, 50);
vertex(57.5, 15);
endShape();
  }
}