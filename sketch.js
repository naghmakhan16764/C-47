var whiteCounterImg, blackCounterImg, redCounterImg, boradImg, strikerImg;
var border1,border2,border3,border4,striker
var wall1,wall2,wall3,wall4
var white = [],black = [],redCounter;

  


function preload() {
  boradImg = loadImage("images/CarromBoard.jpg");
  whiteCounterImg = loadImage("images/white.png");
  blackCounterImg = loadImage("images/black.png");
  redCounterImg = loadImage("images/red.png");
  strikerImg = loadImage("images/striker.png");
}

function setup() {
  createCanvas(600, 600);

  createCounters();
  placeCounters();
  createBorders();
  border();
  
}

function draw() {

  if(keyIsDown(UP_ARROW)){
    border1.destroy();
    border2.destroy();
    border3.destroy();
    border4.destroy();

    striker.velocityY=-10
    console.log("hello")

  }
  background(boradImg);
  /*if (mouseX >= 450) {
    striker.x = 430
  } else if (mouseX <= 150) {
    striker.x = 170
  }
  if (mouseY >= 490) {
    striker.y = 465
  } else if (mouseX <= 440) {
    striker.y = 465
  }*/
  drawSprites();
  strikerCollision()
  collisonWalls()
}

function mouseDragged() {
  if (striker.x > 150 && striker.x < 450
    && striker.y > 440 && striker.y < 490) {
    striker.x = mouseX;
    striker.y = mouseY;
  }
  
}

function mouseReleased(){

    

}
