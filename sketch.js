var bullet,wall,thickness;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  speed= random(55,90);
  bullet=createSprite(50,200,50,25);
  bullet.volcityX=speed;
  bullet.velocityX=random(50,190);
  bullet.shapeColor="white"

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);  

  speed=random(223,321)
  weight=random(30,52);
  thickness=random(22,83);
}
function draw(){
  background("black");  

  if(hascollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0)
    }
  }

  
  drawSprites();
}

function hascollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}