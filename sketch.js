var movingRect , fixedRect ;
var object1,object2;
var gameObject1,gameObject2;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 80, 50);
  fixedRect = createSprite(200,200,50,80)
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";

  gameObject1 = createSprite(100,100,50,50);
  gameObject2 = createSprite(700,100,50,50);
  gameObject1.shapeColor = "green";
  gameObject2.shapeColor = "green";
  gameObject1.velocityX = 5;
  gameObject2.velocityX = -5;
}

function draw() {
  background(255,255,255); 
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  
  if (isTouching(movingRect,gameObject2)){
    movingRect.shapeColor = "red";
    gameObject2.shapeColor = "red";
  }else{
    movingRect.shapeColor = "green";
    gameObject2.shapeColor = "green";
  }
  bounce(gameObject1,gameObject2);
  drawSprites();
}
