var boy, boy_running;
var path;
var invBd1
var invBd2

function preload(){
  //pre-load images
  boy_running = loadAnimation("Runner-1.png", "Runner-2.png");
  pathImage = loadImage("path.png")
} 

function setup(){
  createCanvas(600,600);
  
  //create sprites here
  
  path = createSprite(200,190,600,200)
  path.addImage(pathImage);
  path.scale = 1;
  path.velocityY = 4; 
  
  boy = createSprite(280,500,20,20);
  boy.addAnimation("running", boy_running) 
  boy.scale = 0.07;

  invBd1 = createSprite(340,300,20,600)
  invBd1.visible = false;

  invBd2 = createSprite(60,300,20,600); 
  invBd2.visible = false; 
 

}

function draw() { 
  background("white");
  if(path.y > 400) {
  path.y = height/2; 
  }
  boy.collide(invBd1);
  boy.collide(invBd2)
  boy.x = mouseX 
  



  
  
  

  drawSprites();
}
