
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var wall1,wall2,wall3;
var paper;
var ground;
var rand=1;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

   wall1=createSprite(900,400,20,140);
   wall1.shapeColor="pink";

   wall2=createSprite(1050,400,20,140);
   wall2.shapeColor="pink";

   wall3=createSprite(970,460,140,20);
   wall3.shapeColor="pink";

   wallbody1=new Dustbinwall(900,400,20,140)
   wallbody2=new Dustbinwall(1050,400,20,140)
   wallbody3=new Dustbinwall(970,460,140,20)
   
   paper=new Paper(200,430,20)

   ground=new Ground(10,480,6000,10)
	Engine.run(engine);
  //ground.debug=true;
}


function draw() {

Engine.update(engine);	
  rectMode(CENTER);
  background(0);
  if(rand===1){
  textSize(20)
  fill("white")
  text("press up arrow to put the paper in dustbin",50,50)
  }
 // paper.scale=5;

  
 /* wall1.x= wallbody1.position.x
  wall1.y= wallbody1.position.y

  wall2.x= wallbody2.position.x
  wall2.y= wallbody2.position.y

  wall3.x= wallbody3.position.x
  wall3.y= wallbody3.position.y
 */
  wallbody1.display();
  wallbody2.display();
  wallbody3.display();
  paper.display();
  ground.display();



  drawSprites();
  
 
}
function keyPressed(){
  if (keyCode===UP_ARROW){
   
 
            
  Matter.Body.applyForce(paper.body,paper.body.position,{ x:80,y:-80});

  rand=2;
}

}