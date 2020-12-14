var fixedRect,movingRect,obj1,obj2,obj3;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200, 300, 50, 50);
  fixedRect.shapeColor="green";
  movingRect=createSprite(500, 300, 50, 50);
  movingRect.shapeColor="green";
  
  obj1=createSprite(100, 200, 50, 50);
  obj1.shapeColor="green";

  obj2=createSprite(200, 200, 50, 50);
  obj2.shapeColor="green";

  obj3=createSprite(300, 200, 50, 50);
  obj3.shapeColor="blue";

  obj3.velocityX = -5;
  obj1.velocityX = +5;

}
function draw() {
  background(0);  
movingRect.x=World.mouseX;
movingRect.y=World.mouseY;

if(isTouching(obj2,movingRect))
{
  obj2.shapeColor="red";
  movingRect.shapeColor="red";
}
else{
  obj2.shapeColor="green";
  movingRect.shapeColor="green";
}
 
bounceOff(obj1,obj3);
  drawSprites();
}

