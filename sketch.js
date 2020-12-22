
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.Body;
const Render= Matter.Render;
const Constraint = Matter.Constraint;
var  bobDiameter = 60
function preload()
{
	
}

function setup() {
	createCanvas(3000, 700);

	engine = Engine.create();
	world = engine.world;

    
  bob1=new bob(300,350,50);
  bob2=new bob(350,350,50);
  bob3=new bob(400,350,50);
  bob4=new bob(450,350,50);
  bob5=new bob(500,350,50);

	hand = new hand1(500,100, 1000,40);
	
	rope1= new rope(bob1.body,hand.body,-50*2,0);
  rope2= new rope(bob2.body,hand.body,-25*2,0);
  rope3= new rope(bob3.body,hand.body,-0*2,0);
  rope4= new rope(bob4.body,hand.body,25*2,0);
  rope5= new rope(bob5.body,hand.body,50*2,0);
	
	 
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);



  


  background("blue");
  rope1.display();
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  hand.display()
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  drawSprites();

}




function keyPressed() { 
	if (keyCode === UP_ARROW) 
    { Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-100}); } 
}