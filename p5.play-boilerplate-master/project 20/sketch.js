
var car,wall;

var speed,weight;


function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

   speed=random(55,90);
   weight=random(400,1500);
   
   car=createSprite(50,200,50,50);
  
   wall=createSprite(1500,200,60,height/2);
   wall.shapeColour=(80,80,80);

}

function draw() {
  background(255,255,255);  
  car.velocity.x =world.mouse.x; 

  if(wall.x car.x < (car.width+wall.width)/2)
  {
  car.velocity.x= speed;
  var deformation=0.5 * weight * speed * speed/22509;
  if(deformation>180);
  {
    car.shapeColour =(250,0,0);
  }
  if(deformation<180  &&  deformation>100)
  {
    car.shapeColour=(230,230,0);
  }
  if(deformation>100)
  shapeColour=(0,255,0);{
    car.
  
drawSprites();
}