var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600, 400);
 // createSprite(400, 200, 50, 50);
  speed = random(55, 90);
  weight = random(400, 1500);
}

function draw() {
  background(255,255,255);  
  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  
  wall = createSprite(1500, 200, 60, height/2);
  wall.shapeColor = 80, 80, 80;

  if(movingRect.x -fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2{
      car.shapeColor = "yellow";
      
  }

  drawSprites();
}