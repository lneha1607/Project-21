
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:0.4
 		 
	}
	 
   

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(200,100,20,ball_options)
	World.add(world,ball)
	 rectMode(CENTER);
	 ellipseMode(RADIUS);

	 
	groundObj=new ground(width/2,670,width,20);
	left= new ground(1100,600,20,120);
	right= new ground(1350,600,20,120);
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20);
  drawSprites();
  Engine.run(engine);
 groundObj.display();
 left.display();
 right.display();
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:25,y:-10});
	}
}



