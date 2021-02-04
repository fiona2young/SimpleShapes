var eBase = 600;
var eyes = 10;
var light = 255;

function setup() {
  createCanvas(800, 800);
  
  print("sketch all set up");
}

function draw() {
  background(0, 100, 160);
  strokeWeight(0.5);
  
  fill(42, 100, 0, 50);
  stroke(140, 0, 0, 50);
  for (var x = 50; x < width; x = x + 100) {
    for (var y = 50; y < height; y = y + 100) {
      ellipse(x, y, 20, 20);
    }
  }
  
  bed();
  
  couch();
  
  catto();
}

function bed() {
  fill(81, 83, 100);
  stroke(50);
  rect(50, 750, 200, 50, 20);
}

function couch() {
  fill(32, 52, 231, 200);
  noStroke();
  rect(500, 550, 100, 250, 10, 0, 0, 10);
  rect(600, 500, 200, 300, 10, 0, 0, 0);
  rect(600, 650, 200, 150);
}


function catto() {
  fill(70, 73, 100);
  triangle(250, 575, 270, eBase, 230, eBase);
  triangle(300, 575, 320, eBase, 280, eBase);
  rect(230, 600, 90, 75, 0, 0, 6, 6);
  
  strokeWeight(4);
  stroke(75);
  line(275, 800, 350, 775);
  line(350, 775, 360, 700);
  
  noStroke();
  triangle(275, 600, 340, 800, 210, 800);
  
  strokeWeight(0.5);
  stroke(50);
  rect(250.5, 750, 20, 100);
  rect(279.5, 750, 20, 100);
  
  fill(100);
  ellipse(255, 625, eyes);
  ellipse(295, 625, eyes);
}

function mousePressed() {
  print("mouse has been pressed");
}