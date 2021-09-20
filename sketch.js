
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var trashbin;
var ground;


	function setup() {
		createCanvas(800, 700);
		
		engine = Engine.create();
	     world = engine.world;

    ball=new Ball(10,10,40,50)
	GroundObj = new Ground(400, 680, 800, 20);
		 leftSide = new TrashBin(550, 620, 20, 100);
	     rightSide = new TrashBin(670, 620, 20, 100);
		
		Engine.run(engine);
		}
   
	
	



function draw() {
  rectMode(CENTER);
  background("BLACK");
  
  ball.display();
  GroundObj.display();
  //trashbin.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.body.applyForce(ball.body, ball.body.position,{x:15, y:-15})
		
	}
}


