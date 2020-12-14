function isTouching(object1,object2){
  if(object1.x-object2.x<=object2.width/2+object1.width/2
    &&object2.x-object1.x<=object2.width/2+object1.width/2
    &&object1.y-object2.y<=object2.height/2+object1.height/2
    &&object2.y-object1.y<=object2.height/2+object1.height/2)
  {
    return true;
  }
  else{
    return false;
  }
}

function bounceOff(sprite1,sprite2){
    if (sprite1.x - sprite2.x < sprite2.width/2 + sprite1.width/2
      && sprite2.x - sprite1.x < sprite2.width/2 + sprite1.width/2) {
        sprite1.velocityX = sprite1.velocityX * (-1);
        sprite2.velocityX = sprite2.velocityX * (-1);
  }
  if (sprite1.y - sprite2.y < sprite2.height/2 + sprite1.height/2
    && sprite2.y - sprite1.y < sprite2.height/2 + sprite1.height/2){
      sprite1.velocityY = sprite1.velocityY * (-1);
      sprite2.velocityY = sprite2.velocityY * (-1);
  }
  }