
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(500, 200);
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);


	boxDown=createSprite(405,140,100,20)
	boxLeft=createSprite(345,115,20,70)
	boxRight=createSprite(465,115,20,70)
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
      Matter.body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
	}
}



