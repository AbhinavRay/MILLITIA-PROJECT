var bullet,wall;
var speed,weight,thickness;
var damage ;

function setup() {
  createCanvas(1600,400);
  
  thickness = random(10,30);
  speed = random(50,100);
  weight = random(30,52);

  damage = 0.5 *speed * speed / (thickness * thickness * thickness);
  
  bullet = createSprite(50,200,50,10);
  bullet.velocityX = speed;
  
  wall = createSprite(1400,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(0,0,0);
  if(isTouching(bullet,wall)){
  bullet.velocityX = speed/speed;
  bullet.x = 1400; 
  bullet.collide(wall);
  }

  /*if(damage > 3){
    wall.shapeColor = color(0,225,0);
  }

  if(damage > 3){
    wall.shapeColor = color(225,0,0);
  }*/
  
  if(bullet.x > 1400){
    wall.shapeColor = color(225,0,0);
  }
  if(bullet.x > 1300 && bullet.x < 1400){
    wall.shapeColor = color(0,225,0);
  }
  
  drawSprites();
}

function isTouching(object1,object2){
  if(object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2){
        object1.velocityX = object1.velocityX * (-0);
        object2.velocityX = object2.velocityX * (-0);
 }
 
 if(object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2){
        object1.velocityY = object1.velocityY * (-0);
        object2.velocityY = object2.velocityY * (-0);
    }
}