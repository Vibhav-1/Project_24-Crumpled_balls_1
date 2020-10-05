
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	  ground1 = new ground (400, 650, 800, 30);
    paper1 = new Paper (200, 600, 30);
    dustbinL = new dustbin(600, 575, 10, 105);
    dustbinR = new dustbin(700, 575, 10, 105);
    dustbinD = new dustbin(650, 625, 105, 10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground1.display();
  paper1.display();
  dustbinL.display();
  dustbinR.display();
  dustbinD.display();
  drawSprites();
}
function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(paper1.body, paper1.body.postion,{x:85, y:-200})
  }
}


